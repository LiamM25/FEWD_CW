import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import SessionCard from "../components/SessionCard";
import ShortlistedPage from "../pages/ShortlistedPage"; // Import ShortlistedPage

const SessionsPage = () => {
  const [sessions, setSessions] = useState([]);
  const [shortlist, setShortlist] = useState([]); // Track shortlisted sessions
  const [visibleSessions, setVisibleSessions] = useState(4); // Track the number of sessions to display

  useEffect(() => {
    axios
      .get("http://localhost:3001/talks")
      .then((response) => setSessions(response.data))
      .catch((error) => console.error("Error fetching sessions:", error));
  }, []);

  const handleShortlist = (session) => {
    setShortlist((prevShortlist) => {
      if (prevShortlist.some((item) => item.id === session.id)) {
        // If session is already shortlisted, remove it
        return prevShortlist.filter((item) => item.id !== session.id);
      } else {
        // Add session to shortlist
        return [...prevShortlist, session];
      }
    });
  };

  const handleRemoveFromShortlist = (session) => {
    setShortlist((prevShortlist) => {
      return prevShortlist.filter((item) => item.id !== session.id); // Remove from shortlist
    });
  };

  const isShortlisted = (id) => {
    return shortlist.some((session) => session.id === id);
  };

  const handleLoadMore = () => {
    setVisibleSessions((prev) => prev + 4); // Load 4 more sessions
  };

  return (
    <Container className="mt-4">
      <h1 className="text-left mb-4">/Sessions</h1>
      <Row xs={1} sm={1} md={1} lg={1} className="g-4">
        {sessions.slice(0, visibleSessions).map((session) => (
          <Col key={session.id}>
            <SessionCard
              session={session}
              isShortlisted={isShortlisted(session.id)} // Pass state for shortlisted check
              onShortlist={handleShortlist} // Handle adding/removing from shortlist
            />
          </Col>
        ))}
      </Row>

      {/* Load More Button */}
      {visibleSessions < sessions.length && (
        <div className="text-center mt-4">
          <Button onClick={handleLoadMore} variant="secondary">
            Load More
          </Button>
        </div>
      )}

      {/* Display Shortlisted Page */}
      <ShortlistedPage
        shortlist={shortlist} // Pass shortlisted sessions
        onRemoveFromShortlist={handleRemoveFromShortlist} // Pass handler to remove from shortlist
        onAddToSchedule={() => {}} // Pass function if needed for Add to Schedule
      />
    </Container>
  );
};

export default SessionsPage;
