import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarNolip() {
  return (
    <div className= "fixed-top">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Nolip</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/desserts">Desserts</Link>
            <Link className="nav-link active" to="/calculateur">Calculateur</Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarNolip
