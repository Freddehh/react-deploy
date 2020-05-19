import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import testImage from './img/fredrik_eklund.jpg';
import './App.css';

function App() {

//const API_KEY = "RGAPI-5fbb0437-dcda-4380-bd06-e08c116c56c0"

//const exampleRequest = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/1hithoodi?api_key=RGAPI-5fbb0437-dcda-4380-bd06-e08c116c56c0`;

useEffect(() => {
  getApiRequest();
}, []);


const getApiRequest = async () => {
  console.log("1");
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/this%20is%20yoloq?api_key=RGAPI-810f9b48-50c8-4e25-9d2d-a45e4e807cef");
  const data = await response.json();
  console.log(data);
  console.log("Hej");
}


  return (
    <div className="App">
     <h1>MY react app lel</h1>
     <h2>Fredrik Eklundh, Rasmus Öberg</h2>
      <img src={testImage} alt="test picture"/>
    </div>
  );
}

export default App;
