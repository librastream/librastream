import React, { Component } from 'react';
import TransactionItem from '../TransactionItem';
import '../../styles/_base.scss';
import './style.scss';

class Overview extends Component {
  render() {
    return (
      <div id="overview" className="content">
        <div className="searchBar">
          <div className="header">
            <h5 className="title">Libra Stream Explorer</h5>
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M15.925 7.62939e-06C14.8056 7.62939e-06 13.8982 0.909878 13.8982 2.03226C13.8982 3.15464 14.8056 4.06451 15.925 4.06451C17.0444 4.06451 17.9518 3.15464 17.9518 2.03226C17.9518 0.909878 17.0444 7.62939e-06 15.925 7.62939e-06ZM8.97596 7.62939e-06C7.85657 7.62939e-06 6.94912 0.909878 6.94912 2.03226C6.94912 3.15464 7.85657 4.06451 8.97596 4.06451C10.0954 4.06451 11.0028 3.15464 11.0028 2.03226C11.0028 0.909878 10.0954 7.62939e-06 8.97596 7.62939e-06ZM2.28882e-05 2.03226C2.28882e-05 0.909878 0.907444 7.62939e-06 2.02681 7.62939e-06C3.14617 7.62939e-06 4.05359 0.909878 4.05359 2.03226C4.05359 3.15464 3.14617 4.06451 2.02681 4.06451C0.907444 4.06451 2.28882e-05 3.15464 2.28882e-05 2.03226Z"
                    fill="#A7A9C0"/>
            </svg>
          </div>

          <div className="search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M16 14.6L19.7 18.3C20.1 18.7 20.1 19.3 19.7 19.7C19.5 19.9 19.2 20 19 20C18.8 20 18.5 19.9 18.3 19.7L14.6 16C13.1 17.3 11.1 18 9 18C4 18 0 14 0 9C0 4 4 0 9 0C14 0 18 4 18 9C18 11.1 17.2 13.1 16 14.6ZM9 2C5.1 2 2 5.1 2 9C2 12.9 5.1 16 9.1 15.9C11 15.9 12.7 15.2 14 13.9C15.2 12.7 16 10.9 16 9C16 5.1 12.9 2 9 2Z"
                    fill="#A7A9C0"/>
            </svg>
            <a href="https://librastream.io">
              <h4 className="search__btn">Search Now</h4>
            </a>
            <input type="text" placeholder="Search by Address / Txn Numbers / Tokens"/>
          </div>
        </div>

        <div className="card">
          <div className="header">
            <h5 className="title">Transactions</h5>
            <div className="subtitle">More than 500,000 transactions found</div>
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"
                    fill="#A7A9C0"/>
            </svg>
          </div>
          <TransactionItem/>
          <TransactionItem/>
          <div className="footer">
            <div className="status">
              <input type="number" />
              Show 07 per second.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
