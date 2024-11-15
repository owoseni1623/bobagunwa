import React, { useState, useEffect } from 'react';
import { Search, Filter, UserPlus, Mail, Phone, Download, Edit, Trash2, MapPin, Briefcase, X, Award, Gift } from 'lucide-react';
import { useGunwa } from '../../Context/GunwaContext';
import "./MemberPage.css"

const POSITIONS = [
  'Chairman',
  'Vice Chairman',
  'Secretary',
  'Assistant Secretary',
  'Financial Secretary',
  'Treasurer',
  'Public Relations Officer',
  'Member'
];

const getDaysUntilBirthday = (dateOfBirth) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);  
  const birthday = new Date(dateOfBirth);
  birthday.setMinutes(birthday.getMinutes() + birthday.getTimezoneOffset());
  const currentYear = today.getFullYear();
  const nextBirthday = new Date(currentYear, birthday.getMonth(), birthday.getDate());
  nextBirthday.setHours(0, 0, 0, 0);
  if (today > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }
  const diffTime = nextBirthday - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const getBirthdayMessage = (dateOfBirth) => {
  const daysUntil = getDaysUntilBirthday(dateOfBirth);
  if (daysUntil === 0) {
    return "🎉 Happy Birthday! 🎂";
  } else if (daysUntil <= 5) {
    return `🎈 Happy Birthday in advance ${daysUntil} days to go!`;
  }
  return "";
};

const BirthdayStar = ({ style }) => (
  <div className="birthday-star" style={{ ...style }}>⭐★☆✧✦✢🎉</div>
);

const BirthdayCelebration = () => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `-10px`,
        animationDelay: `${Math.random() * 3}s`
      }
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="birthday-celebration-card">
      {stars.map(star => (
        <BirthdayStar key={star.id} style={star.style} />
      ))}
      <div className="birthday-wishes-card">
        <h1 className="wish-text-card">Happy Birthday Our Own Gunwa! 🎉</h1>
      </div>
    </div>
  );
};

const formatDate = (date, showYear = false) => {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
  if (showYear) {
    return d.toLocaleDateString();
  } else {
    const month = d.toLocaleString('default', { month: 'short' });
    const day = d.getDate();
    return `${month} ${day}`;
  }
};

const MemberPage = () => {
  const {
    theme,
    ageGroup,
    members,
    addMember,
    updateMember,
    deleteMember,
    totalMembers,
    activeMembers
  } = useGunwa();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [positionFilter, setPositionFilter] = useState('all');
  const [isAddMemberModal, setIsAddMemberModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [showMemberYear, setShowMemberYear] = useState(false);

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.occupation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatusFilter = selectedFilter === 'all' || member.status === selectedFilter;
    const matchesPositionFilter = positionFilter === 'all' || member.position === positionFilter;
    
    return matchesSearch && matchesStatusFilter && matchesPositionFilter;
  });

  return (
    <div className={`member-page ${theme}`}>
      <div className="member-header">
        <h1>Members Directory</h1>
        <div className="member-stats">
          <div className="stat-box">
            <span className="stat-number">{totalMembers}</span>
            <span className="stat-label">Total Members</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">{activeMembers}</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">{ageGroup || '1980-1982'}</span>
            <span className="stat-label">Age Group</span>
          </div>
        </div>
      </div>

      <div className="member-filters">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search members by name, email, location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Members
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'active' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'inactive' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('inactive')}
          >
            Inactive
          </button>
          
          <select 
            className="position-filter"
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value)}
          >
            <option value="all">All Positions</option>
            {POSITIONS.map(position => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>

        <div className="action-buttons">
          <button className="view-toggle-btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            <Filter size={20} />
            {viewMode === 'grid' ? 'List View' : 'Grid View'}
          </button>
          <button className="add-member-btn" onClick={() => setIsAddMemberModal(true)}>
            <UserPlus size={20} />
            Add Member
          </button>
        </div>
      </div>

      <div className={`members-container ${viewMode}`}>
        {filteredMembers.map(member => {
          const daysUntilBirthday = getDaysUntilBirthday(member.dateOfBirth);
          const isBirthday = daysUntilBirthday === 0;
          const isUpcomingBirthday = daysUntilBirthday <= 5;
          const birthdayMessage = getBirthdayMessage(member.dateOfBirth);

          return (
            <div 
              key={member.id} 
              className={`member-card ${isUpcomingBirthday ? 'birthday-upcoming' : ''} ${isBirthday ? 'birthday-today' : ''}`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="member-content">
                {isBirthday && <BirthdayCelebration />}
                <div className="member-image">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    onError={(e) => {
                      e.target.src = `/api/placeholder/150/150?text=No+Image`;
                    }}
                  />
                  <span className={`status-indicator ${member.status}`}></span>
                  {birthdayMessage && (
                    <div className="birthday-indicator">
                      <Gift size={16} className="gift-icon" />
                      <span className="birthday-message">{birthdayMessage}</span>
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <div className="position-badge">
                    <Award size={16} className="position-icon" />
                    <span>{member.position || 'Member'}</span>
                  </div>
                  <div className="member-details">
                    <p className="detail-item">
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </p>
                    <p className="detail-item">
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </p>
                    <p className="detail-item">
                      <MapPin size={16} />
                      <span>{member.location}</span>
                    </p>
                    <p className="detail-item">
                      <Briefcase size={16} />
                      <span>{member.occupation}</span>
                    </p>
                  </div>
                  <div className="member-metadata">
                    <span>Date of Birth: {formatDate(member.dateOfBirth)}</span>
                    <span>Birth Year: {member.birthYear}</span>
                    <span>Joined: {formatDate(member.joinDate)}</span>
                    <span>Contributions: {member.contributions}</span>
                  </div>
                </div>
                <div className="member-actions">
                  <button 
                    className="edit-btn" 
                    title="Edit member"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Implement edit functionality
                    }}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    className="delete-btn" 
                    title="Delete member"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm('Are you sure you want to delete this member?')) {
                        deleteMember(member.id);
                      }
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedMember && (
        <div className="member-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Member Details</h2>
              <button onClick={() => setSelectedMember(null)}><X size={24} /></button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name} 
                className="modal-image"
                onError={(e) => {
                  e.target.src = `/api/placeholder/150/150?text=No+Image`;
                }}
              />
              <div className="modal-info">
                <h3>{selectedMember.name}</h3>
                {getBirthdayMessage(selectedMember.dateOfBirth) && (
                  <div className="birthday-banner">
                    {getBirthdayMessage(selectedMember.dateOfBirth)}
                  </div>
                )}
                <div className="position-badge-large">
                  <Award size={20} />
                  <span>{selectedMember.position || 'Member'}</span>
                </div>
                <p>{selectedMember.occupation}</p>
                <div className="modal-details">
                  <p><Mail size={16} /> {selectedMember.email}</p>
                  <p><Phone size={16} /> {selectedMember.phone}</p>
                  <p><MapPin size={16} /> {selectedMember.location}</p>
                </div>
                <div className="modal-stats">
                  <div className="stat">
                    <span>Status</span>
                    <span className={`status ${selectedMember.status}`}>
                      {selectedMember.status}
                    </span>
                  </div>
                  <div className="stat">
                    <span>Date of Birth</span>
                    <span>{formatDate(selectedMember.dateOfBirth, showMemberYear)}</span>
                  </div>
                  <div className="stat">
                    <span>Birth Year</span>
                    <span>{selectedMember.birthYear}</span>
                  </div>
                  <div className="stat">
                    <span>Joined</span>
                    <span>{formatDate(selectedMember.joinDate, showMemberYear)}</span>
                  </div>
                  <div className="stat">
                    <span>Contributions</span>
                    <span>{selectedMember.contributions}</span>
                  </div>
                  <div className="stat">
                    <span>Last Active</span>
                    <span>{selectedMember.lastActive}</span>
                  </div>
                  <div className="stat">
                    <button 
                      className={`show-year ${showMemberYear ? 'active' : ''}`}
                      onClick={() => setShowMemberYear(!showMemberYear)}
                    >
                      {showMemberYear ? 'Hide Year' : 'Show Year'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddMemberModal && (
        <div className="member-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Member</h2>
              <button onClick={() => setIsAddMemberModal(false)}><X size={24} /></button>
            </div>
            {/* Add your member form here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberPage;