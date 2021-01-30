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
  GetOtpRequestPayload,
  GET_OTP_REQUEST,
  VERIFY_OTP_REQUEST,
  CONFIRM_RESET_PASSWORD_REQUEST,
  ForgotPasswordRequestPayload,
  CHANGE_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  SAVE_TOKEN_REQUEST,
  SaveTokenSuccessPayload,
  LOGOUT_REQUEST,
  ACTIVATE_ACCOUNT_REQUEST,
  ActivateAccountRequestPayload,
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
  logoutRequest,
  logoutLoadingIndicator,
  logoutSuccess,
  logoutFailure,
  activateAccountRequest,
  activateAccountLoadingIndicator,
  activateAccountSuccess,
  activateAccountFailure,
  getOtpRequest,
  getOtpLoadingIndicator,
  getOtpSuccess,
  getOtpFailure,
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
  verifyOtp: async ({ otp, email }: VerifyOtpRequestPayload) => {
    const response = await Axios.post(`/auth/otp?email=${email}`, { otp });
    return response;
  },
  // Get Two-Factor Authentication
  getOtp: async ({ email }: GetOtpRequestPayload) => {
    const response = await Axios.get(`/auth/otp?email=${email}`);
    return response;
  },
  changePassword: async ({ token, data }: ChangePasswordRequestPayload) => {
    const response = await Axios.post('/auth/password/change', data, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  },
  resetPassword: async ({ data, email }: ResetPasswordRequestPayload) => {
    const response = await Axios.post(`/auth/password/reset?email=${email}`, data);
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
  activateAccount: async ({ token, uidb64 }: ActivateAccountRequestPayload) => {
    const response = await Axios.get(`/auth/activate/${uidb64}/${token}`);
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
    yield call(delay, 1);
    yield put(
      loginSuccess({
        token: data.key as string,
        status,
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
      if (data.non_field_errors) {
        error = data.non_field_errors[0];
      }
      if (data.message) {
        error = data.message;
      }
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
    const {
      data: { ...rest },
      status,
    } = yield call(ajaxDBCalls.resetPassword, payload);
    yield put(resetPasswordSuccess({ ...rest, status }));
    yield call(delay);
    yield put(resetPasswordSuccess({ status }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
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

function* getOtp({ payload }: ReturnType<typeof getOtpRequest>) {
  try {
    yield put(getOtpLoadingIndicator(true));
    const {
      data: { ...rest },
    } = yield call(ajaxDBCalls.getOtp, payload);
    yield put(getOtpSuccess({ ...rest, email: payload.email }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    yield put(getOtpFailure({ error, status }));
    yield put(getOtpLoadingIndicator(false));
    yield call(delay);
    yield put(getOtpFailure());
  } finally {
    yield put(getOtpLoadingIndicator(false));
  }
}

function* verifyOtp({ payload }: ReturnType<typeof verifyOtpRequest>) {
  try {
    yield put(verifyOtpLoadingIndicator(true));
    const {
      data: { ...rest },
    } = yield call(ajaxDBCalls.verifyOtp, payload);
    yield put(verifyOtpSuccess({ ...rest }));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
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
      error = err.response.data.message;
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
    yield put(
      changePasswordSuccess({
        status: response.status,
        message: 'Password changed successfully',
      }),
    );
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      const { old_password } = err.response.data;
      const { new_password2 } = err.response.data;
      console.log('old_password', old_password);
      if (old_password) error = old_password[0];
      if (new_password2) error = new_password2[0];
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

function* logout({ payload }: ReturnType<typeof logoutRequest>) {
  try {
    yield put(logoutLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.logout, payload);
    yield put(logoutSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(logoutFailure({ error, status }));
    yield put(logoutLoadingIndicator(false));
    yield call(delay);
    yield put(logoutFailure());
  } finally {
    yield put(logoutLoadingIndicator(false));
  }
}

function* activateAccount({ payload }: ReturnType<typeof activateAccountRequest>) {
  try {
    yield put(activateAccountLoadingIndicator(true));
    const response = yield call(ajaxDBCalls.activateAccount, payload);
    yield put(activateAccountSuccess(response));
  } catch (err) {
    let error = '';
    let status = 0;
    if (!err.request.response) error = clientErrorMessage;
    if (err.response) {
      status = err.response.status;
      error = err.response.data.message;
    }
    console.log('error', err);
    yield put(activateAccountFailure({ error, status }));
    yield put(activateAccountLoadingIndicator(false));
    yield call(delay);
    yield put(activateAccountFailure());
  } finally {
    yield put(activateAccountLoadingIndicator(false));
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

function* getOtpWatcher(): IterableIterator<any> {
  yield takeLatest(GET_OTP_REQUEST, getOtp);
}

function* verifyOtpWatcher(): IterableIterator<any> {
  yield takeLatest(VERIFY_OTP_REQUEST, verifyOtp);
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

function* logoutWatcher(): IterableIterator<any> {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* saveTokenWatcher(): IterableIterator<any> {
  yield takeLatest(SAVE_TOKEN_REQUEST, saveToken);
}

function* activateAccountWatcher(): IterableIterator<any> {
  yield takeLatest(ACTIVATE_ACCOUNT_REQUEST, activateAccount);
}

export default function* authSagas() {
  yield spawn(loginWatcher);
  yield spawn(signUpWatcher);
  yield spawn(resetPasswordWatcher);
  yield spawn(getOtpWatcher);
  yield spawn(verifyOtpWatcher);
  yield spawn(confirmResetPasswordWatcher);
  yield spawn(forgotPasswordAWatcher);
  yield spawn(changePasswordWatcher);
  yield spawn(logoutWatcher);
  yield spawn(saveTokenWatcher);
  yield spawn(activateAccountWatcher);
}
