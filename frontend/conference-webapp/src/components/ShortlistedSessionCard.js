import React from "react";
import { Card, Button } from "react-bootstrap";

const ShortlistedSessionCard = ({
  session,
  onRemoveFromShortlist, // Handler to remove session from shortlist
  onAddToSchedule, // Handler for adding to schedule
  isScheduled, // New prop to check if the session is already scheduled
}) => {
  return (
    <Card className="session-card h-100">
      <Card.Body>
        {/* Session Title */}
        <Card.Title>{session.title}</Card.Title>

        {/* Session Subtitle */}
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
        </Card.Subtitle>

        {/* Remove from Shortlist Button */}
        <Button
          variant="danger"
          className="shortlist-button w-20 mb-2 mx-2"
          onClick={() => onRemoveFromShortlist(session)}
        >
          Remove from Shortlist
        </Button>

        {/* Add to Schedule Button */}
        <Button
          variant={isScheduled ? "secondary" : "success"}
          className="add-schedule-btn w-20 mb-2 mx-2"
          onClick={() => onAddToSchedule(session)}
          disabled={isScheduled} // Disable button if already scheduled
        >
          {isScheduled ? "Scheduled" : "Add to Schedule"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShortlistedSessionCard;
