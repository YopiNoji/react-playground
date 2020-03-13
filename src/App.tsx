import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayGround from './Components/PlayGround'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main">
        <PlayGround />
      </div>
    </div>
  );
}

export default App;
