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
      const { count, next, previous, results } = payload.data;
      prevState.transactions = [...prevState.transactions, ...results];
      prevState.count = count;
      prevState.next = next;
      prevState.previous = previous;
      return { ...prevState };
    case LOGOUT_SUCCESS:
      return initialState();
    default:
      return prevState;
  }
};
