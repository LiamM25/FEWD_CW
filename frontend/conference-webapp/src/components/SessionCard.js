import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./SessionCard.css";

const SessionCard = ({ session, onShortlist, isShortlisted }) => {
  const [localShortlisted, setLocalShortlisted] = useState(isShortlisted); // Local state to manage button state

  useEffect(() => {
    // Sync local state with the parent state when isShortlisted prop changes
    setLocalShortlisted(isShortlisted);
  }, [isShortlisted]);

  const handleShortlistClick = () => {
    onShortlist(session); // Notify parent to add/remove session from shortlist
  };

  const toggleDescription = () => {
    // Logic for expanding the description
  };

  return (
    <Card className="session-card h-100">
      <Card.Body>
        <Card.Title>{session.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
        </Card.Subtitle>
        <Card.Text>
          {session.description.substring(0, 100)}...
          <Button
            variant="link"
            onClick={toggleDescription}
            className="p-0 ms-1"
          >
            Read More
          </Button>
        </Card.Text>

        {/* Shortlist Button */}
        <Button
          className={`shortlist-button ${
            localShortlisted ? "shortlisted" : ""
          }`}
          onClick={handleShortlistClick}
          disabled={localShortlisted}
        >
          {localShortlisted ? "Shortlisted" : "Add to Shortlist"}
        </Button>

        {/* Add to Schedule Button */}
        <Button className="add-schedule-btn mt-2">Add to Schedule</Button>
      </Card.Body>
    </Card>
  );
};

export default SessionCard;
