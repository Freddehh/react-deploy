import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './App.css';
import { render } from '@testing-library/react';


function ChallengerLadders(props) {
    let names = [];
    let ranks = [];
    let lps = [];
    let wins = [];
    let losses = [];

    for(let i = 0; i < props.name.length; i++){
        //console.log(props.name[i]);
        let name = props.name[i].name;
        let lp = props.name[i].lp;
        let winss = props.name[i].wins;
        let lossess = props.name[i].losses;
        let rank = props.name[i].rank;
        //let player = {name:name, lp:lp, wins:wins, losses:losses, lp:lp};
        //console.log("1", name, lp, wins, losses, rank);
        //console.log("2", player)
        names.push(name);
        ranks.push(rank);
        wins.push(winss)
        losses.push(lossess)
        lps.push(lp)
    }

    function choseReigon(){
        var search = this.search.value;
        console.log(search);
    }

    return (
        <div className="ChallengerLaddersDiv">
                <Row>
                    <Col>
                        <h6>CHALLENJOUR</h6>
                    </Col>
                </Row>
                <br/>
                <Container className="ChallengerLadders">
                <div className="ChallengerPlayers">
                <Row>
                    <h6>RANK: {ranks[0]} NAME: {names[0]} LP: {lps[0]} WINS: {wins[0]} LOSSES: {losses[0]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[1]} NAME: {names[1]} LP: {lps[1]} WINS: {wins[1]} LOSSES: {losses[1]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[2]} NAME: {names[2]} LP: {lps[2]} WINS: {wins[2]} LOSSES: {losses[2]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[3]} NAME: {names[3]} LP: {lps[3]} WINS: {wins[3]} LOSSES: {losses[3]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[4]} NAME: {names[4]} LP: {lps[4]} WINS: {wins[4]} LOSSES: {losses[4]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[5]} NAME: {names[5]} LP: {lps[5]} WINS: {wins[5]} LOSSES: {losses[5]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[6]} NAME: {names[6]} LP: {lps[6]} WINS: {wins[6]} LOSSES: {losses[6]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[7]} NAME: {names[7]} LP: {lps[7]} WINS: {wins[7]} LOSSES: {losses[7]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[8]} NAME: {names[8]} LP: {lps[8]} WINS: {wins[8]} LOSSES: {losses[8]}</h6>
                </Row>
                <br/>
                <Row>
                    <h6>RANK: {ranks[9]} NAME: {names[9]} LP: {lps[9]} WINS: {wins[9]} LOSSES: {losses[9]}</h6>
                </Row>
                </div>
            </Container>
        </div>
    );
    }

export default ChallengerLadders;
