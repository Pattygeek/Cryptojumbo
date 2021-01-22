import {
  WalletActions,
  GET_CRYPTO_WALLETS_SUCCESS,
  CryptoWalletProps,
  CurrencySymbols,
  DEPOSIT_NAIRA_SUCCESS,
} from '../../types';

export interface WalletStore {
  cryptos: {
    [currency: string]: CryptoWalletProps;
  };
  depositLink?: string;
}

const initialState: WalletStore = {
  cryptos: {},
};

export const walletReducer = (
  prevState: WalletStore = initialState,
  { type, payload }: WalletActions,
): WalletStore => {
  switch (type) {
    case GET_CRYPTO_WALLETS_SUCCESS:
      const cryptos: {
        [currency: string]: CryptoWalletProps;
      } = {};
      payload.cryptoWallets.forEach((crypto) => {
        cryptos[crypto.currency] = crypto;
      });
      prevState.cryptos = cryptos;
      return { ...prevState };
    case DEPOSIT_NAIRA_SUCCESS:
      prevState.depositLink = payload.depositLink;
      return { ...prevState };
    default:
      return prevState;
  }
};
