import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import "./LandingSection.css"; 

const LandingSection = () => {
  return (
    <section className="landing-section">
      <Container>
        <Row className="h-100 align-items-center">
          <Col md={6} className="text-left">
            <h1 className="landing-heading">Dev <br></br>Talks Conference</h1>
          </Col>
          <Col md={6} className="text-right">
            <p className="landing-subheading">
              A CONFERENCE FOR <br></br>WEB DEVELOPERS
            </p>
            <p className="landing-date">12 October, 2025</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingSection;
