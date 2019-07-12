import React, { Component } from 'react';
import './switch-button.scss';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: null
    };
  }

  componentWillMount() {
    this.setState({ isChecked: this.props.isChecked });
  }

  render() {
    return (
      <div className="switch-container">
        <label>
          <input ref="switch"
                 checked={this.state.isChecked}
                 onChange={this._handleChange}
                 className="switch"
                 type="checkbox"/>
          <div>
            <div></div>
          </div>
        </label>
      </div>
    );
  }

  _handleChange() {
  }
}
