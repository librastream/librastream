import React from 'react';
import { Link } from 'react-router-dom';

import Profile from '../Profile';
import './header.scss';

export default () => (
  <div id="header" className="d-flex align-items-center sticky-top w-100">
    {/* left side - logo */}
    <div className="p-0-30">
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0L20.4741 0L21.6257 0C28.3463 0 31.7066 0 34.2736 1.30792C36.5315 2.4584 38.3673 4.29417 39.5177 6.55211C40.8257 9.11905 40.8257 12.4794 40.8257 19.2V21.6257C40.8257 28.3463 40.8257 31.7066 39.5177 34.2736C38.3673 36.5315 36.5315 38.3673 34.2736 39.5177C31.7066 40.8257 28.3463 40.8257 21.6257 40.8257H19.2C12.4794 40.8257 9.11905 40.8257 6.55211 39.5177C4.29417 38.3673 2.4584 36.5315 1.30792 34.2736C0 31.7066 0 28.3463 0 21.6257V19.2Z" fill="#01058A"/>
        <rect x="3.82567" y="2.82565" width="32" height="34" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0" transform="translate(0 -0.00341986) scale(0.0116279 0.0109439)"/>
          </pattern>
          <image id="image0" width="86" height="92" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABcCAYAAAD0zUKRAAADbUlEQVR4nO2bT4iNURjGfyNJmjJNmqwsZEFp8i8LScICZWOhLBTKSmE1SiQrC8pCspAkSRqR5E+EktTQMCFJkpVkJUmSvDrNud3Pbe7MOfd+7zczeX71Nov73XPO95zvnPuc72kQQgghhBBCCCGEEEKIf+nI1cPMWpFwDrAMWArMB7qATuA38BX4ArwChoDHwK+JNk8dHXlSTXUbyTBrgF1RzEWJ33kaxT0HvHYeX5E+YCZwCvhUYb/DhCc2oVaY2Q0ze2GtE7572swWJvbZTi0pjHXQzI6YWU+xvYkgbF+bgjYS2jplZrOdRJ1uZrdH6PeZmR0ws+7xFnaWmfWXLGqRATPb6SDs2YR+9+TqVNYeOws4D2wsqb2RWA5MAzYAh4E3JbR5DFgyxjWhz+8l9DU6TZ7Um05PaTPCqjgYl3ErT+lUMzuZuLqujcdWEG7sesWiFnloZluiUKmi9kaxUngRf9iydWrXx54A9mU2Ebzqj+hfg4/tAaZn2LGReAT0A3eBd02uCT56a7SAKX2FcV4EjlOxj90OrE68NgzyPXAJeAJ8bvg8CLsSWBtvfHnmWFbFGoqHi7fAz3h/oe15ca/MmbyXNVErIS6nudHvpS7XjRlLtStatgH3jaQ59+M4KvexFxIHeLFxgBnVE/2rl31rxsP44FC1sJsTbzb4wykl+Mw1ZnZvPEVtRdgpLWi7OOGaK8Bu4E8L7TfyANgEHIp7qBd3gB3AB8c+mhNncP4oyzTMerfT8bPX4XQX2jo6lieuSthahRckZwo3Gv6ucxK1WKvN7HIJL3nCFrM+pc9cynofG46Fe6ON2t/+9CUTLNq26FHHOprWqFm/8FryVmpHuT62qhfd3nRGH9sLLIiHjq74G/ItVvC2g8Bz4GPueP5XYd3JFbYVVyAk7PghYZ3wDhNrTPqUNheltHWU0jqUUlqHUkqrlNYHpbQVoJTWGaW0BRpT2rCNzFBKW0cpbZnE5aSU1klYpbQOwiqlTUApbR2ltEpp/UoprTNKaZ1RSjtZUUo7QZCwTkhYJ5TSOqGUto5SWodSSutQSmmV0vqglLYClNI6o5S2gP6XdgyU0pZJXE5KaZ2EVUrrIKxS2gS8UtqrSmkziTOolNZJ2FoppW2CUtpElNJOkJRWCPHfI4QQQgghhBBCCPEPwF8l4mZpJAndJgAAAABJRU5ErkJggg=="/>
        </defs>
      </svg>
      <h3 className="text-dark1 d-inline-block align-middle">LibraStream.io</h3>
      {/*<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <path d="M7 1L1 7L7 13" stroke="#A7A9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>*/}
      {/*</svg>*/}
    </div>

    {/* center side - navbar */}
    <div className="navbar mx-auto p-0 h-100">
      <Link className="selected" to="/">
        <h4 className="text-secondary p-0-20">Overview</h4>
      </Link>
      <Link to="/address-overview">
        <h4 className="text-secondary p-0-20">AddressOverview</h4>
      </Link>
      <Link to="/transaction-details">
        <h4 className="text-secondary p-0-20">TransactionDetails</h4>
      </Link>
    </div>

    {/* right side - features */}
    <div className="setting d-flex p-10-0 h-100">
      <div className="setting__item d-flex align-items-center text-secondary p-0-20 h-100">
        <h4 className="cursor-pointer">Log in</h4>
      </div>
      <div className="setting__item d-flex align-items-center text-secondary p-0-20 h-100">
        <div className="button cursor-pointer">Sign up</div>
      </div>
      {/*<a href="https://librastream.io" className="navbar__item">*/}
      {/*  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path fillRule="evenodd" clipRule="evenodd" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#A7A9C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
      {/*    <path fillRule="evenodd" clipRule="evenodd" d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95235 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87235 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95235 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87235 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z" stroke="#A7A9C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}
      {/*  </svg>*/}

      {/*</a>*/}
      {/*<a href="https://librastream.io" className="navbar__item position-relative">*/}
      {/*  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path d="M5.46487 16L4.59927 15.4993C4.4203 15.8087 4.42006 16.19 4.59864 16.4996C4.77721 16.8092 5.10746 17 5.46487 17V16ZM18.5351 16V17C18.8925 17 19.2228 16.8092 19.4014 16.4996C19.5799 16.19 19.5797 15.8087 19.4007 15.4993L18.5351 16ZM22 16H23C23 15.4477 22.5523 15 22 15V16ZM22 18V19C22.5523 19 23 18.5523 23 18H22ZM14.5965 20.5009L13.73 21L14.5965 20.5009ZM14.595 21.5018L13.73 21L14.595 21.5018ZM9.405 21.5018L8.54 22.0035L9.405 21.5018ZM7 9C7 6.23858 9.23858 4 12 4V2C8.13401 2 5 5.13401 5 9H7ZM7 14V9H5V14H7ZM6.33048 16.5007C6.75649 15.7643 7 14.9091 7 14H5C5 14.5481 4.85393 15.059 4.59927 15.4993L6.33048 16.5007ZM18.5351 15H5.46487V17H18.5351V15ZM17 14C17 14.9091 17.2435 15.7643 17.6695 16.5007L19.4007 15.4993C19.1461 15.059 19 14.5481 19 14H17ZM17 9V14H19V9H17ZM12 4C14.7614 4 17 6.23858 17 9H19C19 5.13401 15.866 2 12 2V4ZM22 15C21.4477 15 21 14.5523 21 14H19C19 15.6569 20.3431 17 22 17V15ZM21 14V9H19V14H21ZM21 9C21 4.02944 16.9706 0 12 0V2C15.866 2 19 5.13401 19 9H21ZM12 0C7.02944 0 3 4.02944 3 9H5C5 5.13401 8.13401 2 12 2V0ZM3 9V14H5V9H3ZM3 14C3 14.5523 2.55228 15 2 15V17C3.65685 17 5 15.6569 5 14H3ZM2 15C0.895431 15 0 15.8954 0 17H2V15ZM0 17C0 18.1046 0.895431 19 2 19V17H0ZM2 19H22V17H2V19ZM23 18V16H21V18H23ZM10.27 19C9.55474 19 8.89392 19.382 8.53693 20.0018L10.27 21V19ZM13.73 19H10.27V21H13.73V19ZM15.4631 20.0018C15.1061 19.382 14.4453 19 13.73 19V21L15.4631 20.0018ZM15.46 22.0035C15.8189 21.3848 15.8201 20.6216 15.4631 20.0018L13.73 21L15.46 22.0035ZM12 23.9965C13.4261 23.9965 14.7444 23.2372 15.46 22.0035L13.73 21C13.3722 21.6168 12.7131 21.9965 12 21.9965V23.9965ZM8.54 22.0035C9.2556 23.2372 10.5739 23.9965 12 23.9965V21.9965C11.2869 21.9965 10.6278 21.6168 10.27 21L8.54 22.0035ZM8.53693 20.0018C8.17993 20.6216 8.1811 21.3848 8.54 22.0035L10.27 21L8.53693 20.0018Z" fill="#A7A9C0"/>*/}
      {/*  </svg>*/}
      {/*  <svg id="badge" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <path d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z" fill="#01058A"/>*/}
      {/*    <path d="M7.33251 8.121H8.55651C8.55651 7.953 8.57151 7.785 8.60151 7.617C8.63751 7.443 8.69451 7.287 8.77251 7.149C8.85051 7.005 8.95251 6.891 9.07851 6.807C9.21051 6.717 9.36951 6.672 9.55551 6.672C9.83151 6.672 10.0565 6.759 10.2305 6.933C10.4105 7.101 10.5005 7.338 10.5005 7.644C10.5005 7.836 10.4555 8.007 10.3655 8.157C10.2815 8.307 10.1735 8.442 10.0415 8.562C9.91551 8.682 9.77451 8.793 9.61851 8.895C9.46251 8.991 9.31551 9.087 9.17751 9.183C8.90751 9.369 8.64951 9.552 8.40351 9.732C8.16351 9.912 7.95351 10.11 7.77351 10.326C7.59351 10.536 7.44951 10.776 7.34151 11.046C7.23951 11.316 7.18851 11.634 7.18851 12H11.8145V10.902H8.83551C8.99151 10.686 9.17151 10.497 9.37551 10.335C9.57951 10.173 9.78951 10.023 10.0055 9.885C10.2215 9.741 10.4345 9.597 10.6445 9.453C10.8605 9.309 11.0525 9.15 11.2205 8.976C11.3885 8.796 11.5235 8.592 11.6255 8.364C11.7275 8.136 11.7785 7.863 11.7785 7.545C11.7785 7.239 11.7185 6.963 11.5985 6.717C11.4845 6.471 11.3285 6.264 11.1305 6.096C10.9325 5.928 10.7015 5.799 10.4375 5.709C10.1795 5.619 9.90651 5.574 9.61851 5.574C9.24051 5.574 8.90451 5.64 8.61051 5.772C8.32251 5.898 8.08251 6.078 7.89051 6.312C7.69851 6.54 7.55451 6.81 7.45851 7.122C7.36251 7.428 7.32051 7.761 7.33251 8.121Z" fill="white"/>*/}
      {/*  </svg>*/}

      {/*</a>*/}
      {/*<Profile/>*/}
    </div>
  </div>
);
