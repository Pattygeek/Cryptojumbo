export interface Type {
  type: string;
}

export interface AjaxErrorPayload {
  error: string;
  status: number;
}

export interface AjaxSuccessPayload {
  message?: string;
  status: number;
}

export interface AjaxErrorProp extends Type {
  payload?: AjaxErrorPayload;
}

export interface AjaxSuccessProp extends Type {
  payload: AjaxSuccessPayload;
}

export interface AjaxStatuses {
  success?: AjaxSuccessPayload;
  error?: AjaxErrorPayload;
}

export const statusText = {
  400: 'Bad Request',
  200: 'OK',
  500: 'Internal Server Error',
  503: 'Service Unavailable',
  401: 'Unauthorized',
};

export interface AjaxLoading {
  [prop: string]: boolean;
}

export interface ErrorState {
  [key: string]: string;
}

export interface GenericPayload<T> {
  payload: T;
}

export interface LoadingIndicatorProp extends Type {
  payload: { loading: boolean };
}

export interface Token {
  token?: string;
}

export type ObjectId = number;
