import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


//25 saker

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }



/*dobleKills: 0
fb: false
fbAssist: false
fbInhib: false
killingSprees: 4
largestKillingSpree: 2
longestAlive: 193
LargestMultiKill: 1
penta: 0
quadra: 0
totalDmg: 116035
totalDmgchamp: 44265
totalHeal: 3478
triple: 0*/
    render() {
        return (
            <div className="ProfileDiv">
                <Container className="Profile">

                    <Row>
                        <h4>1hithoodi Level:106</h4>
                    </Row>
                    <Row>
                        <h4>Last game stats</h4>
                    </Row>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            KILLS:  
                        </Col>
                        <Col>
                            DEATHS: 
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            ASSISTS:
                        </Col>
                        <Col>
                            KDA: 
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            CREEP SCORE: 
                        </Col>
                        <Col>
                            LEVEL: 
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            HOW MANY TIMES CC: 1 time
                        </Col>
                        <Col>
                            CC EMENYS FOR: 6s
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            GOLD EARNED: 
                        </Col>
                        <Col>
                            GOLD SPENT:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            SIGHT WARDS BOUGHT: 2
                        </Col>
                        <Col>
                            VISION WARDS BOUGHT: -1
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            LONGEST TIME SPENT ALIVE: 
                        </Col>
                        <Col>
                            HIGHEST KILLINGSPREE: 
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            WARDS PLACED: 
                        </Col>
                        <Col>
                            TIME SPENT JUNGLING:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            WARDS PLACED: 
                        </Col>
                        <Col>
                            TIME SPENT JUNGLING:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            WARDS PLACED: 
                        </Col>
                        <Col>
                            TIME SPENT JUNGLING:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            WARDS PLACED: 
                        </Col>
                        <Col>
                            TIME SPENT JUNGLING:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="inProfiles">
                        <Col>
                            WARDS PLACED: 
                        </Col>
                        <Col>
                            TIME SPENT JUNGLING:
                        </Col>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        Last one
                    </Row>

                </Container>

            </div>
        );
    }
}
export default Profile;
