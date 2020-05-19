import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function FreeChampRotation(){

//namn lp win lose 

return(

    <div className="champRotation">
        <Container>
  <Row>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Aatrox
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>    
    </Row>
  <Row>
  <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Aatrox
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Aatrox
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Aatrox
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col> 
  </Row>
  <Row>
  <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Aatrox
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col>
    <Col>
    <img src="http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Ahri.png?fbclid=IwAR3Js5deXHJL7jP2bV-jBydR1JfKBZ9fnWd_ilpi_hoAmcsw2xiEHxKMB4A" width="80px" height="80px" alt="test picture"/>
    Ahri
    </Col> 
  </Row>
</Container>


    </div>

);
}

export default FreeChampRotation;