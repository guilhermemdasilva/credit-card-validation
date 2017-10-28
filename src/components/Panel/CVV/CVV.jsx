import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import CreditCardNumber from '../CreditCardNumber/CreditCardNumber';

class CVV extends Component {
  static propTypes = {
    type: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      mask: '999',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type === CreditCardNumber.AMEX) {
      this.setState({ mask: '9999' });
    } else {
      this.setState({ mask: '999' });
    }
  }

  render() {
    const { mask } = this.state;
    return (
      <div className="cvv">
        <label>CVV:</label>
        <InputMask className="form-control" mask={mask} />
      </div>
    );
  }
}

export default CVV;
