import {
  GET_ALL_TRANSACTIONS_REQUEST,
  GET_ONE_TRANSACTION_REQUEST,
  GET_ONE_TRANSACTION_FAILURE,
  GET_ONE_TRANSACTION_SUCCESS,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  GET_ALL_TRANSACTIONS_LOADING_INDICATOR,
  GET_ONE_TRANSACTION_LOADING_INDICATOR,
  UPDATE_TRANSACTION_LOADING_INDICATOR,
  AllTransactionRequestPayload,
  AllTransactionSuccessPayload,
  AllTransactionRequestProp,
  AllTransactionSuccessProp,
  UpdateTransactionSuccessPayload,
  UpdateTransactionRequestPayload,
  UpdateTransactionRequestProp,
  UpdateTransactionSuccessProp,
  SingleTransactionRequestPayload,
  SingleTransactionSuccessPayload,
  SingleTransactionRequestProp,
  SingleTransactionSuccessProp,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  AjaxErrorProp,
} from '../../types';

//transaction actions
export const allTransactionRequest = (
  prop: AllTransactionRequestPayload,
): AllTransactionRequestProp => {
  return {
    type: GET_ALL_TRANSACTIONS_REQUEST,
    payload: prop,
  };
};

export const allTransactionSuccess = (
  prop: AllTransactionSuccessPayload,
): AllTransactionSuccessProp => {
  return {
    type: GET_ALL_TRANSACTIONS_SUCCESS,
    payload: prop,
  };
};

export const allTransactionFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_ALL_TRANSACTIONS_FAILURE,
    payload: prop,
  };
};

export const allTransactionLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: GET_ALL_TRANSACTIONS_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const singleTransactionRequest = (
  prop: SingleTransactionRequestPayload,
): SingleTransactionRequestProp => {
  return {
    type: GET_ONE_TRANSACTION_REQUEST,
    payload: prop,
  };
};

export const singleTransactionSuccess = (
  prop: SingleTransactionSuccessPayload,
): SingleTransactionSuccessProp => {
  return {
    type: GET_ONE_TRANSACTION_SUCCESS,
    payload: prop,
  };
};

export const singleTransactionFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_ONE_TRANSACTION_FAILURE,
    payload: prop,
  };
};

export const singleTransactionLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: GET_ONE_TRANSACTION_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const updateTransactionRequest = (
  prop: UpdateTransactionRequestPayload,
): UpdateTransactionRequestProp => {
  return {
    type: UPDATE_TRANSACTION_REQUEST,
    payload: prop,
  };
};

export const updateTransactionSuccess = (
  prop: UpdateTransactionSuccessPayload,
): UpdateTransactionSuccessProp => {
  return {
    type: UPDATE_TRANSACTION_SUCCESS,
    payload: prop,
  };
};

export const updateTransactionFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: UPDATE_TRANSACTION_FAILURE,
    payload: prop,
  };
};

export const updateTransactionLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: UPDATE_TRANSACTION_LOADING_INDICATOR,
    payload: { loading },
  };
};
