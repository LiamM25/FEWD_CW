import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScheduleSessionCard from "../components/ScheduleSessionCard";

const SchedulePage = ({ schedule, onRemoveFromSchedule, onRateSession }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-left mb-4 display-4">/Schedule</h2>

      {schedule.length === 0 ? (
        <p>Empty!</p>
      ) : (
        <Row xs={1} sm={2} md={2} lg={2} className="g-4">
          {schedule.map((session) => (
            <Col key={session.id}>
              <ScheduleSessionCard
                session={session}
                onRemoveFromSchedule={onRemoveFromSchedule}
                onRateSession={onRateSession}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SchedulePage;
