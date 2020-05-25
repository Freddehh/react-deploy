import React, {useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import SearchBar from './SearchBar';
import Header from './Header';
import FreeChampRotation from './FreeChampRotation'
import testImage from './img/fredrik_eklund.jpg';
import './App.css';
import championsFile from './data/champions.json';
import ChallengerLadders from './ChallengerLadders';
import MasteryPoints from './MasteryPoints';
import LastSearches from './LastSearches';
import Profile from './Profile';



function App() {

let textInput = React.createRef();
let reigon = React.createRef();
let [showFirstPage, setShowFirstPage] = useState(false);
let [showSecondPage, setShowSecondPage] = useState(true);
let summonerID;
let champArray = [];
let test;
let freeRotation;
let [champs, setChamps] = useState('');
let [lastSearch, setLastSearch] = useState('');
let [topTenMastery, setTopTenMastery] = useState('');
let localStorage = window.localStorage;
let searchArr;
let pageSwap;
let [challengers, setChallengers] = useState('');
let [stats, setStats] = useState('');
let summonerName = "thisisyoloq";
let api_key = "RGAPI-e7103e34-2665-4d90-b3dd-cbaf91ddda26";
let server = "euw1";

useEffect(() => {
  let champMap = champsToMap(); //all champs with id+name in map
  let top10mastery = getSummonerFromName(champMap);
  //getMatchHistory(summonerName)
  freeRotation = getFreeRotation(champMap); //15 free-to-play champs
  console.log(freeRotation);
  console.log(top10mastery);
  let rank10 = getLeaderboards(); //10highest ranked players
  localStorage.removeItem('pageSwap');
}, []);



const getMatchHistory = async () => {
  let summonerSearched = textInput.current.value;
  console.log(summonerSearched)
  const response = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerSearched+"?api_key="+api_key);
  const data = await response.json();

  fetch("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerSearched+"?api_key="+api_key)
  .then(res => res.json())
  .then(id => {
    console.log(1000, id);
  })

  console.log('sök === ', summonerSearched)

  let accountID = data.accountId;

  //fetches match history information  ==>> change endindex to fetch more games
  const response2 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?endIndex=1&api_key="+api_key);
  const data1 = await response2.json();
  console.log(data1)
  let matches = data1.matches;
  console.log(matches)
  let gameId = matches[0].gameId;
  let sumName = data.name;
  let sumLevel = data.summonerLevel;
 
  //fetches specific match history
  const response3 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/match/v4/matches/"+gameId+"?api_key="+api_key);
  const data2 = await response3.json();
  console.log(data2);
  let arrayOfPlayers = data2.participantIdentities;
  let playerPosition;
  for(let i = 0; i < arrayOfPlayers.length; i++){
    if(accountID === arrayOfPlayers[i].player.accountId){
      playerPosition = i;
      console.log(arrayOfPlayers[i].player.accountId, accountID);
      console.log(i);
    }
    console.log(arrayOfPlayers[i].player.accountId)
  }
  console.log(arrayOfPlayers);
  let stats = data2.participants[playerPosition].stats;
  console.log(stats);
  let kda = (stats.assists + stats.kills) / stats.deaths;
  let statsObj = {kills:stats.kills, deaths: stats.deaths, assists:stats.assists, kda:kda, fbKill:stats.firstBloodKill, fbAssist:stats.firstBloodAssist, level:stats.champLevel,
      goldEarned:stats.goldEarned, goldSpent:stats.goldSpent, fbInhib:stats.firstInhibitorKill, longestAlive:stats.longestTimeSpentLiving, totalDmg:stats.totalDamageDealt, 
      totalDmgChamp:stats.totalDamageDealtToChampions, amountOfCC:stats.timeCCingOthers, lengthOfCC:stats.totalTimeCrowdControlDealt, totalHeal:stats.totalHeal, 
      doubleKills:stats.doubleKills, triple:stats.tripleKills, quadra:stats.quadraKills, penta:stats.pentaKills, sightWardsBought:stats.sightWardsBoughtInGame, 
      killingSprees:stats.killingSprees, multiKill:stats.largestMultiKill, largestKillingSpree:stats.largestKillingSpree, cs:stats.totalMinionsKilled, 
      visionWardsBought:stats.visionWardsBoughtInGame, name:sumName, sumLevel:sumLevel};
  console.log(statsObj);
  setStats(stats = statsObj);

  //textInput.current.value = "";
  //return statsObj;
}

const getSummonerFromName = async (champMap) => {
  //fetches the accountinfo/ids for given summoner --> todo = dynamic serverselection
  const response = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+api_key);
  const data = await response.json();

  fetch("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+api_key)
  .then(res => res.json())
  .then(id => {
    console.log(1000, id);
  })

  //fetches the mastery info on all champs for given summoner  --> todo = dynamic serverselection
  let top10mastery = [];
  const response1 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+data.id+"?api_key="+api_key);
  const allChampions = await response1.json();
  for(let i = 0; i < 10; i++){
    let currentId = allChampions[i].championId;
    let currentPts = allChampions[i].championPoints;
    let currentLevel = allChampions[i].championLevel;
    let id = currentId.toString();
    let name = champMap.get(id);
    let champion = {name:name, points:currentPts, level:currentLevel};
    top10mastery.push(champion);
    console.log(currentId, currentPts, name, currentLevel);
  }
  setTopTenMastery(topTenMastery = top10mastery);
  return top10mastery; 

  //console.log(data); 

  //fetch('https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+api_key')
  //let accountID = data.accountId;
  /*
  //fetches match history information  ==>> change endindex to fetch more games
  const response2 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/match/v4/matchlists/by-account/"+accountID+"?endIndex=1&api_key="+api_key);
  const data1 = await response2.json();
  let matches = data1.matches;
  let gameId = matches[0].gameId;
 
  //fetches specific match history
  const response3 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/match/v4/matches/"+gameId+"?api_key="+api_key);
  const data2 = await response3.json();
  console.log(data2);
  let arrayOfPlayers = data2.participantIdentities;
  let playerPosition;
  for(let i = 0; i < arrayOfPlayers.length; i++){
    if(accountID === arrayOfPlayers[i].player.accountId){
      playerPosition = i;
      console.log(arrayOfPlayers[i].player.accountId, accountID);
      console.log(i);
    }
    console.log(arrayOfPlayers[i].player.accountId)
  }
  console.log(arrayOfPlayers);
  let stats = data2.participants[playerPosition].stats;
  console.log(stats);
  let kda = (stats.assists + stats.kills) / stats.deaths;
  let statsObj = {kills:stats.kills, deaths: stats.deaths, assists:stats.assists, kda:kda, fb:stats.firstBloodKill, fbAssist:stats.firstBloodAssist, level:stats.champLevel,
      goldEarned:stats.goldEarned, goldSpent:stats.goldSpent, fbInhib:stats.firstInhibitorKill, longestAlive:stats.longestTimeSpentLiving, totalDmg:stats.totalDamageDealt, 
      totalDmgchamp:stats.totalDamageDealtToChampions, amountOfCC:stats.timeCCingOthers, lengthOfCC:stats.totalTimeCrowdControlDealt, totalHeal:stats.totalHeal, 
      dobleKills:stats.doubleKills, triple:stats.tripleKills, quadra:stats.quadraKills, penta:stats.pentaKills, sightWardsBought:stats.sightWardsBoughtInGame, 
      killingSprees:stats.killingSprees, multiKill:stats.largestMultiKill, largestKillingSpree:stats.largestKillingSpree, cs:stats.totalMinionsKilled, 
      visionWardsBought:stats.visionWardsBoughtInGame};
  console.log(statsObj);
  */
}

//fetches current leaderboards for given server --> todo = dynamic serverselection
const getLeaderboards = async () => {
  const response = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key="+api_key);
  const leaderboards = await response.json();
  console.log(leaderboards);
  let arr2 = [];

  for(let i = 0; i < 10; i++){
    let name = leaderboards[i].summonerName;
    let lp = leaderboards[i].leaguePoints;
    let wins = leaderboards[i].wins;
    let losses = leaderboards[i].losses;
    let rank = i+1;
    let player = {name:name, lp:lp, wins:wins, losses:losses, rank:rank};
    arr2.push(player);
  }
  setChallengers(challengers = arr2);
  return arr2;
}

//fetches current free champ rotation
const getFreeRotation = async (champMap) =>{
  let freeChampMap = new Map();
  let arr = [];
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/platform/v3/champion-rotations?api_key="+api_key);
  const rotation = await response.json();
  let freeChamps = rotation.freeChampionIds;
  console.log('freechamps', freeChamps);
  console.log('champmap', champMap);
  for(let i = 0; i < freeChamps.length; i++){
    let pos = freeChamps[i];
    let a = pos.toString();
    let currentChamp = champMap.get(a);
    console.log(currentChamp);
    freeChampMap.set(a, currentChamp);
    arr.push(currentChamp);
  }
  setChamps(champs = arr);
  return freeChampMap;
}

function champsToMap(){
  let champMap = new Map();
  champArray = Object.entries(championsFile);
  let array = champArray[0];
  let arr2 = Object.entries(array);
  test = Object.entries(arr2[1][1]);
  console.log(test[0][1].id);
  for(let i = 0; i < test.length; i++){
    champMap.set(test[i][1].key, test[i][1].name);
  }
  console.log(champMap);
  return champMap;
}

function swapPage(){
  
  if(localStorage.getItem("search") != null){
    searchArr = JSON.parse(localStorage.getItem("search"));
    console.log("hämtat array")
  }else{
    console.log("array finns inte")
    searchArr = [];
  }

  if(localStorage.getItem("pageSwap") != null){
    pageSwap = localStorage.getItem("pageSwap");
  }else{
    pageSwap = "true";
  }

  searchArr.unshift(textInput.current.value);

  if(pageSwap == "true"){
    setShowSecondPage(!showSecondPage);
    setShowFirstPage(!showFirstPage);
  }

  console.log("LÄNGD === ", searchArr.length)
  console.log("Saker i array ===", searchArr);

  localStorage.setItem("search", JSON.stringify(searchArr));
  localStorage.setItem("pageSwap", "false");

  console.log(reigon.current.value);
  setLastSearch(lastSearch = searchArr);

}

  return (
    <div className="App">
     <Header/>
  
     <div className="SearchBar">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Project</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href=".">Home page</Nav.Link>
      <Nav.Link href="https://eune.leagueoflegends.com/en-pl/">League of legends</Nav.Link>
      <Nav.Link href="https://developer.riotgames.com/apis">League API</Nav.Link>
    </Nav>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" className="serverChoice" ref={reigon}>
      <option>EUW</option>
      <option>EUNE</option>
      <option>NA</option>
      <option>KR</option>
      <option>BR</option>
    </Form.Control>
  </Form.Group> 

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={textInput} name="search"/>
      <Button variant="outline-info" onClick={() => {
          swapPage();
          getMatchHistory();
        }}>Search</Button>
    </Form>
  </Navbar>
    </div>

     {showSecondPage && <div className="champRotationChallengerLadder">
     <FreeChampRotation name={champs}/>
     <ChallengerLadders name={challengers}/>
    </div>}
     
     {showFirstPage && <div className="secondPage">
    <MasteryPoints name={topTenMastery}/>
     <Profile name={stats}/>
     <LastSearches name={lastSearch}/>

       </div>}
    </div>
  );
} 
export default App;
