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
  IdVerificationRequestPayload,
  IdVerificationRequestProp,
  ID_VERIFICATION_REQUEST,
  IdVerificationSuccessPayload,
  IdVerificationSuccessProp,
  ID_VERIFICATION_SUCCESS,
  ID_VERIFICATION_FAILURE,
  ID_VERIFICATION_LOADING_INDICATOR,
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
  GetRatesRequestProp,
  GetRatesSuccessProp,
  GET_RATES_FAILURE,
  GET_RATES_LOADING_INDICATOR,
  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GetRatesSuccessPayload,
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

export const idVerificationRequest = (
  prop: IdVerificationRequestPayload,
): IdVerificationRequestProp => {
  return {
    type: ID_VERIFICATION_REQUEST,
    payload: prop,
  };
};

export const idVerificationSuccess = (
  prop: IdVerificationSuccessPayload,
): IdVerificationSuccessProp => {
  return {
    type: ID_VERIFICATION_SUCCESS,
    payload: prop,
  };
};

export const idVerificationFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: ID_VERIFICATION_FAILURE,
    payload: prop,
  };
};

export const idVerificationLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: ID_VERIFICATION_LOADING_INDICATOR,
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

export const getRatesRequest = (): GetRatesRequestProp => {
  return {
    type: GET_RATES_REQUEST,
  };
};

export const getRatesSuccess = (
  prop: GetRatesSuccessPayload,
): GetRatesSuccessProp => {
  return {
    type: GET_RATES_SUCCESS,
    payload: prop,
  };
};

export const getRatesFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_RATES_FAILURE,
    payload: prop,
  };
};

export const getRatesLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: GET_RATES_LOADING_INDICATOR,
    payload: { loading },
  };
};
