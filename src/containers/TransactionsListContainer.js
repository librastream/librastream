import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';

const mapStateToProps = state => {
  return {
    transactionsList: state.transactionsList
  };
};

const TransactionsListContainer = connect(mapStateToProps)(TransactionsList);

export default TransactionsListContainer;
