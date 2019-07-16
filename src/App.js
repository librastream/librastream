import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TransactionDetails from './components/TransactionDetails/transaction-details';
import AddressOverview from './components/AddressOverview/address-overview';
import DiscoverMore from './components/DiscoverMore/discover-more';
import Overview from './components/Overview/overview';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Overview}/>
        <Route exact path="/address/:arg" component={AddressOverview}/>
        <Route exact path="/version/:arg" component={TransactionDetails}/>
        <Route exact path="/tx/:arg" component={TransactionDetails}/>
        <Route exact path="/discover-more" component={DiscoverMore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
