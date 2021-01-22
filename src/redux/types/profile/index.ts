import { Type, Token, AjaxSuccessPayload } from '../global';
import { SignUpSuccessProp, UserProps } from '../auth';

export interface ProfileProps {
  first_name: string;
  last_name: string;
  gender: string;
  account_number: string;
  bank_name: string;
  birthday: string;
  phone: string;
  state: string;
  transaction_pin: number | string;
  verification_level: number;
  password_changed: boolean;
  two_factor_auth_enabled: boolean;
}

export type GetProfileRequestPayload = Token;

export interface GetProfileSuccessPayload extends Partial<AjaxSuccessPayload> {
  data: ProfileProps & {
    user: UserProps;
  };
}

export interface UpdateProfileRequestPayload extends Token {
  data: Partial<ProfileProps>;
}

export type UpdateProfileSuccessPayload = GetProfileSuccessPayload;

export interface GetProfileRequestProp extends Type {
  payload: GetProfileRequestPayload;
}

export interface GetProfileSuccessProp extends Type {
  payload: GetProfileSuccessPayload;
}

export interface UpdateProfileRequestProp extends Type {
  payload: UpdateProfileRequestPayload;
}

export interface UpdateProfileSuccessProp extends Type {
  payload: UpdateProfileSuccessPayload;
}
export type ProfileActions = GetProfileSuccessProp &
  UpdateProfileSuccessProp &
  SignUpSuccessProp;
