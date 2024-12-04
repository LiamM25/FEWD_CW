import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SessionsPage = ({ onShortlist, onAddToSchedule }) => {
  const [sessions, setSessions] = useState([]);
  const [visibleSessions, setVisibleSessions] = useState(4); // Number of visible sessions
  const [expandedSessions, setExpandedSessions] = useState({}); // Track expanded state for each session

  useEffect(() => {
    axios
      .get("http://localhost:3001/talks")
      .then((response) => setSessions(response.data))
      .catch((error) => console.error("Error fetching sessions:", error));
  }, []);

  const toggleDescription = (id) => {
    setExpandedSessions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLoadMore = () => {
    setVisibleSessions((prev) => prev + 4); // Load 4 more sessions each time
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Sessions</h2>
      <Row xs={1} sm={1} md={1} lg={1} className="g-4">
        {sessions.slice(0, visibleSessions).map((session) => (
          <Col key={session.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{session.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {session.speaker} | {session.time} | Session:{" "}
                  {session.session}
                </Card.Subtitle>
                <Card.Text>
                  {expandedSessions[session.id]
                    ? session.description
                    : `${session.description.substring(0, 100)}...`}
                  <br />
                  <Button
                    variant="link"
                    onClick={() => toggleDescription(session.id)}
                    className="p-0 ms-1"
                  >
                    {expandedSessions[session.id] ? "Read Less" : "Read More"}
                  </Button>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    onClick={() => onShortlist(session)}
                  >
                    Add to Shortlist
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => onAddToSchedule(session)}
                  >
                    Add to Schedule
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {visibleSessions < sessions.length && ( // Show Load More button only if there are more sessions
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
