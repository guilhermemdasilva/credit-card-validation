import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

class ExpiryDate extends Component {
  static propTypes = {
    handleExpiry: PropTypes.func,
  };

  handleOnChange = event => {
    this.props.handleExpiry(event.target.value);
  };

  render() {
    return (
      <div className="expiry-date">
        <label>Expiry date:</label>
        <InputMask
          className="form-control"
          mask="99/99"
          placeholder="MM/YY"
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default ExpiryDate;
