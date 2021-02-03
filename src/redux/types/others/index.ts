import { Type, Token, AjaxStatuses, AjaxSuccessPayload } from '../global';

export type CurrencyPrice = string;

export type FAQProps = {
  id: number;
  serial_number: number;
  question: string;
  answer: string;
};
// Payloads
export type GetCurrenciesRequestPayload = {};
export interface GetCurrenciesSuccessPayload extends AjaxSuccessPayload {
  dollarEquivalent: {
    [coin: string]: CurrencyPrice;
  };
  nairaEquivalent: {
    [coin: string]: CurrencyPrice;
  };
}

export interface BankDetailsProp {
  account_number: string;
  account_name: string;
}

export interface RateProps {
  [currency: string]: {
    buy: number | string;
    sell: number | string;
  };
}

export type IdVerificationRequestPayload = Token & {
  data: {
    id_type: string;
    id_number: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
  };
};

export type IdVerificationSuccessPayload = AjaxSuccessPayload;

export type TradeRequestPayload = Token & {
  data: {
    amount: number;
    action: string;
  };
};

export type TradeSuccessPayload = AjaxSuccessPayload;

export type GetFAQSuccessPayload = AjaxSuccessPayload & {
  faqs: FAQProps[];
};

export interface VerifyBankAccountRequestPayload {
  data: {
    account_bank: string;
    account_number: string;
  };
}

export interface VerifyBankAccountSuccessPayload extends AjaxSuccessPayload {
  bankDetails: BankDetailsProp;
}

export interface GetRatesSuccessPayload extends AjaxSuccessPayload {
  rates: RateProps;
}

// Actions
export interface GetCurrenciesRequestProp extends Type {
  payload: GetCurrenciesRequestPayload;
}

export interface GetCurrenciesSuccessProp extends Type {
  payload: GetCurrenciesSuccessPayload;
}

export interface IdVerificationRequestProp extends Type {
  payload: IdVerificationRequestPayload;
}

export interface IdVerificationSuccessProp extends Type {
  payload: IdVerificationSuccessPayload;
}

export interface TradeRequestProp extends Type {
  payload: TradeRequestPayload;
}

export interface TradeSuccessProp extends Type {
  payload: TradeSuccessPayload;
}

export type GetFAQRequestProp = Type;

export interface GetFAQSuccessProp extends Type {
  payload: GetFAQSuccessPayload;
}

export interface VerifyBankAccountRequestProp extends Type {
  payload: VerifyBankAccountRequestPayload;
}

export interface VerifyBankAccountSuccessProp extends Type {
  payload: VerifyBankAccountSuccessPayload;
}

export type GetRatesRequestProp = Type;

export interface GetRatesSuccessProp extends Type {
  payload: GetRatesSuccessPayload;
}

export type OtherActions = GetCurrenciesSuccessProp &
  TradeSuccessProp &
  GetFAQSuccessProp &
  VerifyBankAccountSuccessProp &
  GetRatesSuccessProp;
