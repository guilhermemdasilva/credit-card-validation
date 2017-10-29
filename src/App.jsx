import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import CreditCardInfoPage from '../src/components/CreditCardInfoPage/CreditCardInfoPage';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CreditCardInfoPage />
    </div>
  );
};

export default App;
