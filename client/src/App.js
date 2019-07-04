import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
        <Container>
          <Row className="row">
            <Col xs={12}>
              <h1>Libra Stream Explorer</h1>
              <Button>Action</Button>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
