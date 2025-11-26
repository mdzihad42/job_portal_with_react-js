import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import JobList from "./JobList";
import JobDetails from "./JobDetail";
import JobForm from "./JobForm";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">JobPortal</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Job List</Link>
          <Link to="/add-job">Post Job</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/add-job" element={<JobForm />} />
          <Route path="/edit-job/:id" element={<JobForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
