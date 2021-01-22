import {
  LOGIN_LOADING_INDICATOR,
  SIGNUP_LOADING_INDICATOR,
  RESET_PASSWORD_LOADING_INDICATOR,
  LoadingIndicatorProp,
  CONFIRM_RESET_PASSWORD_LOADING_INDICATOR,
  FORGOT_PASSWORD_LOADING_INDICATOR,
  CHANGE_PASSWORD_LOADING_INDICATOR,
  VERIFY_OTP_LOADING_INDICATOR,
  GET_OTP_LOADING_INDICATOR,
  LOGOUT_LOADING_INDICATOR,
  GET_PROFILE_LOADING_INDICATOR,
  GET_ALL_TRANSACTIONS_LOADING_INDICATOR,
  GET_ONE_TRANSACTION_LOADING_INDICATOR,
  UPDATE_TRANSACTION_LOADING_INDICATOR,
  UPDATE_PROFILE_LOADING_INDICATOR,
  GET_CURRENCIES_LOADING_INDICATOR,
  UPLOAD_UTILITY_BILL_LOADING_INDICATOR,
  SWAP_CRYPTO_LOADING_INDICATOR,
  BUY_CRYPTO_LOADING_INDICATOR,
  SELL_CRYPTO_LOADING_INDICATOR,
  DEPOSIT_NAIRA_LOADING_INDICATOR,
  SEND_BTC_LOADING_INDICATOR,
  GET_CRYPTO_WALLETS_LOADING_INDICATOR,
  SEND_ETH_LOADING_INDICATOR,
  WITHDRAW_NAIRA_LOADING_INDICATOR,
  SEND_USDT_LOADING_INDICATOR,
  GET_FAQ_LOADING_INDICATOR,
  ACTIVATE_ACCOUNT_LOADING_INDICATOR,
  VERIFY_BANK_ACCOUNT_LOADING_INDICATOR,
} from '../../types';

export interface LoadingIndicatorStore {
  [key: string]: boolean;
}
const initialState: LoadingIndicatorStore = {};

export const loadingIndicatorsReducer = (
  prevState: LoadingIndicatorStore = initialState,
  { type, payload }: LoadingIndicatorProp,
): LoadingIndicatorStore => {
  switch (type) {
    // Auth Loading Indicators
    case LOGIN_LOADING_INDICATOR:
      prevState.login = payload.loading;
      return { ...prevState };
    case SIGNUP_LOADING_INDICATOR:
      prevState.signUp = payload.loading;
      return { ...prevState };
    case RESET_PASSWORD_LOADING_INDICATOR:
      prevState.resetPassword = payload.loading;
      return { ...prevState };
    case CONFIRM_RESET_PASSWORD_LOADING_INDICATOR:
      prevState.confirmResetPassword = payload.loading;
      return { ...prevState };
    case FORGOT_PASSWORD_LOADING_INDICATOR:
      prevState.forgotPassword = payload.loading;
      return { ...prevState };
    case CHANGE_PASSWORD_LOADING_INDICATOR:
      prevState.changePassword = payload.loading;
      return { ...prevState };
    case VERIFY_OTP_LOADING_INDICATOR:
      prevState.verifyOtp = payload.loading;
      return { ...prevState };
    case GET_OTP_LOADING_INDICATOR:
      prevState.getOtp = payload.loading;
      return { ...prevState };
    case ACTIVATE_ACCOUNT_LOADING_INDICATOR:
      prevState.activateAccount = payload.loading;
      return { ...prevState };
    case LOGOUT_LOADING_INDICATOR:
      prevState.logout = payload.loading;
      return { ...prevState };

    // Profile Loading Indicators
    case GET_PROFILE_LOADING_INDICATOR:
      prevState.getProfile = payload.loading;
      return { ...prevState };
    case UPDATE_PROFILE_LOADING_INDICATOR:
      prevState.updateProfile = payload.loading;
      return { ...prevState };
    case GET_ALL_TRANSACTIONS_LOADING_INDICATOR:
      prevState.getAllTransactions = payload.loading;
      return { ...prevState };
    case GET_ONE_TRANSACTION_LOADING_INDICATOR:
      prevState.singleTransaction = payload.loading;
      return { ...prevState };
    case UPDATE_TRANSACTION_LOADING_INDICATOR:
      prevState.updateTransaction = payload.loading;
      return { ...prevState };

    // Trade Loading Indicators
    case SWAP_CRYPTO_LOADING_INDICATOR:
      prevState.swapCrypto = payload.loading;
      return { ...prevState };
    case BUY_CRYPTO_LOADING_INDICATOR:
      prevState.buyCrypto = payload.loading;
      return { ...prevState };
    case SELL_CRYPTO_LOADING_INDICATOR:
      prevState.sellCrypto = payload.loading;
      return { ...prevState };

    // Wallet Loading Indicators
    case GET_CRYPTO_WALLETS_LOADING_INDICATOR:
      prevState.getCryptoWallets = payload.loading;
      return { ...prevState };
    case DEPOSIT_NAIRA_LOADING_INDICATOR:
      prevState.depositNaira = payload.loading;
      return { ...prevState };
    case SEND_BTC_LOADING_INDICATOR:
      prevState.sendBTC = payload.loading;
      return { ...prevState };
    case SEND_ETH_LOADING_INDICATOR:
      prevState.sendETH = payload.loading;
      return { ...prevState };
    case SEND_USDT_LOADING_INDICATOR:
      prevState.sendUSDT = payload.loading;
      return { ...prevState };
    case WITHDRAW_NAIRA_LOADING_INDICATOR:
      prevState.withdrawNaira = payload.loading;
      return { ...prevState };

    //Other Loading Indicators
    case GET_CURRENCIES_LOADING_INDICATOR:
      prevState.getCurrencies = payload.loading;
      return { ...prevState };
    case UPLOAD_UTILITY_BILL_LOADING_INDICATOR:
      prevState.uploadUtilityBill = payload.loading;
      return { ...prevState };
    case GET_FAQ_LOADING_INDICATOR:
      prevState.getFAQ = payload.loading;
      return { ...prevState };
    case VERIFY_BANK_ACCOUNT_LOADING_INDICATOR:
      prevState.verifyBankAccount = payload.loading;
      return { ...prevState };
    default:
      return prevState;
  }
};
