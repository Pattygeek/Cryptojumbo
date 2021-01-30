import { call, put, takeLatest, spawn, all } from 'redux-saga/effects';
import Axios from '../axios';
import { clientErrorMessage } from '../reusables';

import {
  GET_CURRENCIES_REQUEST,
  GetProfileRequestPayload,
  UploadUtilityBillRequestPayload,
  UPLOAD_UTILITY_BILL_REQUEST,
  GET_FAQ_REQUEST,
  VerifyBankAccountRequestPayload,
  VERIFY_BANK_ACCOUNT_REQUEST,
  GET_RATES_REQUEST,
} from '../../types';

import {
  getCurrenciesSuccess,
  getCurrenciesFailure,
  getCurrenciesRequest,
  getCurrenciesLoadingIndicator,
  uploadUtilityBillLoadingIndicator,
  uploadUtilityBillSuccess,
  uploadUtilityBillFailure,
  uploadUtilityBillRequest,
  getFAQRequest,
  getFAQLoadingIndicator,
  getFAQSuccess,
  getFAQFailure,
  verifyBankAccountFailure,
  verifyBankAccountLoadingIndicator,
  verifyBankAccountRequest,
  verifyBankAccountSuccess,
  getRatesFailure,
  getRatesLoadingIndicator,
  getRatesRequest,
  getRatesSuccess,
} from '../../actions';

const ajaxDBCalls = {
  getCurrencies: async () => {
    const response = await Axios.get(`/currencies/price`);
    return response;
  },
  getNairaEquivalent: async () => {
    const response = await Axios.get(`/currencies/price?convert=NGN`);
    return response;
  },
  uploadUtilityBill: async ({ token, data }: UploadUtilityBillRequestPayload) => {
    const response = await Axios.post(`/upload/utility-bill`, data, {
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'multipart/formdata',
      },
    });
    return response;
  },
  verifyBankAccount: async ({ data }: VerifyBankAccountRequestPayload) => {
    const response = await Axios.post(`/accounts/resolve`, data);
    return response;
  },
  getFAQ: async () => {
    const response = await Axios.get(`/faq`);
    return response;
  },
  getRates: async () => {
    const response = await Axios.get(`/rates`);
    return response;
  },
};

//generators
function* getCurrencies() {
  try {
    yield put(getCurrenciesLoadingIndicator(true));
    const [dollarResponse, nairaResponse]: any = yield all([
      call(ajaxDBCalls.getCurrencies),
      call(ajaxDBCalls.getNairaEquivalent),
    ]);
    const {
      data: { prices: dollarEquivalent },
      status,
    } = dollarResponse;
    const {
      data: { prices: nairaEquivalent },
    } = nairaResponse;
    yield put(
      getCurrenciesSuccess({
        dollarEquivalent,
        nairaEquivalent,
        status,
        message: 'Currencies fetched successfully',
      }),
    );
  } catch (err) {
    const { status } = err;
    let error = '';
    if (err) error = clientErrorMessage;
    if (err.response) {
    }
    console.log('error', err);
    yield put(getCurrenciesFailure({ error, status }));
  } finally {
    yield put(getCurrenciesLoadingIndicator(false));
  }
}

function* uploadUtilityBill({
  payload,
}: ReturnType<typeof uploadUtilityBillRequest>) {
  try {
    yield put(uploadUtilityBillLoadingIndicator(true));
    const { data, status } = yield call(ajaxDBCalls.uploadUtilityBill, payload);

    yield put(uploadUtilityBillSuccess({ ...data, status }));
  } catch (err) {
    let status = 0;
    let error = '';
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(uploadUtilityBillFailure({ error, status }));
  } finally {
    yield put(uploadUtilityBillLoadingIndicator(false));
  }
}

function* verifyBankAccount({
  payload,
}: ReturnType<typeof verifyBankAccountRequest>) {
  try {
    yield put(verifyBankAccountLoadingIndicator(true));
    const {
      data: { data, ...rest },
      status,
    } = yield call(ajaxDBCalls.verifyBankAccount, payload);
    if (data === null) throw rest.message;
    yield put(verifyBankAccountSuccess({ bankDetails: data, status, ...rest }));
  } catch (err) {
    console.log('error', err);
    let status = 0;
    let error = '';
    if (typeof err === 'string') {
      error = err;
    } else if (!err.request && !err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(verifyBankAccountFailure({ error, status }));
  } finally {
    yield put(verifyBankAccountLoadingIndicator(false));
  }
}

function* getRates() {
  try {
    yield put(getRatesLoadingIndicator(true));
    const {
      data: { rates, ...rest },
      status,
    } = yield call(ajaxDBCalls.getRates);
    yield put(getRatesSuccess({ rates, status, ...rest }));
  } catch (err) {
    console.log('error', err);
    let status = 0;
    let error = '';
    if (typeof err === 'string') {
      error = err;
    } else if (!err.request && !err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(getRatesFailure({ error, status }));
  } finally {
    yield put(getRatesLoadingIndicator(false));
  }
}

function* getFAQ() {
  try {
    yield put(getFAQLoadingIndicator(true));
    const {
      data: { results },
      status,
    } = yield call(ajaxDBCalls.getFAQ);

    yield put(
      getFAQSuccess({ faqs: results, status, message: 'FAQ fetched successfully' }),
    );
  } catch (err) {
    let status = 0;
    let error = '';
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(getFAQFailure({ error, status }));
  } finally {
    yield put(getFAQLoadingIndicator(false));
  }
}

//Watchers
function* getCurrenciesWWatcher(): IterableIterator<any> {
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
}

function* uploadUtilityBillWWatcher(): IterableIterator<any> {
  yield takeLatest(UPLOAD_UTILITY_BILL_REQUEST, uploadUtilityBill);
}

function* verifyBankAccountWatcher(): IterableIterator<any> {
  yield takeLatest(VERIFY_BANK_ACCOUNT_REQUEST, verifyBankAccount);
}

function* getFAQWatcher(): IterableIterator<any> {
  yield takeLatest(GET_FAQ_REQUEST, getFAQ);
}

function* getRatesWatcher(): IterableIterator<any> {
  yield takeLatest(GET_RATES_REQUEST, getRates);
}

export default function* OtherSagas() {
  yield spawn(getCurrenciesWWatcher);
  yield spawn(uploadUtilityBillWWatcher);
  yield spawn(verifyBankAccountWatcher);
  yield spawn(getFAQWatcher);
  yield spawn(getRatesWatcher);
}
