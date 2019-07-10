import React from 'react';
import './style.scss';
import Profile from '../../assets/images/profile.png';

export default () => (
  <div id="profile">
    <img src={Profile} alt="profile pic"/>
    <div className="desc">
      <div className="name">Stephen Austin</div>
      <div className="occupation">Crypto Trader</div>
    </div>
    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 5L9 0H0L4.5 5Z" fill="#A7A9C0"/>
    </svg>

  </div>
);
