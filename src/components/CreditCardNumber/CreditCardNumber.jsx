import React from 'react';

const CreditCardNumber = () => {
  return (
    <div className="credit-card-number">
      <label>Credit card number:</label>
      <div className="input-group">
        <input type="text" className="form-control" id="card" />
        <div className="input-group-addon" id="type" />
      </div>
    </div>
  );
};

export default CreditCardNumber;
