import React from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';
import { TableWithData } from './components/molecules/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" height="70px"/>
      </header>
      <div className="Main">
        <TableWithData />
      </div>
    </div>
  );
}

export default App;
