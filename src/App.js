import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Overview from 'components/Overview/overview';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import AddressOverview from 'components/AddressOverview/address-overview';
import TransactionDetails from 'components/TransactionDetails/transaction-details';
import DiscoverMore from 'components/DiscoverMore/discover-more';
import 'styles/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Overview}/>
        <Route exact path="/address-overview" component={AddressOverview}/>
        <Route exact path="/transaction-details" component={TransactionDetails}/>
        <Route exact path="/discover-more" component={DiscoverMore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
