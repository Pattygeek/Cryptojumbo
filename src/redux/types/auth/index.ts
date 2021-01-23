import { Type, Token, AjaxStatuses, AjaxSuccessPayload } from '../global';

export interface UserProps {
  id: string;
  email: string;
  is_verified: boolean;
  date_joined: string;
  token: string;
}

// Payloads
export interface LoginRequestPayload {
  email: string;
  password: string;
}

export interface LoginSuccessPayload extends AjaxSuccessPayload {
  token: string;
}

export interface SignUpRequestPayload {
  [key: string]: string;
}

export interface SignUpSuccessPayload {
  user_details: UserProps;
}

export interface ForgotPasswordRequestPayload {
  data: {
    email: string;
  };
}

export type ForgotPasswordSuccessPayload = AjaxSuccessPayload;

export interface ResetPasswordRequestPayload {
  data: { password: string; confirm_password: string };
  email: string;
}

export type ResetPasswordSuccessPayload = AjaxSuccessPayload;

export interface ChangePasswordRequestPayload extends Token {
  data: {
    old_password: string;
    new_password1: string;
    new_password2: string;
  };
}

export type ChangePasswordSuccessPayload = AjaxSuccessPayload;

export interface ConfirmResetPasswordRequestPayload extends Token {
  data: {
    uid?: string;
    new_password1: string;
    new_password2: string;
  };
}

export type ConfirmResetPasswordSuccessPayload = AjaxSuccessPayload;

export interface VerifyOtpRequestPayload {
  otp: string;
  email: string;
}

export type VerifyOtpSuccessPayload = AjaxSuccessPayload;

export interface GetOtpRequestPayload {
  email: string;
}

export type GetOtpSuccessPayload = AjaxSuccessPayload & {
  email: string;
};

export interface SaveTokenSuccessPayload {
  token: string;
}

export interface ActivateAccountRequestPayload extends Token {
  uidb64: string;
}

export type ActivateAccountSuccessPayload = AjaxSuccessPayload;

export type LogoutRequestPayload = Token;
export type LogoutSuccessPayload = AjaxSuccessPayload;

// Actions
export interface LoginRequestProp extends Type {
  payload: LoginRequestPayload;
}

export interface LoginSuccessProp extends Type {
  payload: LoginSuccessPayload;
}

export interface SignUpRequestProp extends Type {
  payload: SignUpRequestPayload;
}

export interface SignUpSuccessProp extends Type {
  payload: SignUpSuccessPayload;
}

export interface ForgotPasswordRequestProp extends Type {
  payload: ForgotPasswordRequestPayload;
}

export interface ForgotPasswordSuccessProp extends Type {
  payload: ForgotPasswordSuccessPayload;
}

export interface ResetPasswordRequestProp extends Type {
  payload: ResetPasswordRequestPayload;
}

export interface ResetPasswordSuccessProp extends Type {
  payload: ResetPasswordSuccessPayload;
}

export interface ChangePasswordRequestProp extends Type {
  payload: ChangePasswordRequestPayload;
}

export interface ChangePasswordSuccessProp extends Type {
  payload: ChangePasswordSuccessPayload;
}

export interface ConfirmResetPasswordRequestProp extends Type {
  payload: ConfirmResetPasswordRequestPayload;
}

export interface ConfirmResetPasswordSuccessProp extends Type {
  payload: ConfirmResetPasswordSuccessPayload;
}

export interface VerifyOtpRequestProp extends Type {
  payload: VerifyOtpRequestPayload;
}

export interface VerifyOtpSuccessProp extends Type {
  payload: VerifyOtpSuccessPayload;
}

export interface GetOtpRequestProp extends Type {
  payload: GetOtpRequestPayload;
}

export interface GetOtpSuccessProp extends Type {
  payload: GetOtpSuccessPayload;
}

export interface ActivateAccountRequestProp extends Type {
  payload: ActivateAccountRequestPayload;
}

export interface ActivateAccountSuccessProp extends Type {
  payload: ActivateAccountSuccessPayload;
}

export interface SaveTokenSuccessProps extends Type {
  payload: SaveTokenSuccessPayload;
}

export type Logout = Type;
export interface LogoutRequestProp extends Type {
  payload: LogoutRequestPayload;
}

export interface LogoutSuccessProp extends Type {
  payload: LogoutSuccessPayload;
}

export type AuthActions = LoginSuccessProp &
  SignUpSuccessProp &
  ResetPasswordSuccessProp &
  ConfirmResetPasswordSuccessProp &
  SaveTokenSuccessProps &
  ChangePasswordSuccessProp &
  ForgotPasswordSuccessProp &
  ActivateAccountSuccessProp &
  LogoutSuccessProp &
  GetOtpSuccessProp &
  VerifyOtpSuccessProp;
