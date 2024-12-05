import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SessionCard from "../components/SessionCard"; // Import the SessionCard component

const SessionsPage = ({ sessions, shortlist, onShortlist }) => {
  const [visibleSessions, setVisibleSessions] = useState(4); // Number of visible sessions

  const handleLoadMore = () => {
    setVisibleSessions((prev) => prev + 4); // Increase the number of visible sessions by 4
  };

  return (
    <Container className="mt-4">
      {/* Page Header */}
      <h2 className="text-left mb-4">Sessions</h2>

      {/* Responsive Grid Layout for Session Cards */}
      <Row xs={1} sm={1} md={1} lg={1} className="g-4 justify-content-center">
        {sessions.slice(0, visibleSessions).map((session) => (
          <Col key={session.id} className="justify-content-center">
            <SessionCard
              session={session}
              isShortlisted={shortlist.some((item) => item.id === session.id)} // Check if session is shortlisted
              onShortlist={onShortlist} // Pass onShortlist handler to SessionCard
            />
          </Col>
        ))}
      </Row>

      {/* Load More Button (only shows if there are more sessions to load) */}
      {visibleSessions < sessions.length && (
        <div className="text-center mt-4">
          <Button onClick={handleLoadMore} variant="secondary">
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SessionsPage;
