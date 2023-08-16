import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import ClickButton from './ClickButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <ClickButton />
      </header>
    </div>
  );
}

export default App;

