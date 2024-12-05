import React from "react";
import { Card, Button } from "react-bootstrap";

const ShortlistedSessionCard = ({
  session,
  onRemoveFromShortlist, // Handler to remove session from shortlist
  onAddToSchedule,      // Handler for adding to schedule (if needed)
}) => {
  return (
    <Card className="session-card h-100">
      <Card.Body>
        <Card.Title>{session.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
        </Card.Subtitle>
        <Card.Text>{session.description.substring(0, 100)}...</Card.Text>

        {/* Remove from Shortlist Button */}
        <Button
        variant="danger"
          className="shortlist-button w-20 mb-2 mx-2"
          onClick={() => onRemoveFromShortlist(session)} // Remove from shortlist
        >
          Remove from Shortlist
        </Button>

        {/* Add to Schedule Button */}
        <Button
          variant="success"
          className="add-schedule-btn w-20 mb-2 mx-2"
          onClick={() => onAddToSchedule(session)} // Add to schedule
        >
          Add to Schedule
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShortlistedSessionCard;
