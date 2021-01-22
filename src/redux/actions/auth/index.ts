import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  LOGIN_LOADING_INDICATOR,
  SIGNUP_LOADING_INDICATOR,
  RESET_PASSWORD_LOADING_INDICATOR,
  LoginRequestProp,
  LoginSuccessProp,
  ResetPasswordRequestProp,
  SignUpRequestProp,
  SignUpSuccessProp,
  ForgotPasswordRequestProp,
  LoginRequestPayload,
  AjaxErrorProp,
  SignUpRequestPayload,
  ForgotPasswordRequestPayload,
  ResetPasswordRequestPayload,
  ForgotPasswordSuccessProp,
  ResetPasswordSuccessProp,
  LoginSuccessPayload,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  SignUpSuccessPayload,
  ForgotPasswordSuccessPayload,
  ResetPasswordSuccessPayload,
  ConfirmResetPasswordRequestPayload,
  ConfirmResetPasswordRequestProp,
  CONFIRM_RESET_PASSWORD_REQUEST,
  ConfirmResetPasswordSuccessPayload,
  ConfirmResetPasswordSuccessProp,
  CONFIRM_RESET_PASSWORD_SUCCESS,
  CONFIRM_RESET_PASSWORD_FAILURE,
  CONFIRM_RESET_PASSWORD_LOADING_INDICATOR,
  VerifyOtpRequestPayload,
  VerifyOtpRequestProp,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VerifyOtpSuccessPayload,
  VerifyOtpSuccessProp,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_LOADING_INDICATOR,
  GetOtpRequestPayload,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  GET_OTP_FAILURE,
  GET_OTP_LOADING_INDICATOR,
  ChangePasswordRequestPayload,
  ChangePasswordRequestProp,
  CHANGE_PASSWORD_REQUEST,
  ChangePasswordSuccessPayload,
  ChangePasswordSuccessProp,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_LOADING_INDICATOR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_LOADING_INDICATOR,
  SAVE_TOKEN_SUCCESS,
  SaveTokenSuccessPayload,
  SaveTokenSuccessProps,
  SAVE_TOKEN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_LOADING_INDICATOR,
  Type,
  LogoutSuccessPayload,
  LogoutSuccessProp,
  LogoutRequestPayload,
  LogoutRequestProp,
  ActivateAccountRequestPayload,
  ActivateAccountRequestProp,
  ACTIVATE_ACCOUNT_REQUEST,
  ActivateAccountSuccessPayload,
  ActivateAccountSuccessProp,
  ACTIVATE_ACCOUNT_SUCCESS,
  ACTIVATE_ACCOUNT_FAILURE,
  ACTIVATE_ACCOUNT_LOADING_INDICATOR,
  GetOtpRequestProp,
  GetOtpSuccessPayload,
  GetOtpSuccessProp,
} from '../../types';

// Login actions
export const loginRequest = (prop: LoginRequestPayload): LoginRequestProp => {
  return {
    type: LOGIN_REQUEST,
    payload: prop,
  };
};

export const loginSuccess = (prop: LoginSuccessPayload): LoginSuccessProp => {
  return {
    type: LOGIN_SUCCESS,
    payload: prop,
  };
};

export const loginFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: LOGIN_FAILURE,
    payload: prop,
  };
};

export const loginLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: LOGIN_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Signup actions
export const signUpRequest = (prop: SignUpRequestPayload): SignUpRequestProp => {
  return {
    type: SIGNUP_REQUEST,
    payload: prop,
  };
};

export const signUpSuccess = (prop: SignUpSuccessPayload): SignUpSuccessProp => {
  return {
    type: SIGNUP_SUCCESS,
    payload: prop,
  };
};

export const signUpFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SIGNUP_FAILURE,
    payload: prop,
  };
};

export const signUpLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: SIGNUP_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Forgot Password actions
export const forgotPasswordRequest = (
  prop: ForgotPasswordRequestPayload,
): ForgotPasswordRequestProp => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    payload: prop,
  };
};

export const forgotPasswordSuccess = (
  prop: ForgotPasswordSuccessPayload,
): ForgotPasswordSuccessProp => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: prop,
  };
};

export const forgotPasswordFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: prop,
  };
};

export const forgotPasswordLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: FORGOT_PASSWORD_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Reset Password actions
export const resetPasswordRequest = (
  prop: ResetPasswordRequestPayload,
): ResetPasswordRequestProp => {
  return {
    type: RESET_PASSWORD_REQUEST,
    payload: prop,
  };
};

export const resetPasswordSuccess = (
  prop: ResetPasswordSuccessPayload,
): ResetPasswordSuccessProp => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: prop,
  };
};

export const resetPasswordFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: prop,
  };
};

export const resetPasswordLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: RESET_PASSWORD_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Confirm Reset Password actions
export const confirmResetPasswordRequest = (
  prop: ConfirmResetPasswordRequestPayload,
): ConfirmResetPasswordRequestProp => {
  return {
    type: CONFIRM_RESET_PASSWORD_REQUEST,
    payload: prop,
  };
};

export const confirmResetPasswordSuccess = (
  prop: ConfirmResetPasswordSuccessPayload,
): ConfirmResetPasswordSuccessProp => {
  return {
    type: CONFIRM_RESET_PASSWORD_SUCCESS,
    payload: prop,
  };
};

export const confirmResetPasswordFailure = (
  prop?: AjaxErrorPayload,
): AjaxErrorProp => {
  return {
    type: CONFIRM_RESET_PASSWORD_FAILURE,
    payload: prop,
  };
};

export const confirmResetPasswordLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: CONFIRM_RESET_PASSWORD_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Activate Two-Factor Authentication actions
export const verifyOtpRequest = (
  prop: VerifyOtpRequestPayload,
): VerifyOtpRequestProp => {
  return {
    type: VERIFY_OTP_REQUEST,
    payload: prop,
  };
};

export const verifyOtpSuccess = (
  prop: VerifyOtpSuccessPayload,
): VerifyOtpSuccessProp => {
  return {
    type: VERIFY_OTP_SUCCESS,
    payload: prop,
  };
};

export const verifyOtpFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: VERIFY_OTP_FAILURE,
    payload: prop,
  };
};

export const verifyOtpLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: VERIFY_OTP_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const getOtpRequest = (prop: GetOtpRequestPayload): GetOtpRequestProp => {
  return {
    type: GET_OTP_REQUEST,
    payload: prop,
  };
};

export const getOtpSuccess = (prop: GetOtpSuccessPayload): GetOtpSuccessProp => {
  return {
    type: GET_OTP_SUCCESS,
    payload: prop,
  };
};

export const getOtpFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_OTP_FAILURE,
    payload: prop,
  };
};

export const getOtpLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: GET_OTP_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Change Password actions
export const changePasswordRequest = (
  prop: ChangePasswordRequestPayload,
): ChangePasswordRequestProp => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload: prop,
  };
};

export const changePasswordSuccess = (
  prop: ChangePasswordSuccessPayload,
): ChangePasswordSuccessProp => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: prop,
  };
};

export const changePasswordFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: prop,
  };
};

export const changePasswordLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: CHANGE_PASSWORD_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const activateAccountRequest = (
  prop: ActivateAccountRequestPayload,
): ActivateAccountRequestProp => {
  return {
    type: ACTIVATE_ACCOUNT_REQUEST,
    payload: prop,
  };
};

export const activateAccountSuccess = (
  prop: ActivateAccountSuccessPayload,
): ActivateAccountSuccessProp => {
  return {
    type: ACTIVATE_ACCOUNT_SUCCESS,
    payload: prop,
  };
};

export const activateAccountFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: ACTIVATE_ACCOUNT_FAILURE,
    payload: prop,
  };
};

export const activateAccountLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: ACTIVATE_ACCOUNT_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const logoutRequest = (prop: LogoutRequestPayload): LogoutRequestProp => {
  return {
    type: LOGOUT_REQUEST,
    payload: prop,
  };
};

export const logoutSuccess = (prop: LogoutSuccessPayload): LogoutSuccessProp => {
  return {
    type: LOGOUT_SUCCESS,
    payload: prop,
  };
};

export const logoutFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: LOGOUT_FAILURE,
    payload: prop,
  };
};

export const logoutLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: LOGOUT_LOADING_INDICATOR,
    payload: { loading },
  };
};

// Save Token actions
export const saveTokenRequest = (
  prop: SaveTokenSuccessPayload,
): SaveTokenSuccessProps => {
  return {
    type: SAVE_TOKEN_REQUEST,
    payload: prop,
  };
};

export const saveTokenSuccess = (
  prop: SaveTokenSuccessPayload,
): SaveTokenSuccessProps => {
  return {
    type: SAVE_TOKEN_SUCCESS,
    payload: prop,
  };
};
