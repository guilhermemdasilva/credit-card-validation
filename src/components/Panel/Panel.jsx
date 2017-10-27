import React from 'react';
import CreditCardNumber from '../CreditCardNumber/CreditCardNumber';
import NameOnCard from '../NameOnCard/NameOnCard';
import ExpiryDate from '../ExpiryDate/ExpiryDate';
import CVV from '../CVV/CVV';

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-body">
        <form>
          <div className="form-group">
            <CreditCardNumber />
          </div>
          <div className="form-group">
            <NameOnCard />
          </div>
          <div className="clearfix">
            <div className="form-group form-group-mini">
              <ExpiryDate />
            </div>
            <div className="form-group form-group-mini">
              <CVV />
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
};

export default Panel;
