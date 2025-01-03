import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Dev Talks Conference</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="sessions"
              smooth
              duration={500}
              className="nav-link"
            >
              Sessions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="shortlist"
              smooth
              duration={500}
              className="nav-link"
            >
              Shortlist
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="schedule"
              smooth
              duration={500}
              className="nav-link"
            >
              Schedule
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
