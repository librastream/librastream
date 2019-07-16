import React, { Component } from 'react';

import './transaction-details.scss';
import axios from 'axios';

class TransactionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const API_URL = `http://localhost:8999/api/${id}`;
    axios.get(API_URL)
      .then(res => {
        this.setState({
          id: id,
          version: res.data.version
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="transactionDetails">
        <div className="container">
          <div className="table">
            <div className="table__header">
              <h5 className="title">Transaction Details</h5>
              <div className="subtitle cursor-pointer" onClick={this.goBack}>Back</div>
            </div>
            <div className="table__body">
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Version</h4>
                <div className="content">
                  <span className="">{this.state.version}</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Transaction Hash</h4>
                <div className="content">
                  <span
                    className="color-black font-weight-bold">0x5c06bdf4550ae6a1709ed2905a222d8ed51282bcdf20439d3f4e27e320d0396e</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Status</h4>
                <div className="content">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                      fill="#FF6565"/>
                  </svg>
                  <span>Failed</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Timestamp</h4>
                <div className="content">
                  <span>4 days 17 hrs ago (Jun-20-2019 10:27:52 PM +UTC)</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">From</h4>
                <div className="content color-blue6">
                  <span>0x63d509f7152769ddf162ed048b83719fe1e31080</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">To</h4>
                <div className="content color-blue6">
                  <span>0x63d509f7152769ddf162ed048b83719fe1e31080</span>
                  <span className="color-dark2">&nbsp;&nbsp;&nbsp; - Contract -</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Value</h4>
                <div className="content">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="23" height="23" rx="4" fill="#01058A"/>
                    <rect x="3" y="2" width="18" height="19" fill="url(#pattern0)"/>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0" transform="translate(0 -0.00673195) scale(0.0116279 0.0110159)"/>
                      </pattern>
                      <image id="image0" width="86" height="92"
                             href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABcCAYAAAD0zUKRAAADbUlEQVR4nO2bT4iNURjGfyNJmjJNmqwsZEFp8i8LScICZWOhLBTKSmE1SiQrC8pCspAkSRqR5E+EktTQMCFJkpVkJUmSvDrNud3Pbe7MOfd+7zczeX71Nov73XPO95zvnPuc72kQQgghhBBCCCGEEEKIf+nI1cPMWpFwDrAMWArMB7qATuA38BX4ArwChoDHwK+JNk8dHXlSTXUbyTBrgF1RzEWJ33kaxT0HvHYeX5E+YCZwCvhUYb/DhCc2oVaY2Q0ze2GtE7572swWJvbZTi0pjHXQzI6YWU+xvYkgbF+bgjYS2jplZrOdRJ1uZrdH6PeZmR0ws+7xFnaWmfWXLGqRATPb6SDs2YR+9+TqVNYeOws4D2wsqb2RWA5MAzYAh4E3JbR5DFgyxjWhz+8l9DU6TZ7Um05PaTPCqjgYl3ErT+lUMzuZuLqujcdWEG7sesWiFnloZluiUKmi9kaxUngRf9iydWrXx54A9mU2Ebzqj+hfg4/tAaZn2LGReAT0A3eBd02uCT56a7SAKX2FcV4EjlOxj90OrE68NgzyPXAJeAJ8bvg8CLsSWBtvfHnmWFbFGoqHi7fAz3h/oe15ca/MmbyXNVErIS6nudHvpS7XjRlLtStatgH3jaQ59+M4KvexFxIHeLFxgBnVE/2rl31rxsP44FC1sJsTbzb4wykl+Mw1ZnZvPEVtRdgpLWi7OOGaK8Bu4E8L7TfyANgEHIp7qBd3gB3AB8c+mhNncP4oyzTMerfT8bPX4XQX2jo6lieuSthahRckZwo3Gv6ucxK1WKvN7HIJL3nCFrM+pc9cynofG46Fe6ON2t/+9CUTLNq26FHHOprWqFm/8FryVmpHuT62qhfd3nRGH9sLLIiHjq74G/ItVvC2g8Bz4GPueP5XYd3JFbYVVyAk7PghYZ3wDhNrTPqUNheltHWU0jqUUlqHUkqrlNYHpbQVoJTWGaW0BRpT2rCNzFBKW0cpbZnE5aSU1klYpbQOwiqlTUApbR2ltEpp/UoprTNKaZ1RSjtZUUo7QZCwTkhYJ5TSOqGUto5SWodSSutQSmmV0vqglLYClNI6o5S2gP6XdgyU0pZJXE5KaZ2EVUrrIKxS2gS8UtqrSmkziTOolNZJ2FoppW2CUtpElNJOkJRWCPHfI4QQQgghhBBCCPEPwF8l4mZpJAndJgAAAABJRU5ErkJggg=="/>
                    </defs>
                  </svg>
                  <span>15 Libra</span>
                  <span className="color-blue6">&nbsp;&nbsp;&nbsp; $ 350</span>
                </div>
              </div>
              <div className="item flex-center-y">
                <h4 className="title color-dark1 a26">Transaction Fee</h4>
                <div className="content">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="23" height="23" rx="4" fill="#01058A"/>
                    <rect x="3" y="2" width="18" height="19" fill="url(#pattern0)"/>
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0" transform="translate(0 -0.00673195) scale(0.0116279 0.0110159)"/>
                      </pattern>
                      <image id="image0" width="86" height="92"
                             href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABcCAYAAAD0zUKRAAADbUlEQVR4nO2bT4iNURjGfyNJmjJNmqwsZEFp8i8LScICZWOhLBTKSmE1SiQrC8pCspAkSRqR5E+EktTQMCFJkpVkJUmSvDrNud3Pbe7MOfd+7zczeX71Nov73XPO95zvnPuc72kQQgghhBBCCCGEEEKIf+nI1cPMWpFwDrAMWArMB7qATuA38BX4ArwChoDHwK+JNk8dHXlSTXUbyTBrgF1RzEWJ33kaxT0HvHYeX5E+YCZwCvhUYb/DhCc2oVaY2Q0ze2GtE7572swWJvbZTi0pjHXQzI6YWU+xvYkgbF+bgjYS2jplZrOdRJ1uZrdH6PeZmR0ws+7xFnaWmfWXLGqRATPb6SDs2YR+9+TqVNYeOws4D2wsqb2RWA5MAzYAh4E3JbR5DFgyxjWhz+8l9DU6TZ7Um05PaTPCqjgYl3ErT+lUMzuZuLqujcdWEG7sesWiFnloZluiUKmi9kaxUngRf9iydWrXx54A9mU2Ebzqj+hfg4/tAaZn2LGReAT0A3eBd02uCT56a7SAKX2FcV4EjlOxj90OrE68NgzyPXAJeAJ8bvg8CLsSWBtvfHnmWFbFGoqHi7fAz3h/oe15ca/MmbyXNVErIS6nudHvpS7XjRlLtStatgH3jaQ59+M4KvexFxIHeLFxgBnVE/2rl31rxsP44FC1sJsTbzb4wykl+Mw1ZnZvPEVtRdgpLWi7OOGaK8Bu4E8L7TfyANgEHIp7qBd3gB3AB8c+mhNncP4oyzTMerfT8bPX4XQX2jo6lieuSthahRckZwo3Gv6ucxK1WKvN7HIJL3nCFrM+pc9cynofG46Fe6ON2t/+9CUTLNq26FHHOprWqFm/8FryVmpHuT62qhfd3nRGH9sLLIiHjq74G/ItVvC2g8Bz4GPueP5XYd3JFbYVVyAk7PghYZ3wDhNrTPqUNheltHWU0jqUUlqHUkqrlNYHpbQVoJTWGaW0BRpT2rCNzFBKW0cpbZnE5aSU1klYpbQOwiqlTUApbR2ltEpp/UoprTNKaZ1RSjtZUUo7QZCwTkhYJ5TSOqGUto5SWodSSutQSmmV0vqglLYClNI6o5S2gP6XdgyU0pZJXE5KaZ2EVUrrIKxS2gS8UtqrSmkziTOolNZJ2FoppW2CUtpElNJOkJRWCPHfI4QQQgghhBBCCPEPwF8l4mZpJAndJgAAAABJRU5ErkJggg=="/>
                    </defs>
                  </svg>
                  <span>0.0000456 Libra</span>
                  <span className="color-blue6">&nbsp;&nbsp;&nbsp; $ 0.16</span>
                </div>
              </div>
            </div>
            <div className="table__footer flex-center-y cursor-pointer">
              <span className="color-blue6 m-r-7">View More</span>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8L0.669874 0.5L9.33013 0.499999L5 8Z" fill="#1AA7E8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionDetails;
