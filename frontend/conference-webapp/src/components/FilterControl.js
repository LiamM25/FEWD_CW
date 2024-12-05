import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const FilterControls = ({ sessions, onFilterChange }) => {
  const [filters, setFilters] = useState({
    speaker: "",
    time: "",
    session: "",
    tags: "",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Notify parent about filter changes
  };

  return (
    <Row className="mb-4">
      {/* Speaker Filter */}
      <Col>
        <Form.Select
          onChange={(e) => handleFilterChange("speaker", e.target.value)}
          value={filters.speaker}
        >
          <option value="">Filter by Speaker</option>
          {[...new Set(sessions.map((s) => s.speaker))].map((speaker) => (
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
          value={filters.time}
        >
          <option value="">Filter by Time</option>
          {[...new Set(sessions.map((s) => s.time))].map((time) => (
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
          value={filters.session}
        >
          <option value="">Filter by Session</option>
          {[...new Set(sessions.map((s) => s.session))].map((session) => (
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
          value={filters.tags}
        >
          <option value="">Filter by Tags</option>
          {[...new Set(sessions.flatMap((s) => s.tags))].map((tag) => (
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
