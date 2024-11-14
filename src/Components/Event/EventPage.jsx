import React, { useState, useEffect, useMemo } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import { Search, Filter, Calendar, List, ChevronLeft, ChevronRight, MapPin, Clock, Users, Tag, Star, Bell } from 'lucide-react';
import './EventPage.css';

// Helper functions for recurring events
const getMonthlyMeetingDate = (year, month) => {
  let date = new Date(year, month, 1);
  let sundayCount = 0;
  while (sundayCount < 3) {
    if (date.getDay() === 0) {
      sundayCount++;
    }
    if (sundayCount < 3) {
      date.setDate(date.getDate() + 1);
    }
  }
  return date;
};

const isMonthlyMeetingDay = (date) => {
  const meetingDate = getMonthlyMeetingDate(date.getFullYear(), date.getMonth());
  return date.getDate() === meetingDate.getDate();
};

const getCommunityEvents = (year) => {
  return [
    {
      id: 'ojude-oba',
      title: 'Ojude Oba Ago Iwoye',
      description: 'Annual Ojude Oba festival celebration in Ago Iwoye',
      schedule: new Date(year, 6, 15), // July 15th
      type: 'recurring-yearly',
      isHighPriority: true,
      category: 'cultural',
      location: 'Ago Iwoye',
      attendees: 1000,
      virtualLink: null
    },
    {
      id: 'ago-iwoye-day',
      title: 'Ago Iwoye Day',
      description: 'Annual Ago Iwoye Day celebration',
      schedule: new Date(2025, 9, 15), // October 15th (month is 0-based, so 9 = October)
      type: 'recurring-yearly',
      isHighPriority: true,
      category: 'cultural',
      location: 'Ago Iwoye',
      attendees: 2000,
      virtualLink: null
  },
    {
      id: 'new-year-prayer',
      title: 'New Year Prayer',
      description: 'Annual New Year Prayer meeting',
      schedule: new Date(year, 0, 1), // January 1st
      type: 'recurring-yearly',
      isHighPriority: true,
      category: 'religious',
      location: 'Central Mosque',
      attendees: 500,
      virtualLink: null
    }
  ];
};

// Event Card Component
const EventCard = ({ event, onFavorite }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="event-card" data-type={event.type}>
      <div className="event-card-header">
        <h3>{event.title}</h3>
        <div className="header-controls">
          {event.isHighPriority && <span className="priority-badge">Priority</span>}
          <button 
            className="favorite-btn"
            onClick={() => onFavorite(event.id)}
          >
            <Star className={event.isFavorite ? "filled" : ""} />
          </button>
        </div>
      </div>
      <div className="event-card-content">
        <p className="event-description">
          {isExpanded ? event.description : `${event.description.slice(0, 150)}...`}
          <button 
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <div className="event-details">
          <div className="event-detail">
            <Clock />
            <span>{new Date(event.schedule).toLocaleDateString()}</span>
          </div>
          <div className="event-detail">
            <MapPin />
            <span>{event.location}</span>
          </div>
          <div className="event-detail">
            <Users />
            <span>{event.attendees} Attendees</span>
          </div>
          <div className="event-detail">
            <Tag />
            <span>{event.category}</span>
          </div>
        </div>
        <div className="event-actions">
          <button className="action-btn register-btn">Register</button>
          <button className="action-btn share-btn">Share</button>
          {event.virtualLink && (
            <button className="action-btn virtual-btn">Join Virtual</button>
          )}
        </div>
      </div>
    </div>
  );
};

// Calendar View Component
const EventCalendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [monthlyEvents, setMonthlyEvents] = useState([]);

  const daysInMonth = useMemo(() => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return date.getDate();
  }, [currentDate]);

  const firstDayOfMonth = useMemo(() => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return date.getDay();
  }, [currentDate]);

  useEffect(() => {
    const monthlyMeeting = {
      id: 'monthly-meeting',
      title: 'Monthly General Meeting',
      description: 'Regular monthly community meeting',
      schedule: getMonthlyMeetingDate(currentDate.getFullYear(), currentDate.getMonth()),
      type: 'recurring-monthly',
      isHighPriority: true,
      category: 'community',
      location: 'Community Hall',
      attendees: 200,
      virtualLink: null
    };

    const yearlyEvents = getCommunityEvents(currentDate.getFullYear());
    const currentMonthEvents = yearlyEvents.filter(event => 
      new Date(event.schedule).getMonth() === currentDate.getMonth()
    );

    setMonthlyEvents([...currentMonthEvents, monthlyMeeting]);
  }, [currentDate]);

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const getDayEvents = (day) => {
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    return [
      ...monthlyEvents.filter(event => {
        const eventDate = new Date(event.schedule);
        return eventDate.getDate() === day;
      }),
      ...(isMonthlyMeetingDay(dayDate) ? [{
        id: 'monthly-meeting',
        title: 'Monthly General Meeting'
      }] : [])
    ];
  };

  const hasUpcomingEvent = useMemo(() => {
    return monthlyEvents.some(event => {
      const eventDate = new Date(event.schedule);
      return eventDate.getMonth() === currentDate.getMonth();
    });
  }, [monthlyEvents, currentDate]);

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="month-navigator">
          <button className="nav-btn" onClick={() => navigateMonth(-1)}>
            <ChevronLeft />
          </button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
          <button className="nav-btn" onClick={() => navigateMonth(1)}>
            <ChevronRight />
          </button>
        </div>
        {hasUpcomingEvent && (
          <div className="month-event-indicator">
            <Bell className="event-indicator-icon" />
            <span>This month has community events!</span>
          </div>
        )}
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty" />
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          const dayEvents = getDayEvents(day);
          const isToday = new Date().getDate() === day && 
                         new Date().getMonth() === currentDate.getMonth() &&
                         new Date().getFullYear() === currentDate.getFullYear();

          return (
            <div
              key={day}
              className={`calendar-day ${selectedDate === day ? 'selected' : ''} 
                         ${dayEvents.length ? 'has-events' : ''} 
                         ${isToday ? 'today' : ''}`}
              onClick={() => setSelectedDate(day)}
            >
              <span className="day-number">{day}</span>
              {dayEvents.length > 0 && (
                <div className="day-events-indicator">
                  <span className="event-count">{dayEvents.length}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <div className="selected-day-events">
          <h3>Events for {selectedDate} {currentDate.toLocaleString('default', { month: 'long' })}</h3>
          <div className="day-events-list">
            {getDayEvents(selectedDate).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Search Component
const EventSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilters, setSearchFilters] = useState({
    title: true,
    description: true,
    location: true
  });

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchFilters);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="search-input"
          />
        </div>
        <div className="search-filters">
          {Object.entries(searchFilters).map(([key, value]) => (
            <label key={key} className="search-filter-option">
              <input
                type="checkbox"
                checked={value}
                onChange={() => setSearchFilters(prev => ({...prev, [key]: !prev[key]}))}
              />
              Search in {key}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

// Advanced Filters Component
const AdvancedFilters = ({ filters, onChange }) => {
  return (
    <div className="advanced-filters">
      <div className="filter-group">
        <label>Date Range</label>
        <select
          value={filters.dateRange}
          onChange={(e) => onChange({...filters, dateRange: e.target.value})}
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => onChange({...filters, category: e.target.value})}
        >
          <option value="all">All Categories</option>
          <option value="community">Community</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
          <option value="social">Social</option>
          <option value="cultural">Cultural</option>
          <option value="religious">Religious</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Attendance</label>
        <select
          value={filters.attendance}
          onChange={(e) => onChange({...filters, attendance: e.target.value})}
        >
          <option value="all">All Types</option>
          <option value="in-person">In Person</option>
          <option value="virtual">Virtual</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>
    </div>
  );
};

// Main EventPage Component
const EventPage = () => {
  const {
    events,
    eventViewMode,
    eventFilters,
    setEventViewMode,
    setEventFilters,
    filterEvents,
    theme
  } = useGunwa();

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let filtered = filterEvents(eventFilters);
    
    if (searchResults) {
      filtered = filtered.filter(event => searchResults.includes(event.id));
    }
    
    if (eventFilters.favorites) {
      filtered = filtered.filter(event => favorites.includes(event.id));
    }

    // Add community events
    const communityEvents = getCommunityEvents(new Date().getFullYear());
    filtered = [...filtered, ...communityEvents];

    setFilteredEvents(filtered);
  }, [events, eventFilters, filterEvents, searchResults, favorites]);

  const handleSearch = (term, filters) => {
    if (!term.trim()) {
      setSearchResults(null);
      return;
    }

    const results = events.filter(event => {
      const searchFields = [];
      if (filters.title) searchFields.push(event.title.toLowerCase());
      if (filters.description) searchFields.push(event.description.toLowerCase());
      if (filters.location) searchFields.push(event.location.toLowerCase());
      
      return searchFields.some(field => field.includes(term.toLowerCase()));
    });

    setSearchResults(results.map(event => event.id));
  };

  const toggleFavorite = (eventId) => {
    setFavorites(prev => 
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className={`event-page ${theme}`}>
      <div className="event-page-header">
        <h1>Community Events</h1>
        
        <EventSearch onSearch={handleSearch} />
        
        <div className="view-controls">
          <div className="view-toggle">
            <button
              className={`view-btn ${eventViewMode === 'list' ? 'active' : ''}`}
              onClick={() => setEventViewMode('list')}
            >
              <List />
              <span>List</span>
              </button>
            <button
              className={`view-btn ${eventViewMode === 'calendar' ? 'active' : ''}`}
              onClick={() => setEventViewMode('calendar')}
            >
              <Calendar />
              <span>Calendar</span>
            </button>
          </div>

          <div className="filter-section">
            <div className="basic-filters">
              <select
                value={eventFilters.type}
                onChange={(e) => setEventFilters(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="all">All Events</option>
                <option value="recurring-monthly">Monthly Events</option>
                <option value="recurring-yearly">Yearly Events</option>
                <option value="special">Special Events</option>
              </select>
              
              <select
                value={eventFilters.priority}
                onChange={(e) => setEventFilters(prev => ({ ...prev, priority: e.target.value }))}
              >
                <option value="all">All Priority</option>
                <option value="high">High Priority</option>
                <option value="normal">Normal Priority</option>
              </select>

              <button
                className={`advanced-filters-toggle ${showAdvancedFilters ? 'active' : ''}`}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <Filter />
                <span>Advanced Filters</span>
              </button>
            </div>

            {showAdvancedFilters && (
              <AdvancedFilters
                filters={eventFilters}
                onChange={setEventFilters}
              />
            )}
          </div>
        </div>
      </div>

      <div className="event-page-content">
        {eventViewMode === 'calendar' ? (
          <EventCalendar 
            events={filteredEvents}
            onFavorite={toggleFavorite}
          />
        ) : (
          <div className="events-grid">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={{
                    ...event,
                    isFavorite: favorites.includes(event.id)
                  }}
                  onFavorite={toggleFavorite}
                />
              ))
            ) : (
              <div className="no-events-message">
                <p>No events found matching your criteria</p>
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setEventFilters({
                      type: 'all',
                      priority: 'all',
                      dateRange: 'all',
                      category: 'all',
                      attendance: 'all'
                    });
                    setSearchResults(null);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Upcoming Events Sidebar */}
      <div className="upcoming-events-sidebar">
        <h2>Upcoming Events</h2>
        <div className="upcoming-events-list">
          {filteredEvents
            .filter(event => {
              const eventDate = new Date(event.schedule);
              const today = new Date();
              return eventDate >= today;
            })
            .slice(0, 5)
            .map(event => (
              <div key={event.id} className="upcoming-event-item">
                <div className="event-date">
                  <span className="date-day">
                    {new Date(event.schedule).getDate()}
                  </span>
                  <span className="date-month">
                    {new Date(event.schedule).toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <span className="event-time">
                      <Clock className="icon" />
                      {new Date(event.schedule).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                    <span className="event-location">
                      <MapPin className="icon" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;