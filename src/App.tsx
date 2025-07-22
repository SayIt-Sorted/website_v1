import React, { useState } from 'react';
import logoComplete from './logo_complete.png';
import './App.css';

// Import icons
import verifiedIcon from './icons/verified.svg';
import onlineIcon from './icons/online.svg';
import communityIcon from './icons/community.svg';
import flightIcon from './icons/flight.png';
import homeIcon from './icons/home.png';
import monitorIcon from './icons/monitor.png';
import transportIcon from './icons/transport.png';
import peopleIcon from './icons/people.png';
import mapPngIcon from './icons/map.png';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAboutClick = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEarlyAccessClick = () => {
    document.querySelector('.coming-soon-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);
    
    // Redirect to Google Form with email pre-filled
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeHqd2XydA2M8OntRtDVv1CtQ9gD-5_a4xdYCyZM2S3BC6hag/viewform?usp=pp_url&entry.962810985=${encodeURIComponent(email)}`;
    window.open(googleFormUrl, '_blank');
    
    setIsSubmitted(true);
    setEmail('');
    setIsLoading(false);
  };





  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logoComplete} alt="Say It. Sorted" className="nav-logo-img" />
          </div>
          <div className="nav-actions">
            <button className="nav-button secondary" onClick={handleAboutClick}>About</button>
            <button className="nav-button primary" onClick={handleEarlyAccessClick}>Get Early Access</button>
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

            <div className="hero-cta">
              <button className="cta-primary" onClick={handleEarlyAccessClick}>
                <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Speak to your AI travel buddy
              </button>
            </div>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">
                  <img src={verifiedIcon} alt="Verified" />
                </span>
                <span>By Nomads, For Nomads</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <img src={onlineIcon} alt="Always Online" />
                </span>
                <span>Always Online, Always Available</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">
                  <img src={communityIcon} alt="Community" />
                </span>
                <span>Join the Nomad Community</span>
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
              <div className="feature-icon">
                <img src={flightIcon} alt="Flight Booking" />
              </div>
              <h3>No more flight apps</h3>
              <p>Find  the perfect flight without 10+ tabs exploding dynamic pricing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={homeIcon} alt="Accommodation" />
              </div>
              <h3>Accommodations That Fit</h3>
              <p>With places where you can get work done</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={monitorIcon} alt="Coworking" />
              </div>
              <h3>Find Coworking Spaces</h3>
              <p>Book spots or find cafes where without "wifi" or "no-laptop zone" anxiety</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={transportIcon} alt="Transport" />
              </div>
              <h3>Get to your actual destination</h3>
              <p>Include trains and buses so you can budget correctly</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={peopleIcon} alt="Community" />
              </div>
              <h3>Connect with a community</h3>
              <p>Meet other nomads who understand the struggle of finding good lunch spots</p>
              <div className="soon-badge">SOON</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={mapPngIcon} alt="Itineraries" />
              </div>
              <h3>Itineraries For Adventurers</h3>
              <p>Day-by-day plans that account for your weird working hours and caffeine needs</p>
              <div className="soon-badge">SOON</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="founder-badge">🎬</div>
              <h2>Meet the Founder</h2>
              <p>
                From midnight Googling "best coworking Lisbon" to building the AI travel buddy 
                that actually gets it. Our founder's journey from digital nomad chaos to 
                creating the solution we all needed.
              </p>
              <div className="video-placeholder">
                <div className="video-container">
                  <div className="video-background">
                    <div className="geometric-shapes">
                      <div className="shape shape-1"></div>
                      <div className="shape shape-2"></div>
                      <div className="shape shape-3"></div>
                    </div>
                    <div className="data-visualization">
                      <div className="data-line data-line-1"></div>
                      <div className="data-line data-line-2"></div>
                      <div className="data-line data-line-3"></div>
                    </div>
                  </div>
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="video-overlay">
                    <span className="coming-soon-text">Founder Story Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <div className="coming-soon-text">
              <div className="launch-badge">Launching soon in 2025</div>
              <h2>The Future of Work-Travel Arrives.</h2>
              <p>
                Ditch the endless research and social media polls. Our AI curates your entire 
                work-travel experience, from hyper-reliable WiFi to the perfect desk setup abroad.
              </p>
              <div className="email-signup">
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit}>
                    <input 
                      type="email" 
                      placeholder="Enter your email for exclusive access"
                      className="email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className="signup-button" 
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Request Early Access'}
                    </button>
                  </form>
                ) : (
                  <div className="success-message">
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="try-again-button"
                    >
                      Add Another Email
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="coming-soon-features-list">
              <div className="feature-list-item">
                <span className="feature-list-icon">
                  🎯
                </span>
                <div className="feature-list-text">
                  <strong>End the Guesswork.</strong>
                  <span>Stop the "where should I go?" spiral for good.</span>
                </div>
              </div>
              <div className="feature-list-item">
                <span className="feature-list-icon">
                  ⚡
                </span>
                <div className="feature-list-text">
                  <strong>Save 10+ Hours.</strong>
                  <span>Swap endless research for a single, productive AI call.</span>
                </div>
              </div>
              <div className="feature-list-item">
                <span className="feature-list-icon">
                  🌍
                </span>
                <div className="feature-list-text">
                  <strong>Travel with Confidence.</strong>
                  <span>Get access to a global network of vetted, work-friendly spots.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;