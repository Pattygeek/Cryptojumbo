import {
  LOGIN_FAILURE,
  AjaxErrorProp,
  AjaxErrorPayload,
  AjaxSuccessPayload,
  AjaxSuccessProp,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  LOGIN_SUCCESS,
  CONFIRM_RESET_PASSWORD_SUCCESS,
  CONFIRM_RESET_PASSWORD_FAILURE,
  GET_OTP_SUCCESS,
  GET_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  GET_ONE_TRANSACTION_SUCCESS,
  GET_ONE_TRANSACTION_FAILURE,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  GET_CRYPTO_WALLETS_SUCCESS,
  GET_CRYPTO_WALLETS_FAILURE,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILURE,
  ID_VERIFICATION_SUCCESS,
  ID_VERIFICATION_FAILURE,
  SWAP_CRYPTO_SUCCESS,
  SWAP_CRYPTO_FAILURE,
  BUY_CRYPTO_SUCCESS,
  BUY_CRYPTO_FAILURE,
  SELL_CRYPTO_SUCCESS,
  SELL_CRYPTO_FAILURE,
  DEPOSIT_NAIRA_SUCCESS,
  DEPOSIT_NAIRA_FAILURE,
  SEND_BTC_SUCCESS,
  SEND_BTC_FAILURE,
  SEND_USDT_SUCCESS,
  SEND_USDT_FAILURE,
  WITHDRAW_NAIRA_SUCCESS,
  WITHDRAW_NAIRA_FAILURE,
  SEND_ETH_SUCCESS,
  SEND_ETH_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  GET_FAQ_SUCCESS,
  GET_FAQ_FAILURE,
  ACTIVATE_ACCOUNT_SUCCESS,
  ACTIVATE_ACCOUNT_FAILURE,
  VERIFY_BANK_ACCOUNT_FAILURE,
  VERIFY_BANK_ACCOUNT_SUCCESS,
  GET_RATES_SUCCESS,
  GET_RATES_FAILURE,
  UPDATE_PROFILE_SETTINGS_FAILURE,
  UPDATE_PROFILE_SETTINGS_SUCCESS,
} from '../../types';

export interface AjaxStatusesStore {
  errors: {
    [key: string]: AjaxErrorPayload;
  };
  success: {
    [key: string]: AjaxSuccessPayload;
  };
}
const initialState = (): AjaxStatusesStore => ({
  errors: {},
  success: {},
});
export const ajaxStatuses = (
  prevState: AjaxStatusesStore = initialState(),
  { type, payload }: AjaxErrorProp & AjaxSuccessProp,
): AjaxStatusesStore => {
  switch (type) {
    // Auth Statuses
    case LOGIN_SUCCESS:
      prevState.success.login = payload;
      return { ...prevState };
    case LOGIN_FAILURE:
      prevState.errors.login = payload;
      return { ...prevState };
    case SIGNUP_SUCCESS:
      prevState.success.signUp = payload;
      return { ...prevState };
    case SIGNUP_FAILURE:
      prevState.errors.signUp = payload;
      return { ...prevState };
    case FORGOT_PASSWORD_SUCCESS:
      prevState.success.forgotPassword = payload;
      return { ...prevState };
    case FORGOT_PASSWORD_FAILURE:
      prevState.errors.forgotPassword = payload;
      return { ...prevState };
    case RESET_PASSWORD_SUCCESS:
      prevState.success.resetPassword = payload;
      return { ...prevState };
    case RESET_PASSWORD_FAILURE:
      prevState.errors.resetPassword = payload;
      return { ...prevState };
    case CONFIRM_RESET_PASSWORD_SUCCESS:
      prevState.success.confirmResetPassword = payload;
      return { ...prevState };
    case CONFIRM_RESET_PASSWORD_FAILURE:
      prevState.errors.confirmResetPassword = payload;
      return { ...prevState };
    case CHANGE_PASSWORD_SUCCESS:
      prevState.success.changePassword = payload;
      return { ...prevState };
    case CHANGE_PASSWORD_FAILURE:
      prevState.errors.changePassword = payload;
      return { ...prevState };
    case GET_OTP_SUCCESS:
      prevState.success.getOtp = payload;
      return { ...prevState };
    case GET_OTP_FAILURE:
      prevState.errors.getOtp = payload;
      return { ...prevState };
    case VERIFY_OTP_SUCCESS:
      prevState.success.verifyOtp = payload;
      return { ...prevState };
    case VERIFY_OTP_FAILURE:
      prevState.errors.verifyOtp = payload;
      return { ...prevState };
    case ACTIVATE_ACCOUNT_SUCCESS:
      prevState.success.activateAccount = payload;
      return { ...prevState };
    case ACTIVATE_ACCOUNT_FAILURE:
      prevState.errors.activateAccount = payload;
      return { ...prevState };

    case LOGOUT_SUCCESS:
      return initialState();
    case LOGOUT_FAILURE:
      prevState.errors.logout = payload;
      return { ...prevState };

    // Profile Statuses
    case GET_PROFILE_SUCCESS:
      prevState.success.getProfile = {
        status: payload.status,
        message: payload.message,
      };
      return { ...prevState };
    case GET_PROFILE_FAILURE:
      prevState.errors.getProfile = payload;
      return { ...prevState };

    case UPDATE_PROFILE_SUCCESS:
      prevState.success.updateProfile = payload;
      return { ...prevState };
    case UPDATE_PROFILE_FAILURE:
      prevState.errors.updateProfile = payload;
      return { ...prevState };

    case UPDATE_PROFILE_SETTINGS_SUCCESS:
      prevState.success.updateProfileSettings = payload;
      return { ...prevState };
    case UPDATE_PROFILE_SETTINGS_FAILURE:
      prevState.errors.updateProfileSettings = payload;
      return { ...prevState };

    // Transaction Statuses
    case GET_ALL_TRANSACTIONS_SUCCESS:
      prevState.success.getAllTransactions = payload;
      return { ...prevState };
    case GET_ALL_TRANSACTIONS_FAILURE:
      prevState.errors.getAllTransactions = payload;
      return { ...prevState };
    case GET_ONE_TRANSACTION_SUCCESS:
      prevState.success.singleTransaction = payload;
      return { ...prevState };
    case GET_ONE_TRANSACTION_FAILURE:
      prevState.errors.singleTransaction = payload;
      return { ...prevState };
    case UPDATE_TRANSACTION_SUCCESS:
      prevState.success.updateTransaction = payload;
      return { ...prevState };
    case UPDATE_TRANSACTION_FAILURE:
      prevState.errors.updateTransaction = payload;
      return { ...prevState };

    // Trade Statuses
    case SWAP_CRYPTO_SUCCESS:
      prevState.success.swapCrypto = payload;
      return { ...prevState };
    case SWAP_CRYPTO_FAILURE:
      prevState.errors.swapCrypto = payload;
      return { ...prevState };
    case BUY_CRYPTO_SUCCESS:
      prevState.success.buyCrypto = payload;
      return { ...prevState };
    case BUY_CRYPTO_FAILURE:
      prevState.errors.buyCrypto = payload;
      return { ...prevState };
    case SELL_CRYPTO_SUCCESS:
      prevState.success.sellCrypto = payload;
      return { ...prevState };
    case SELL_CRYPTO_FAILURE:
      prevState.errors.sellCrypto = payload;
      return { ...prevState };

    // Wallet Statuses
    case GET_CRYPTO_WALLETS_SUCCESS:
      prevState.success.getCryptoWallets = payload;
      return { ...prevState };
    case GET_CRYPTO_WALLETS_FAILURE:
      prevState.errors.getCryptoWallets = payload;
      return { ...prevState };
    case DEPOSIT_NAIRA_SUCCESS:
      prevState.success.depositNaira = payload;
      return { ...prevState };
    case DEPOSIT_NAIRA_FAILURE:
      prevState.errors.depositNaira = payload;
      return { ...prevState };
    case SEND_BTC_SUCCESS:
      prevState.success.sendBTC = payload;
      return { ...prevState };
    case SEND_BTC_FAILURE:
      prevState.errors.sendBTC = payload;
      return { ...prevState };
    case SEND_USDT_SUCCESS:
      prevState.success.sendUSDT = payload;
      return { ...prevState };
    case SEND_USDT_FAILURE:
      prevState.errors.sendUSDT = payload;
      return { ...prevState };
    case WITHDRAW_NAIRA_SUCCESS:
      prevState.success.withdrawNaira = payload;
      return { ...prevState };
    case WITHDRAW_NAIRA_FAILURE:
      prevState.errors.withdrawNaira = payload;
      return { ...prevState };
    case SEND_ETH_SUCCESS:
      prevState.success.sendETH = payload;
      return { ...prevState };
    case SEND_ETH_FAILURE:
      prevState.errors.sendETH = payload;
      return { ...prevState };

    // Other Statuses
    case GET_CURRENCIES_SUCCESS:
      prevState.success.getCurrencies = payload;
      return { ...prevState };
    case GET_CURRENCIES_FAILURE:
      prevState.errors.getCurrencies = payload;
      return { ...prevState };
    case ID_VERIFICATION_SUCCESS:
      prevState.success.idVerification = payload;
      return { ...prevState };
    case ID_VERIFICATION_FAILURE:
      prevState.errors.idVerification = payload;
      return { ...prevState };
    case GET_FAQ_SUCCESS:
      prevState.success.getFAQ = payload;
      return { ...prevState };
    case GET_FAQ_FAILURE:
      prevState.errors.getFAQ = payload;
      return { ...prevState };
    case VERIFY_BANK_ACCOUNT_SUCCESS:
      prevState.success.verifyBankAccount = payload;
      return { ...prevState };
    case VERIFY_BANK_ACCOUNT_FAILURE:
      prevState.errors.verifyBankAccount = payload;
      return { ...prevState };
    case GET_RATES_SUCCESS:
      prevState.success.getRates = payload;
      return { ...prevState };
    case GET_RATES_FAILURE:
      prevState.errors.getRates = payload;
      return { ...prevState };
    default:
      return prevState;
  }
};
