import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testImage from './img/fredrik_eklund.jpg';
import './App.css';


function Header() {

    return (
        <div className="Header">
            <Container fluid="md">
                <Row>
                <img src={testImage} width="200px" height="140px" alt="test picture"/>
                    <Col>
                    <h1>Project 1 RIOTGAMES API</h1>
                    <h2>Fredrik Eklundh, Rasmus Öberg</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Header;