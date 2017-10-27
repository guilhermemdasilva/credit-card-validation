import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <h1 className="logo">Symbio Sweden</h1>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="page-header">
            <h1>Order now</h1>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default App;
