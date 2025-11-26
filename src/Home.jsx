import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/jobs");
    }
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find Your Dream Job</h1>
        <p>
          Search thousands of opportunities and connect with top employers.
          Build your future with the perfect career match.
        </p>

        {/* Search Bar */}
        <div className="home-search">
          <input
            type="text"
            placeholder="Search job title, skills, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>

        {/* Buttons */}
        <div className="home-buttons">
          <button onClick={() => navigate("/jobs")} className="button hero-btn">
            Browse Jobs
          </button>
          <button onClick={() => navigate("/add-job")} className="button hero-btn secondary">
            Post a Job
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">
        <div className="feature-card">
          <span className="icon">💼</span>
          <h3>Thousands of Jobs</h3>
          <p>Find opportunities across all industries and skill levels.</p>
        </div>

        <div className="feature-card">
          <span className="icon">⚡</span>
          <h3>Easy Apply</h3>
          <p>Apply for jobs quickly with a simple, clean application flow.</p>
        </div>

        <div className="feature-card">
          <span className="icon">🏆</span>
          <h3>Top Companies</h3>
          <p>Connect with trusted and renowned employers worldwide.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
