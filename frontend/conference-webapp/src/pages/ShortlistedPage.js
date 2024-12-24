import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShortlistedSessionCard from "../components/ShortlistedSessionCard";


const ShortlistedPage = ({ shortlist, schedule, onRemoveFromShortlist, onAddToSchedule }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-left mb-4 display-4">/Shortlist</h2>

      {/* If no sessions are shortlisted, display a message */}
      {shortlist.length === 0 ? (
        <p>Empty!</p>
      ) : (
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
          {shortlist.map((session) => (
            <Col key={session.id} className=" justify-content-center">
              <ShortlistedSessionCard
                session={session}
                onRemoveFromShortlist={onRemoveFromShortlist} // Pass remove handler
                onAddToSchedule={onAddToSchedule} // Pass add to schedule handler
                isScheduled={schedule.some((item) => item.id === session.id)} // Check if scheduled
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ShortlistedPage;
