import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import Axios from '../axios';
import { clientErrorMessage, delay } from '../reusables';

import {
  GET_PROFILE_REQUEST,
  BuyCryptoRequestPayload,
  UPDATE_PROFILE_REQUEST,
  SellCryptoRequestPayload,
  SwapCryptoRequestPayload,
  BUY_CRYPTO_REQUEST,
  SELL_CRYPTO_REQUEST,
  SWAP_CRYPTO_REQUEST,
} from '../../types';

import {
  buyCryptoSuccess,
  buyCryptoFailure,
  buyCryptoRequest,
  buyCryptoLoadingIndicator,
  sellCryptoRequest,
  sellCryptoSuccess,
  sellCryptoFailure,
  sellCryptoLoadingIndicator,
  swapCryptoRequest,
  swapCryptoLoadingIndicator,
  swapCryptoSuccess,
  swapCryptoFailure,
} from '../../actions';

const ajaxDBCalls = {
  buyCrypto: async ({ token, data }: BuyCryptoRequestPayload) => {
    const response = await Axios.post(`/trade/buy`, data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  sellCrypto: async ({ token, data }: SellCryptoRequestPayload) => {
    const response = await Axios.post(`/trade/sell`, data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  swapCrypto: async ({ token, data }: SwapCryptoRequestPayload) => {
    const response = await Axios.post(`/swap`, data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
};

//generators
function* buyCrypto({ payload }: ReturnType<typeof buyCryptoRequest>) {
  try {
    yield put(buyCryptoLoadingIndicator(true));
    const {
      data: { message },
      status,
    } = yield call(ajaxDBCalls.buyCrypto, payload);
    yield put(buyCryptoSuccess({ message, status }));
    yield call(delay);
    yield put(buyCryptoSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(buyCryptoFailure({ error, status }));
    yield put(buyCryptoLoadingIndicator(false));
    yield call(delay);
    yield put(buyCryptoFailure());
  } finally {
    yield put(buyCryptoLoadingIndicator(false));
  }
}

function* sellCrypto({ payload }: ReturnType<typeof sellCryptoRequest>) {
  try {
    yield put(sellCryptoLoadingIndicator(true));
    const { data, status } = yield call(ajaxDBCalls.sellCrypto, payload);
    console.log('sellCrypto', data);
    yield put(sellCryptoSuccess(data));
    yield call(delay, 10000);
    yield put(sellCryptoSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      error = err.response.data.message;
      status = err.response.status;
    }
    console.log('error', err);
    yield put(sellCryptoFailure({ error, status }));
    yield put(sellCryptoLoadingIndicator(false));
    yield call(delay);
    yield put(sellCryptoFailure());
  } finally {
    yield put(sellCryptoLoadingIndicator(false));
  }
}

function* swapCrypto({ payload }: ReturnType<typeof swapCryptoRequest>) {
  try {
    yield put(swapCryptoLoadingIndicator(true));
    const { data } = yield call(ajaxDBCalls.swapCrypto, payload);
    console.log('swapCrypto', data);
    yield put(swapCryptoSuccess(data));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      if (err.response.data.to_amount) {
        error = err.response.data.to_amount[0];
      }
      if (err.response.data.message) {
        error = err.response.data.message;
      }
      status = err.response.status;
    }
    console.log('error', err);
    yield put(swapCryptoFailure({ error, status }));
    yield put(swapCryptoLoadingIndicator(false));
    yield call(delay);
    yield put(swapCryptoFailure());
  } finally {
    yield put(swapCryptoLoadingIndicator(false));
  }
}

//Watchers
function* buyCryptoWatcher(): IterableIterator<any> {
  yield takeLatest(BUY_CRYPTO_REQUEST, buyCrypto);
}

function* sellCryptoWatcher(): IterableIterator<any> {
  yield takeLatest(SELL_CRYPTO_REQUEST, sellCrypto);
}

function* swapCryptoWatcher(): IterableIterator<any> {
  yield takeLatest(SWAP_CRYPTO_REQUEST, swapCrypto);
}

export default function* tradeSagas() {
  yield spawn(buyCryptoWatcher);
  yield spawn(sellCryptoWatcher);
  yield spawn(swapCryptoWatcher);
}
