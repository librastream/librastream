import React, { Component } from 'react';

import './style.scss';
class TransactionDetails extends Component {
  render() {
    return (
      <div id="transactionDetails" className="content">
        <div className="card">
          <div className="header">
            <h5 className="title">Transaction Details</h5>
            <div className="subtitle">
              Back
            </div>
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M15.9677 -1.90735e-06C14.8454 -1.90735e-06 13.9355 0.909871 13.9355 2.03226C13.9355 3.15464 14.8454 4.06451 15.9677 4.06451C17.0901 4.06451 18 3.15464 18 2.03226C18 0.909871 17.0901 -1.90735e-06 15.9677 -1.90735e-06ZM8.99997 -1.90735e-06C7.87758 -1.90735e-06 6.96771 0.909871 6.96771 2.03226C6.96771 3.15464 7.87758 4.06451 8.99997 4.06451C10.1224 4.06451 11.0322 3.15464 11.0322 2.03226C11.0322 0.909871 10.1224 -1.90735e-06 8.99997 -1.90735e-06ZM5.91278e-05 2.03226C5.91278e-05 0.909871 0.909931 -1.90735e-06 2.03232 -1.90735e-06C3.1547 -1.90735e-06 4.06458 0.909871 4.06458 2.03226C4.06458 3.15464 3.1547 4.06451 2.03232 4.06451C0.909931 4.06451 5.91278e-05 3.15464 5.91278e-05 2.03226Z"
                    fill="#A7A9C0"/>
            </svg>
          </div>
          <div className="body">
            <div className="row row1">
              <h4 className="title">Transaction Hash</h4>
              <div className="content">
                <span>0x5c06bdf4550ae6a1709ed2905a222d8ed51282bcdf20439d3f4e27e320d0396e</span>
              </div>
            </div>
            <div className="row row2">
              <h4 className="title">Status</h4>
              <div className="content">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#FF6565"/>
                </svg>
                <span>Failed</span>
              </div>
            </div>
            <div className="row row3">
              <h4 className="title">Timestamp</h4>
              <div className="content">
                <span>4 days 17 hrs ago (Jun-20-2019 10:27:52 PM +UTC)</span>
              </div>
            </div>
            <div className="row row4">
              <h4 className="title">From</h4>
              <div className="content">
                <span>0x63d509f7152769ddf162ed048b83719fe1e31080</span>
              </div>
            </div>
            <div className="row row5">
              <h4 className="title">To</h4>
              <div className="content">
                <span>0x63d509f7152769ddf162ed048b83719fe1e31080</span>
              </div>
            </div>
            <div className="row row6">
              <h4 className="title">Value</h4>
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
                <span className="text-lightblue">$ 350</span>
              </div>
            </div>
            <div className="row row7">
              <h4 className="title">Transaction Fee</h4>
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
                <span className="text-lightblue">$ 0.16</span>
              </div>
            </div>
            <div className="row row8">
              <h4 className="title">Total Balance</h4>
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
                <span>1,500.00 Libra</span>
              </div>
            </div>
            <div className="row row9">
              <h4 className="title w-100 opacity-1">
                <span className="opacity-26">To access the Private Note feature, you must be</span>
                <span className="text-lightblue">Logged In</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TransactionDetails;
