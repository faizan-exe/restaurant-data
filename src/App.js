
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

  const config = {
    
     
    headers: {
      Authorization: "Bearer 916o5kG3sg9yOutmdyp3qM0oWK3HoFShG3OYo79ne1PDDvlWsgK-vv90r4NDmP37zJr4zPaGYHEANer916lHyczvtkUdYRlzicPKSUMLMW-fp1sg5zfuxFi3C8NSY3Yx",
      
       
    },
    
  };

  axios
    .get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw", config)
    .then((response) => {
      console.log(response); //These are the results sent back from the API!
    })
    .catch(err => {
        console.log(err);
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

