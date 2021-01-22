import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import Axios from '../axios';
import { clientErrorMessage, delay } from '../reusables';

import {
  GET_PROFILE_REQUEST,
  GetProfileRequestPayload,
  UPDATE_PROFILE_REQUEST,
  UpdateProfileRequestPayload,
} from '../../types';

import {
  getProfileSuccess,
  getProfileFailure,
  getProfileRequest,
  getProfileLoadingIndicator,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  updateProfileLoadingIndicator,
} from '../../actions';

const ajaxDBCalls = {
  profile: async ({ token }: GetProfileRequestPayload) => {
    const response = await Axios.get(`/profile`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  updateProfile: async ({ token, data }: UpdateProfileRequestPayload) => {
    const response = await Axios.patch(`/profile`, data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
};

//generators
function* getProfile({ payload }: ReturnType<typeof getProfileRequest>) {
  try {
    yield put(getProfileLoadingIndicator(true));
    const { data } = yield call(ajaxDBCalls.profile, payload);
    yield put(getProfileSuccess(data));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(getProfileFailure({ error, status }));
  } finally {
    yield put(getProfileLoadingIndicator(false));
  }
}

function* updateProfile({ payload }: ReturnType<typeof updateProfileRequest>) {
  try {
    yield put(updateProfileLoadingIndicator(true));
    const {
      data: { data, ...rest },
    } = yield call(ajaxDBCalls.updateProfile, payload);
    console.log('updateProfile', data);
    yield put(updateProfileSuccess({ data, ...rest }));
    yield call(delay);
    yield put(updateProfileSuccess({ data }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(updateProfileFailure({ error, status }));
    yield put(updateProfileLoadingIndicator(false));
    yield call(delay);
    yield put(updateProfileFailure());
  } finally {
    yield put(updateProfileLoadingIndicator(false));
  }
}

//Watchers
function* profileWatcher(): IterableIterator<any> {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
}
function* updateProfileWatcher(): IterableIterator<any> {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfile);
}

export default function* profileSagas() {
  yield spawn(profileWatcher);
  yield spawn(updateProfileWatcher);
}
