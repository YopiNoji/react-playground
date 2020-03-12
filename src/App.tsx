import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './Components/HelloMessage'
import Board from './Components/Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main">
        <HelloMessage name={'aa'} />
        <Board />
      </div>
    </div>
  );
}

export default App;
