import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import './CreditCardNumber.scss';

class CreditCardNumber extends Component {
  static VISA_MASK = '9999 9999 9999 9999';
  static MASTERCARD_MASK = '9999 9999 9999 9999';
  static AMEX_MASK = '9999 999999 99999';
  static VISA = 'VISA';
  static MASTERCARD = 'MASTERCARD';
  static AMEX = 'AMERICAN EXPRESS';
  static UNKNOWN = 'UNKNOWN';

  static propTypes = {
    handleCardNumber: PropTypes.func,
    handleType: PropTypes.func,
    handleValidity: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      mask: CreditCardNumber.VISA_MASK,
      type: CreditCardNumber.UNKNOWN,
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
    this.props.handleCardNumber(value.toString().replace(/ /g, ''));
    let isValid = this.isValidByLuhn(value);
    if (/^3[47]/.test(value)) {
      isValid = isValid && length === 15;
      this.setState({ mask: CreditCardNumber.AMEX_MASK, isValid, type: CreditCardNumber.AMEX });
      this.props.handleType(CreditCardNumber.AMEX);
    } else if (/^4/.test(value)) {
      isValid = isValid && (length >= 13 && length <= 16);
      this.setState({ mask: CreditCardNumber.VISA_MASK, isValid, type: CreditCardNumber.VISA });
      this.props.handleType(CreditCardNumber.VISA);
    } else if (/^5/.test(value)) {
      isValid = isValid && length === 16;
      this.setState({
        mask: CreditCardNumber.MASTERCARD_MASK,
        isValid,
        type: CreditCardNumber.MASTERCARD,
      });
      this.props.handleType(CreditCardNumber.MASTERCARD);
    } else {
      // Invalid or Unsupported card
      this.setState({ type: CreditCardNumber.UNKNOWN });
      this.props.handleType(CreditCardNumber.UNKNOWN);
    }
    this.props.handleValidity(isValid);
  };

  render() {
    const { mask, isValid, type } = this.state;
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
          <div className="input-group-addon" id="type">
            <span
              className={classnames('glyphicon', 'glyphicon-question-sign')}
              style={{
                display: type === CreditCardNumber.UNKNOWN ? 'inline-block' : 'none',
              }}
            />
            <span
              className={classnames(
                'fa',
                'fa-cc-visa',
                'flag',
                type === CreditCardNumber.VISA ? 'flag--colored' : '',
              )}
            />
            <span
              className={classnames(
                'fa',
                'fa-cc-mastercard',
                'flag',
                type === CreditCardNumber.MASTERCARD ? 'flag--colored' : '',
              )}
            />
            <span
              className={classnames(
                'fa',
                'fa-cc-amex',
                'flag',
                type === CreditCardNumber.AMEX ? 'flag--colored' : '',
              )}
            />
            <span
              className={classnames(
                'glyphicon',
                isValid ? 'glyphicon-ok-sign' : 'glyphicon-remove-sign',
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCardNumber;
