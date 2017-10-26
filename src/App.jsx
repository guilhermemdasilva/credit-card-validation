import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Symbio Sweden</h1>
      </header>
      <p className="app-intro">This is where the components go.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
