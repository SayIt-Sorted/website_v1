import React from 'react';
import logoComplete from './logo_complete.png';
import './App.css';

function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:joao@sayitsorted.com';
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logoComplete} alt="Say It Sort It" className="nav-logo-img" />
          </div>
          <div className="nav-actions">
            <button className="nav-button secondary" onClick={handleEmailClick}>About</button>
            <button className="nav-button primary" onClick={handleEmailClick}>Get Early Access</button>
          </div>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-icon">🚀</span>
              <span>AI-Powered Travel Platform</span>
            </div>
            
            <h1 className="hero-title">
              Plan Your Perfect Trip in
              <span className="hero-title-highlight"> 10 Minutes</span>
            </h1>
            
            <p className="hero-description">
              Have a 10-minute call with our AI travel agent and get a complete 
              itinerary tailored to your remote work lifestyle. From flights to 
              coworking spaces, we handle everything.
            </p>

            <div className="hero-cta">
              <button className="cta-primary" onClick={handleEmailClick}>
                Book Your AI Call
                <span className="cta-arrow">→</span>
              </button>
              <button className="cta-secondary" onClick={handleEmailClick}>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-icon">🤖</div>
                <div className="card-text">"Hi! I'm your AI travel agent. Tell me about your dream trip..."</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">📅</div>
                <div className="card-text">"I need WiFi, good coffee, and a quiet workspace"</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">✅</div>
                <div className="card-text">"Perfect! Here's your complete 3-month itinerary"</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">One AI Call, Complete Travel Solution</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Smart Flight Booking</h3>
              <p>AI finds the best routes, prices, and times for your schedule</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Remote Worker Accommodation</h3>
              <p>Stays with reliable WiFi, workspaces, and digital nomad communities</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Coworking Spaces</h3>
              <p>Book productive workspaces with meeting rooms and networking events</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚌</div>
              <h3>Bus & Train Routes</h3>
              <p>Find the best ground transportation options for your journey</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Digital Nomad Community</h3>
              <p>Connect with other remote workers in your destination</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Complete Itinerary Planning</h3>
              <p>AI creates detailed day-by-day plans based on your preferences</p>
              <div className="soon-badge">SOON</div>
            </div>
          </div>
        </div>
      </section>

      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <h2>Coming Q4 2025</h2>
            <p>Be among the first to experience AI-powered travel planning</p>
            <div className="email-signup">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
                value="joao@sayitsorted.com"
                readOnly
              />
              <button className="signup-button" onClick={handleEmailClick}>Get Early Access</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
