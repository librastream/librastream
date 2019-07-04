import { SET_TRANSACTION} from '../actions';

const initialState = {
  transactionsList: []
};

export default function transactionsApp(state = initialState, action) {
  switch (action.type) {
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
