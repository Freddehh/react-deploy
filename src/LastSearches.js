
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./App.css";
import { render } from "@testing-library/react";


function LastSearches(props) {
  return (
    <div className="LastSearchesDiv">
      <Container className="LastSearches">
        <Row>
          <h6>Last 10 searches</h6>
        </Row>
        <br />
        <Row>{props.name[0]}</Row>
        <br />
        <Row>{props.name[1]}</Row>
        <br />
        <Row>{props.name[2]}</Row>
        <br />
        <Row>{props.name[3]}</Row>
        <br />
        <Row>{props.name[4]}</Row>
        <br />
        <Row>{props.name[5]}</Row>
        <br />
        <Row>{props.name[6]}</Row>
        <br />
        <Row>{props.name[7]}</Row>
        <br />
        <Row>{props.name[8]}</Row>
        <br />
        <Row>{props.name[9]}</Row>
        <br />
      </Container>
    </div>
  );
}
export default LastSearches;
