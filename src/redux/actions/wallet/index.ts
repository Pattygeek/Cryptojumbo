import {
  GET_CRYPTO_WALLETS_SUCCESS,
  GET_CRYPTO_WALLETS_REQUEST,
  GET_CRYPTO_WALLETS_FAILURE,
  GET_CRYPTO_WALLETS_LOADING_INDICATOR,
  DEPOSIT_NAIRA_FAILURE,
  DEPOSIT_NAIRA_REQUEST,
  DEPOSIT_NAIRA_LOADING_INDICATOR,
  DEPOSIT_NAIRA_SUCCESS,
  GetCryptoWalletRequestPayload,
  GetCryptoWalletRequestProp,
  GetCryptoWalletSuccessPayload,
  GetCryptoWalletSuccessProp,
  DepositNairaRequestPayload,
  DepositNairaRequestProp,
  DepositNairaSuccessPayload,
  DepositNairaSuccessProp,
  LoadingIndicatorProp,
  AjaxErrorPayload,
  AjaxErrorProp,
  SendETHRequestPayload,
  SendETHRequestProp,
  SEND_ETH_REQUEST,
  SendETHSuccessPayload,
  SendETHSuccessProp,
  SEND_ETH_SUCCESS,
  SEND_ETH_FAILURE,
  SEND_ETH_LOADING_INDICATOR,
  SendBTCRequestPayload,
  SendBTCRequestProp,
  SEND_BTC_REQUEST,
  SendBTCSuccessPayload,
  SendBTCSuccessProp,
  SEND_BTC_SUCCESS,
  SEND_BTC_FAILURE,
  SEND_BTC_LOADING_INDICATOR,
  SendUSDTRequestPayload,
  SendUSDTRequestProp,
  SEND_USDT_REQUEST,
  SendUSDTSuccessPayload,
  SendUSDTSuccessProp,
  SEND_USDT_SUCCESS,
  SEND_USDT_FAILURE,
  SEND_USDT_LOADING_INDICATOR,
  WithdrawNairaRequestPayload,
  WithdrawNairaRequestProp,
  WITHDRAW_NAIRA_REQUEST,
  WithdrawNairaSuccessPayload,
  WithdrawNairaSuccessProp,
  WITHDRAW_NAIRA_SUCCESS,
  WITHDRAW_NAIRA_FAILURE,
  WITHDRAW_NAIRA_LOADING_INDICATOR,
} from '../../types';

//wallet actions
export const getCryptoWalletRequest = (
  prop: GetCryptoWalletRequestPayload,
): GetCryptoWalletRequestProp => {
  return {
    type: GET_CRYPTO_WALLETS_REQUEST,
    payload: prop,
  };
};

export const getCryptoWalletSuccess = (
  prop: GetCryptoWalletSuccessPayload,
): GetCryptoWalletSuccessProp => {
  return {
    type: GET_CRYPTO_WALLETS_SUCCESS,
    payload: prop,
  };
};

export const getCryptoWalletFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: GET_CRYPTO_WALLETS_FAILURE,
    payload: prop,
  };
};

export const getCryptoWalletLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: GET_CRYPTO_WALLETS_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const depositNairaRequest = (
  prop: DepositNairaRequestPayload,
): DepositNairaRequestProp => {
  return {
    type: DEPOSIT_NAIRA_REQUEST,
    payload: prop,
  };
};

export const depositNairaSuccess = (
  prop: DepositNairaSuccessPayload,
): DepositNairaSuccessProp => {
  return {
    type: DEPOSIT_NAIRA_SUCCESS,
    payload: prop,
  };
};

export const depositNairaFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: DEPOSIT_NAIRA_FAILURE,
    payload: prop,
  };
};

export const depositNairaLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: DEPOSIT_NAIRA_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const sendETHRequest = (prop: SendETHRequestPayload): SendETHRequestProp => {
  return {
    type: SEND_ETH_REQUEST,
    payload: prop,
  };
};

export const sendETHSuccess = (prop: SendETHSuccessPayload): SendETHSuccessProp => {
  return {
    type: SEND_ETH_SUCCESS,
    payload: prop,
  };
};

export const sendETHFailure = (prop: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SEND_ETH_FAILURE,
    payload: prop,
  };
};

export const sendETHLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: SEND_ETH_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const sendBTCRequest = (prop: SendBTCRequestPayload): SendBTCRequestProp => {
  return {
    type: SEND_BTC_REQUEST,
    payload: prop,
  };
};

export const sendBTCSuccess = (prop: SendBTCSuccessPayload): SendBTCSuccessProp => {
  return {
    type: SEND_BTC_SUCCESS,
    payload: prop,
  };
};

export const sendBTCFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SEND_BTC_FAILURE,
    payload: prop,
  };
};

export const sendBTCLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: SEND_BTC_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const sendUSDTRequest = (
  prop: SendUSDTRequestPayload,
): SendUSDTRequestProp => {
  return {
    type: SEND_USDT_REQUEST,
    payload: prop,
  };
};

export const sendUSDTSuccess = (
  prop: SendUSDTSuccessPayload,
): SendUSDTSuccessProp => {
  return {
    type: SEND_USDT_SUCCESS,
    payload: prop,
  };
};

export const sendUSDTFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: SEND_USDT_FAILURE,
    payload: prop,
  };
};

export const sendUSDTLoadingIndicator = (loading: boolean): LoadingIndicatorProp => {
  return {
    type: SEND_USDT_LOADING_INDICATOR,
    payload: { loading },
  };
};

export const withdrawNairaRequest = (
  prop: WithdrawNairaRequestPayload,
): WithdrawNairaRequestProp => {
  return {
    type: WITHDRAW_NAIRA_REQUEST,
    payload: prop,
  };
};

export const withdrawNairaSuccess = (
  prop: WithdrawNairaSuccessPayload,
): WithdrawNairaSuccessProp => {
  return {
    type: WITHDRAW_NAIRA_SUCCESS,
    payload: prop,
  };
};

export const withdrawNairaFailure = (prop?: AjaxErrorPayload): AjaxErrorProp => {
  return {
    type: WITHDRAW_NAIRA_FAILURE,
    payload: prop,
  };
};

export const withdrawNairaLoadingIndicator = (
  loading: boolean,
): LoadingIndicatorProp => {
  return {
    type: WITHDRAW_NAIRA_LOADING_INDICATOR,
    payload: { loading },
  };
};
