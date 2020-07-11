import React from 'react';
import './App.css';
import BlocksContainer from './containers/BlocksContainer';
function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <BlocksContainer />
    </div>
  );
}

export default App;
