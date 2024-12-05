import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ShortlistedSessionCard from "../components/ShortlistedSessionCard"; // Import the ShortlistedSessionCard component

const ShortlistedPage = ({
  shortlist, // Receiving shortlist prop from parent
  onRemoveFromShortlist, // Function to remove from shortlist
  onAddToSchedule, // Function to add to schedule
}) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center">Shortlisted Sessions</h2>

      {/* If no sessions are shortlisted, display a message */}
      {shortlist.length === 0 ? (
        <p>No shortlisted sessions yet. Add some from the session list!</p>
      ) : (
        <Row xs={1} sm={2} md={2} lg={2} className="g-4">
          {shortlist.map((session) => (
            <Col key={session.id}>
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
