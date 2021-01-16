import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function MasteryPoints(props) {
  return (
    <div className="MasteryPointsDiv">
      <Container className="MasteryPoints">
        <Row>
          <h6>Mastery points</h6>
        </Row>
        <br />
        <Row>
          <div className="inProfiles">
            <Col>
              {props.name[0].name}
              <br />
              Level: {props.name[0].level}
              <br />
              Points: {props.name[0].points}
              <br />
            </Col>
            <Col>
              {props.name[1].name}
              <br />
              Level: {props.name[1].level}
              <br />
              Points: {props.name[1].points}
              <br />
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <div className="inProfiles">
            <Col>
              {props.name[2].name}
              <br />
              Level: {props.name[2].level}
              <br />
              Points: {props.name[2].points}
              <br />
            </Col>
            <Col>
              {props.name[3].name}
              <br />
              Level: {props.name[3].level}
              <br />
              Points: {props.name[3].points}
              <br />
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <div className="inProfiles">
            <Col>
              {props.name[4].name}
              <br />
              Level: {props.name[4].level}
              <br />
              Points: {props.name[4].points}
              <br />
            </Col>
            <Col>
              {props.name[5].name}
              <br />
              Level: {props.name[5].level}
              <br />
              Points: {props.name[5].points}
              <br />
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <div className="inProfiles">
            <Col>
              {props.name[6].name}
              <br />
              Level: {props.name[6].level}
              <br />
              Points: {props.name[6].points}
              <br />
            </Col>
            <Col>
              {props.name[7].name}
              <br />
              Level: {props.name[7].level}
              <br />
              Points: {props.name[7].points}
              <br />
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <div className="inProfiles">
            <Col>
              {props.name[8].name}
              <br />
              Level: {props.name[8].level}
              <br />
              Points: {props.name[8].points}
              <br />
            </Col>
            <Col>
              {props.name[9].name}
              <br />
              Level: {props.name[9].level}
              <br />
              Points: {props.name[9].points}
              <br />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MasteryPoints;
