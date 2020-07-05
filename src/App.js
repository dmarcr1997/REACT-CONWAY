import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './containers/Blocks';
function App() {
  return (
    <div className="App">
      <Blocks count={100}/>
    </div>
  );
}

export default App;
