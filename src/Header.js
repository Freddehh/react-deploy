import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testImage from './img/lol.jpg';
import './App.css';


function Header() {

    return (
        <div className="Header">
            <Container fluid="md">
                <Row>
                <img src={testImage} width="220px" height="140px" alt="test picture"/>
                    <Col>
                    <h1>EUWEST</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Header;