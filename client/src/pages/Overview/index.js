import React, { Component } from 'react';
import TransactionItem from '../../components/TransactionItem';
import '../../styles/common.scss';
import './style.scss';

class Overview extends Component {
  render() {
    return (
      <div id="overview" className="content">
        <div className="searchBar">
          <div className="title">
            Libra Stream Explorer
          </div>
          <div className="search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M16 14.6L19.7 18.3C20.1 18.7 20.1 19.3 19.7 19.7C19.5 19.9 19.2 20 19 20C18.8 20 18.5 19.9 18.3 19.7L14.6 16C13.1 17.3 11.1 18 9 18C4 18 0 14 0 9C0 4 4 0 9 0C14 0 18 4 18 9C18 11.1 17.2 13.1 16 14.6ZM9 2C5.1 2 2 5.1 2 9C2 12.9 5.1 16 9.1 15.9C11 15.9 12.7 15.2 14 13.9C15.2 12.7 16 10.9 16 9C16 5.1 12.9 2 9 2Z"
                    fill="#A7A9C0"/>
            </svg>
            <a href="">Search Now</a>
            <input type="text" placeholder="Search by Address / Txn Numbers / Tokens"/>
          </div>
        </div>

        <div className="transactionPanel">
          <div className="header"></div>
          <TransactionItem />
          <TransactionItem />
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default Overview;
