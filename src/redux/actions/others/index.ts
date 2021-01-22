import {
  GetCurrenciesRequestPayload,
  GetCurrenciesRequestProp,
  GetCurrenciesSuccessPayload,
  GetCurrenciesSuccessProp,
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_FAILURE,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_LOADING_INDICATOR,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  AjaxErrorProp,
  UploadUtilityBillRequestPayload,
  UploadUtilityBillRequestProp,
  UPLOAD_UTILITY_BILL_REQUEST,
  UploadUtilityBillSuccessPayload,
  UploadUtilityBillSuccessProp,
  UPLOAD_UTILITY_BILL_SUCCESS,
  UPLOAD_UTILITY_BILL_FAILURE,
  UPLOAD_UTILITY_BILL_LOADING_INDICATOR,
  TradeRequestPayload,
  TradeRequestProp,
  TRADE_REQUEST,
  TradeSuccessPayload,
  TradeSuccessProp,
  TRADE_SUCCESS,
  TRADE_FAILURE,
  TRADE_LOADING_INDICATOR,
  GetFAQRequestProp,
  GET_FAQ_REQUEST,
  GetFAQSuccessPayload,
  GetFAQSuccessProp,
  GET_FAQ_SUCCESS,
  GET_FAQ_FAILURE,
  GET_FAQ_LOADING_INDICATOR,
  VerifyBankAccountRequestPayload,
  VerifyBankAccountRequestProp,
  VerifyBankAccountSuccessPayload,
  VerifyBankAccountSuccessProp,
  VERIFY_BANK_ACCOUNT_FAILURE,
  VERIFY_BANK_ACCOUNT_LOADING_INDICATOR,
  VERIFY_BANK_ACCOUNT_REQUEST,
  VERIFY_BANK_ACCOUNT_SUCCESS,
} from '../../types';

// Get Currencies actions
export const getCurrenciesRequest = (
  prop: GetCurrenciesRequestPayload,
): GetCurrenciesRequestProp => {
  return {
    type: GET_CURRENCIES_REQUEST,
    payload: prop,
  };
};

export const getCurrenciesSuccess = (
  prop: GetCurrenciesSuccessPayload,
): GetCurrenciesSuccessProp => {
  return {
    type: GET_CURRENCIES_SUCCESS,
    payload: prop,
  };
};

export const getCurrenciesFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_CURRENCIES_FAILURE,
    payload: prop,
  };
};

export const getCurrenciesLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: GET_CURRENCIES_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const uploadUtilityBillRequest = (
  prop: UploadUtilityBillRequestPayload,
): UploadUtilityBillRequestProp => {
  return {
    type: UPLOAD_UTILITY_BILL_REQUEST,
    payload: prop,
  };
};

export const uploadUtilityBillSuccess = (
  prop: UploadUtilityBillSuccessPayload,
): UploadUtilityBillSuccessProp => {
  return {
    type: UPLOAD_UTILITY_BILL_SUCCESS,
    payload: prop,
  };
};

export const uploadUtilityBillFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: UPLOAD_UTILITY_BILL_FAILURE,
    payload: prop,
  };
};

export const uploadUtilityBillLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: UPLOAD_UTILITY_BILL_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const tradeRequest = (prop: TradeRequestPayload): TradeRequestProp => {
  return {
    type: TRADE_REQUEST,
    payload: prop,
  };
};

export const tradeSuccess = (prop: TradeSuccessPayload): TradeSuccessProp => {
  return {
    type: TRADE_SUCCESS,
    payload: prop,
  };
};

export const tradeFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: TRADE_FAILURE,
    payload: prop,
  };
};

export const tradeLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: TRADE_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const getFAQRequest = (): GetFAQRequestProp => {
  return {
    type: GET_FAQ_REQUEST,
  };
};

export const getFAQSuccess = (prop: GetFAQSuccessPayload): GetFAQSuccessProp => {
  return {
    type: GET_FAQ_SUCCESS,
    payload: prop,
  };
};

export const getFAQFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_FAQ_FAILURE,
    payload: prop,
  };
};

export const getFAQLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: GET_FAQ_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const verifyBankAccountRequest = (
  prop: VerifyBankAccountRequestPayload,
): VerifyBankAccountRequestProp => {
  return {
    type: VERIFY_BANK_ACCOUNT_REQUEST,
    payload: prop,
  };
};

export const verifyBankAccountSuccess = (
  prop: VerifyBankAccountSuccessPayload,
): VerifyBankAccountSuccessProp => {
  return {
    type: VERIFY_BANK_ACCOUNT_SUCCESS,
    payload: prop,
  };
};

export const verifyBankAccountFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: VERIFY_BANK_ACCOUNT_FAILURE,
    payload: prop,
  };
};

export const verifyBankAccountLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: VERIFY_BANK_ACCOUNT_LOADING_INDICATOR,
    payload: { loading },
  };
};
