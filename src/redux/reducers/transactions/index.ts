import {
  TransactionActions,
  GET_ALL_TRANSACTIONS_SUCCESS,
  TransactionProp,
  LOGOUT_SUCCESS,
} from '../../types';

export interface TransactionStore {
  transactions: TransactionProp[];
  count?: number;
  next: null | number;
  previous: null | number;
  total_pages?: number;
}
const initialState = (): TransactionStore => ({
  transactions: [],
  next: null,
  previous: null,
});
export const transactionReducer = (
  prevState: TransactionStore = initialState(),
  { type, payload }: TransactionActions,
): TransactionStore => {
  switch (type) {
    case GET_ALL_TRANSACTIONS_SUCCESS:
      const { count, next, previous, results, total_pages } = payload.data;
      prevState.transactions = [...results];
      prevState.count = count;
      prevState.next = next;
      prevState.previous = previous;
      prevState.total_pages = total_pages;
      return { ...prevState };
    case LOGOUT_SUCCESS:
      return initialState();
    default:
      return prevState;
  }
};
