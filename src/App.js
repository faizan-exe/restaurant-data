
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "GDSC Assignment"
  });


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Restaurant-data</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <NavDropdown title="Restaurants" id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.2">
                Mei Kong
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Serena Hotel</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                 Pearl Continental
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="light">Fetch Data</Button> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;

