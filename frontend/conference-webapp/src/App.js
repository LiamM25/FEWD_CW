import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "./components/Navbar";
import SessionsPage from "./pages/SessionsPage";
import ShortlistedPage from "./pages/ShortlistedPage";
import LandingSection from "./pages/LandingSection";
import SchedulePage from "./pages/SchedulePage";
import Footer from "./components/Footer";

import D1 from "./divisors/d1";
import D2 from "./divisors/d2";

function App() {
  const [sessions, setSessions] = useState([]); // Sessions data from the API
  const [shortlist, setShortlist] = useState([]); // Manage the shortlisted sessions
  const [schedule, setSchedule] = useState([]); // State to manage scheduled sessions

  useEffect(() => {
    //wake up backend function to populate front end
    const wakeUpBackend = async () => {
      try {
        // A simple request to trigger backend to wake up
        await axios.get('https://fewd-coursework2425-backend.onrender.com/wakeup');
      } catch (error) {
        console.error("Error waking up the backend:", error);
      }
    };
  
    
    wakeUpBackend();


    // Determine the API URL based on the environment
    const API_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:3001/talks"
        : "https://fewd-coursework2425-backend.onrender.com/talks";

    // Fetch sessions from API
    axios
      .get(API_URL)
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

  // Handle session ratings
  const handleRateSession = (session, rating) => {
    setSchedule((prevSchedule) =>
      prevSchedule.map((s) =>
        s.id === session.id ? { ...s, userRating: rating } : s
      )
    );
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Landing Section */}
      <section id="landing">
        <LandingSection />
      </section>

      {/* Sessions Section */}
      <section id="sessions">
        <SessionsPage
          sessions={sessions}
          shortlist={shortlist}
          onShortlist={handleShortlist}
          onAddToSchedule={handleAddToSchedule}
          schedule={schedule}
        />
      </section>

      {/* Shortlist Section */}
      <section id="shortlist">
        <ShortlistedPage
          shortlist={shortlist}
          schedule={schedule}
          onRemoveFromShortlist={handleDeleteFromShortlist}
          onAddToSchedule={handleAddToSchedule}
        />
      </section>
      <D2></D2>
      <D1></D1>

      {/* Schedule Section */}
      <section id="schedule">
        <SchedulePage
          schedule={schedule}
          onRemoveFromSchedule={handleRemoveFromSchedule}
          onRateSession={handleRateSession}
        />
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
