import React from 'react';

const NameOnCard = () => {
  return (
    <div className="name-on-card">
      <label>Name on card:</label>
      <input type="text" className="form-control" style={{ textTransform: 'uppercase' }} />
    </div>
  );
};

export default NameOnCard;
