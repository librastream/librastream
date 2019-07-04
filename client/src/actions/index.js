export const  SET_TRANSACTION= 'SET_TRANSACTION';
export const LOAD_TRANSACTIONS_LIST = 'LOAD_TRANSACTIONS_LIST';
export const RENDER_TRANSACTIONS_LIST = 'RENDER_TRANSACTIONS_LIST';

export function transaction(title) {
  return {
    type: SET_TRANSACTION,
    transaction: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}

export function loadTransactionsList() {
  return {
    type: LOAD_TRANSACTIONS_LIST
  };
}
