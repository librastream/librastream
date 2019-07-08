import React from 'react';
import { connect } from 'react-redux';
import { transaction } from "../store/actions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let SetTransaction = ({dispatch}) => {
  let input;

  return (
      <Form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(transaction(input.value));
            input.value = '';
          }}
      >
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter an item"
              ref={node => {
                input = node;
              }}
            />
            <InputGroup.Append>
              <Button type="submit">Add transaction</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
  );
};
SetTransaction = connect() (SetTransaction);

export default SetTransaction;
