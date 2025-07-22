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
            <img src={logoComplete} alt="Say It. Sorted" className="nav-logo-img" />
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
              <span>For Remote Workers Who Actually Get Sh*t Done</span>
            </div>
            
            <h1 className="hero-title">
              One 10-Minute Call.
              <span className="hero-title-highlight"> Your Entire Trip Sorted.</span>
            </h1>
            
            <p className="hero-description">
              Stop Googling "best coworking Lisbon" at 2am. Your AI travel buddy handles flights, 
              finds WiFi spots that actually work, and plans your whole nomad adventure. 
              No more browser tab chaos. No more "Is this café laptop-friendly?" anxiety.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">📊</div>
                <div className="stat-number">47</div>
                <div className="stat-label">Browser Tabs Saved</div>
                <div className="stat-subtitle">Per trip planning</div>
              </div>
              <div className="stat">
                <div className="stat-icon">⏰</div>
                <div className="stat-number">3AM</div>
                <div className="stat-label">Planning Time</div>
                <div className="stat-subtitle">When you give up</div>
              </div>
              <div className="stat">
                <div className="stat-icon">🤖</div>
                <div className="stat-number">AI</div>
                <div className="stat-label">Cost Optimization</div>
                <div className="stat-subtitle">Smart algorithms</div>
              </div>
              <div className="stat">
                <div className="stat-icon">🔒</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Secure</div>
                <div className="stat-subtitle">Actually secure</div>
              </div>
              <div className="stat">
                <div className="stat-icon">⚡</div>
                <div className="stat-number">10min</div>
                <div className="stat-label">Faster Than Standup</div>
                <div className="stat-subtitle">Quick & efficient</div>
              </div>
              <div className="stat">
                <div className="stat-icon">🌍</div>
                <div className="stat-number">Global</div>
                <div className="stat-label">Works Everywhere</div>
                <div className="stat-subtitle">Unlike hotel WiFi</div>
              </div>
            </div>

            <div className="hero-cta">
              <button className="cta-primary" onClick={handleEmailClick}>
                Book Your AI Call
                <span className="cta-arrow">→</span>
              </button>
              <button className="cta-secondary" onClick={handleEmailClick}>
                See the Magic
              </button>
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
                      <div className="speaker-name">Your AI Travel Buddy</div>
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
                  "Alright, let's plan your escape. Where's your laptop taking you next?"
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
                  "Somewhere with decent coffee and WiFi that won't drop during client calls"
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
                      <div className="speaker-name">Your AI Travel Buddy</div>
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
                  "Say no more. I've got your complete itinerary ready!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">One Call, Zero Stress, All Sorted</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Flight Booking That Doesn't Suck</h3>
              <p>AI finds flights that actually fit your timezone-confused schedule</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Places That Get Remote Work</h3>
              <p>Accommodations with real WiFi speeds and actual desks (revolutionary, we know)</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Coworking Spaces That Work</h3>
              <p>Book spots where you can actually focus without someone's TikTok blasting</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚌</div>
              <h3>Ground Transport That Makes Sense</h3>
              <p>Buses and trains that won't make you miss your Monday deadline</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Fellow Humans Who Get It</h3>
              <p>Connect with nomads who understand the struggle of finding good lunch spots</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Itineraries That Actually Work</h3>
              <p>Day-by-day plans that account for your weird working hours and caffeine needs</p>
              <div className="soon-badge">SOON</div>
            </div>
          </div>
        </div>
      </section>

      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <h2>🚀 Dropping soon in 2025</h2>
            <p>Stop asking your Instagram followers where to work in Bali. 
               Let AI handle the logistics while you handle your actual job.</p>
            <div className="email-signup">
              <input 
                type="email" 
                placeholder="Your work email (no spam, pinky promise)"
                className="email-input"
                value="joao@sayitsorted.com"
                readOnly
              />
              <button className="signup-button" onClick={handleEmailClick}>Get Me on This List</button>
            </div>
            <div className="coming-soon-features">
              <div className="feature-pill">🎯 End the "where should I go?" spiral</div>
              <div className="feature-pill">⚡ 10 minutes vs 10 hours of research hell</div>
              <div className="feature-pill">🌍 Your laptop works everywhere (even Bali)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;