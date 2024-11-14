import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Search,
  X,
  Menu
} from 'lucide-react';
import { useGunwa } from '../../Context/GunwaContext';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const {
    isHeaderExpanded,
    setIsHeaderExpanded,
    ageGroup,
    setAgeGroup
  } = useGunwa();

  const [time, setTime] = useState(new Date());
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuRef = useRef(null);
  const ageDropdownRef = useRef(null);
  
  const ageRanges = [
    "1980",
    "1981",
    "1982",
  ];

  const groupInfo = {
    memberCount: 45,
    yearEstablished: 2021,
    status: 'Active'
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (ageDropdownRef.current && !ageDropdownRef.current.contains(event.target)) {
        setIsAgeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`app-header ${isHeaderExpanded ? 'expanded' : ''}`}>
      <div className="header-main">
        <div className="header-left">
          <div 
            className="logo" 
            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
          >
            <img 
              src="/Images/gunwa logo.jpg" 
              alt="Logo" 
              className="logo-image"
            />
            <div className="logo-info">
              <span className="time">{time.toLocaleTimeString()}</span>
              <span className="date">{time.toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>

        <div className="header-center desktop-only">
          {isSearchVisible ? (
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search members..."
                className="search-input"
              />
              <button 
                className="icon-button close-search" 
                onClick={() => setIsSearchVisible(false)}
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <nav className="nav-menu">
              <button onClick={() => navigate('/')}>Home</button>
              <button onClick={() => navigate('/executives')}>Executives</button>
              <button onClick={() => handleNavigation('/royal')}>Royal Court</button>
              <button onClick={() => navigate('/members')}>Members</button>
              <button onClick={() => navigate('/events')}>Events</button>
              <button onClick={() => navigate('/gallery')}>Gallery</button>
            </nav>
          )}
        </div>

        <div className="header-right">
          <div className="age-dropdown-container" ref={ageDropdownRef}>
            <button 
              className="age-dropdown-trigger"
              onClick={() => setIsAgeDropdownOpen(!isAgeDropdownOpen)}
            >
              {ageGroup || 'Age Range'}
              <ChevronDown size={20} />
            </button>
            {isAgeDropdownOpen && (
              <div className="age-dropdown-menu">
                {ageRanges.map((range) => (
                  <button
                    key={range}
                    className="age-dropdown-item"
                    onClick={() => {
                      setAgeGroup(range);
                      setIsAgeDropdownOpen(false);
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            className="icon-button" 
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {isHeaderExpanded && (
        <div className="expanded-header desktop-only">
          <div className="expanded-content">
            <div className="stat-card">
              <h3>Age Range</h3>
              <p>{ageGroup || 'Not Selected'}</p>
              <small>1980 - 1981 - 1982</small>
            </div>
            <div className="stat-card">
              <h3>Total Members</h3>
              <p>{groupInfo.memberCount}</p>
              <small>Active Community</small>
            </div>
            <div className="stat-card">
              <h3>Group Status</h3>
              <p>{groupInfo.status}</p>
              <small>Since {groupInfo.yearEstablished}</small>
            </div>
          </div>
        </div>
      )}

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} ref={menuRef}>
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button 
              className="icon-button" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mobile-nav-menu">
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/executives')}>Executives</button>
            <button onClick={() => handleNavigation('/royal')}>Royal Court</button>
            <button onClick={() => handleNavigation('/members')}>Members</button>
            <button onClick={() => handleNavigation('/events')}>Events</button>
            <button onClick={() => handleNavigation('/gallery')}>Gallery</button>
          </nav>
          {isHeaderExpanded && (
            <div className="mobile-quick-stats">
              <div className="stat-card">
                <h3>Age Range</h3>
                <p>{ageGroup || 'Not Selected'}</p>
                <small>1980 - 1981 - 1982</small>
              </div>
              <div className="stat-card">
                <h3>Total Members</h3>
                <p>{groupInfo.memberCount}</p>
                <small>Active Community</small>
              </div>
              <div className="stat-card">
                <h3>Group Status</h3>
                <p>{groupInfo.status}</p>
                <small>Since {groupInfo.yearEstablished}</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;