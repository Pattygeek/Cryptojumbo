import { Type, Token, AjaxSuccessPayload } from '../global';
import { CurrencySymbols } from '../trade';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TransactionProp {
  id: number;
  created: string;
  modified: string;
  action: string;
  amount: string;
  currency: CurrencySymbols;
  status: string;
  transaction_details: {
    data?: {
      amount_sent: string;
      amount_withdrawn: string;
      blockio_fee: string;
      network: string;
      network_fee: string;
      txid: string;
    };
    amount: string | number;
    tx_ref?: string;
    reference?: string;
    currency: CurrencySymbols;
    hash?: string;
    customer: {
      name: string;
      email: string;
      phonenumber: string;
    };
    redirect_url: string;
    customizations: {
      logo: null;
      title: string;
      description: string;
    };
    payment_options: string;
  };
  description: string;
  user: string;
}

//payloads
export interface AllTransactionRequestPayload extends Token {
  page?: number;
}

export type AllTransactionSuccessPayload = AjaxSuccessPayload & {
  data: {
    count: number;
    total_pages: number;
    next: null | number;
    previous: null | number;
    results: TransactionProp[];
  };
};

export interface UpdateTransactionRequestPayload extends Token {
  data: {
    action: string;
    amount: string;
    currency: string;
    status: string;
    transaction_details?: {};
    description?: string;
    user: string;
  };
}

export type UpdateTransactionSuccessPayload = AjaxSuccessPayload;

export interface SingleTransactionRequestPayload extends Token {
  id: number;
}

export type SingleTransactionSuccessPayload = AjaxSuccessPayload;

//actions
export interface AllTransactionSuccessProp extends Type {
  payload: AllTransactionSuccessPayload;
}

export interface AllTransactionRequestProp extends Type {
  payload: AllTransactionRequestPayload;
}

export interface UpdateTransactionRequestProp extends Type {
  payload: UpdateTransactionRequestPayload;
}

export interface UpdateTransactionSuccessProp extends Type {
  payload: UpdateTransactionSuccessPayload;
}

export interface SingleTransactionRequestProp extends Type {
  payload: SingleTransactionRequestPayload;
}

export interface SingleTransactionSuccessProp extends Type {
  payload: SingleTransactionSuccessPayload;
}

export type TransactionActions = AllTransactionSuccessProp &
  UpdateTransactionSuccessProp &
  SingleTransactionSuccessProp;
