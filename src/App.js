import React, {useEffect, useState} from 'react';
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
let summonerID;
let champArray = [];
let test;

useEffect(() => {
  let champMap = champsToMap(); //all champs with id+name in map
  let top10mastery = getSummonerFromName(champMap);
  let freeRotation = getFreeRotation(champMap); //15 free-to-play champs
  console.log(freeRotation);
  console.log(top10mastery);
  let rank10 = getLeaderboards(); //10highest ranked players
}, []);

let summonerName = "1hithoodi";
let api_key = "RGAPI-92fb59f6-a5a5-44ae-b24c-a239d7711a2b";
let server = "euw1";

const getSummonerFromName = async (champMap) => {
  //fetches the accountinfo/ids for given summoner --> todo = dynamic serverselection
  const response = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key="+api_key);
  const data = await response.json();
  console.log(data);
  let accountID = data.accountId;

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
  let a = [top10mastery, statsObj];
  return top10mastery; 
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
  return arr2;
}

//fetches current free champ rotation
const getFreeRotation = async (champMap) =>{
  let freeChampMap = new Map();
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/platform/v3/champion-rotations?api_key="+api_key);
  const rotation = await response.json();
  let freeChamps = rotation.freeChampionIds;
  console.log(freeChamps);
  console.log(freeChamps.length);
  console.log(champMap);
  for(let i = 0; i < freeChamps.length; i++){
    let pos = freeChamps[i];
    let a = pos.toString();
    let currentChamp = champMap.get(a);
    console.log(currentChamp);
    freeChampMap.set(a, currentChamp);
  }
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

/*
//fetches champ mastery levels from given summoner
const getChampionMasteryFromID = async (summID) => {
  const response1 = await fetch
  ("https://cors-anywhere.herokuapp.com/https://"+server+".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/AqxFkaEqZ_iL_dYU4KKB3NCRGjhK8LxgDu4J3cKrS2QH8YA?api_key="+api_key);
  const allChampions = await response1.json();
  console.log("inside mastery")
  console.log(allChampions);
  console.log(allChampions[0].championPoints);
}
*/

  return (
    <div className="App">
     <Header/>
     <SearchBar/>
     <div className="champRotationChallengerLadder">
     <FreeChampRotation name={summonerName}/>
     <ChallengerLadders/>
     </div>
     <div className="secondPage">
     <MasteryPoints/>
     <LastSearches/>
     <Profile/>
     </div>
     
    </div>
  );
} 
export default App;
