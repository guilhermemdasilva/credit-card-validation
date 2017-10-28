import React, { Component } from 'react';
import CreditCardNumber from './CreditCardNumber/CreditCardNumber';
import NameOnCard from './NameOnCard/NameOnCard';
import ExpiryDate from './ExpiryDate/ExpiryDate';
import CVV from './CVV/CVV';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: CreditCardNumber.UNKNOWN,
    };
  }

  onChangeType = param => {
    this.setState({ type: param });
  };

  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <form>
            <div className="form-group">
              <CreditCardNumber handleType={this.onChangeType} />
            </div>
            <div className="form-group">
              <NameOnCard />
            </div>
            <div className="clearfix">
              <div className="form-group form-group-mini">
                <ExpiryDate />
              </div>
              <div className="form-group form-group-mini">
                <CVV type={this.state.type} />
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
