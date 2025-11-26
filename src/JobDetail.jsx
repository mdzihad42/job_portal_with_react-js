import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/jobs/';

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}${id}/`)
      .then(res => setJob(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      axios.delete(`${API_URL}${id}/`)
        .then(() => navigate('/jobs'))
        .catch(err => console.error(err));
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company_name}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.job_type}</p>
      {job.salary_range && <p><strong>Salary:</strong> {job.salary_range}</p>}
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Requirements:</strong> {job.requirements}</p>
      <p><strong>Posted At:</strong> {new Date(job.posted_at).toLocaleString()}</p>
      
      <div style={{ marginTop: '1rem' }}>
        <Link className="button" to={`/edit-job/${job.id}`} style={{ marginRight: '0.5rem' }}>Edit Job</Link>
        <button className="button" onClick={handleDelete} style={{ backgroundColor: '#ff4757' }}>Delete Job</button>
        <Link className="button" to="/jobs" style={{ marginLeft: '0.5rem', backgroundColor: '#aaa' }}>Back to Jobs</Link>
      </div>
    </div>
  );
}

export default JobDetails;
