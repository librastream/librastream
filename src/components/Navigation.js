import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" exact to="/list">
      Transactions List
    </Link>
    <Link className="btn btn-secondary" exact to="/new-item">
      Add New
    </Link>
  </NavigationBar>
);
