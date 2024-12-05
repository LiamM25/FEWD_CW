import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SessionCard from "../components/SessionCard"; // Import the SessionCard component
import FilterControls from "../components/FilterControl"; // Import the FilterControls component

const SessionsPage = ({ sessions, shortlist, onShortlist }) => {
  const [visibleSessions, setVisibleSessions] = useState(4); // Number of visible sessions
  const [activeFilters, setActiveFilters] = useState({
    speaker: "",
    time: "",
    session: "",
    tags: "",
  }); // Active filters

  // Handle filter changes
  const handleFilterChange = (filters) => {
    setActiveFilters(filters); // Update active filters when they change
  };

  // Filter sessions based on active filters
  const getFilteredSessions = () => {
    return sessions.filter((session) => {
      const matchesSpeaker = activeFilters.speaker
        ? session.speaker === activeFilters.speaker
        : true;
      const matchesTime = activeFilters.time
        ? session.time === activeFilters.time
        : true;
      const matchesSession = activeFilters.session
        ? session.session === activeFilters.session
        : true;
      const matchesTags = activeFilters.tags
        ? session.tags.includes(activeFilters.tags)
        : true;

      return matchesSpeaker && matchesTime && matchesSession && matchesTags;
    });
  };

  const filteredSessions = getFilteredSessions();

  const handleLoadMore = () => {
    setVisibleSessions((prev) => prev + 4); // Increase the number of visible sessions by 4
  };

  return (
    <Container className="mt-4">
      {/* Page Header */}
      <h2 className="text-left mb-4">Sessions</h2>

      {/* Filters Section */}
      <FilterControls sessions={sessions} onFilterChange={handleFilterChange} />

      {/* Responsive Grid Layout for Filtered Session Cards */}
      <Row xs={1} sm={1} md={1} lg={1} className="g-4 justify-content-center">
        {filteredSessions.slice(0, visibleSessions).map((session) => (
          <Col key={session.id} className="justify-content-center">
            <SessionCard
              session={session}
              isShortlisted={shortlist.some((item) => item.id === session.id)} // Check if session is shortlisted
              onShortlist={onShortlist} // Pass onShortlist handler to SessionCard
            />
          </Col>
        ))}
      </Row>

      {/* Load More Button (only shows if there are more filtered sessions to load) */}
      {visibleSessions < filteredSessions.length && (
        <div className="text-center mt-4">
          <Button onClick={handleLoadMore} variant="secondary">
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SessionsPage;
