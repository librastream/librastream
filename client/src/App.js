import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import SetTransaction from './containers/SetTransaction';
import TransactionsListContainer from './containers/TransactionsListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Transactions List</h1>
            <Navigation/>
            <Route exact path="/list" component={TransactionsListContainer}/>
            <Route exact path="/new-item" component={SetTransaction}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
