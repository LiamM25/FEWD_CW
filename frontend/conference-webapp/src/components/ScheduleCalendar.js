import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment"; // Moment.js for date formatting

// Format session data for the calendar
const formatSessionForCalendar = (session) => {
  // Assuming session.time is in HH:MM format (e.g., '14:00')
  const [hours, minutes] = session.time.split(":");
  const startTime = new Date();
  startTime.setHours(hours, minutes, 0, 0); // Set start time based on session time

  // Assuming each session lasts 1 hour
  const endTime = new Date(startTime);
  endTime.setHours(startTime.getHours() + 1); // Set end time (1 hour after start time)

  return {
    title: session.title,
    start: startTime,
    end: endTime,
    allDay: false, // Set to true if the session lasts all day
  };
};

const SchedulePage = ({ sessions }) => {
  const [events, setEvents] = useState(sessions.map(formatSessionForCalendar)); // Format passed sessions

  // Localizer setup for React Big Calendar
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <h1>Schedule</h1>
      <Calendar
        events={events} // Pass the formatted events to the calendar
        defaultView="week" // Default view (can be 'month', 'week', 'day')
        startAccessor="start" // Define which field contains the start date/time
        endAccessor="end" // Define which field contains the end date/time
        titleAccessor="title" // Define which field contains the title
        views={["month", "week", "day"]} // Available views
        localizer={localizer} // Pass the localizer (moment.js)
        step={60} // Step interval (60 minutes = 1 hour)
        timeslots={1} // Number of timeslots per day (e.g., hourly)
      />
    </div>
  );
};

export default SchedulePage;
