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
                    <h3>{props.name.name} Level {props.name.sumLevel}</h3>
                </Row>
                <Row>
                    <h4>Last game stats</h4>
                </Row>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>KILLS: {props.name.kills}</h6>
                    </Col>
                    <Col>
                    <h6>DEATHS: {props.name.deaths}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>ASSISTS: {props.name.assists}</h6>
                    </Col>
                    <Col>
                    <h6>KDA: {props.name.kda}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>CS: {props.name.cs}</h6>
                    </Col>
                    <Col>
                    <h6>LEVEL: {props.name.level}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>CC'ed OTHERS: {props.name.amountOfCC} times</h6>
                    </Col>
                    <Col>
                    <h6>LENGTH OF CC: {props.name.lengthOfCC} seconds</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>GOLD EARNED: {props.name.goldEarned} $</h6>
                    </Col>
                    <Col>
                    <h6>GOLD SPENT: {props.name.goldSpent} $</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>LARGEST MULTIKILL: {props.name.multiKill}</h6>
                    </Col>
                    <Col>
                    <h6>LARGEST KILLING SPREE: {props.name.largestKillingSpree}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>LONGEST TIME ALIVE: {props.name.longestAlive}</h6>
                    </Col>
                    <Col>
                    <h6>DOUBLE KILLS: {props.name.doubleKills}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>TRIPLE KILLS: {props.name.triple}</h6>
                    </Col>
                    <Col>
                    <h6>QUADRA KILLS: {props.name.quadra}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>PENTA KILLS: {props.name.penta}</h6>
                    </Col>
                    <Col>
                    <h6>TOTAL DAMAGE DEALT: {props.name.totalDmg}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <h6>DMG TO CHAMPIONS: {props.name.totalDmgChamp}</h6>
                    </Col>
                    <Col>
                    <h6>TOTAL HEALING: {props.name.totalHeal}</h6>
                    </Col>
                    </div>
                </Row>
                <br/>
            </Container>

        </div>
    );
}
export default Profile;
