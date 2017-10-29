import React, { Component } from 'react';
import CreditCardNumber from './CreditCardNumber/CreditCardNumber';
import NameOnCard from './NameOnCard/NameOnCard';
import ExpiryDate from './ExpiryDate/ExpiryDate';
import CVV from './CVV/CVV';

class Panel extends Component {
  static API = 'http://localhost:8081/api/register';
  constructor(props) {
    super(props);
    this.state = {
      type: CreditCardNumber.UNKNOWN,
      cardnumber: '',
      name: '',
      expiry: '',
      cvv: '',
      isValid: false,
    };
  }

  onChangeType = param => this.setState({ type: param });

  onChangeCardNumber = param => this.setState({ cardnumber: param });
  onChangeName = param => this.setState({ name: param });
  onChangeExpiry = param => this.setState({ expiry: param });
  onChangeCVV = param => this.setState({ cvv: param });
  onChangeValidity = param => this.setState({ isValid: param });

  handleOnSubmit = evt => {
    evt.preventDefault();

    const request = {
      cardnumber: this.state.cardnumber,
      name: this.state.name,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
    };

    if (
      !this.state.isValid ||
      request.cardnumber === '' ||
      request.name === '' ||
      request.expiry === '' ||
      request.cvv === ''
    ) {
      // eslint-disable-next-line no-alert
      alert('Please, fill everything with VALID information before submit!');
    } else {
      fetch(Panel.API, {
        body: JSON.stringify(request),
        headers: {
          Accept: 'application/json',
        },
        method: 'PUT',
      }).then(response => {
        if (response.ok) {
          this.setState({
            cardnumber: '',
            name: '',
            expiry: '',
            cvv: '',
          });
        }
        window.location.reload();
        // eslint-disable-next-line no-alert
        alert('Credit Card Information Submitted!');
      });
    }
  };

  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <form onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <CreditCardNumber
                handleCardNumber={this.onChangeCardNumber}
                handleType={this.onChangeType}
                handleValidity={this.onChangeValidity}
              />
            </div>
            <div className="form-group">
              <NameOnCard handleName={this.onChangeName} />
            </div>
            <div className="clearfix">
              <div className="form-group form-group-mini">
                <ExpiryDate handleExpiry={this.onChangeExpiry} />
              </div>
              <div className="form-group form-group-mini">
                <CVV handleCVV={this.onChangeCVV} type={this.state.type} />
              </div>
            </div>
            <br />
            <p>
              <button className="btn btn-primary">Submit</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Panel;
