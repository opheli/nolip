import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';

function NavbarLogin() {
  return (
    <Container className= "fluid pt-5 mt-5">
      <Navbar bg="light" expand="lg"  id="espace-sous-navbar">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link className="nav-link active" to="/add">Add</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default NavbarLogin
