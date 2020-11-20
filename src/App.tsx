import React from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';
import { Sample } from './components/molecules/Sample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" height="70px"/>
      </header>
      <div className="Main">
        <Sample />
      </div>
    </div>
  );
}

export default App;
