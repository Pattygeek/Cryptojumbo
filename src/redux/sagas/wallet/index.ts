import { call, all, put, takeLatest, spawn } from 'redux-saga/effects';

import {
  GET_CRYPTO_WALLETS_REQUEST,
  DEPOSIT_NAIRA_REQUEST,
  GetCryptoWalletRequestPayload,
  DepositNairaRequestPayload,
  SEND_USDT_REQUEST,
  WITHDRAW_NAIRA_REQUEST,
  SEND_ETH_REQUEST,
  SEND_BTC_REQUEST,
  SendBTCRequestPayload,
  SendETHRequestPayload,
  WithdrawNairaRequestPayload,
  SendUSDTRequestPayload,
} from '../../types';

import {
  getCryptoWalletFailure,
  getCryptoWalletLoadingIndicator,
  getCryptoWalletRequest,
  getCryptoWalletSuccess,
  depositNairaFailure,
  depositNairaLoadingIndicator,
  depositNairaRequest,
  depositNairaSuccess,
  sendBTCRequest,
  sendBTCLoadingIndicator,
  sendBTCSuccess,
  sendBTCFailure,
  sendETHRequest,
  sendETHLoadingIndicator,
  sendETHSuccess,
  sendETHFailure,
  withdrawNairaRequest,
  withdrawNairaLoadingIndicator,
  withdrawNairaSuccess,
  withdrawNairaFailure,
  sendUSDTRequest,
  sendUSDTLoadingIndicator,
  sendUSDTSuccess,
  sendUSDTFailure,
} from '../../actions';

import { clientErrorMessage, delay } from '../reusables';
import Axios from '../axios';
import { AxiosResponse } from 'axios';

const ajaxDBCalls = {
  getCryptoWallet: async ({ token }: GetCryptoWalletRequestPayload) => {
    const response = await Axios.get('/wallets/crypto', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  getNairaWallet: async ({ token }: GetCryptoWalletRequestPayload) => {
    const response = await Axios.get('/wallets/fiat', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  depositNaira: async ({ token, data }: DepositNairaRequestPayload) => {
    const response = await Axios.post('/wallets/deposit/ngn', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  sendBTC: async ({ token, data }: SendBTCRequestPayload) => {
    const response = await Axios.post('/wallets/withdraw/btc', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  sendETH: async ({ token, data }: SendETHRequestPayload) => {
    const response = await Axios.post('/wallets/withdraw/eth', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  withdrawNaira: async ({ token, data }: WithdrawNairaRequestPayload) => {
    const response = await Axios.post('/wallets/withdraw/ngn', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  sendUSDT: async ({ token, data }: SendUSDTRequestPayload) => {
    const response = await Axios.post('/wallets/withdraw/usdt', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
};

//generators
function* getCryptoWallet({ payload }: ReturnType<typeof getCryptoWalletRequest>) {
  try {
    yield put(getCryptoWalletLoadingIndicator(true));
    const [
      {
        data: { data: cryptos },
        status,
      },
      {
        data: { data: naira },
      },
    ]: any = yield all([
      call(ajaxDBCalls.getCryptoWallet, payload),
      call(ajaxDBCalls.getNairaWallet, payload),
    ]);
    yield put(
      getCryptoWalletSuccess({
        cryptoWallets: [...cryptos, ...naira],
        status,
        message: 'Wallet fetched successfully',
      }),
    );
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    yield put(getCryptoWalletFailure({ error, status }));
  } finally {
    yield put(getCryptoWalletLoadingIndicator(false));
  }
}

function* depositNaira({ payload }: ReturnType<typeof depositNairaRequest>) {
  try {
    yield put(depositNairaLoadingIndicator(true));
    const {
      data: { details, ...rest },
    } = yield call(ajaxDBCalls.depositNaira, payload);
    yield put(depositNairaSuccess({ depositLink: details.data.link, ...rest }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    yield put(depositNairaFailure({ error, status }));
  } finally {
    yield put(depositNairaLoadingIndicator(false));
  }
}

function* sendBTC({ payload }: ReturnType<typeof sendBTCRequest>) {
  try {
    yield put(sendBTCLoadingIndicator(true));
    const {
      data: { message },
      status,
    } = yield call(ajaxDBCalls.sendBTC, payload);
    yield put(sendBTCSuccess({ message, status }));
    yield call(delay);
    yield put(sendBTCSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      const { message } = err.response.data;
      if (message) error = message;
      status = err.response.status;
    }
    yield put(sendBTCFailure({ error, status }));
    yield call(delay);
    yield put(sendBTCFailure());
  } finally {
    yield put(sendBTCLoadingIndicator(false));
  }
}

function* sendETH({ payload }: ReturnType<typeof sendETHRequest>) {
  try {
    yield put(sendETHLoadingIndicator(true));
    const {
      data: { message },
      status,
    } = yield call(ajaxDBCalls.sendETH, payload);
    yield put(sendETHSuccess({ message, status }));
    yield call(delay);
    yield put(sendETHSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      const { message } = err.response.data;
      if (message) error = message;
      status = err.response.status;
    }
    yield put(sendETHFailure({ error, status }));
  } finally {
    yield put(sendETHLoadingIndicator(false));
  }
}

function* withdrawNaira({ payload }: ReturnType<typeof withdrawNairaRequest>) {
  try {
    yield put(withdrawNairaLoadingIndicator(true));
    const {
      status,
      data: { data, message },
    } = yield call(ajaxDBCalls.withdrawNaira, payload);
    yield put(withdrawNairaSuccess({ status, message }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    yield put(withdrawNairaFailure({ error, status }));
  } finally {
    yield put(withdrawNairaLoadingIndicator(false));
  }
}

function* sendUSDT({ payload }: ReturnType<typeof sendUSDTRequest>) {
  try {
    yield put(sendUSDTLoadingIndicator(true));
    const {
      data: { message },
      status,
    } = yield call(ajaxDBCalls.sendUSDT, payload);
    yield put(sendUSDTSuccess({ message, status }));
    yield call(delay);
    yield put(sendUSDTSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    yield put(sendUSDTFailure({ error, status }));
  } finally {
    yield put(sendUSDTLoadingIndicator(false));
  }
}

//watchers
function* getCryptoWalletWatcher(): IterableIterator<any> {
  yield takeLatest(GET_CRYPTO_WALLETS_REQUEST, getCryptoWallet);
}

function* depositNairaWatcher(): IterableIterator<any> {
  yield takeLatest(DEPOSIT_NAIRA_REQUEST, depositNaira);
}

function* sendBTCWatcher(): IterableIterator<any> {
  yield takeLatest(SEND_BTC_REQUEST, sendBTC);
}

function* sendETHWatcher(): IterableIterator<any> {
  yield takeLatest(SEND_ETH_REQUEST, sendETH);
}

function* withdrawNairaWatcher(): IterableIterator<any> {
  yield takeLatest(WITHDRAW_NAIRA_REQUEST, withdrawNaira);
}

function* sendUSDTWatcher(): IterableIterator<any> {
  yield takeLatest(SEND_USDT_REQUEST, sendUSDT);
}

export default function* walletSagas() {
  yield spawn(getCryptoWalletWatcher);
  yield spawn(depositNairaWatcher);
  yield spawn(sendBTCWatcher);
  yield spawn(sendETHWatcher);
  yield spawn(withdrawNairaWatcher);
  yield spawn(sendUSDTWatcher);
}
