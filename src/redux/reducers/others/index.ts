import {
  OtherActions,
  GET_CURRENCIES_SUCCESS,
  CurrencyPrice,
  FAQProps,
  GET_FAQ_SUCCESS,
  VERIFY_BANK_ACCOUNT_SUCCESS,
  BankDetailsProp,
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
}

const initialState: OtherStore = {
  currencies: {
    dollarEquivalent: {},
    nairaEquivalent: {},
  },
  faqs: [],
  bankVerification: {},
};
export const otherReducer = (
  prevState: OtherStore = initialState,
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
    default:
      return prevState;
  }
};
