import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap"; // Import React Bootstrap components

const SessionCard = ({ session, onShortlist, onAddToSchedule }) => {
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShortlistClick = () => {
    if (!isShortlisted) {
      onShortlist(session); // Add to shortlist
      setIsShortlisted(true); // Update local state
    }
  };

  const handleAddToScheduleClick = () => {
    onAddToSchedule(session); // Add to schedule
  };

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{session.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
        </Card.Subtitle>
        <Card.Text>
          {isExpanded
            ? session.description
            : `${session.description.substring(0, 100)}...`}
          <br />
          <Button
            variant="link"
            onClick={toggleDescription}
            className="p-0 ms-1"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </Card.Text>

        <ButtonGroup className="d-flex justify-content-between">
          <Button
            variant={isShortlisted ? "success" : "primary"}
            onClick={handleShortlistClick}
            disabled={isShortlisted}
          >
            {isShortlisted ? "Shortlisted" : "Add to Shortlist"}
          </Button>
          <Button variant="success" onClick={handleAddToScheduleClick}>
            Add to Schedule
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default SessionCard;
