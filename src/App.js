import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import testImage from './img/fredrik_eklund.jpg';
import './App.css';
import championsFile from './data/champions.json';

function App() {

//const API_KEY = "RGAPI-5fbb0437-dcda-4380-bd06-e08c116c56c0"

//const exampleRequest = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/1hithoodi?api_key=RGAPI-5fbb0437-dcda-4380-bd06-e08c116c56c0`;

let summonerID;
let champArray = [];
let test;

useEffect(() => {
  getSummonerIDFromName();
  //getChampionMasteryFromID();
  champArray = Object.entries(championsFile);
  let array = champArray[0];
  let arr2 = Object.entries(array);
  test = Object.entries(arr2[1][1])
  console.log(test[0][1].id)
  console.log(test.length)
  for(let i = 0; i < test.length; i++){
    if(test[i][1].key == 34){
      console.log(test[i][1].id)
    }
  }
}, []);

let summonerName = "thisisyoloq";
let api_key = "RGAPI-a86283a2-57fd-491e-af18-0486f20c37c2";
const getSummonerIDFromName = async () => {
  //console.log("first");
  const response = await fetch
  ("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+api_key);
  const data = await response.json();
  console.log(data);
  summonerID = data.id;
  console.log(data.name);
  console.log(data.id);
  const response1 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+summonerID+"?api_key="+api_key);
  const allChampions = await response1.json();
  console.log(allChampions);
  console.log(allChampions.length);
  for(let i = 0; i < allChampions.length; i++){
    let currentId = allChampions[i].championId;
    let currentPts = allChampions[i].championPoints;
    console.log(allChampions[i].championId);
    for(let j = 0; j < test.length; j++){
      if(test[j][1].key == currentId){
        console.log(test[j][1].id);
      }
    }
  }
}

const getChampionMasteryFromID = async () => {
  let t1 = "AqxFkaEqZ_iL_dYU4KKB3NCRGjhK8LxgDu4J3cKrS2QH8YA";
  const response1 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+summonerID+"?api_key="+api_key);
  const allChampions = await response1.json();
  console.log(allChampions);
  console.log(allChampions[0].championPoints);
  
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
