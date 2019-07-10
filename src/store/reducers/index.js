import { RENDER_TRANSACTIONS_LIST, SET_TRANSACTION } from '../actions';

const initialState = {
  transactionsList: []
};

export default function transactionsApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TRANSACTIONS_LIST:
      return {
        ...state,
        transactionsList: action.transactionsList
      };
    case SET_TRANSACTION:
      let newTransactionsList = [
        ...state.transactionsList,
        {
          ...action.transaction
        }
      ];
      return {
        ...state,
        transactions: newTransactionsList
      };
    default:
      return state;
  }
}
