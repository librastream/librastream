import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Transaction from './Transaction';

const TransactionsList = ({ transactionsList }) => (
  <Jumbotron>
    <ListGroup>
      {transactionsList.map((transaction, index) => (
        <Transaction key={index} {...transaction}/>
      ))}
    </ListGroup>
  </Jumbotron>
);

TransactionsList.propTypes = {
  transactionsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TransactionsList;
