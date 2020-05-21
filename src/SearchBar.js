import React, {useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './App.css';
import app from './App.js';
import { render } from '@testing-library/react';


class SearchBar extends React.Component{
  constructor(props) { 
    super(props);
    this.addLastSearch = this.addLastSearch.bind(this); 
  
  }

addLastSearch() {
  var search = this.search.value;
  console.log(search);
  
  

}
render(){
  return (
    <div className="SearchBar">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Last 5 searches</Navbar.Brand>
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
      <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={(c) => this.search = c} name="search"/>
      <Button variant="outline-info" onClick={this.addLastSearch}>Search</Button>
    </Form>
  </Navbar>
    </div>
  );
}
} 
export default SearchBar;
