import React, { Component } from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import AddressItem from '../AddressItem/address-item';
import QRCode from '../QRCode/qrcode';
import TransactionItem from '../TransactionItem/transaction-item';
import './address-overview.scss';
import Spinner from 'react-bootstrap/Spinner';

class AddressOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isLoadingTable: false,
      pageSize: 6,
      defaultCurrent: 1,
      total: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }

  onChange(page) {
    this.state.currentPage = page;
    this.setState({ isLoadingTable: true });
    // this.state.currentPage = page;
    const API_URL = `http://localhost:8999/api/address/${this.state.searchWord}/${this.state.pageSize}/${this.state.currentPage}`;
    axios.get(API_URL)
      .then(res => {
        this.setState({ isLoadingTable: false });
        let tmp = { ...res.data, address: this.state.searchWord };
        this.setState({
          record: tmp
        });
      });
  }

  onShowSizeChange(event) {
    this.state.pageSize = Number.parseInt(event.target.value);
    this.state.currentPage = 1;
    this.setState({ isLoadingTable: true });
    const API_URL = `http://localhost:8999/api/address/${this.state.searchWord}/${this.state.pageSize}/${this.state.currentPage}`;
    axios.get(API_URL)
      .then(res => {
        this.setState({ isLoadingTable: false });
        let tmp = { ...res.data, address: this.state.searchWord };
        this.setState({
          record: tmp
        });
      });
  }

  componentDidMount() {
    const { arg } = this.props.match.params;
    const API_URL = `http://localhost:8999/api/address/${arg}/6`;
    axios.get(API_URL)
      .then(res => {
        let tmp = { ...res.data, address: arg };
        this.setState({
          record: tmp,
          isLoading: false,
          pageSize: 6,
          currentPage: 1,
          searchWord: arg
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (<div className="loading">Loading...</div>);
    }

    let loading = '';
    if (this.state.isLoadingTable) {
      let style = { 'position': 'absolute', top: '50%', left: '50%' };
      loading = <Spinner style={style} animation="border" variant="secondary"/>;
    }

    let items = [];
    if (!this.state.record) return null;
    const { record } = this.state;
    record.total_array.forEach((elem, idx, arry) => {
      items.push(<TransactionItem record={elem} key={elem._id}/>);
    });
    return (
      <div className="addressOverview">
        <div className="container">
          <div className="mb-45 d-flex">
            <div className="table mr-30 w-75">
              <div className="table__header">
                <h5 className="title">Address Overview</h5>
                <div className="subtitle">
                  Addresses are identifiers which you use to
                  send bitcoins to another person.
                </div>
              </div>
              <AddressItem record={this.state.record}/>
            </div>

            <div className="table w-50">
              <QRCode/>
            </div>
          </div>

          {/* section2 - table */}
          <div className="table">
            <div className="table__header">
              <h5 className="title">Transactions</h5>
              <div className="subtitle">More than 500,000 transactions found</div>
              <div className="ml-auto flex-center-y">
                <Pagination
                  // selectComponentClass={Select}
                  showSizeChanger
                  pageSize={this.state.pageSize}
                  onShowSizeChange={this.onShowSizeChange}
                  onChange={this.onChange}
                  current={this.state.currentPage}
                  total={record.transactions_len}
                />
              </div>
              {/*<svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path fillRule="evenodd" clipRule="evenodd"*/}
              {/*        d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"*/}
              {/*        fill="#A7A9C0"/>*/}
              {/*</svg>*/}
            </div>
            <div className={`table__body ${this.state.isLoadingTable ? 'blur' : ''}`}>
              {loading}
              {/*<div className={`transparent ${this.state.isLoadingTable ? 'a26' : ''}`}/>*/}
              {items}
            </div>
            <div className="table__footer">
              <div className="status">
                <input className="status__count" type="number" value={this.state.pageSize} min="1"
                       onChange={this.onShowSizeChange}/>
                <div className="status__info">Show {this.state.pageSize} per second.</div>
              </div>
              <div className="ml-auto flex-center-y">
                <Pagination
                  // selectComponentClass={Select}
                  showSizeChanger
                  pageSize={this.state.pageSize}
                  onShowSizeChange={this.onShowSizeChange}
                  onChange={this.onChange}
                  current={this.state.currentPage}
                  total={record.transactions_len}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressOverview;
