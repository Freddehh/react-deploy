import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


//25 saker
function Profile(props) {

console.log("inside  profile == ", props.name)
    return (
        <div className="ProfileDiv">
            <Container className="Profile">
                <Row>
                    <h4>Summoner == {props.name.name}, Summoner level == {props.name.sumLevel}</h4>
                </Row>
                <Row>
                    <h4>Last game stats</h4>
                </Row>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>KILLS:</h3>
                    <h2>{props.name.kills}</h2>
                    </Col>
                    <Col>
                    <h3>DEATHS:</h3>
                    <h2>{props.name.deaths}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>ASSISTS:</h3>
                    <h2>{props.name.assists}</h2>
                    </Col>
                    <Col>
                    <h3>KDA:</h3>
                    <h2>{props.name.kda}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>CS:</h3>
                    <h2>{props.name.cs}</h2>
                    </Col>
                    <Col>
                    <h3>LEVEL:</h3>
                    <h2>{props.name.level}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>TIMES CC'ed OTHERS:</h3>
                    <h2>{props.name.amountOfCC}</h2>
                    </Col>
                    <Col>
                    <h3>LENGTH OF CC:</h3>
                    <h2>{props.name.lengthOfCC} seconds</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>GOLD EARNED:</h3>
                    <h2>{props.name.goldEarned} $</h2>
                    </Col>
                    <Col>
                    <h3>GOLD SPENT:</h3>
                    <h2>{props.name.goldSpent} $</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>LARGEST MULTIKILL:</h3>
                    <h2>{props.name.multiKill}</h2>
                    </Col>
                    <Col>
                    <h3>LARGEST KILLING SPREE:</h3>
                    <h2>{props.name.largestKillingSpree}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>LONGEST TIME ALIVE:</h3>
                    <h2>{props.name.longestAlive}</h2>
                    </Col>
                    <Col>
                    <h3>DOUBLE KILLS:</h3>
                    <h2>{props.name.doubleKills}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>TRIPLE KILLS:</h3>
                    <h2>{props.name.triple}</h2> 
                    </Col>
                    <Col>
                    <h3>QUADRA KILLS:</h3>
                    <h2>{props.name.quadra}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>PENTA KILLS:</h3>
                    <h2>{props.name.penta}</h2>
                    </Col>
                    <Col>
                    <h3>TOTAL DAMAGE DEALT:</h3>
                    <h2>{props.name.totalDmg}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h3>DMG TO CHAMPIONS:</h3>
                    <h2>{props.name.totalDmgChamp}</h2> 
                    </Col>
                    <Col>
                    <h3>TOTAL HEALING:</h3>
                    <h2>{props.name.totalHeal}</h2>
                    </Col>
                    </div>
                </Row>
                <br/>
            </Container>

        </div>
    );
}
export default Profile;
