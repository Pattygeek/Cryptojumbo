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
  data: {
    uid?: string;
    new_password1: string;
    new_password2: string;
  };
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

export interface VerifyOtpRequestPayload extends Token {
  otp: string;
}

export type VerifyOtpSuccessPayload = AjaxSuccessPayload;

export interface Get2FARequestPayload extends Token {
  email: string;
}

export interface SaveTokenSuccessPayload {
  token: string;
}

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

export interface SaveTokenSuccessProps extends Type {
  payload: SaveTokenSuccessPayload;
}

export type Logout = Type;

export type AuthActions = LoginSuccessProp &
  SignUpSuccessProp &
  ResetPasswordSuccessProp &
  ConfirmResetPasswordSuccessProp &
  SaveTokenSuccessProps &
  ChangePasswordSuccessProp &
  ForgotPasswordSuccessProp;
