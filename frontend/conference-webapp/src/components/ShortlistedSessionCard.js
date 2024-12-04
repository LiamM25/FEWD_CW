import React from "react";
import { Card, Button } from "react-bootstrap"; // Import React Bootstrap components

const ShortlistedSessionCard = ({
  session,
  onDeleteFromShortlist,
  onAddToSchedule,
}) => {
  return (
    <Card className="session-card-shortlisted h-100">
      <Card.Body>
        <Card.Title>{session.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
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
          <Button variant="success" onClick={() => onAddToSchedule(session)}>
            Add to Schedule
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShortlistedSessionCard;
