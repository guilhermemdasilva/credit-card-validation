import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Page from '../src/components/Page/Page';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Page />
    </div>
  );
};

export default App;
