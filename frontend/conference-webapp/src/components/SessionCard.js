import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const SessionCard = ({
  session,
  onShortlist,
  isShortlisted,
  onAddToSchedule, // New prop for handling adding to schedule
  isScheduled, // New prop to check if the session is already scheduled
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle description

  const handleShortlistClick = () => {
    onShortlist(session); // Notify parent to add/remove session from shortlist
  };

  const handleAddToScheduleClick = () => {
    onAddToSchedule(session); // Notify parent to add session to schedule
  };

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state for the description
  };

  return (
    <Card className="h-100 shadow-sm border-light rounded">
      <Card.Body>
        {/* Session Title */}
        <Card.Title className="display-6">{session.title}</Card.Title>

        {/* Session Subtitle */}
        <Card.Subtitle className="mb-2 text-muted">
          {session.speaker} | {session.time} | Session {session.session}
        </Card.Subtitle>

        {/* Session Description */}
        <Card.Text>
          {isExpanded
            ? session.description
            : `${session.description.substring(0, 100)}...`}
          <br />
          <Button
            variant="link text-muted"
            onClick={toggleDescription}
            className="p-0 ms-1"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </Card.Text>

        {/* Shortlist Button */}
        <Button
          variant={isShortlisted ? "success" : "outline-success"}
          onClick={handleShortlistClick}
          disabled={isShortlisted}
          className="w-20 mb-2"
        >
          {isShortlisted ? "Shortlisted" : "Add to Shortlist"}
        </Button>

        {/* Add to Schedule Button */}
        <Button
          variant={isScheduled ? "secondary" : "success"}
          className="w-20 mb-2 mx-2"
          onClick={handleAddToScheduleClick}
          disabled={isScheduled} // Disable if already scheduled
        >
          {isScheduled ? "Scheduled" : "Add to Schedule"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SessionCard;
