import {
  GetProfileRequestPayload,
  GetProfileRequestProp,
  UpdateProfileRequestProp,
  UpdateProfileRequestPayload,
  GET_PROFILE_REQUEST,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_LOADING_INDICATOR,
  UPDATE_PROFILE_LOADING_INDICATOR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  AjaxErrorProp,
  UpdateProfileSuccessPayload,
  UpdateProfileSuccessProp,
  GetProfileSuccessPayload,
  GetProfileSuccessProp,
  UpdateProfileSettingsRequestPayload,
  UpdateProfileSettingsRequestProp,
  UpdateProfileSettingsSuccessPayload,
  UpdateProfileSettingsSuccessProp,
  UPDATE_PROFILE_SETTINGS_FAILURE,
  UPDATE_PROFILE_SETTINGS_LOADING_INDICATOR,
  UPDATE_PROFILE_SETTINGS_REQUEST,
  UPDATE_PROFILE_SETTINGS_SUCCESS,
} from '../../types';

// Get Profile actions
export const getProfileRequest = (
  prop: GetProfileRequestPayload,
): GetProfileRequestProp => {
  return {
    type: GET_PROFILE_REQUEST,
    payload: prop,
  };
};

export const getProfileSuccess = (
  prop: GetProfileSuccessPayload,
): GetProfileSuccessProp => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: prop,
  };
};

export const getProfileFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_PROFILE_FAILURE,
    payload: prop,
  };
};

export const getProfileLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: GET_PROFILE_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const updateProfileRequest = (
  prop: UpdateProfileRequestPayload,
): UpdateProfileRequestProp => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: prop,
  };
};

export const updateProfileSuccess = (
  prop: UpdateProfileSuccessPayload,
): UpdateProfileSuccessProp => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: prop,
  };
};

export const updateProfileFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: UPDATE_PROFILE_FAILURE,
    payload: prop,
  };
};

export const updateProfileLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: UPDATE_PROFILE_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const updateProfileSettingsRequest = (
  prop: UpdateProfileSettingsRequestPayload,
): UpdateProfileSettingsRequestProp => {
  return {
    type: UPDATE_PROFILE_SETTINGS_REQUEST,
    payload: prop,
  };
};

export const updateProfileSettingsSuccess = (
  prop: UpdateProfileSettingsSuccessPayload,
): UpdateProfileSettingsSuccessProp => {
  return {
    type: UPDATE_PROFILE_SETTINGS_SUCCESS,
    payload: prop,
  };
};

export const updateProfileSettingsFailure = (
  prop?: AjaxErrorPayload,
): AjaxErrorProp => {
  return {
    type: UPDATE_PROFILE_SETTINGS_FAILURE,
    payload: prop,
  };
};

export const updateProfileSettingsLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: UPDATE_PROFILE_SETTINGS_LOADING_INDICATOR,
    payload: { loading },
  };
};
