import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGunwa } from '../../Context/GunwaContext';
import { FaUsers, FaCalendarAlt, FaUserCircle, FaBullhorn } from 'react-icons/fa';
import { BiNetworkChart, BiBookReader } from 'react-icons/bi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'

const Home = () => {
  const { theme, toggleTheme, ageGroup, setAgeGroup } = useGunwa();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ageRanges = ['1980-1981-1982'];

  const features = [
    {
      title: "Active Community",
      description: "Join our thriving community of like-minded individuals. Engage in meaningful discussions, share experiences, and build lasting connections with peers who understand your journey.",
      icon: <FaUsers className="feature-icon-svg" />,
      stats: "5000+ Active Members"
    },
    {
      title: "Event Planning",
      description: "Access exclusive events tailored to your interests. From professional workshops to social gatherings, our events calendar is packed with opportunities to learn and connect.",
      icon: <FaCalendarAlt className="feature-icon-svg" />,
      stats: "200+ Events Yearly"
    },
    {
      title: "Member Profiles",
      description: "Create your professional profile and connect with others. Showcase your achievements, interests, and expertise while discovering potential collaborators and friends.",
      icon: <FaUserCircle className="feature-icon-svg" />,
      stats: "3000+ Professional Profiles"
    },
    {
      title: "Group Updates",
      description: "Stay informed with real-time updates about community news, upcoming events, and important announcements. Never miss an opportunity to engage and grow.",
      icon: <FaBullhorn className="feature-icon-svg" />,
      stats: "Weekly Updates"
    },
    {
      title: "Networking",
      description: "Expand your professional network through our dedicated networking platforms. Connect with industry leaders, entrepreneurs, and professionals across various sectors.",
      icon: <BiNetworkChart className="feature-icon-svg" />,
      stats: "1000+ Business Connections"
    },
    {
      title: "Mentorship",
      description: "Benefit from our structured mentorship program. Connect with experienced professionals who can guide your personal and career development journey.",
      icon: <BiBookReader className="feature-icon-svg" />,
      stats: "500+ Mentor Matches"
    }
  ];

  const testimonials = [
    {
      content: "Bobagunwa Asiwaju has transformed my professional life. Through the network I've built here, I've secured partnerships that have helped my business grow exponentially. The mentorship program is simply outstanding.",
      author: "Owoseni Oluwasesan Motunrayo",
      role: "Tech Entrepreneur & CEO",
      image: "/Images/pics14.jpg",
      rating: 5,
      company: "TechInnovate Nigeria"
    },
    {
      content: "The quality of events and workshops is exceptional. Every session provides actionable insights that I've successfully implemented in my business. The community support is unmatched.",
      author: "Adekunle Bakare",
      role: "Business Strategy Consultant",
      image: "/Images/pics12.jpg",
      rating: 5,
      company: "Strategic Solutions Ltd"
    },
    {
      content: "Being part of this community has opened doors I never knew existed. The networking opportunities and mentorship programs have been instrumental in my career progression.",
      author: "Funmilayo Ajayi",
      role: "Community Development Director",
      image: "/Images/pics13.jpg",
      rating: 5,
      company: "Impact Foundation"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setNewsletterEmail('');
  };

  const statistics = [
    { number: "5000+", label: "Active Members" },
    { number: "200+", label: "Annual Events" },
    { number: "95%", label: "Member Satisfaction" },
    { number: "1000+", label: "Success Stories" }
  ];

  return (
    <div className={`home-container ${theme}`}>
      <div className="background-logo"></div>
      
      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>

      {/* Scroll to Top */}
      <button 
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Bobagunwa Asiwaju</h1>
          <p className="hero-subtitle">Asiwaju ni wa nipa Irepo</p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <FaUsers />
              <span>5000+ Members</span>
            </div>
            <div className="hero-feature">
              <FaCalendarAlt />
              <span>200+ Events</span>
            </div>
            <div className="hero-feature">
              <BiNetworkChart />
              <span>Global Network</span>
            </div>
          </div>

          <div className="age-selector" data-aos="fade-up" data-aos-delay="200">
            <h3>Select Your Age Range:</h3>
            <div className="age-options">
              {ageRanges.map((range) => (
                <button
                  key={range}
                  className={`age-option ${ageGroup === range ? 'active' : ''}`}
                  onClick={() => setAgeGroup(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
            <Link to="/join" className="primary-button">
              Join Our Community
            </Link>
            <button className="secondary-button" onClick={() => setShowModal(true)}>
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <div className="image-container">
            <img src="/Images/gunwaG0.jpg" alt="Bobagunwa Asiwaju Community" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section" data-aos="fade-up">
        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="statistic-card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title" data-aos="fade-up">Why Choose Bobagunwa Asiwaju?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-stats">{feature.stats}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" data-aos="fade-up">
        <div className="about-grid">
          <div className="about-content" data-aos="fade-right">
            <h2 className="section-title">About Bobagunwa Asiwaju</h2>
            <p className="about-lead">
              Empowering individuals through unity, growth, and shared success.
            </p>
            <div className="about-text">
              <p>
                Bobagunwa Asiwaju stands as a beacon of excellence in community building,
                bringing together ambitious professionals born in the early 1980s. Our
                platform serves as a catalyst for personal and professional growth,
                fostering meaningful connections that transcend traditional networking.
              </p>
              <p>
                With our motto "Asiwaju ni wa nipa Irepo" (We are the leaders in Unity),
                we embrace the power of collective progress. Our community thrives on
                mutual support, knowledge sharing, and collaborative success.
              </p>
            </div>
            <div className="about-features">
              <div className="about-feature">
                <span className="check-icon">✓</span>
                <span>Professional Development</span>
              </div>
              <div className="about-feature">
                <span className="check-icon">✓</span>
                <span>Networking Opportunities</span>
              </div>
              <div className="about-feature">
                <span className="check-icon">✓</span>
                <span>Mentorship Programs</span>
              </div>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src="/Images/gunwa logo.jpg" alt="About Bobagunwa Asiwaju" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2 className="section-title">Success Stories</h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-content">
                <div className="quote-mark">"</div>
                <p>{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`control-dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section" data-aos="fade-up">
        <div className="newsletter-content">
          <h2>Stay Connected</h2>
          <p>Join our newsletter to receive updates about events, opportunities, and community highlights.</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="primary-button">Subscribe</button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-aos="fade-up">
        <div className="cta-content">
          <h2>Join the Bobagunwa Asiwaju Community</h2>
          <p>
            Connect with like-minded professionals, access exclusive opportunities,
            and be part of a community that champions growth and success.
          </p>
          <div className="cta-buttons">
            <Link to="/join" className="primary-button">
              Become a Member
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Thank You!</h3>
            <p>Your subscription has been confirmed. Welcome to our community!</p>
            <button className="primary-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;