import React from 'react';
import CreditCardInfoPanel from '../CreditCardInfoPanel/CreditCardInfoPanel';

const CreditCardInfoPage = () => {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="page-header">
          <h1>Order now</h1>
        </div>

        <CreditCardInfoPanel />
      </div>
    </div>
  );
};

export default CreditCardInfoPage;
