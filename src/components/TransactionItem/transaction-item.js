import React from 'react';

import './transaction-item.scss';

const secondsOld = (time) => {
  const now = Math.floor(Date.now() / 1000);
  const past = Math.floor(new Date(time).getTime() / 1000);

  return now-past;
};

export default ({record}) => (
  <div id="transactionItem" className="d-flex">
    <div className="column1">
      <h4 className="title color-dark1">Txn Number</h4>
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
        <span className="color-blue5">{record.version}</span>
      </div>
    </div>
    <div className="column2">
      <h4 className="title color-dark1">Age</h4>
      <div className="content">{secondsOld(record.date)} Secs Ago</div>
    </div>
    <div className="column3">
      <h4 className="title color-dark1">From</h4>
      <div>
        <span className="to_and_from">{record.sender.account}</span>
      </div>
    </div>
    <div className="column4">
      <h4 className="title color-dark1">&nbsp;</ h4>
      <div>
        <svg width="17" height="7" viewBox="0 0 17 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11 7L17 3.5L11 0V3H0V4H11V7Z" fill="#01058A"/>
        </svg>
      </div>
    </div>
    <div className="column5">
      <h4 className="title color-dark1">To</h4>
      <div className="to_and_from">{record.arguments[0].data}</div>
    </div>
    <div className="column6">
      <h4 className="title color-dark1">Value</h4>
      <div>{record.arguments[1].data} Libra</div>
    </div>
    {/*<div className="column ">*/}
    {/*  <h4 className="title text-dark1">Status</h4>*/}
    {/* >*/}
    {/*    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
    {/*      <path*/}
    {/*        d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"*/}
    {/*        fill="#01058A"/>*/}
    {/*    </svg>*/}
    {/*    <span>Approved</span>*/}
    {/*  </div>*/}
    {/*</div>*/}
  </div>
);
