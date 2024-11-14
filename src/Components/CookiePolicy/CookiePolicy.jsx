import React, { useState } from 'react';
import './CookiePolicy.css';

const BobagunwaLanding = () => {
    const [activeSection, setActiveSection] = useState('about');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="bobagunwa-landing">
            <header className="landing-header">
                <div className="header-content">
                    <h1>Bobagunwa Asiwaju</h1>
                    <p>Ago Iwoye Town, Ijebu - Ogun State Age Group</p>
                </div>
            </header>

            <nav className="landing-nav">
                <button 
                    className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('about')}
                >
                    About Us
                </button>
                <button 
                    className={`nav-button ${activeSection === 'history' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('history')}
                >
                    Our History
                </button>
                <button 
                    className={`nav-button ${activeSection === 'activities' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('activities')}
                >
                    Activities
                </button>
                <button 
                    className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('contact')}
                >
                    Contact Us
                </button>
            </nav>

            <main className="landing-main">
                {activeSection === 'about' && (
                    <section className="content-section">
                        <h2>About Bobagunwa Asiwaju</h2>
                        <div className="section-content">
                            <p>The Bobagunwa Asiwaju represents a distinguished age group in Ago Iwoye, a prominent town in the Ijebu region of Ogun State, Nigeria. Our group embodies the cultural heritage and traditional values that have been passed down through generations in our community.</p>
                            <p>As custodians of our cultural heritage, we play a vital role in:</p>
                            <ul>
                                <li>Preserving and promoting Ago Iwoye's rich cultural traditions</li>
                                <li>Supporting community development initiatives</li>
                                <li>Mentoring younger generations</li>
                                <li>Maintaining social harmony and progress</li>
                            </ul>
                        </div>
                    </section>
                )}

                {activeSection === 'history' && (
                    <section className="content-section">
                        <h2>Our Rich History</h2>
                        <div className="section-content">
                            <p>The Bobagunwa Asiwaju age group has a storied history deeply rooted in the traditional fabric of Ago Iwoye. Our lineage traces back through generations of community leaders and cultural custodians who have contributed significantly to the growth and development of our beloved town.</p>
                            <div className="history-timeline">
                                <div className="timeline-item">
                                    <h3>Heritage</h3>
                                    <p>Our age group represents a continuation of ancient Ijebu traditions, maintaining the cultural practices that have defined our community for centuries.</p>
                                </div>
                                <div className="timeline-item">
                                    <h3>Leadership</h3>
                                    <p>Through the years, we have produced notable leaders who have guided our community through various phases of development and progress.</p>
                                </div>
                                <div className="timeline-item">
                                    <h3>Achievement</h3>
                                    <p>Our contributions to community development, cultural preservation, and social harmony have helped shape Ago Iwoye into the thriving town it is today.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'activities' && (
                    <section className="content-section">
                        <h2>Our Activities</h2>
                        <div className="section-content">
                            <div className="activities-grid">
                                <div className="activity-card">
                                    <h3>Cultural Festivals</h3>
                                    <p>We organize and participate in traditional festivals that celebrate our rich heritage and bring the community together.</p>
                                </div>
                                <div className="activity-card">
                                    <h3>Community Service</h3>
                                    <p>Regular community development projects and initiatives to improve the lives of Ago Iwoye residents.</p>
                                </div>
                                <div className="activity-card">
                                    <h3>Youth Mentorship</h3>
                                    <p>Programs designed to pass down traditional knowledge and values to younger generations.</p>
                                </div>
                                <div className="activity-card">
                                    <h3>Social Gatherings</h3>
                                    <p>Regular meetings and social events that strengthen bonds within our age group and the wider community.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'contact' && (
                    <section className="content-section">
                        <h2>Contact Us</h2>
                        <div className="section-content">
                            <div className="contact-info">
                                <div className="contact-detail">
                                    <h3>Address</h3>
                                    <p>Bobagunwa Asiwaju Secretariat</p>
                                    <p>Ago Iwoye, Ijebu</p>
                                    <p>Ogun State, Nigeria</p>
                                </div>
                                <div className="contact-detail">
                                    <h3>Get in Touch</h3>
                                    <p>Email: info@bobagunwaasiwaju.org</p>
                                    <p>Phone: +234 xxx xxxx xxx</p>
                                </div>
                            </div>
                            <form className="contact-form">
                                <input type="text" placeholder="Your Name" className="form-input" />
                                <input type="email" placeholder="Your Email" className="form-input" />
                                <textarea placeholder="Your Message" className="form-input" rows="4"></textarea>
                                <button type="submit" className="submit-button">Send Message</button>
                            </form>
                        </div>
                    </section>
                )}
            </main>

            {/* <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Bobagunwa Asiwaju</h3>
                        <p>Preserving Our Heritage, Building Our Future</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#history">History</a></li>
                            <li><a href="#activities">Activities</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect With Us</h3>
                        <div className="social-links">
                            <a href="#facebook">Facebook</a>
                            <a href="#twitter">Twitter</a>
                            <a href="#instagram">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Bobagunwa Asiwaju. All rights reserved.</p>
                </div>
            </footer> */}
        </div>
    );
};

export default BobagunwaLanding;