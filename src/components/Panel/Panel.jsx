import React from 'react';

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Credit card number:</label>
            <div className="input-group">
              <input type="text" className="form-control" id="card" />
              <div className="input-group-addon" id="type" />
            </div>
          </div>
          <div className="form-group">
            <label>Name on card:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="clearfix">
            <div className="form-group form-group-mini">
              <label>Expiry date:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group form-group-mini">
              <label>CVV:</label>
              <input type="text" className="form-control" />
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
