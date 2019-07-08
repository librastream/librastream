import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Transaction = ({title}) => <ListGroup.Item>{title}</ListGroup.Item>

Transaction.propTypes = {
  title: PropTypes.string.isRequired
};

export default Transaction;
