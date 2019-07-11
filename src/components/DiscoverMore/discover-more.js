import React, { Component } from 'react';
import './discover-more.scss';
import active from '../../assets/images/active.svg';
import passive from '../../assets/images/passive.svg';

import brain from '../../assets/images/brain.svg';
import wallet from '../../assets/images/wallet.svg';
import startup from '../../assets/images/startup.svg';
import store from '../../assets/images/store.svg';
import compass from '../../assets/images/compass.svg';
import currencies from '../../assets/images/currencies.svg';

class DiscoverMore extends Component {
  render() {
    return (
      <div id="discoverMore">
        <div className="container">
          <div className="row">

            <div className="col-4 card">
              <div className="card__img">
                <img src={wallet} alt="" width="74" height="74"/>
              </div>
              Section 1
            </div>
            <div className="col-4 card">Section 1</div>
            <div className="col-4 card">Section 1</div>
            <div className="col-4 card">Section 1</div>
            <div className="col-4 card">Section 1</div>
            <div className="col-4 card">Section 1</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverMore;
