import {
  ProfileActions,
  ProfileProps,
  UserProps,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from '../../types';

export interface ProfileStore extends Partial<ProfileProps> {
  user?: UserProps & Partial<ProfileProps>;
}
const initialState = (): ProfileStore => ({});
export const profileReducer = (
  prevState: ProfileStore = initialState(),
  { type, payload }: ProfileActions,
): ProfileStore => {
  switch (type) {
    case SIGNUP_SUCCESS:
      prevState.user = payload.user_details;
      return { ...prevState };
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      const { user, ...rest } = payload.data;
      prevState.user = { ...rest, ...user };
      return { ...prevState };
    case LOGOUT_SUCCESS:
      return initialState();
    default:
      return prevState;
  }
};
