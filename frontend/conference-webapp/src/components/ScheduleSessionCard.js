import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ScheduleSessionCard = ({
  session,
  onRemoveFromSchedule,
  onRateSession,
}) => {
  const [userRating, setUserRating] = useState(session.userRating || 0); // State for users rating

  // Calculate the average rating
  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return (total / ratings.length).toFixed(1); // Return 1 decimal place
  };

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    onRateSession(session, rating); // Notify parent about the rating
  };

  const averageRating = calculateAverageRating(session.ratings);

  // Render stars based on a rating value
  const renderStars = (
    rating,
    maxStars = 5,
    colorSelected = "#ffc107",
    colorUnselected = "#000"
  ) => {
    return [...Array(maxStars)].map((_, index) => (
      <FaStar
        key={index}
        size={24}
        color={index < Math.round(rating) ? colorSelected : colorUnselected}
        style={{ marginRight: 4 }}
      />
    ));
  };

  return (
    <Card
      className="h-100 shadow-sm border-success rounded"
      style={{ backgroundColor: "#f8fff0" }}
    >
      <Card.Body>
        {/* Session Title */}
        <Card.Title className="text-success">{session.title}</Card.Title>

        {/* Session Details */}
        <div className="mb-2">
          <strong>Time:</strong>{" "}
          <span className="text-success">{session.time}</span>
          <br />
          <strong>Session:</strong>{" "}
          <span className="text-success">{session.session}</span>
        </div>

        {/* Average Rating */}
        <div className="mb-2">
          <strong>Average Rating:</strong>
          <div>{renderStars(averageRating)}</div>
        </div>

        {/* User Rating (Stars) */}
        <div className="mb-3">
          <strong>Your Rating:</strong>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                color={star <= userRating ? "#ffc107" : "#000"} // Highlight selected stars and unselected are black
                onClick={() => handleRatingClick(star)}
                style={{ cursor: "pointer", marginRight: 4 }}
              />
            ))}
          </div>
        </div>

        {/* Remove from Schedule Button */}
        <Button
          variant="danger"
          onClick={() => onRemoveFromSchedule(session)}
          className="w-30"
        >
          Remove from Schedule
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ScheduleSessionCard;
