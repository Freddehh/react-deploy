import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


//25 saker
function Profile(props) {
console.log("inside profile === ", props.name)
    return (
        <div className="ProfileDiv">
            <Container className="Profile">
                <Row>
                    <h4>Summoner: {props.name.name}</h4>
                </Row>
                <Row>
                    <h4>Level: {props.name.sumLevel}</h4>
                </Row>
                <Row>
                    <h4>Last game stats</h4>
                </Row>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>KILLS: {props.name.kills}</p>
                    </Col>
                    <Col>
                    <p>DEATHS: {props.name.deaths}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>ASSISTS: {props.name.assists}</p>
                    </Col>
                    <Col>
                    <p>KDA: {props.name.kda}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>CS: {props.name.cs}</p>
                    </Col>
                    <Col>
                    <p>LEVEL: {props.name.level}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>CC'ed OTHERS: {props.name.amountOfCC}</p>
                    </Col>
                    <Col>
                    <p>LENGTH OF CC: {props.name.lengthOfCC}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>GOLD EARNED: {props.name.goldEarned}</p>
                    </Col>
                    <Col>
                    <p>GOLD SPENT: {props.name.goldSpent}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>LARGEST MULTIKILL: {props.name.multiKill}</p>
                    </Col>
                    <Col>
                    <p>KILLING SPREE: {props.name.largestKillingSpree}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>LONGEST TIME ALIVE: {props.name.longestAlive}</p>
                    </Col>
                    <Col>
                    <p>DOUBLE KILLS: {props.name.doubleKills}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>PENTA KILLS: {props.name.penta}</p>
                    </Col>
                    <Col>
                    <p>TOTAL DMG: {props.name.totalDmg}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div className="inProfiles">
                    <Col>
                    <p>DMG TO CHAMPS: {props.name.totalDmgChamp}</p>
                    </Col>
                    <Col>
                    <p>TOTAL HEAL: {props.name.totalHeal}</p>
                    </Col>
                    </div>
                </Row>
                <br/>
            </Container>

        </div>
    );
}
export default Profile;
