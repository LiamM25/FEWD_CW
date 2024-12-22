import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SessionCard from "../components/SessionCard";

const SchedulePage = ({ schedule, onRemoveFromSchedule }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-left mb-4">Scheduled Sessions</h2>

      {schedule.length === 0 ? (
        <p>No sessions scheduled yet. Add some from the sessions list!</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {schedule.map((session) => (
            <Col key={session.id}>
              <SessionCard
                session={session}
                isShortlisted={false}
                onShortlist={() => {}}
                onAddToSchedule={() => {}}
              />
              <Button
                variant="danger"
                onClick={() => onRemoveFromSchedule(session)}
                className="mt-2"
              >
                Remove from Schedule
              </Button>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SchedulePage;
