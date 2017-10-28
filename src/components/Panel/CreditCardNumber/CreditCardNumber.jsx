import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

class CreditCardNumber extends Component {
  static VISA_MASK = '9999 9999 9999 9999';
  static MASTERCARD_MASK = '9999 9999 9999 9999';
  static AMEX_MASK = '9999 999999 99999';
  static VISA = 'VISA';
  static MASTERCARD = 'MASTERCARD';
  static AMEX = 'AMERICAN EXPRESS';
  static UNKNOWN = 'UNKNOWN';

  static propTypes = {
    handleType: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      mask: CreditCardNumber.VISA_MASK,
    };
  }

  isValidByLuhn = creditCardNumber => {
    let sum = 0;
    const digitsArray = creditCardNumber
      .toString()
      .replace(/ /g, '')
      .split('')
      .map(Number);
    const { length } = creditCardNumber.toString().replace(/ /g, '');
    const parity = length % 2;
    for (let i = 0; i < length; i += 1) {
      let digit = digitsArray[i];
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  handleOnChange = event => {
    const { value } = event.target;
    const { length } = value.toString().replace(/ /g, '');
    let isValid = this.isValidByLuhn(value);
    if (/^3[47]/.test(value)) {
      isValid = isValid && length === 15;
      this.setState({ mask: CreditCardNumber.AMEX_MASK, isValid });
      this.props.handleType(CreditCardNumber.AMEX);
    } else if (/^4/.test(value)) {
      isValid = isValid && (length >= 13 && length <= 16);
      this.setState({ mask: CreditCardNumber.VISA_MASK, isValid });
      this.props.handleType(CreditCardNumber.VISA);
    } else if (/^5/.test(value)) {
      isValid = isValid && length === 16;
      this.setState({
        mask: CreditCardNumber.MASTERCARD_MASK,
        isValid,
      });
      this.props.handleType(CreditCardNumber.MASTERCARD);
    } else {
      // Invalid or Unsupported card
      this.props.handleType(CreditCardNumber.UNKNOWN);
    }
  };

  render() {
    const { mask, isValid } = this.state;
    return (
      <div className="credit-card-number">
        <label>Credit card number:</label>
        <div className="input-group">
          <InputMask
            className="form-control"
            id="card"
            maskChar=""
            mask={mask}
            onChange={this.handleOnChange}
          />
          <div className="input-group-addon" id="type" value={isValid} />
        </div>
      </div>
    );
  }
}

export default CreditCardNumber;
