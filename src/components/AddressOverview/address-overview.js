import React, { Component } from 'react';
import TransactionItem from '../TransactionItem/transaction-item';
import AddressItem from '../AddressItem/address-item';
import QRCode from '../QRCode/qrcode';
import './address-overview.scss';

class AddressOverview extends Component {
  render() {
    return (
      <div id="addressOverview">
        <div className="container">
          <div className="mb-45 d-flex">
            <div className="card mr-30 w-75">
              <div className="card__header">
                <h5 className="title">Address Overview</h5>
                <div className="subtitle">
                  Addresses are identifiers which you use to
                  send bitcoins to another person.
                </div>
              </div>
              <AddressItem/>
            </div>

            <div className="card w-50">
              <QRCode/>
            </div>
          </div>

          {/* section2 - card */}
          <div className="card">
            <div className="card__header">
              <h5 className="title">Transactions</h5>
              <div className="subtitle">More than 500,000 transactions found</div>
              {/*<svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path fillRule="evenodd" clipRule="evenodd"*/}
              {/*        d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"*/}
              {/*        fill="#A7A9C0"/>*/}
              {/*</svg>*/}
            </div>
            <div className="card__body">
              <TransactionItem/>
              <TransactionItem/>
              <TransactionItem/>
              <TransactionItem/>
              <TransactionItem/>
            </div>
            <div className="card__footer">
              <div className="status">
                <input className="status__count" type="number"/>
                <div className="status__info">Show 10 per second.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressOverview;
