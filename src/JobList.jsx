import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/jobs/';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const location = useLocation();

  // Helper to get query parameters
  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  // Fetch jobs from API
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  // Filter jobs whenever jobs or search query changes
  useEffect(() => {
    const searchQuery = getQueryParam('search')?.toLowerCase() || '';
    if (searchQuery === '') {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery) ||
        job.company_name.toLowerCase().includes(searchQuery) ||
        (job.location && job.location.toLowerCase().includes(searchQuery))
      );
      setFilteredJobs(filtered);
    }
  }, [jobs, location.search]);

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {filteredJobs.length === 0 && <p>No jobs found.</p>}

      <div className="job-cards">
        {filteredJobs.map(job => (
          <div key={job.id} className="card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company_name}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.job_type}</p>
            {job.salary_range && <p><strong>Salary:</strong> {job.salary_range}</p>}
            <Link className="button" to={`/jobs/${job.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
