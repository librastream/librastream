import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Header from './components/Header';
import AddressOverview from './pages/AddressOverview';
import TransactionDetails from './pages/TransactionDetails';

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
