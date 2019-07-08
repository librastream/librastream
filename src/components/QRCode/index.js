import React from 'react';

import './style.scss';
import QRCode from '../../assets/images/qrcode.png';

export default () => (
  <div id="qrcode">
    <div className="qrcode">
      <img src={QRCode} alt="image"/>
    </div>
  </div>
);
