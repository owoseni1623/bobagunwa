import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: <Facebook size={20} />,
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <Twitter size={20} />,
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: <Instagram size={20} />,
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <Linkedin size={20} />,
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@yourusername',
      icon: <Youtube size={20} />,
      color: '#FF0000'
    }
  ];

  const openSocialMedia = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="fo003 footer">
      <div className="fo003 footer-container">
        {/* Company Info Section */}
        <div className="fo003 footer-section">
          <h3 className="fo003">About Us</h3>
          <p className="fo003">Connecting age groups through meaningful interactions and shared experiences. Join our community today and be part of something special.</p>
          <div className="fo003 social-links">
            {socialMedia.map((social) => (
              <button
                key={social.name}
                onClick={() => openSocialMedia(social.url)}
                className="fo003 social-icon"
                style={{ backgroundColor: social.color }}
                aria-label={`Visit our ${social.name} page`}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="fo003 footer-section">
          <h3 className="fo003">Quick Links</h3>
          <ul className="fo003 footer-links">
            <li className="fo003"><Link to='/'>Home</Link></li>
            <li className="fo003"><Link to="/about">About Us</Link></li>
            <li className="fo003"><Link to="/dashboard">Services</Link></li>
            <li className="fo003"><Link to="/events">Events</Link></li>
            <li className="fo003"><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="fo003 footer-section">
          <h3 className="fo003">Services</h3>
          <ul className="fo003 footer-links">
            <li className="fo003"><Link to="/members">Members</Link></li>
            <li className="fo003"><Link to="/dashboard">Community</Link></li>
            <li className="fo003"><Link to="/events">Activities</Link></li>
            <li className="fo003"><Link to="/contact">Support</Link></li>
            <li className="fo003"><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="fo003 footer-section">
          <h3 className="fo003">Contact Us</h3>
          <div className="fo003 contact-info">
            <div className="fo003 contact-item">
              <MapPin size={20} />
              <span className="fo003">123 Community Street, City, Country</span>
            </div>
            <div className="fo003 contact-item">
              <Phone size={20} />
              <a href="tel:+2348123456789" className="fo003">+234 812 345 6789</a>
            </div>
            <div className="fo003 contact-item">
              <Mail size={20} />
              <a href="mailto:info@yourplatform.com" className="fo003">info@yourplatform.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fo003 footer-bottom">
        <p className="fo003">&copy; {currentYear} Age Group Platform. All rights reserved.</p>
        <div className="fo003 footer-bottom-links">
          <Link to="/privacy" className="fo003">Privacy Policy</Link>
          <Link to="/terms" className="fo003">Terms of Service</Link>
          <Link to="/cookies" className="fo003">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;