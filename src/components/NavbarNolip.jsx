import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function NavbarNolip() {
  return (
    <Container className="fixed-top mb-5">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand>
           <img
          alt=""
          src="/logoNolip.png"
          width="70"
          height="70"
          className="align-bottom mt-4"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/aperitifs">Apéritifs</Link>
            <Link className="nav-link active" to="/entrees">Entrées</Link>
            <Link className="nav-link active" to="/plats">Plats</Link>
            <Link className="nav-link active" to="/desserts">Desserts</Link>
            <Link className="nav-link active" to="/calculateur">Calculateur</Link>
            <Link className="nav-link active" to="/login">Login</Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-5"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default NavbarNolip
