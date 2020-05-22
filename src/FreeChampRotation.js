import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function FreeChampRotation(props){

//namn lp win lose 
//console.log(55555555, props.name[0]);
let champs = [];
let urls = [];
for(let i = 0; i < props.name.length; i++){
  let string = 'http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/'+props.name[i]+'.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A';
  string = string.replace(/\s+/g, '');
  console.log(string);
  urls.push(string);
  champs.push(props.name[i]);
}
console.log(champs);
console.log(urls);

return(
    <div className="champRotation">
        <Container>
        <Row>
            <h2 className="h2FreeChamp">
              <p>Free this week!</p>
            </h2>
        </Row>
  <Row>
    <Col>
    <img src={urls[0]} width="80px" height="80px"/>
    <p>{champs[0]}</p>
    </Col>
    <Col>
    <img src={urls[1]} width="80px" height="80px"/>
    <p>{champs[1]}</p>
    </Col>
    <Col>
    <img src={urls[2]} width="80px" height="80px"/>
    <p>{champs[2]}</p>
    </Col>    
    </Row>
  <Row>
  <Col>
    <img src={urls[3]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[3]}</p>
    </Col>
    <Col>
    <img src={urls[4]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[4]}</p>
    </Col>
    <Col>
    <img src={urls[5]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[5]}</p>
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src={urls[6]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[6]}</p>
    </Col>
    <Col>
    <img src={urls[7]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[7]}</p>
    </Col>
    <Col>
    <img src={urls[8]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[8]}</p>
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src={urls[9]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[9]}</p>
    </Col>
    <Col>
    <img src={urls[10]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[10]}</p>
    </Col>
    <Col>
    <img src={urls[11]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[11]}</p>
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src={urls[12]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[12]}</p>
    </Col>
    <Col>
    <img src={urls[13]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[13]}</p>
    </Col>
    <Col>
    <img src={urls[14]} width="80px" height="80px" alt="test picture"/>
    <p>{champs[14]}</p>
    </Col> 
  </Row>
</Container>


    </div>

);
}

export default FreeChampRotation;