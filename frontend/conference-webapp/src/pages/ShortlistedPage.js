import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Import React Bootstrap components


const ShortlistedPage = ({
  shortlist,
  onDeleteFromShortlist,
  onAddToSchedule,
}) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Shortlisted Sessions</h2>

      {/* If no sessions are shortlisted, display a message */}
      {shortlist.length === 0 ? (
        <p>No shortlisted sessions yet. Add some from the session list!</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {shortlist.map((session) => (
            <Col key={session.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{session.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {session.speaker} | {session.time} | Session{" "}
                    {session.session}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Tags:</strong> {session.tags.join(", ")}
                    <br />
                    {session.description.substring(0, 100)}...
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="danger"
                      onClick={() => onDeleteFromShortlist(session)}
                    >
                      Remove from Shortlist
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
      )}
    </Container>
  );
};

export default ShortlistedPage;
