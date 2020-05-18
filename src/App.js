import React from 'react';
import logo from './logo.svg';
import testImage from './img/fredrik_eklund.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>MY react app lel</h1>
     <h2>Fredrik Eklundh, Rasmus Öberg</h2>
      <img src={testImage} alt="test picture"/>
    </div>
  );
}

export default App;
