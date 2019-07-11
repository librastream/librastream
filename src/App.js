import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Overview from './components/Overview/overview';
import Header from './components/Header/header';
import AddressOverview from './components/AddressOverview/address-overview';
import TransactionDetails from './components/TransactionDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Overview}/>
        <Route exact path="/address-overview" component={AddressOverview}/>
        <Route exact path="/transaction-details" component={TransactionDetails}/>
      </div>
    );
  }
}

export default App;
