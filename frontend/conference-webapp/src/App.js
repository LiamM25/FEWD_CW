import React, { useState } from "react";
import SessionsPage from "./pages/SessionsPage";
import ShortlistedPage from "./pages/ShortlistedPage";

function App() {
  const [shortlist, setShortlist] = useState([]); // Manage the shortlisted sessions

  const handleShortlist = (session) => {
    console.log("Adding to shortlist:", session.title); // Debugging the function call

    // Check if the session is already in the shortlist by checking its id
    if (!shortlist.find((s) => s.id === session.id)) {
      setShortlist((prevShortlist) => [...prevShortlist, session]);
    }
  };

  // Handle deleting session from shortlist
  const handleDeleteFromShortlist = (session) => {
    setShortlist((prevShortlist) =>
      prevShortlist.filter((s) => s.id !== session.id)
    );
  };

  // Handle adding session to schedule (you can implement this later)
  const handleAddToSchedule = (session) => {
    console.log("Added to schedule:", session);
  };

  return (
    <div className="App">
      <main>
        <SessionsPage onShortlist={handleShortlist} />

        <ShortlistedPage
          shortlist={shortlist}
          onDeleteFromShortlist={handleDeleteFromShortlist}
          onAddToSchedule={handleAddToSchedule}
        />
      </main>
    </div>
  );
}

export default App;
