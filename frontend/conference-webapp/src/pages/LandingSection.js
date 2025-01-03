import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import "./LandingSection.css"; 

const LandingSection = () => {
  return (
    <section className="landing-section">
      <Container>
        <Row className="h-100 align-items-center">
          <Col md={4} className="text-left">
            <h1 className="display-1">DEV<br></br>TALKS
          </h1>
          </Col>
          <Col md={4}></Col>
          
          <Col md={4} className="text-right">
            <h2 className="display-6">
              A CONFERENCE FOR WEB DEVELOPERS
            </h2>
            <p className="landing-date">12 October, 2025</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingSection;
