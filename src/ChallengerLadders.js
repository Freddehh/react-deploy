import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


class ChallengerLadders extends React.Component {
    constructor(props) {
        super(props);
        this.choseReigon = this.choseReigon.bind(this);

    }

    choseReigon() {
        var search = this.search.value;
        console.log(search);

    }
    render() {
        return (
            <div className="ChallengerLaddersDiv">
                
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" className="serverChoice">
                                    <option>EUW</option>
                                    <option>EUNE</option>
                                    <option>NA</option>
                                    <option>KR</option>
                                    <option>BR</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <h6>Top 10 Challenger</h6>
                        </Col>
                    </Row>
                    <Container className="ChallengerLadders">
                    <div className="ChallengerPlayers">
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    <Row>
                        <h6>THIS IS YOLOQ 1069 lp, WINS: 355 LOSES: 245</h6>
                    </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
export default ChallengerLadders;
