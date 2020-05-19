import React, {useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './App.css';


function SearchBar() {

/*useEffect(() => {
  getApiRequest();
}, []);

const getApiRequest = async () => {
  console.log("1");
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/this%20is%20yoloq?api_key=RGAPI-810f9b48-50c8-4e25-9d2d-a45e4e807cef");
  const data = await response.json();
  console.log(data);
  console.log("Hej");
}
*/

const addLastSearch = () => {

}

  return (
    <div className="SearchBar">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Last 5 searches</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" className="serverChoice">
      <option>EUW</option>
      <option>EUNE</option>
      <option>NA</option>
      <option>KR</option>
      <option>BR</option>
    </Form.Control>
  </Form.Group> 

  

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
} 
export default SearchBar;
