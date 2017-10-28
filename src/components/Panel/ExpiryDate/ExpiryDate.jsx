import React from 'react';
import InputMask from 'react-input-mask';

const ExpiryDate = () => {
  return (
    <div className="expiry-date">
      <label>Expiry date:</label>
      <InputMask className="form-control" mask="99/99" placeholder="MM/YY" />
    </div>
  );
};

export default ExpiryDate;
