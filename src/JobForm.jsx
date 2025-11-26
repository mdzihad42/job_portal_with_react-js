import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/jobs/';
const COMPANY_API = 'http://127.0.0.1:8000/api/companies/';

function JobForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    job_type: '',
    salary_range: '',
    description: '',
    requirements: ''
  });

  useEffect(() => {
    axios.get(COMPANY_API).then(res => setCompanies(res.data));
    if (id) {
      axios.get(`${API_URL}${id}/`).then(res => setForm({
        title: res.data.title,
        company: res.data.company,
        location: res.data.location,
        job_type: res.data.job_type,
        salary_range: res.data.salary_range || '',
        description: res.data.description,
        requirements: res.data.requirements
      }));
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      axios.put(`${API_URL}${id}/`, form).then(() => navigate('/jobs'));
    } else {
      axios.post(API_URL, form).then(() => navigate('/jobs'));
    }
  };

  return (
    <div className="card">
      <h2>{id ? 'Edit Job' : 'Add New Job'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Company</label>
        <select name="company" value={form.company} onChange={handleChange} required>
          <option value="">Select Company</option>
          {companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>

        <label>Location</label>
        <input name="location" value={form.location} onChange={handleChange} required />

        <label>Job Type</label>
        <input name="job_type" value={form.job_type} onChange={handleChange} required />

        <label>Salary Range</label>
        <input name="salary_range" value={form.salary_range} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} required />

        <label>Requirements</label>
        <textarea name="requirements" value={form.requirements} onChange={handleChange} required />

        <button className="button" type="submit">{id ? 'Update Job' : 'Add Job'}</button>
      </form>
    </div>
  );
}

export default JobForm;
