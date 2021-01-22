import { call, put, takeLatest, spawn } from 'redux-saga/effects';

import {
  GET_ONE_TRANSACTION_REQUEST,
  GET_ALL_TRANSACTIONS_REQUEST,
  UPDATE_TRANSACTION_REQUEST,
  AllTransactionRequestPayload,
  SingleTransactionRequestPayload,
  UpdateTransactionRequestPayload,
} from '../../types';

import {
  allTransactionFailure,
  allTransactionRequest,
  allTransactionSuccess,
  allTransactionLoadingIndicator,
  singleTransactionFailure,
  singleTransactionRequest,
  singleTransactionSuccess,
  singleTransactionLoadingIndicator,
  updateTransactionFailure,
  updateTransactionRequest,
  updateTransactionSuccess,
  updateTransactionLoadingIndicator,
} from '../../actions';

import { clientErrorMessage } from '../reusables';
import Axios from '../axios';

const ajaxDBCalls = {
  getTransactions: async ({ token }: AllTransactionRequestPayload) => {
    const response = await Axios.get('/transactions', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  updateTransaction: async ({ token, data }: UpdateTransactionRequestPayload) => {
    const response = await Axios.post('/transactions', data);
    return response;
  },
  singleTransaction: async ({ id }: SingleTransactionRequestPayload) => {
    const response = await Axios.get(`/transactions/${id}`);
    return response;
  },
};

//generators
function* getTransactions({ payload }: ReturnType<typeof allTransactionRequest>) {
  try {
    yield put(allTransactionLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.getTransactions, payload);
    yield put(allTransactionSuccess(response));
  } catch (err) {
    const { status } = err;
    let error = '';
    if (err.request) error = clientErrorMessage;
    if (err.response) {
    }
    yield put(allTransactionFailure({ error, status }));
  } finally {
    yield put(allTransactionLoadingIndicator(false));
  }
}

function* updateTransaction({
  payload,
}: ReturnType<typeof updateTransactionRequest>) {
  try {
    yield put(updateTransactionLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.updateTransaction, payload);
    yield put(updateTransactionSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    yield put(updateTransactionFailure({ error, status }));
  } finally {
    yield put(updateTransactionLoadingIndicator(false));
  }
}

function* singleTransaction({
  payload,
}: ReturnType<typeof singleTransactionRequest>) {
  try {
    yield put(singleTransactionLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.singleTransaction, payload);
    yield put(singleTransactionSuccess(response));
  } catch (err) {
    const { status } = err;
    let error = '';
    if (err.request) error = clientErrorMessage;
    if (err.response) {
    }
    yield put(singleTransactionFailure({ error, status }));
  } finally {
    yield put(singleTransactionLoadingIndicator(false));
  }
}

//watchers
function* allTransactionWatcher(): IterableIterator<any> {
  yield takeLatest(GET_ALL_TRANSACTIONS_REQUEST, getTransactions);
}

function* updateTransactionWatcher(): IterableIterator<any> {
  yield takeLatest(UPDATE_TRANSACTION_REQUEST, updateTransaction);
}

function* singleTransactionWatcher(): IterableIterator<any> {
  yield takeLatest(GET_ONE_TRANSACTION_REQUEST, singleTransaction);
}

export default function* transactionSagas() {
  yield spawn(allTransactionWatcher);
  yield spawn(updateTransactionWatcher);
  yield spawn(singleTransactionWatcher);
}
