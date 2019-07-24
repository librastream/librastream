import React, { Component } from 'react';
import './discover-more.scss';
import active from '../../assets/images/active.png';
import passive from '../../assets/images/passive.png';

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
            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={active} alt="" width="122" height="122"/>
                  <img src={wallet} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Wallets</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.2109 0.4375C17.9688 0.4375 19.3359 0.945312 20.3516 1.92188C21.3672 2.89844 21.875 4.22656 21.875 5.94531C21.875 7.11719 21.4453 8.32812 20.625 9.53906C20.1953 10.1641 19.7266 10.75 19.1797 11.2578L11.875 18.3281C11.6797 18.4844 11.4844 18.5625 11.25 18.5625C11.0156 18.5625 10.7812 18.4844 10.625 18.3281L3.32031 11.2578C2.85156 10.8672 2.42188 10.3594 1.95312 9.65625C1.05469 8.40625 0.625 7.15625 0.625 5.94531C0.625 4.22656 1.09375 2.89844 2.10938 1.92188C3.125 0.945312 4.49219 0.4375 6.28906 0.4375C7.1875 0.4375 8.16406 0.75 9.17969 1.375C9.88281 1.80469 10.5469 2.35156 11.25 2.97656C11.9141 2.35156 12.6172 1.80469 13.3203 1.375C14.3359 0.75 15.2734 0.4375 16.2109 0.4375Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>

            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={passive} alt="passive" width="122" height="122"/>
                  <img src={currencies} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Exchanges</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0391 18.0547C10.3516 18.4062 10.7812 18.5625 11.25 18.5625C11.7188 18.5625 12.1094 18.4062 12.4609 18.0547L18.9062 11.7266C19.6875 11.0234 20.3125 10.2031 20.7812 9.26562C21.2891 8.28906 21.5625 7.3125 21.5625 6.33594C21.5625 4.53906 21.0156 3.09375 19.9219 2.03906C18.8281 0.984375 17.4219 0.4375 15.625 0.4375C14.2188 0.4375 12.7344 1.10156 11.25 2.39062C9.72656 1.10156 8.28125 0.4375 6.875 0.4375C5 0.4375 3.55469 0.984375 2.5 2.03906C1.44531 3.13281 0.9375 4.53906 0.9375 6.33594C0.9375 7.54688 1.32812 8.75781 2.1875 10.0078C2.61719 10.7109 3.08594 11.2969 3.63281 11.7656L10.0391 18.0547ZM4.92188 10.3984C4.33594 9.85156 3.86719 9.22656 3.47656 8.52344C3.00781 7.74219 2.8125 7.03906 2.8125 6.33594C2.8125 5.04688 3.16406 4.07031 3.86719 3.36719C4.57031 2.66406 5.54688 2.3125 6.875 2.3125C7.61719 2.3125 8.4375 2.66406 9.33594 3.28906C9.80469 3.64062 10.3906 4.14844 11.0938 4.8125L11.25 4.96875L11.4062 4.8125C12.1094 4.14844 12.6953 3.64062 13.1641 3.25C14.0234 2.625 14.8438 2.3125 15.625 2.3125C16.9141 2.3125 17.9297 2.66406 18.6328 3.36719C19.3359 4.07031 19.6875 5.04688 19.6875 6.33594C19.6875 7.03906 19.4531 7.78125 19.0234 8.5625C18.6328 9.22656 18.1641 9.85156 17.5781 10.4375L11.25 16.6094L4.92188 10.3984Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>

            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={passive} alt="passive" width="122" height="122"/>
                  <img src={compass} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Explorers</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0391 18.0547C10.3516 18.4062 10.7812 18.5625 11.25 18.5625C11.7188 18.5625 12.1094 18.4062 12.4609 18.0547L18.9062 11.7266C19.6875 11.0234 20.3125 10.2031 20.7812 9.26562C21.2891 8.28906 21.5625 7.3125 21.5625 6.33594C21.5625 4.53906 21.0156 3.09375 19.9219 2.03906C18.8281 0.984375 17.4219 0.4375 15.625 0.4375C14.2188 0.4375 12.7344 1.10156 11.25 2.39062C9.72656 1.10156 8.28125 0.4375 6.875 0.4375C5 0.4375 3.55469 0.984375 2.5 2.03906C1.44531 3.13281 0.9375 4.53906 0.9375 6.33594C0.9375 7.54688 1.32812 8.75781 2.1875 10.0078C2.61719 10.7109 3.08594 11.2969 3.63281 11.7656L10.0391 18.0547ZM4.92188 10.3984C4.33594 9.85156 3.86719 9.22656 3.47656 8.52344C3.00781 7.74219 2.8125 7.03906 2.8125 6.33594C2.8125 5.04688 3.16406 4.07031 3.86719 3.36719C4.57031 2.66406 5.54688 2.3125 6.875 2.3125C7.61719 2.3125 8.4375 2.66406 9.33594 3.28906C9.80469 3.64062 10.3906 4.14844 11.0938 4.8125L11.25 4.96875L11.4062 4.8125C12.1094 4.14844 12.6953 3.64062 13.1641 3.25C14.0234 2.625 14.8438 2.3125 15.625 2.3125C16.9141 2.3125 17.9297 2.66406 18.6328 3.36719C19.3359 4.07031 19.6875 5.04688 19.6875 6.33594C19.6875 7.03906 19.4531 7.78125 19.0234 8.5625C18.6328 9.22656 18.1641 9.85156 17.5781 10.4375L11.25 16.6094L4.92188 10.3984Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>

            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={passive} alt="passive" width="122" height="122"/>
                  <img src={store} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Merchants</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0391 18.0547C10.3516 18.4062 10.7812 18.5625 11.25 18.5625C11.7188 18.5625 12.1094 18.4062 12.4609 18.0547L18.9062 11.7266C19.6875 11.0234 20.3125 10.2031 20.7812 9.26562C21.2891 8.28906 21.5625 7.3125 21.5625 6.33594C21.5625 4.53906 21.0156 3.09375 19.9219 2.03906C18.8281 0.984375 17.4219 0.4375 15.625 0.4375C14.2188 0.4375 12.7344 1.10156 11.25 2.39062C9.72656 1.10156 8.28125 0.4375 6.875 0.4375C5 0.4375 3.55469 0.984375 2.5 2.03906C1.44531 3.13281 0.9375 4.53906 0.9375 6.33594C0.9375 7.54688 1.32812 8.75781 2.1875 10.0078C2.61719 10.7109 3.08594 11.2969 3.63281 11.7656L10.0391 18.0547ZM4.92188 10.3984C4.33594 9.85156 3.86719 9.22656 3.47656 8.52344C3.00781 7.74219 2.8125 7.03906 2.8125 6.33594C2.8125 5.04688 3.16406 4.07031 3.86719 3.36719C4.57031 2.66406 5.54688 2.3125 6.875 2.3125C7.61719 2.3125 8.4375 2.66406 9.33594 3.28906C9.80469 3.64062 10.3906 4.14844 11.0938 4.8125L11.25 4.96875L11.4062 4.8125C12.1094 4.14844 12.6953 3.64062 13.1641 3.25C14.0234 2.625 14.8438 2.3125 15.625 2.3125C16.9141 2.3125 17.9297 2.66406 18.6328 3.36719C19.3359 4.07031 19.6875 5.04688 19.6875 6.33594C19.6875 7.03906 19.4531 7.78125 19.0234 8.5625C18.6328 9.22656 18.1641 9.85156 17.5781 10.4375L11.25 16.6094L4.92188 10.3984Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>

            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={passive} alt="passive" width="122" height="122"/>
                  <img src={startup} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Projects</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0391 18.0547C10.3516 18.4062 10.7812 18.5625 11.25 18.5625C11.7188 18.5625 12.1094 18.4062 12.4609 18.0547L18.9062 11.7266C19.6875 11.0234 20.3125 10.2031 20.7812 9.26562C21.2891 8.28906 21.5625 7.3125 21.5625 6.33594C21.5625 4.53906 21.0156 3.09375 19.9219 2.03906C18.8281 0.984375 17.4219 0.4375 15.625 0.4375C14.2188 0.4375 12.7344 1.10156 11.25 2.39062C9.72656 1.10156 8.28125 0.4375 6.875 0.4375C5 0.4375 3.55469 0.984375 2.5 2.03906C1.44531 3.13281 0.9375 4.53906 0.9375 6.33594C0.9375 7.54688 1.32812 8.75781 2.1875 10.0078C2.61719 10.7109 3.08594 11.2969 3.63281 11.7656L10.0391 18.0547ZM4.92188 10.3984C4.33594 9.85156 3.86719 9.22656 3.47656 8.52344C3.00781 7.74219 2.8125 7.03906 2.8125 6.33594C2.8125 5.04688 3.16406 4.07031 3.86719 3.36719C4.57031 2.66406 5.54688 2.3125 6.875 2.3125C7.61719 2.3125 8.4375 2.66406 9.33594 3.28906C9.80469 3.64062 10.3906 4.14844 11.0938 4.8125L11.25 4.96875L11.4062 4.8125C12.1094 4.14844 12.6953 3.64062 13.1641 3.25C14.0234 2.625 14.8438 2.3125 15.625 2.3125C16.9141 2.3125 17.9297 2.66406 18.6328 3.36719C19.3359 4.07031 19.6875 5.04688 19.6875 6.33594C19.6875 7.03906 19.4531 7.78125 19.0234 8.5625C18.6328 9.22656 18.1641 9.85156 17.5781 10.4375L11.25 16.6094L4.92188 10.3984Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>

            {/* column */}
            <div className="col-4 p-r-55 m-t-55">
              <div className="card text-center">
                <div className="card__header">
                  <img src={passive} alt="passive" width="122" height="122"/>
                  <img src={brain} alt="brain" width="37" height="37"/>
                </div>
                <div className="card__body">
                  <h4 className="fs-22 color-blue2 font-weight-bold">Knowledge</h4>
                  <h4 className="color-dark1 a26">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit. Sed blandit <br/>
                    feugiat porta. Aliquam <br/>
                  </h4>
                  <h4 className="color-blue6">
                    <p>Bitcoin.org</p>
                    <p>99 Libra’s but you ain’t 1</p>
                    <p>Librastram.io</p>
                    <p>walletexample</p>
                  </h4>
                </div>
                <div className="card__footer flex-center-x mt-auto">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0391 18.0547C10.3516 18.4062 10.7812 18.5625 11.25 18.5625C11.7188 18.5625 12.1094 18.4062 12.4609 18.0547L18.9062 11.7266C19.6875 11.0234 20.3125 10.2031 20.7812 9.26562C21.2891 8.28906 21.5625 7.3125 21.5625 6.33594C21.5625 4.53906 21.0156 3.09375 19.9219 2.03906C18.8281 0.984375 17.4219 0.4375 15.625 0.4375C14.2188 0.4375 12.7344 1.10156 11.25 2.39062C9.72656 1.10156 8.28125 0.4375 6.875 0.4375C5 0.4375 3.55469 0.984375 2.5 2.03906C1.44531 3.13281 0.9375 4.53906 0.9375 6.33594C0.9375 7.54688 1.32812 8.75781 2.1875 10.0078C2.61719 10.7109 3.08594 11.2969 3.63281 11.7656L10.0391 18.0547ZM4.92188 10.3984C4.33594 9.85156 3.86719 9.22656 3.47656 8.52344C3.00781 7.74219 2.8125 7.03906 2.8125 6.33594C2.8125 5.04688 3.16406 4.07031 3.86719 3.36719C4.57031 2.66406 5.54688 2.3125 6.875 2.3125C7.61719 2.3125 8.4375 2.66406 9.33594 3.28906C9.80469 3.64062 10.3906 4.14844 11.0938 4.8125L11.25 4.96875L11.4062 4.8125C12.1094 4.14844 12.6953 3.64062 13.1641 3.25C14.0234 2.625 14.8438 2.3125 15.625 2.3125C16.9141 2.3125 17.9297 2.66406 18.6328 3.36719C19.3359 4.07031 19.6875 5.04688 19.6875 6.33594C19.6875 7.03906 19.4531 7.78125 19.0234 8.5625C18.6328 9.22656 18.1641 9.85156 17.5781 10.4375L11.25 16.6094L4.92188 10.3984Z"
                      fill="#01058A"/>
                  </svg>
                  <h4 className="color-dark1 a26">Remind Me</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverMore;
