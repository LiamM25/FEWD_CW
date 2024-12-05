import React, { useState, useEffect } from "react";
import SessionsPage from "./pages/SessionsPage"; 
import ShortlistedPage from "./pages/ShortlistedPage"; 
import LandingSection from "./pages/LandingSection";
import axios from "axios"; 

function App() {
  const [sessions, setSessions] = useState([]); // Sessions data from the API
  const [shortlist, setShortlist] = useState([]); // Manage the shortlisted sessions

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

  // LATER Handle adding session to schedule
  const handleAddToSchedule = (session) => {
    console.log("Added to schedule:", session);
  };

  return (
    <div className="App">
      <main>
        
        <LandingSection />

        
        <SessionsPage
          sessions={sessions} // Pass sessions to SessionsPage
          shortlist={shortlist} // Pass shortlist to SessionsPage
          onShortlist={handleShortlist} // Pass shortlist handler to SessionsPage
        />

        
        <ShortlistedPage
          shortlist={shortlist} // Pass shortlist to ShortlistedPage
          onRemoveFromShortlist={handleDeleteFromShortlist} // Pass remove handler
          onAddToSchedule={handleAddToSchedule} // Add to schedule handler
        />
      </main>
    </div>
  );
}

export default App;
