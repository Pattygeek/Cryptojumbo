import { Type, Token, AjaxSuccessPayload } from '../global';

export enum MakePaymentMethods {
  card = 'Card',
  'in-app wallet' = 'In app wallet',
}

export enum ReceivePaymentMethods {
  'External wallet' = 'External wallet',
  'In app wallet' = 'In app wallet',
}

export enum CurrencySymbols {
  NGN = 'NGN',
  USDT = 'USDT',
  BTC = 'BTC',
  ETH = 'ETH',
}

//payloads
export interface BuyCryptoRequestPayload extends Token {
  data: {
    amount_in_naira: string;
    equivalent_amount: string;
    currency: CurrencySymbols;
    address_to_receive?: string;
    make_pay_method: MakePaymentMethods;
    receive_pay_method?: ReceivePaymentMethods;
    transaction_pin?: number;
    email?: string;
    project: 'CJ';
  };
}

export type BuyCryptoSuccessPayload = AjaxSuccessPayload;

export interface SellCryptoRequestPayload extends Token {
  data: {
    amount: string;
    naira_equivalent: string;
    currency: CurrencySymbols;
    recipient_account_nos?: string[];
    recipient_banks: string[];
    receive_pay_method: ReceivePaymentMethods;
    make_pay_method: MakePaymentMethods;
    transaction_pin?: number;
    split_payment: boolean;
    split_amounts: string[];
    email?: string;
    project: 'CJ';
  };
}

export type SellCryptoSuccessPayload = AjaxSuccessPayload;

export interface SwapCryptoRequestPayload extends Token {
  data: {
    to_currency: CurrencySymbols;
    from_currency: CurrencySymbols;
    to_amount: string;
    from_amount: string;
  };
}

export type SwapCryptoSuccessPayload = AjaxSuccessPayload;

//actions
export interface BuyCryptoSuccessProp extends Type {
  payload: BuyCryptoSuccessPayload;
}

export interface BuyCryptoRequestProp extends Type {
  payload: BuyCryptoRequestPayload;
}

export interface SellCryptoRequestProp extends Type {
  payload: SellCryptoRequestPayload;
}

export interface SellCryptoSuccessProp extends Type {
  payload: SellCryptoSuccessPayload;
}

export interface SwapCryptoRequestProp extends Type {
  payload: SwapCryptoRequestPayload;
}

export interface SwapCryptoSuccessProp extends Type {
  payload: SwapCryptoSuccessPayload;
}

export type TradeActions = BuyCryptoSuccessProp &
  SellCryptoSuccessProp &
  SwapCryptoSuccessProp;
