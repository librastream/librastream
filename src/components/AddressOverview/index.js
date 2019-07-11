import React, { Component } from 'react';
import TransactionItem from '../TransactionItem/transctonitem';
import AddressItem from '../AddressItem';
import QRCode from '../QRCode';
import './style.scss';

class AddressOverview extends Component {
  render() {
    return (
      <div id="addressOverview" className="container">
        <div className="mb-45 d-flex">
          <div className="card mr-30 w-50">
            <div className="header">
              <h5 className="title">Address Overview</h5>
              <div className="subtitle">
                Addresses are identifiers which you use to
                send bitcoins to another person.
              </div>
              <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"
                      fill="#A7A9C0"/>
              </svg>
            </div>
            <AddressItem/>
          </div>

          <div className="card w-50">
            <div className="header">
              <h5 className="title">Address Overview</h5>
              <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"
                      fill="#A7A9C0"/>
              </svg>
            </div>
            <div className="body">
              <QRCode/>
              <div className="state">
                <div>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                      fill="#01058A"/>
                  </svg>
                  <span>Approved</span>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                  </button>
                </div>
              </div>

            </div>
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
              <input type="number"/>
              Show 07 per second.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressOverview;
