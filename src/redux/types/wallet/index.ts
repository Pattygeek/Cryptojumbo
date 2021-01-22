import { Token, Type, AjaxSuccessPayload } from '../global';
import { CurrencySymbols } from '../trade';

export interface CryptoWalletProps {
  id: number;
  label: string;
  currency: CurrencySymbols;
  address?: string;
  available_balance: string;
  user: string;
}

//payloads
export type GetCryptoWalletRequestPayload = Token;

export type GetCryptoWalletSuccessPayload = AjaxSuccessPayload & {
  cryptoWallets: CryptoWalletProps[];
};

export interface DepositNairaRequestPayload extends Token {
  data: {
    amount: string | number;
  };
}

export type DepositNairaSuccessPayload = AjaxSuccessPayload & {
  depositLink?: string;
};

export interface SendBTCRequestPayload extends Token {
  data: {
    amounts: string[];
    to_addresses: string[];
    project: 'CJ';
  };
}

export type SendBTCSuccessPayload = AjaxSuccessPayload;

export interface SendETHRequestPayload extends Token {
  data: {
    to: string;
    amount: string;
    project: 'CJ';
  };
}

export type SendETHSuccessPayload = AjaxSuccessPayload;

export interface WithdrawNairaRequestPayload extends Token {
  data: {
    account_bank: string;
    account_number: string;
    amount: string;
    project: 'CJ';
  };
}

export type WithdrawNairaSuccessPayload = AjaxSuccessPayload;

export type SendUSDTSuccessPayload = AjaxSuccessPayload;

export type SendUSDTRequestPayload = SendETHRequestPayload;

//actions
export interface GetCryptoWalletRequestProp extends Type {
  payload: GetCryptoWalletRequestPayload;
}

export interface GetCryptoWalletSuccessProp extends Type {
  payload: GetCryptoWalletSuccessPayload;
}

export interface DepositNairaRequestProp extends Type {
  payload: DepositNairaRequestPayload;
}

export interface DepositNairaSuccessProp extends Type {
  payload: DepositNairaSuccessPayload;
}

export interface SendBTCRequestProp extends Type {
  payload: SendBTCRequestPayload;
}

export interface SendBTCSuccessProp extends Type {
  payload: SendBTCSuccessPayload;
}

export interface SendETHRequestProp extends Type {
  payload: SendETHRequestPayload;
}

export interface SendETHSuccessProp extends Type {
  payload: SendETHSuccessPayload;
}

export interface WithdrawNairaRequestProp extends Type {
  payload: WithdrawNairaRequestPayload;
}

export interface WithdrawNairaSuccessProp extends Type {
  payload: WithdrawNairaSuccessPayload;
}

export interface SendUSDTRequestProp extends Type {
  payload: SendUSDTRequestPayload;
}

export interface SendUSDTSuccessProp extends Type {
  payload: SendUSDTSuccessPayload;
}

export type WalletActions = GetCryptoWalletSuccessProp &
  DepositNairaSuccessProp &
  SendBTCSuccessProp &
  SendETHSuccessProp &
  WithdrawNairaSuccessProp &
  SendUSDTSuccessProp;
