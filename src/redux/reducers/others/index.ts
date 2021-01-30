import {
  OtherActions,
  GET_CURRENCIES_SUCCESS,
  CurrencyPrice,
  FAQProps,
  GET_FAQ_SUCCESS,
  VERIFY_BANK_ACCOUNT_SUCCESS,
  BankDetailsProp,
  LOGOUT_SUCCESS,
  RateProps,
  GET_RATES_SUCCESS,
} from '../../types';

export interface OtherStore {
  currencies: {
    dollarEquivalent: {
      [coin: string]: CurrencyPrice;
    };
    nairaEquivalent: {
      [coin: string]: CurrencyPrice;
    };
  };
  faqs: FAQProps[];
  bankVerification: {
    [accountNo: string]: BankDetailsProp;
  };
  rates: RateProps;
}

const initialState = (): OtherStore => ({
  currencies: {
    dollarEquivalent: {},
    nairaEquivalent: {},
  },
  faqs: [],
  bankVerification: {},
  rates: {},
});
export const otherReducer = (
  prevState: OtherStore = initialState(),
  { type, payload }: OtherActions,
): OtherStore => {
  switch (type) {
    case GET_CURRENCIES_SUCCESS:
      const { dollarEquivalent, nairaEquivalent } = payload;
      prevState.currencies = { dollarEquivalent, nairaEquivalent };
      return { ...prevState };
    case GET_FAQ_SUCCESS:
      prevState.faqs = payload.faqs;
      return { ...prevState };
    case VERIFY_BANK_ACCOUNT_SUCCESS:
      prevState.bankVerification[payload.bankDetails.account_number] =
        payload.bankDetails;
      return { ...prevState };
    case GET_RATES_SUCCESS:
      prevState.rates = payload.rates;
      return { ...prevState };
    case LOGOUT_SUCCESS:
      return initialState();
    default:
      return prevState;
  }
};
