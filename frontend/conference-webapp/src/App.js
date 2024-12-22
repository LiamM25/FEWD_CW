import React, { useState, useEffect } from "react";
import SessionsPage from "./pages/SessionsPage";
import ShortlistedPage from "./pages/ShortlistedPage";
import LandingSection from "./pages/LandingSection";
import SchedulePage from "./pages/SchedulePage";
import axios from "axios";

function App() {
  const [sessions, setSessions] = useState([]); // Sessions data from the API
  const [shortlist, setShortlist] = useState([]); // Manage the shortlisted sessions
  const [schedule, setSchedule] = useState([]); // State to manage scheduled session

  useEffect(() => {
    axios
      .get("http://localhost:3001/talks") // Fetch sessions from API
      .then((response) => setSessions(response.data))
      .catch((error) => console.error("Error fetching sessions:", error));
  }, []);

  // Add session to shortlist
  const handleShortlist = (session) => {
    console.log("Adding to shortlist:", session.title);
    if (!shortlist.find((s) => s.id === session.id)) {
      setShortlist((prevShortlist) => [...prevShortlist, session]);
    }
  };

  // Remove session from shortlist
  const handleDeleteFromShortlist = (session) => {
    setShortlist((prevShortlist) =>
      prevShortlist.filter((s) => s.id !== session.id)
    );
  };

  // Check if a session can be added to the schedule
  const canAddToSchedule = (session) => {
    return !schedule.some(
      (s) => s.session === session.session && s.time === session.time
    );
  };

  // Add session to schedule
  const handleAddToSchedule = (session) => {
    if (canAddToSchedule(session)) {
      setSchedule((prevSchedule) => [...prevSchedule, session]);
    } else {
      alert("This session overlaps with an existing scheduled session!");
    }
  };

  // Remove session from schedule
  const handleRemoveFromSchedule = (session) => {
    setSchedule((prevSchedule) =>
      prevSchedule.filter((s) => s.id !== session.id)
    );
  };

  return (
    <div className="App">
      <main>
        <LandingSection />

        <SessionsPage
          sessions={sessions} // Pass sessions to SessionsPage
          shortlist={shortlist} // Pass shortlist to SessionsPage
          onShortlist={handleShortlist} // Pass shortlist handler to SessionsPage
          onAddToSchedule={handleAddToSchedule} // Pass scheduling handler
          schedule={schedule} // Pass schedule state
        />

        <ShortlistedPage
          shortlist={shortlist} // Pass shortlist to ShortlistedPage
          onRemoveFromShortlist={handleDeleteFromShortlist} // Pass remove handler
          onAddToSchedule={handleAddToSchedule} // Add to schedule handler
        />

        <SchedulePage
          schedule={schedule}
          onRemoveFromSchedule={handleRemoveFromSchedule}
        />
      </main>
    </div>
  );
}

export default App;
