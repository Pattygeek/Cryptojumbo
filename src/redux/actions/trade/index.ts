import {
  SellCryptoRequestPayload,
  SellCryptoRequestProp,
  SwapCryptoRequestProp,
  SwapCryptoRequestPayload,
  SELL_CRYPTO_REQUEST,
  SELL_CRYPTO_FAILURE,
  SELL_CRYPTO_SUCCESS,
  SELL_CRYPTO_LOADING_INDICATOR,
  SWAP_CRYPTO_LOADING_INDICATOR,
  SWAP_CRYPTO_REQUEST,
  SWAP_CRYPTO_FAILURE,
  SWAP_CRYPTO_SUCCESS,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  AjaxErrorProp,
  SwapCryptoSuccessPayload,
  SwapCryptoSuccessProp,
  SellCryptoSuccessPayload,
  SellCryptoSuccessProp,
  BuyCryptoRequestPayload,
  BuyCryptoRequestProp,
  BUY_CRYPTO_REQUEST,
  BuyCryptoSuccessPayload,
  BuyCryptoSuccessProp,
  BUY_CRYPTO_SUCCESS,
  BUY_CRYPTO_FAILURE,
  BUY_CRYPTO_LOADING_INDICATOR,
} from '../../types';

// Get Profile actions
export const buyCryptoRequest = (
  prop: BuyCryptoRequestPayload,
): BuyCryptoRequestProp => {
  return {
    type: BUY_CRYPTO_REQUEST,
    payload: prop,
  };
};

export const buyCryptoSuccess = (
  prop: BuyCryptoSuccessPayload,
): BuyCryptoSuccessProp => {
  return {
    type: BUY_CRYPTO_SUCCESS,
    payload: prop,
  };
};

export const buyCryptoFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: BUY_CRYPTO_FAILURE,
    payload: prop,
  };
};

export const buyCryptoLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: BUY_CRYPTO_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const sellCryptoRequest = (
  prop: SellCryptoRequestPayload,
): SellCryptoRequestProp => {
  return {
    type: SELL_CRYPTO_REQUEST,
    payload: prop,
  };
};

export const sellCryptoSuccess = (
  prop: SellCryptoSuccessPayload,
): SellCryptoSuccessProp => {
  return {
    type: SELL_CRYPTO_SUCCESS,
    payload: prop,
  };
};

export const sellCryptoFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SELL_CRYPTO_FAILURE,
    payload: prop,
  };
};

export const sellCryptoLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: SELL_CRYPTO_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const swapCryptoRequest = (
  prop: SwapCryptoRequestPayload,
): SwapCryptoRequestProp => {
  return {
    type: SWAP_CRYPTO_REQUEST,
    payload: prop,
  };
};

export const swapCryptoSuccess = (
  prop: SwapCryptoSuccessPayload,
): SwapCryptoSuccessProp => {
  return {
    type: SWAP_CRYPTO_SUCCESS,
    payload: prop,
  };
};

export const swapCryptoFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SWAP_CRYPTO_FAILURE,
    payload: prop,
  };
};

export const swapCryptoLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: SWAP_CRYPTO_LOADING_INDICATOR,
    payload: { loading },
  };
};
