import React from 'react';
import { Link } from 'react-router-dom';

import Profile from '../Profile';
import './style.scss';

export default () => (
  <div id="header" className="d-flex">
    <div className="logo">
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
        <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0L20.4741 0L21.6257 0C28.3463 0 31.7066 0 34.2736 1.30792C36.5315 2.4584 38.3673 4.29417 39.5177 6.55211C40.8257 9.11905 40.8257 12.4794 40.8257 19.2V21.6257C40.8257 28.3463 40.8257 31.7066 39.5177 34.2736C38.3673 36.5315 36.5315 38.3673 34.2736 39.5177C31.7066 40.8257 28.3463 40.8257 21.6257 40.8257H19.2C12.4794 40.8257 9.11905 40.8257 6.55211 39.5177C4.29417 38.3673 2.4584 36.5315 1.30792 34.2736C0 31.7066 0 28.3463 0 21.6257V19.2Z" fill="#01058A"/>
        <rect x="3.82567" y="2.82565" width="32" height="34" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0" transform="translate(0 -0.00341986) scale(0.0116279 0.0109439)"/>
          </pattern>
          <image id="image0" width="86" height="92" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABcCAYAAAD0zUKRAAADbUlEQVR4nO2bT4iNURjGfyNJmjJNmqwsZEFp8i8LScICZWOhLBTKSmE1SiQrC8pCspAkSRqR5E+EktTQMCFJkpVkJUmSvDrNud3Pbe7MOfd+7zczeX71Nov73XPO95zvnPuc72kQQgghhBBCCCGEEEKIf+nI1cPMWpFwDrAMWArMB7qATuA38BX4ArwChoDHwK+JNk8dHXlSTXUbyTBrgF1RzEWJ33kaxT0HvHYeX5E+YCZwCvhUYb/DhCc2oVaY2Q0ze2GtE7572swWJvbZTi0pjHXQzI6YWU+xvYkgbF+bgjYS2jplZrOdRJ1uZrdH6PeZmR0ws+7xFnaWmfWXLGqRATPb6SDs2YR+9+TqVNYeOws4D2wsqb2RWA5MAzYAh4E3JbR5DFgyxjWhz+8l9DU6TZ7Um05PaTPCqjgYl3ErT+lUMzuZuLqujcdWEG7sesWiFnloZluiUKmi9kaxUngRf9iydWrXx54A9mU2Ebzqj+hfg4/tAaZn2LGReAT0A3eBd02uCT56a7SAKX2FcV4EjlOxj90OrE68NgzyPXAJeAJ8bvg8CLsSWBtvfHnmWFbFGoqHi7fAz3h/oe15ca/MmbyXNVErIS6nudHvpS7XjRlLtStatgH3jaQ59+M4KvexFxIHeLFxgBnVE/2rl31rxsP44FC1sJsTbzb4wykl+Mw1ZnZvPEVtRdgpLWi7OOGaK8Bu4E8L7TfyANgEHIp7qBd3gB3AB8c+mhNncP4oyzTMerfT8bPX4XQX2jo6lieuSthahRckZwo3Gv6ucxK1WKvN7HIJL3nCFrM+pc9cynofG46Fe6ON2t/+9CUTLNq26FHHOprWqFm/8FryVmpHuT62qhfd3nRGH9sLLIiHjq74G/ItVvC2g8Bz4GPueP5XYd3JFbYVVyAk7PghYZ3wDhNrTPqUNheltHWU0jqUUlqHUkqrlNYHpbQVoJTWGaW0BRpT2rCNzFBKW0cpbZnE5aSU1klYpbQOwiqlTUApbR2ltEpp/UoprTNKaZ1RSjtZUUo7QZCwTkhYJ5TSOqGUto5SWodSSutQSmmV0vqglLYClNI6o5S2gP6XdgyU0pZJXE5KaZ2EVUrrIKxS2gS8UtqrSmkziTOolNZJ2FoppW2CUtpElNJOkJRWCPHfI4QQQgghhBBCCPEPwF8l4mZpJAndJgAAAABJRU5ErkJggg=="/>
        </defs>
      </svg>

      <div className="title">LibraStream.io &lt;</div>
    </div>

    <Link className="btn btn-primary" to="/">
      Overview
    </Link>
    <Link className="btn btn-primary" to="/address-overview">
      AddressOverview
    </Link>
    <Link className="btn btn-primary" to="/transaction-details">
      TransactionDetails
    </Link>

    <div className="pull-right">
      <a href="">Settings</a>
      <a href="">Notifications</a>
      <Profile/>
    </div>
  </div>
);
