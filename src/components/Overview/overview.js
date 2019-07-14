import React, { Component } from 'react';
import TransactionItem from '../TransactionItem/transaction-item';
import Switch from '../SwitchButton/switch-button';
import './overview.scss';
import { forEach } from 'react-bootstrap/es/utils/ElementChildren';

class Overview extends Component {
  transactionTable = [];
  URL = 'ws://localhost:8999';
  ws = new WebSocket(this.URL);
  componentDidMount() {
    console.log("Start");
    this.ws.onopen = () => {
      console.log("connected");
    };
    this.ws.onmessage = (message) => {
      const server_data = JSON.parse(message.data);
      if (server_data.type === 'init') {
        this.transactionTable = server_data.data.reverse().slice(0, 100);
      } else if (this.transactionTable.length) {
        server_data.data.forEach(d => {
          this.transactionTable.unshift(d);
        });

        this.transactionTable.slice(0, 100);
      }

      this.forceUpdate();
    };

    console.log("End");
  }

  render() {
    let items = [];
    this.transactionTable.forEach((elem, idx, arry) => {
      items.push(<TransactionItem record={elem} key={elem._id}/>);
    });

    return (
      <div id="overview">
        <div className="container">
          {/* section1 - searchBar */}
          <div className="searchbar flex-center p-0-45">
            <div className="searchbar__content position-relative d-flex w-100">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M16 14.6L19.7 18.3C20.1 18.7 20.1 19.3 19.7 19.7C19.5 19.9 19.2 20 19 20C18.8 20 18.5 19.9 18.3 19.7L14.6 16C13.1 17.3 11.1 18 9 18C4 18 0 14 0 9C0 4 4 0 9 0C14 0 18 4 18 9C18 11.1 17.2 13.1 16 14.6ZM9 2C5.1 2 2 5.1 2 9C2 12.9 5.1 16 9.1 15.9C11 15.9 12.7 15.2 14 13.9C15.2 12.7 16 10.9 16 9C16 5.1 12.9 2 9 2Z"
                      fill="#A7A9C0"/>
              </svg>
              <input className="search__input p-0-45 w-100"
                     type="text"
                     placeholder="Search by Verson / Address / Hash"/>
              <div className="search__btn text-white flex-center h-100">
                Search
              </div>
            </div>
          </div>

          {/* section2 - table */}
          <div className="table">
            <div className="table__header">
              <h5 className="title">Transactions</h5>
              <div className="subtitle">More than 500,000 transactions found</div>
              <div className="ml-auto">
                <Switch/>
              </div>
              {/*<svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path fillRule="evenodd" clipRule="evenodd"*/}
              {/*        d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"*/}
              {/*        fill="#A7A9C0"/>*/}
              {/*</svg>*/}
            </div>
            <div className="table__body">
              {items}
            </div>
            <div className="table__footer">
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

export default Overview;
