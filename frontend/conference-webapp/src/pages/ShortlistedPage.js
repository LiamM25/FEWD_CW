import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShortlistedSessionCard from "../components/ShortlistedSessionCard";

const ShortlistedPage = ({ shortlist, onRemoveFromShortlist, onAddToSchedule }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-left mb-4 display-4">/Shortlist</h2>

      {/* If no sessions are shortlisted, display a message */}
      {shortlist.length === 0 ? (
        <p>Empty!</p>
      ) : (
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
          {shortlist.map((session) => (
            <Col key={session.id} className="d-flex justify-content-center">
              <ShortlistedSessionCard
                session={session}
                onRemoveFromShortlist={onRemoveFromShortlist} // Pass remove handler
                onAddToSchedule={onAddToSchedule} // Add to schedule handler
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ShortlistedPage;
