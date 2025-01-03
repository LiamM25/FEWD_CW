import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SessionCard from "../components/SessionCard";
import FilterControls from "../components/FilterControl";
import SearchBar from "../components/SearchBar";

const SessionsPage = ({ sessions, shortlist, schedule, onShortlist, onAddToSchedule }) => {
  const [visibleSessions, setVisibleSessions] = useState(4); // Number of visible sessions
  const [activeFilters, setActiveFilters] = useState({}); // Active filters
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Handle filter changes
  const handleFilterChange = (filters) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      ...filters,
    }));
  };

  // Handle search term updates
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filter sessions based on search term and active filters
  const getFilteredSessions = () => {
    return sessions.filter((session) => {
      // Search term filter
      const matchesSearchTerm = searchTerm
        ? session.title.toLowerCase().includes(searchTerm) ||
          session.speaker.toLowerCase().includes(searchTerm) ||
          session.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
        : true;

      // Apply active filters
      const matchesSpeaker = activeFilters.speaker
        ? session.speaker === activeFilters.speaker
        : true;

      const matchesTime = activeFilters.time
        ? session.time === activeFilters.time
        : true;

      const matchesSession = activeFilters.session
        ? session.session === activeFilters.session
        : true;

      const matchesTags =
        activeFilters.tags && activeFilters.tags.length > 0
          ? session.tags.includes(activeFilters.tags)
          : true;

      // Return the session if filters match
      return (
        matchesSearchTerm &&
        matchesSpeaker &&
        matchesTime &&
        matchesSession &&
        matchesTags
      );
    });
  };

  // Get the filtered sessions
  const filteredSessions = getFilteredSessions();

  // Handle the 'load more'
  const handleLoadMore = () => {
    setVisibleSessions((prev) => prev + 4); // Load 4 more sessions
  };

  return (
    <Container className="mt-4">
      {/* Page Header */}
      <h2 className="text-left mb-4 display-3">/Sessions</h2>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Filters */}
      <FilterControls
        sessions={sessions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
      />

      {/* Display Filtered Sessions */}
      <Row xs={1} sm={1} md={1} lg={1} className="g-4 justify-content-center">
        {filteredSessions.slice(0, visibleSessions).map((session) => (
          <Col key={session.id} className="justify-content-center">
            <SessionCard
              session={session}
              isShortlisted={shortlist.some((item) => item.id === session.id)}
              isScheduled={schedule.some((item) => item.id === session.id)} // Check if session is scheduled
              onShortlist={onShortlist}
              onAddToSchedule={onAddToSchedule}
            />
          </Col>
        ))}
      </Row>

      {/* Load More Button */}
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
