import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import JobList from './JobList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        {/* <Route path="/jobs/:id" element={<JobDetails />} /> */}
        {/* <Route path="/add-job" element={<AddJob />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
