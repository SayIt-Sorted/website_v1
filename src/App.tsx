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
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span>AI-Powered Travel Platform</span>
            </div>
            
            <h1 className="hero-title">
              Work Remotely from Anywhere in
              <span className="hero-title-highlight"> 10 Minutes</span>
            </h1>
            
            <p className="hero-description">
              Skip the endless research. Have a 10-minute call with our AI travel agent 
              and get a complete itinerary tailored to your remote work lifestyle. 
              From flights to coworking spaces, we handle everything.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">$1.3T</div>
                <div className="stat-label">Remote Work Market</div>
              </div>
              <div className="stat">
                <div className="stat-number">35M+</div>
                <div className="stat-label">Digital Nomads</div>
              </div>
              <div className="stat">
                <div className="stat-number">$2.4T</div>
                <div className="stat-label">Travel Industry</div>
              </div>
            </div>

            <div className="hero-cta">
              <button className="cta-primary" onClick={handleEmailClick}>
                Book Your AI Call
                <span className="cta-arrow">→</span>
              </button>
              <button className="cta-secondary" onClick={handleEmailClick}>
                Watch Demo
              </button>
            </div>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">🔒</span>
                <span>Secure & Private</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span>10-Minute Setup</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🌍</span>
                <span>Global Coverage</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="conversation-card card-1">
                <div className="card-header">
                  <div className="speaker-info">
                    <div className="speaker-avatar ai-avatar">
                      <svg className="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        <circle cx="12" cy="12" r="2"/>
                        <circle cx="8" cy="8" r="1"/>
                        <circle cx="16" cy="8" r="1"/>
                        <circle cx="8" cy="16" r="1"/>
                        <circle cx="16" cy="16" r="1"/>
                      </svg>
                    </div>
                    <div className="speaker-details">
                      <div className="speaker-name">AI Travel Agent</div>
                      <div className="speaking-status">
                        <div className="voice-indicator">
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                        </div>
                        <span className="status-text">Speaking</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-message">
                  "Hi! I'm your AI travel agent. Tell me about your dream trip..."
                </div>
              </div>
              
              <div className="conversation-card card-2">
                <div className="card-header">
                  <div className="speaker-info">
                    <div className="speaker-avatar user-avatar">
                      <svg className="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                      </svg>
                    </div>
                    <div className="speaker-details">
                      <div className="speaker-name">You</div>
                      <div className="speaking-status">
                        <div className="voice-indicator">
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                        </div>
                        <span className="status-text">Speaking</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-message">
                  "I need WiFi, good coffee, and a quiet workspace"
                </div>
              </div>
              
              <div className="conversation-card card-3">
                <div className="card-header">
                  <div className="speaker-info">
                    <div className="speaker-avatar ai-avatar">
                      <svg className="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                        <circle cx="12" cy="12" r="2"/>
                        <circle cx="8" cy="8" r="1"/>
                        <circle cx="16" cy="8" r="1"/>
                        <circle cx="8" cy="16" r="1"/>
                        <circle cx="16" cy="16" r="1"/>
                      </svg>
                    </div>
                    <div className="speaker-details">
                      <div className="speaker-name">AI Travel Agent</div>
                      <div className="speaking-status">
                        <div className="voice-indicator">
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                          <div className="voice-dot"></div>
                        </div>
                        <span className="status-text">Speaking</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-message">
                  "Perfect! Here's your complete 3-month itinerary"
                </div>
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
