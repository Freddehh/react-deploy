import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


class LastSearches extends React.Component {
    constructor(props) {
        super(props);
        this.updateLastSearch = this.updateLastSearch.bind(this);

    }

    updateLastSearch() {
        var search = this.search.value;
        console.log(search);

    }
    render() {
        return (
            <div className="LastSearchesDiv">
                <Container className="LastSearches">
                <Row>
                    <h6>Last 5 searches</h6>
                </Row>
                <br/>
                    <Row>
                        THIS IS YOLOQ
                    </Row>
                   <br/>
                    <Row>
                        1hithoodi
                    </Row>
                    <br/>
                    <Row>
                        YEEET69
                    </Row>
                    <br/>
                    <Row>
                        PLACEHOLDER
                    </Row>
                    <br/>
                    <Row>
                        PLACEHOLDER
                    </Row>
                    
            </Container>
                   
            </div>
        );
    }
}
export default LastSearches;
