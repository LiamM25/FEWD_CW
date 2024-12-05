import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FilterControls = ({ sessions, activeFilters, onFilterChange }) => {
  const handleFilterChange = (key, value) => {
    const newFilters = { ...activeFilters, [key]: value };
    onFilterChange(newFilters); // Notify parent about filter changes
  };

  // Extract unique values for speaker, time, session, and tags
  const uniqueSpeakers = [...new Set(sessions.map((s) => s.speaker))];
  const uniqueTimes = [...new Set(sessions.map((s) => s.time))];
  const uniqueSessions = [...new Set(sessions.map((s) => s.session))];
  const uniqueTags = [
    ...new Set(sessions.flatMap((s) => s.tags)),
  ];

  return (
    <Row className="mb-4">
      {/* Speaker Filter */}
      <Col>
        <Form.Select
          onChange={(e) => handleFilterChange("speaker", e.target.value)}
          value={activeFilters.speaker}
        >
          <option value="">Filter by Speaker</option>
          {uniqueSpeakers.map((speaker) => (
            <option key={speaker} value={speaker}>
              {speaker}
            </option>
          ))}
        </Form.Select>
      </Col>

      {/* Time Filter */}
      <Col>
        <Form.Select
          onChange={(e) => handleFilterChange("time", e.target.value)}
          value={activeFilters.time}
        >
          <option value="">Filter by Time</option>
          {uniqueTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Form.Select>
      </Col>

      {/* Session Filter */}
      <Col>
        <Form.Select
          onChange={(e) => handleFilterChange("session", e.target.value)}
          value={activeFilters.session}
        >
          <option value="">Filter by Session</option>
          {uniqueSessions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </Form.Select>
      </Col>

      {/* Tags Filter */}
      <Col>
        <Form.Select
          onChange={(e) => handleFilterChange("tags", e.target.value)}
          value={activeFilters.tags}
        >
          <option value="">Filter by Tags</option>
          {uniqueTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FilterControls;
