import {
  AuthActions,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SAVE_TOKEN_SUCCESS,
  GET_PROFILE_SUCCESS,
  LOGOUT_SUCCESS,
  GET_OTP_SUCCESS,
} from '../../types';

export interface AuthStore {
  uid?: string;
  token?: string;
  isLoggedIn?: boolean;
  email?: string;
}
const initialState = (): AuthStore => ({
  isLoggedIn: false,
});
export const authReducer = (
  prevState: AuthStore = initialState(),
  { type, payload }: AuthActions,
): AuthStore => {
  switch (type) {
    case LOGIN_SUCCESS:
      prevState.isLoggedIn = true;
      prevState.token = payload.token;
      return { ...prevState };
    case SIGNUP_SUCCESS:
      prevState.isLoggedIn = true;
      prevState.token = payload.user_details.token;
      return { ...prevState };
    case GET_PROFILE_SUCCESS:
      prevState.isLoggedIn = true;
      return { ...prevState };
    case SAVE_TOKEN_SUCCESS:
      prevState.token = payload.token;
      return { ...prevState };
    case GET_OTP_SUCCESS:
      prevState.email = payload.email;
      return { ...prevState };
    case LOGOUT_SUCCESS:
      return initialState();
    default:
      return prevState;
  }
};
