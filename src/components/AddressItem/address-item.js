import React, { Component } from 'react';

import './address-item.scss';


class AddressItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { record } = this.props;
    if (!record) return null;

    // let sequence =
    return (
    <div id="addressItem">
      <div className="item flex-center-y">
        <h4 className="title color-dark1 a26">Address</h4>
        <div className="content color-blue6">
          <span className="long_address">{record.address}</span>
        </div>
      </div>
      <div className="item flex-center-y">
        <h4 className="title color-dark1 a26">Total Recivied</h4>
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
          <span>{record.total_received} Libra</span>
        </div>
      </div>
      <div className="item flex-center-y">
        <h4 className="title color-dark1 a26">Final Balance</h4>
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
          <span>{record.final_balance} Libra</span>
        </div>
      </div>
      <div className="item flex-center-y">
        <h4 className="title color-dark1 a26">No. Transactions</h4>
        <div className="content">
          <span>{record.total_len}</span>
        </div>
      </div>
      <div className="item flex-center-y">
        <h4 className="title color-dark1 a26">Sequence</h4>
        <div className="content">
          <span>1</span>
          {/*<span>{record.sequence}</span>*/}
        </div>
      </div>
    </div>
    );
  }
}

export default AddressItem;
