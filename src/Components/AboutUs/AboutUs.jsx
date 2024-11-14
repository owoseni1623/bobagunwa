// AboutUs.jsx
import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState({});

  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '100+', label: 'Countries' },
    { number: '1M+', label: 'Connections Made' },
    { number: '4.9', label: 'User Rating' },
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former social psychologist turned tech entrepreneur, passionate about bringing generations together.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Community',
      bio: 'Community building expert with 10+ years experience in social platforms.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Research Director',
      bio: 'PhD in Generational Studies, leading our research initiatives.',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="about-us-container">
      <header className="hero-section">
        <h1 className="main-title">Bridging Generations, Building Connections</h1>
        <p className="subtitle">Where age is just a number and wisdom knows no bounds</p>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </header>

      <section id="stats" className="stats-section animate-on-scroll">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible['stats'] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button 
            className={`tab-button ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            Our Story
          </button>
          <button 
            className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
            onClick={() => setActiveTab('values')}
          >
            Our Values
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'mission' && (
            <div className="tab-panel">
              <h2>Our Mission</h2>
              <p>We're on a mission to create meaningful connections across generations, fostering understanding and mutual growth through shared experiences and knowledge exchange.</p>
              <div className="mission-goals">
                <div className="goal">
                  <h3>Breaking Age Barriers</h3>
                  <p>Creating spaces where age differences become opportunities for learning and connection.</p>
                </div>
                <div className="goal">
                  <h3>Fostering Understanding</h3>
                  <p>Building bridges between different age groups through shared interests and experiences.</p>
                </div>
                <div className="goal">
                  <h3>Empowering Growth</h3>
                  <p>Enabling personal development through intergenerational knowledge sharing.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="tab-panel">
              <h2>Our Story</h2>
              <p>Founded in 2023, our platform emerged from a simple observation: the most enriching conversations often happen when different generations come together. What started as a small community project has grown into a global movement.</p>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="year">2023</span>
                  <p>Platform launch with 100 beta users</p>
                </div>
                <div className="timeline-item">
                  <span className="year">2023</span>
                  <p>Reached 10,000 active users</p>
                </div>
                <div className="timeline-item">
                  <span className="year">2024</span>
                  <p>Expanded to 50 countries</p>
                </div>
                <div className="timeline-item">
                  <span className="year">2024</span>
                  <p>Launched mobile app</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="tab-panel">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Inclusivity</h3>
                  <p>Welcoming people of all ages and backgrounds to share their unique perspectives.</p>
                </div>
                <div className="value-card">
                  <h3>Respect</h3>
                  <p>Fostering an environment of mutual respect and understanding.</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>Continuously improving how we connect generations digitally.</p>
                </div>
                <div className="value-card">
                  <h3>Growth</h3>
                  <p>Supporting lifelong learning and personal development.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="team" className="team-section animate-on-scroll">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`team-card ${isVisible['team'] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img src={member.image} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <h2>Join Our Community</h2>
          <p>Be part of a movement that's bringing generations together</p>
          <button className="cta-button" onClick={() => window.location.href = '/join'}>Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;