import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import NextAxios from 'axios';
import {
  RESET_PASSWORD_REQUEST,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  LoginRequestPayload,
  SignUpRequestPayload,
  ResetPasswordRequestPayload,
  ConfirmResetPasswordRequestPayload,
  Logout,
  ChangePasswordRequestPayload,
  VerifyOtpRequestPayload,
  Get2FARequestPayload,
  GET_2FA_REQUEST,
  ACTIVATE_2FA_REQUEST,
  CONFIRM_RESET_PASSWORD_REQUEST,
  ForgotPasswordRequestPayload,
  CHANGE_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  SAVE_TOKEN_REQUEST,
  SaveTokenSuccessPayload,
} from '../../types';
import {
  signUpSuccess,
  loginSuccess,
  resetPasswordSuccess,
  resetPasswordFailure,
  loginFailure,
  signUpFailure,
  loginRequest,
  signUpRequest,
  resetPasswordRequest,
  loginLoadingIndicator,
  signUpLoadingIndicator,
  resetPasswordLoadingIndicator,
  verifyOtpRequest,
  verifyOtpLoadingIndicator,
  verifyOtpSuccess,
  verifyOtpFailure,
  confirmResetPasswordLoadingIndicator,
  confirmResetPasswordRequest,
  confirmResetPasswordSuccess,
  confirmResetPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordLoadingIndicator,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  changePasswordRequest,
  changePasswordLoadingIndicator,
  changePasswordSuccess,
  changePasswordFailure,
  saveTokenRequest,
  saveTokenSuccess,
} from '../../actions';
import { clientErrorMessage, delay } from '../reusables';
import Axios from '../axios';

const ajaxDBCalls = {
  login: async (payload: LoginRequestPayload) => {
    const response = await Axios.post('/auth/login', payload);
    return response;
  },
  signUp: async (payload: any) => {
    const response = await Axios.post('/auth/register', payload, {
      headers: { 'Content-Type': 'multipart/formdata' },
    });
    return response;
  },
  // Set Two-Factor Authentication
  verifyOtp: async ({ otp, token }: VerifyOtpRequestPayload) => {
    const response = await Axios.post(
      `/auth/otp/${otp}`,
      {},
      { headers: { Authorization: `Token ${token}` } },
    );
    return response;
  },
  // Get Two-Factor Authentication
  get2FA: async ({ email, token }: Get2FARequestPayload) => {
    const response = await Axios.get(`/auth/otp/${email}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  changePassword: async ({ token, data }: ChangePasswordRequestPayload) => {
    const response = await Axios.post('/auth/password/change', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  resetPassword: async ({ data }: ResetPasswordRequestPayload) => {
    const response = await Axios.post('/auth/password/reset', data);
    return response;
  },
  confirmResetPassword: async ({
    token,
    data,
  }: ConfirmResetPasswordRequestPayload) => {
    const response = await Axios.post('/auth/password/reset/confirm', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  forgotPassword: async ({ data }: ForgotPasswordRequestPayload) => {
    const response = await Axios.post(`/auth/password/reset`, data);
    return response;
  },
  logout: async ({ token }: any) => {
    const response = await Axios.get('/auth/logout', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  saveToken: async ({ token }: SaveTokenSuccessPayload) => {
    const response = await NextAxios.post('/api/user-details', { token });
    return response;
  },
};

// Generators
function* login({ payload }: ReturnType<typeof loginRequest>) {
  try {
    yield put(loginLoadingIndicator(true));
    const { data, status } = yield call(ajaxDBCalls.login, payload);
    console.log('login data', data);
    yield put(
      loginSuccess({
        token: data.key as string,
        status,
        message: 'login was successful',
      }),
    );
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) {
      console.log('error request', !err.request.response);
      error = clientErrorMessage;
    }
    if (err.response) {
      const { data } = err.response;
      error = data.non_field_errors[0];
      status = err.response.status;
      console.log('err respnse', err.response);
    }
    yield put(loginFailure({ error, status }));
    yield put(loginLoadingIndicator(false));
    yield call(delay);
    yield put(loginFailure());
  } finally {
    yield put(loginLoadingIndicator(false));
  }
}

function* signUp({ payload }: ReturnType<typeof signUpRequest>) {
  try {
    console.log('payload', payload);
    yield put(signUpLoadingIndicator(true));
    const formdata = new FormData();
    Object.keys(payload).forEach((field) => {
      formdata.append(field, payload[field]);
    });
    const {
      data: { data: user_details, ...rest },
    } = yield call(ajaxDBCalls.signUp, formdata);
    yield put(signUpSuccess({ user_details, ...rest }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      const { email } = err.response.data;
      if (email) error = email[0];
      console.log('error response', err.response);
      status = err.response.status;
    }
    yield put(signUpFailure({ error, status }));
    yield put(signUpLoadingIndicator(false));
    yield call(delay);
    yield put(signUpFailure());
  } finally {
    yield put(signUpLoadingIndicator(false));
  }
}

function* resetPassword({ payload }: ReturnType<typeof resetPasswordRequest>) {
  try {
    yield put(resetPasswordLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.resetPassword, payload);
    yield put(resetPasswordSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(resetPasswordFailure({ error, status }));
    yield put(resetPasswordLoadingIndicator(false));
    yield call(delay);
    yield put(resetPasswordFailure());
  } finally {
    yield put(resetPasswordLoadingIndicator(false));
  }
}

function* verifyOtp({ payload }: ReturnType<typeof verifyOtpRequest>) {
  try {
    yield put(verifyOtpLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.verifyOtp, payload);
    yield put(verifyOtpSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    yield put(verifyOtpFailure({ error, status }));
    yield put(verifyOtpLoadingIndicator(false));
    yield call(delay);
    yield put(verifyOtpFailure());
  } finally {
    yield put(verifyOtpLoadingIndicator(false));
  }
}

function* confirmResetPassword({
  payload,
}: ReturnType<typeof confirmResetPasswordRequest>) {
  try {
    yield put(confirmResetPasswordLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.confirmResetPassword, payload);
    yield put(confirmResetPasswordSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(confirmResetPasswordFailure({ error, status }));
    yield put(confirmResetPasswordLoadingIndicator(false));
    yield call(delay);
    yield put(confirmResetPasswordFailure());
  } finally {
    yield put(confirmResetPasswordLoadingIndicator(false));
  }
}

function* forgotPassword({ payload }: ReturnType<typeof forgotPasswordRequest>) {
  try {
    yield put(forgotPasswordLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.forgotPassword, payload);
    yield put(forgotPasswordSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(forgotPasswordFailure({ error, status }));
    yield put(forgotPasswordLoadingIndicator(false));
    yield call(delay);
    yield put(forgotPasswordFailure());
  } finally {
    yield put(forgotPasswordLoadingIndicator(false));
  }
}

function* changePassword({ payload }: ReturnType<typeof changePasswordRequest>) {
  try {
    yield put(changePasswordLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.changePassword, payload);
    yield put(changePasswordSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
    }
    console.log('error', err);
    yield put(changePasswordFailure({ error, status }));
    yield put(changePasswordLoadingIndicator(false));
    yield call(delay);
    yield put(changePasswordFailure());
  } finally {
    yield put(changePasswordLoadingIndicator(false));
  }
}

function* saveToken({ payload }: ReturnType<typeof saveTokenRequest>) {
  try {
    const response = yield call(ajaxDBCalls.saveToken, payload);
    yield put(saveTokenSuccess(response));
  } catch (err) {
    console.log('error', err);
  }
}

// Watchers
function* loginWatcher(): IterableIterator<any> {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* signUpWatcher(): IterableIterator<any> {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

function* resetPasswordWatcher(): IterableIterator<any> {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
}

function* verifyOtpWatcher(): IterableIterator<any> {
  yield takeLatest(ACTIVATE_2FA_REQUEST, verifyOtp);
}

function* confirmResetPasswordWatcher(): IterableIterator<any> {
  yield takeLatest(CONFIRM_RESET_PASSWORD_REQUEST, confirmResetPassword);
}

function* forgotPasswordAWatcher(): IterableIterator<any> {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
}

function* changePasswordWatcher(): IterableIterator<any> {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}

function* saveTokenWatcher(): IterableIterator<any> {
  yield takeLatest(SAVE_TOKEN_REQUEST, saveToken);
}

export default function* authSagas() {
  yield spawn(loginWatcher);
  yield spawn(signUpWatcher);
  yield spawn(resetPasswordWatcher);
  yield spawn(verifyOtpWatcher);
  yield spawn(confirmResetPasswordWatcher);
  yield spawn(forgotPasswordAWatcher);
  yield spawn(changePasswordWatcher);
  yield spawn(saveTokenWatcher);
}
