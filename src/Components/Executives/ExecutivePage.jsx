import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, MapPin, Briefcase, X, ArrowDown, ArrowUp } from 'lucide-react';
import { useGunwa } from '../../Context/GunwaContext';
import './ExecutivePage.css';

const ExecutiveTeam = () => {
  const { theme } = useGunwa();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const executives = [
    {
      id: 1,
      name: 'Gunwa Emida Adesina',
      position: 'Chairman',
      image: '/Images/gunwac1.jpg',
      email: 'emidasinang@gmail.com',
      phone: '+234 803 441 7149',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      isLeadership: true,
      bio: 'Gunwa Emida Adesina is the Ag. Chairman of the organization, leading the team with a wealth of experience and a deep commitment to the community. With over 20 years of leadership experience in the non-profit sector, Gunwa Emida has been instrumental in driving the organization initiatives and fostering collaborative partnerships to amplify its impact.',
      numInitiatives: 12,
      numEvents: 24
    },
    {
      id: 2,
      name: 'Gunwa Afolashade Adeniyi',
      position: 'Chairperson',
      image: '/Images/gunwa011.jpg',
      email: 'chairperson@gunwa.org',
      phone: '+234 803 453 9667',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      isLeadership: true,
      bio: 'Gunwa Afolashade Adeniyi serves as the Chairperson, bringing her expertise and innovative ideas to drive the organization forward. With a background in social development and extensive experience in community engagement, Gunwa Afolashade has been instrumental in shaping the organization strategic priorities and expanding its reach.',
      numInitiatives: 15,
      numEvents: 30
    },
    {
      id: 3,
      name: 'Gunwa Sunday Babalola',
      position: 'Vice Chairman',
      image: '/Images/gunwa0.jpg',
      email: 'vicechairman@gunwa.org',
      phone: '+234 805 616 3345',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      isLeadership: true,
      bio: 'Gunwa Sunday Babalola, the Vice Chairman, is a respected leader who works tirelessly to support the organization\'s mission and objectives. With a deep understanding of the local community and a proven track record in project management, Gunwa Sunday has been instrumental in ensuring the seamless execution of the organization initiatives.',
      numInitiatives: 10,
      numEvents: 18
    },
    {
      id: 4,
      name: 'Gunwa Adebambo Ademoye',
      position: 'Secretary',
      image: '/Images/gunwa004.jpg',
      email: 'princepadmat@gmail.com',
      phone: '+234 804 567 8901',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Adebambo Ademoye plays a crucial role in maintaining the organization\'s records and ensuring smooth operations. With meticulous attention to detail and strong administrative skills, manages the team\'s documentation and correspondence efficiently.',
      numInitiatives: 8,
      numEvents: 22
    },
    {
      id: 5,
      name: 'Gunwa Abiola Nuberu',
      position: 'Treasurer',
      image: '/Images/gunwa15.jpg',
      email: '.anuberu@yahoo.com',
      phone: '+234 813 012 6538',
      location: 'Lagos',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Abiola Nuberu manages the organization\'s financial affairs with diligence and transparency. With a strong background in finance and accounting, ensures efficient allocation and management of resources.',
      numInitiatives: 9,
      numEvents: 20
    },
    {
      id: 6,
      name: 'Gunwa Faith Ibukunola',
      position: 'Secretary II',
      image: '/Images/gunwa00.jpg',
      email: 'secretary2@gunwa.org',
      phone: '+234 806 789 0123',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Faith Ibukunola supports the Secretary in maintaining records and ensuring smooth operations. Strong administrative skills and attention to detail are key strengths.',
      numInitiatives: 7,
      numEvents: 16
    },
    {
      id: 7,
      name: 'Gunwa Olasunkanmi Odusi',
      position: 'Social Sec.',
      image: '/Images/gunwa006.jpg',
      email: 'social@gunwa.org',
      phone: '+234 807 890 1234',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Olasunkanmi Odusi coordinates social events and activities. Has a passion for community engagement and excellent event planning skills.',
      numInitiatives: 6,
      numEvents: 14
    },
    {
      id: 8,
      name: 'Gunwa Bukola Adeoye',
      position: 'Social Sec II',
      image: '/Images/gunwa002.jpg',
      email: 'segitaule@gmail.com',
      phone: '+234 808 901 2345',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2019,
      status: 'active',
      bio: 'Gunwa Bukola Adeoye assists in planning and executing social events. Exceptional organizational skills and ability to multitask effectively.',
      numInitiatives: 9,
      numEvents: 18
    },
    {
      id: 9,
      name: 'Gunwa Idera Sikiru',
      position: 'P.R.O',
      image: '/Images/gunwa02.jpg',
      email: 'iderasikiru@yahoomail.com',
      phone: '+234 807 541 0701',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Idera Sikiru manages external communications and public image. Strong background in media and communications, crafting engaging narratives.',
      numInitiatives: 11,
      numEvents: 22
    },
    {
      id: 10,
      name: 'Gunwa Olatunbosun Adebanjo',
      position: 'Welfare',
      image: '/Images/gunwa001.jpg',
      email: 'Bosunmayor01@gmail.com',
      phone: '+234 810 123 4567',
      location: 'United Kingdom',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Olatunbosun Adebanjo oversees initiatives supporting and empowering members. Deep understanding of community needs and compassionate approach.',
      numInitiatives: 10,
      numEvents: 20
    },
    {
      id: 11,
      name: 'Gunwa Deborah Hamzat',
      position: 'Welfare II',
      image: '/Images/gunwa010.jpg',
      email: 'welfare2@gunwa.org',
      phone: '+234 811 234 5678',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Deborah Hamzat supports welfare initiatives with empathy and problem-solving skills. Works closely with members to address their needs.',
      numInitiatives: 8,
      numEvents: 18
    },
    {
      id: 12,
      name: 'Gunwa Adekunle Oshilalu',
      position: 'Project Sec.',
      image: '/Images/gunwa003.jpg',
      email: 'projects@gunwa.org',
      phone: '+234 812 345 6789',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Adekunle Oshilalu oversees planning and implementation of various projects. Strong project management skills and attention to detail.',
      numInitiatives: 12,
      numEvents: 24
    },
    {
      id: 13,
      name: 'Gunwa Abiola Ajasa',
      position: 'Project Sec II',
      image: '/Images/gunwa6.jpg',
      email: 'ajasayewande@gmail.com',
      phone: '+234 813 456 7890, 806 648 5320',
      location: 'Ago Iwoye',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Abiola Ajasa assists in project implementation with strong organizational skills. Manages timelines and coordinates team efforts effectively.',
      numInitiatives: 10,
      numEvents: 20
    },
    {
      id: 14,
      name: 'Gunwa Kazzim Adewunmi',
      position: 'Chief Whip',
      image: '/Images/gunwa005.jpg',
      email: 'whip@gunwa.org',
      phone: '+234 808 890 2687',
      location: 'Lagos',
      ageGroup: '1980-1981-1982',
      yearJoined: 2021,
      status: 'active',
      bio: 'Gunwa Kazzim Adewunmi maintains order and discipline within the executive team. Strong leadership skills and ability to mediate conflicts.',
      numInitiatives: 9,
      numEvents: 18
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleImageError = (e) => {
    e.target.src = `/api/placeholder/150/150?text=No+Image`;
  };

  const filteredExecutives = executives.filter(exec => {
    const matchesSearch = 
      exec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exec.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exec.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'leadership') {
      return matchesSearch && exec.isLeadership;
    }
    return matchesSearch && (selectedFilter === 'all' || exec.status === selectedFilter);
  });

  const getCardClassName = (executive) => {
    return `ex0022-executive-card ${executive.isLeadership ? 'ex0022-leadership' : ''} ${
      executive.position === 'Ag. Chairman' || executive.position === 'Chairperson' ? 'ex0022-featured' : ''
    }`;
  };

  return (
    <div className={`ex0022-executive-page ${theme}`}>
      <div className="ex0022-executive-header">
        <h1>Executive Team Directory</h1>
        <div className="ex0022-executive-stats">
          <div className="ex0022-stat-box">
            <span className="ex0022-stat-number">{executives.length}</span>
            <span className="ex0022-stat-label">Total Executives</span>
          </div>
          <div className="ex0022-stat-box">
            <span className="ex0022-stat-number">
              {executives.filter(exec => exec.status === 'active').length}
            </span>
            <span className="ex0022-stat-label">Active Executives</span>
          </div>
          <div className="ex0022-stat-box">
            <span className="ex0022-stat-number">
              {executives.filter(exec => exec.isLeadership).length}
            </span>
            <span className="ex0022-stat-label">Leadership Positions</span>
          </div>
        </div>
      </div>

      <div className="ex0022-executive-filters">
        <div className="ex0022-search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search executives by name, position, location..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div className="ex0022-filter-group">
          <button 
            className={`ex0022-filter-btn ${selectedFilter === 'all' ? 'ex0022-active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All Executives
          </button>
          <button 
            className={`ex0022-filter-btn ${selectedFilter === 'leadership' ? 'ex0022-active' : ''}`}
            onClick={() => handleFilterChange('leadership')}
          >
            Leadership
          </button>
          <button 
            className={`ex0022-filter-btn ${selectedFilter === 'active' ? 'ex0022-active' : ''}`}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
        </div>

        <button className="ex0022-view-toggle-btn" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          <Filter size={20} />
          {viewMode === 'grid' ? 'List View' : 'Grid View'}
        </button>
      </div>

      <div className={`ex0022-executives-container ${viewMode}`}>
        {filteredExecutives.map(executive => (
          <div 
            key={executive.id} 
            className={getCardClassName(executive)}
            data-position={executive.position}
            onClick={() => setSelectedExecutive(executive)}
          >
            <div className="ex0022-executive-image">
              <img 
                src={executive.image} 
                alt={executive.name} 
                onError={handleImageError}
              />
              <span className={`ex0022-status-indicator ${executive.status}`}></span>
            </div>
            <div className="ex0022-executive-info">
              <h3>{executive.name}</h3>
              <p className="ex0022-position">{executive.position}</p>
              <div className="ex0022-executive-details">
                <p className="ex0022-detail-item">
                  <Mail size={16} />
                  <span>{executive.email}</span>
                </p>
                <p className="ex0022-detail-item">
                  <Phone size={16} />
                  <span>{executive.phone}</span>
                </p>
                <p className="ex0022-detail-item">
                  <MapPin size={16} />
                  <span>{executive.location}</span>
                </p>
                <p className="ex0022-detail-item">
                  <Briefcase size={16} />
                  <span>Age Group: {executive.ageGroup}</span>
                </p>
              </div>
              {viewMode === 'list' && (
                <div className="ex0022-executive-metrics">
                  <div className="ex0022-metric">
                    <span className="ex0022-metric-value">{executive.numInitiatives}</span>
                    <span className="ex0022-metric-label">Initiatives</span>
                  </div>
                  <div className="ex0022-metric">
                    <span className="ex0022-metric-value">{executive.numEvents}</span>
                    <span className="ex0022-metric-label">Events</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedExecutive && (
        <div className="ex0022-executive-modal-overlay">
          <div className="ex0022-executive-modal">
            <button className="ex0022-close-modal" onClick={() => setSelectedExecutive(null)}>
              <X size={24} />
            </button>
            
            <div className="ex0022-modal-content">
              <div className="ex0022-modal-header">
                <img 
                  src={selectedExecutive.image} 
                  alt={selectedExecutive.name} 
                  onError={handleImageError}
                  className="ex0022-modal-image"
                />
                <div className="ex0022-modal-title">
                  <h2>{selectedExecutive.name}</h2>
                  <p className="ex0022-modal-position">{selectedExecutive.position}</p>
                </div>
              </div>

              <div className="ex0022-modal-details">
                <div className="ex0022-detail-row">
                  <Mail size={20} />
                  <span>{selectedExecutive.email}</span>
                </div>
                <div className="ex0022-detail-row">
                  <Phone size={20} />
                  <span>{selectedExecutive.phone}</span>
                </div>
                <div className="ex0022-detail-row">
                  <MapPin size={20} />
                  <span>{selectedExecutive.location}</span>
                </div>
                <div className="ex0022-detail-row">
                  <Briefcase size={20} />
                  <span>Age Group: {selectedExecutive.ageGroup}</span>
                </div>
              </div>

              <div className="ex0022-modal-bio">
                <h3>Biography</h3>
                <p>{selectedExecutive.bio}</p>
              </div>

              <div className="ex0022-modal-stats">
                <div className="ex0022-stat-item">
                  <h4>Initiatives Led</h4>
                  <span className="ex0022-stat-number">{selectedExecutive.numInitiatives}</span>
                </div>
                <div className="ex0022-stat-item">
                  <h4>Events Organized</h4>
                  <span className="ex0022-stat-number">{selectedExecutive.numEvents}</span>
                </div>
                <div className="ex0022-stat-item">
                  <h4>Year Joined</h4>
                  <span className="ex0022-stat-number">{selectedExecutive.yearJoined}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveTeam;




// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Filter, Mail, Phone, MapPin, Briefcase, 
//   X, Calendar, Award, Users, Star, ArrowUpDown,
//   Download, Share2, Printer, ChevronDown, ExternalLink
// } from 'lucide-react';
// import './ExecutivePage.css'

// const ExecutivePage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedExecutive, setSelectedExecutive] = useState(null);
//   const [sortOrder, setSortOrder] = useState('name');
//   const [isFilterExpanded, setIsFilterExpanded] = useState(false);
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('bio');
  
//   // Enhanced executives data
//   const executives = [
//     {
//       id: 1,
//       name: 'Gunwa Emida Adesina',
//       position: 'Ag. Chairman',
//       image: '/Images/gunwa111.jpg',
//       email: 'emidasinang@gmail.com',
//       phone: '+234 803 441 7149',
//       location: 'Ago Iwoye',
//       ageGroup: '1980',
//       yearJoined: 2021,
//       status: 'active',
//       isLeadership: true,
//       role: 'chairman',
//       bio: 'Gunwa Emida Adesina is the Ag. Chairman of the organization, leading the team with a wealth of experience and a deep commitment to the community. With over 20 years of leadership experience in the non-profit sector, Gunwa Emida has been instrumental in driving the organization initiatives and fostering collaborative partnerships to amplify its impact.',
//       achievements: [
//         'Led digital transformation initiative',
//         'Established 5 new community programs',
//         'Increased membership by 150%'
//       ],
//       education: 'MBA, Business Leadership',
//       expertise: ['Strategic Planning', 'Community Development', 'Leadership'],
//       numInitiatives: 12,
//       numEvents: 24,
//       committees: ['Executive Board', 'Strategy Committee', 'Finance Committee'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-emida',
//         twitter: '@GunwaEmida'
//       }
//     },
//     {
//       id: 2,
//       name: 'Gunwa Afolashade Adeniyi',
//       position: 'Chairperson',
//       image: '/Images/gunwa011.jpg',
//       email: 'chairperson@gunwa.org',
//       phone: '+234 803 453 9667',
//       location: 'Ago Iwoye',
//       ageGroup: '1982',
//       yearJoined: 2021,
//       status: 'active',
//       isLeadership: true,
//       role: 'chairperson',
//       bio: 'Gunwa Afolashade Adeniyi serves as the Chairperson, bringing her expertise and innovative ideas to drive the organization forward. With a background in social development and extensive experience in community engagement, Gunwa Afolashade has been instrumental in shaping the organization strategic priorities and expanding its reach.',
//       achievements: [
//         'Established women empowerment program',
//         'Launched youth mentorship initiative',
//         'Created annual leadership summit'
//       ],
//       education: 'PhD, Social Development',
//       expertise: ['Community Engagement', 'Strategic Leadership', 'Program Development'],
//       numInitiatives: 15,
//       numEvents: 30,
//       committees: ['Executive Board', 'Women Empowerment', 'Youth Development'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-afolashade',
//         twitter: '@GunwaAfolashade'
//       }
//     },
//     {
//       id: 3,
//       name: 'Gunwa Sunday Babalola',
//       position: 'Vice Chairman',
//       image: '/Images/gunwa0.jpg',
//       email: 'vicechairman@gunwa.org',
//       phone: '+234 805 616 3345',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       isLeadership: true,
//       role: 'vicechairman',
//       bio: 'Gunwa Sunday Babalola, the Vice Chairman, is a respected leader who works tirelessly to support the organization\'s mission and objectives. With a deep understanding of the local community and a proven track record in project management, Gunwa Sunday has been instrumental in ensuring the seamless execution of the organization initiatives.',
//       achievements: [
//         'Streamlined project management processes',
//         'Implemented new community outreach programs',
//         'Enhanced stakeholder relationships'
//       ],
//       education: 'MSc, Project Management',
//       expertise: ['Project Management', 'Community Relations', 'Team Leadership'],
//       numInitiatives: 10,
//       numEvents: 18,
//       committees: ['Executive Board', 'Project Management', 'Community Relations'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-sunday',
//         twitter: '@GunwaSunday'
//       }
//     },
//     {
//       id: 4,
//       name: 'Gunwa Adebambo Ademoye',
//       position: 'Secretary',
//       image: '/Images/gunwa004.jpg',
//       email: 'princepadmat@gmail.com',
//       phone: '+234 804 567 8901',
//       location: 'Ago Iwoye',
//       ageGroup: '1982',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'secretary',
//       bio: 'Gunwa Adebambo Ademoye plays a crucial role in maintaining the organization\'s records and ensuring smooth operations. With meticulous attention to detail and strong administrative skills, manages the team\'s documentation and correspondence efficiently.',
//       achievements: [
//         'Digitized organizational records',
//         'Improved communication processes',
//         'Established efficient filing system'
//       ],
//       education: 'BA, Business Administration',
//       expertise: ['Administrative Management', 'Documentation', 'Communication'],
//       numInitiatives: 8,
//       numEvents: 22,
//       committees: ['Administrative Committee', 'Documentation Team'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-adebambo'
//       }
//     },
//     {
//       id: 5,
//       name: 'Gunwa Abiola Nuberu',
//       position: 'Treasurer',
//       image: '/Images/gunwa15.jpg',
//       email: '.anuberu@yahoo.com',
//       phone: '+234 813 012 6538',
//       location: 'Lagos',
//       ageGroup: '1982',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'treasurer',
//       bio: 'Gunwa Abiola Nuberu manages the organization\'s financial affairs with diligence and transparency. With a strong background in finance and accounting, ensures efficient allocation and management of resources.',
//       achievements: [
//         'Implemented new financial management system',
//         'Increased financial transparency',
//         'Optimized resource allocation'
//       ],
//       education: 'CPA, Financial Management',
//       expertise: ['Financial Management', 'Accounting', 'Budgeting'],
//       numInitiatives: 9,
//       numEvents: 20,
//       committees: ['Finance Committee', 'Audit Team'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-abiola'
//       }
//     },
//     {
//       id: 6,
//       name: 'Gunwa Faith Ibukunola',
//       position: 'Secretary II',
//       image: '/Images/gunwa00.jpg',
//       email: 'secretary2@gunwa.org',
//       phone: '+234 806 789 0123',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'secretary2',
//       bio: 'Gunwa Faith Ibukunola supports the Secretary in maintaining records and ensuring smooth operations. Strong administrative skills and attention to detail are key strengths.',
//       achievements: [
//         'Enhanced record-keeping systems',
//         'Streamlined administrative processes',
//         'Improved document management'
//       ],
//       education: 'BSc, Office Administration',
//       expertise: ['Administration', 'Record Keeping', 'Office Management'],
//       numInitiatives: 7,
//       numEvents: 16,
//       committees: ['Administrative Support', 'Documentation Team'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-faith'
//       }
//     },
//     {
//       id: 7,
//       name: 'Gunwa Olasunkanmi Odusi',
//       position: 'Social Sec.',
//       image: '/Images/gunwa006.jpg',
//       email: 'social@gunwa.org',
//       phone: '+234 807 890 1234',
//       location: 'Ago Iwoye',
//       ageGroup: '1980',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'social',
//       bio: 'Gunwa Olasunkanmi Odusi coordinates social events and activities. Has a passion for community engagement and excellent event planning skills.',
//       achievements: [
//         'Organized major community events',
//         'Increased social media presence',
//         'Enhanced community engagement'
//       ],
//       education: 'BSc, Event Management',
//       expertise: ['Event Planning', 'Social Media', 'Community Engagement'],
//       numInitiatives: 6,
//       numEvents: 14,
//       committees: ['Social Committee', 'Event Planning Team'],
//       socialMedia: {
//         twitter: '@GunwaOlasunkanmi'
//       }
//     },
//     {
//       id: 8,
//       name: 'Gunwa Bukola Adeoye',
//       position: 'Social Sec II',
//       image: '/Images/gunwa002.jpg',
//       email: 'segitaule@gmail.com',
//       phone: '+234 808 901 2345',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2019,
//       status: 'active',
//       role: 'social2',
//       bio: 'Gunwa Bukola Adeoye assists in planning and executing social events. Exceptional organizational skills and ability to multitask effectively.',
//       achievements: [
//         'Coordinated successful community gatherings',
//         'Improved event management processes',
//         'Enhanced social media engagement'
//       ],
//       education: 'BA, Communications',
//       expertise: ['Event Coordination', 'Social Media Management', 'Public Relations'],
//       numInitiatives: 9,
//       numEvents: 18,
//       committees: ['Social Media Team', 'Event Management'],
//       socialMedia: {
//         twitter: '@GunwaBukola'
//       }
//     },
//     {
//       id: 9,
//       name: 'Gunwa Idera Sikiru',
//       position: 'P.R.O',
//       image: '/Images/gunwa02.jpg',
//       email: 'iderasikiru@yahoomail.com',
//       phone: '+234 807 541 0701',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'pro',
//       bio: 'Gunwa Idera Sikiru manages external communications and public image. Strong background in media and communications, crafting engaging narratives.',
//       achievements: [
//         'Enhanced public relations strategy',
//         'Improved media coverage',
//         'Developed communication guidelines'
//       ],
//       education: 'MA, Public Relations',
//       expertise: ['Public Relations', 'Media Relations', 'Communication Strategy'],
//       numInitiatives: 11,
//       numEvents: 22,
//       committees: ['PR Committee', 'Media Relations'],
//       socialMedia: {
//         twitter: '@GunwaIdera',
//         linkedin: 'linkedin.com/gunwa-idera'
//       }
//     },
//     {
//       id: 10,
//       name: 'Gunwa Olatunbosun Adebanjo',
//       position: 'Welfare',
//       image: '/Images/gunwa001.jpg',
//       email: 'Bosunmayor01@gmail.com',
//       phone: '+234 810 123 4567',
//       location: 'United Kingdom',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'welfare',
//       bio: 'Gunwa Olatunbosun Adebanjo oversees initiatives supporting and empowering members. Deep understanding of community needs and compassionate approach.',
//       achievements: [
//         'Established welfare support system',
//         'Implemented member assistance programs',
//         'Created community support network'
//       ],
//       education: 'MSW, Social Work',
//       expertise: ['Welfare Management', 'Community Support', 'Program Development'],
//       numInitiatives: 10,
//       numEvents: 20,
//       committees: ['Welfare Committee', 'Community Support'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-olatunbosun'
//       }
//     },
//     {
//       id: 11,
//       name: 'Gunwa Deborah Hamzat',
//       position: 'Welfare II',
//       image: '/Images/gunwa010.jpg',
//       email: 'welfare2@gunwa.org',
//       phone: '+234 811 234 5678',
//       location: 'Ago Iwoye',
//       ageGroup: '1982',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'welfare2',
//       bio: 'Gunwa Deborah Hamzat supports welfare initiatives with empathy and problem-solving skills. Works closely with members to address their needs.',
//       achievements: [
//         'Developed support programs',
//         'Enhanced member services',
//         'Improved welfare processes'
//       ],
//       education: 'BSc, Social Services',
//       expertise: ['Member Support', 'Program Coordination', 'Community Care'],
//       numInitiatives: 8,
//       numEvents: 18,
//       committees: ['Welfare Support', 'Member Services'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-deborah'
//       }
//     },
//     {
//       id: 12,
//       name: 'Gunwa Adekunle Oshilalu',
//       position: 'Project Sec.',
//       image: '/Images/gunwa003.jpg',
//       email: 'projects@gunwa.org',
//       phone: '+234 812 345 6789',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'project',
//       bio: 'Gunwa Adekunle Oshilalu oversees planning and implementation of various projects. Strong project management skills and attention to detail.',
//       achievements: [
//         'Successfully managed multiple projects',
//         'Improved project delivery timelines',
//         'Enhanced project reporting systems'
//       ],
//       education: 'PMP, Project Management',
//       expertise: ['Project Management', 'Team Coordination', 'Strategic Planning'],
//       numInitiatives: 12,
//       numEvents: 24,
//       committees: ['Project Management', 'Strategic Planning'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-adekunle'
//       }
//     },
//     {
//       id: 13,
//       name: 'Gunwa Abiola Ajasa',
//       position: 'Project Sec II',
//       image: '/Images/gunwa6.jpg',
//       email: 'ajasayewande@gmail.com',
//       phone: '+234 813 456 7890, 806 648 5320',
//       location: 'Ago Iwoye',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'project2',
//       bio: 'Gunwa Abiola Ajasa assists in project implementation with strong organizational skills. Manages timelines and coordinates team efforts effectively.',
//       achievements: [
//         'Streamlined project processes',
//         'Enhanced team collaboration',
//         'Improved project documentation'
//       ],
//       education: 'BSc, Project Management',
//       expertise: ['Project Coordination', 'Team Management', 'Documentation'],
//       numInitiatives: 10,
//       numEvents: 20,
//       committees: ['Project Support', 'Team Coordination'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-abiola'
//       }
//     },
//     {
//       id: 14,
//       name: 'Gunwa Kazzim Adewunmi',
//       position: 'Chief Whip',
//       image: '/Images/gunwa005.jpg',
//       email: 'whip@gunwa.org',
//       phone: '+234 808 890 2687',
//       location: 'Lagos',
//       ageGroup: '1981',
//       yearJoined: 2021,
//       status: 'active',
//       role: 'whip',
//       bio: 'Gunwa Kazzim Adewunmi maintains order and discipline within the executive team. Strong leadership skills and ability to mediate conflicts.',
//       achievements: [
//         'Improved team discipline',
//         'Enhanced meeting efficiency',
//         'Developed conflict resolution protocols'
//       ],
//       education: 'MA, Leadership Studies',
//       expertise: ['Team Management', 'Conflict Resolution', 'Leadership'],
//       numInitiatives: 9,
//       numEvents: 18,
//       committees: ['Disciplinary Committee', 'Executive Order'],
//       socialMedia: {
//         linkedin: 'linkedin.com/gunwa-kazzim',
//         twitter: '@GunwaKazzim'
//       }
//     }
//   ];

//   // Filter and sort functions
//   const filterExecutives = () => {
//     return executives.filter(exec => {
//       const matchesSearch = 
//         exec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         exec.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         exec.location.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesFilter = 
//         selectedFilter === 'all' || 
//         (selectedFilter === 'leadership' && exec.isLeadership) ||
//         exec.status === selectedFilter;
      
//       const matchesYear = 
//         selectedYear === 'all' || 
//         exec.ageGroup === selectedYear;
      
//       const matchesLocation = 
//         selectedLocation === 'all' || 
//         exec.location === selectedLocation;
      
//       return matchesSearch && matchesFilter && matchesYear && matchesLocation;
//     });
//   };

//   const sortExecutives = (execs) => {
//     return [...execs].sort((a, b) => {
//       if (a.role === 'chairman') return -1;
//       if (b.role === 'chairman') return 1;
//       if (a.role === 'chairperson') return -1;
//       if (b.role === 'chairperson') return 1;
      
//       switch(sortOrder) {
//         case 'name':
//           return a.name.localeCompare(b.name);
//         case 'position':
//           return a.position.localeCompare(b.position);
//         case 'yearJoined':
//           return b.yearJoined - a.yearJoined;
//         default:
//           return 0;
//       }
//     });
//   };

//   // Stats calculation
//   const calculateStats = () => {
//     const filteredExecs = filterExecutives();
//     return {
//       total: filteredExecs.length,
//       active: filteredExecs.filter(e => e.status === 'active').length,
//       leadership: filteredExecs.filter(e => e.isLeadership).length,
//       initiatives: filteredExecs.reduce((sum, e) => sum + e.numInitiatives, 0),
//       events: filteredExecs.reduce((sum, e) => sum + e.numEvents, 0)
//     };
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Executive Team Directory',
//         text: 'Check out our executive team!',
//         url: window.location.href
//       });
//     }
//   };

//   const handleModalOpen = (executive) => {
//     setSelectedExecutive(executive);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedExecutive(null);
//     document.body.style.overflow = 'auto';
//   };

//   const stats = calculateStats();
//   const filteredAndSortedExecutives = sortExecutives(filterExecutives());

//   return (
//     <div className="executive-page">
//       <header className="page-header">
//         <div className="header-content">
//           <h1>Executive Team Directory</h1>
//           <p className="header-subtitle">Meet Our Leadership Team</p>
          
//           <div className="header-actions">
//             <button onClick={handlePrint} className="action-button">
//               <Printer size={18} />
//               Print Directory
//             </button>
//             <button onClick={handleShare} className="action-button">
//               <Share2 size={18} />
//               Share
//             </button>
//           </div>
//         </div>

//         <div className="stats-container">
//           <div className="stat-card primary">
//             <span className="stat-value">{stats.total}</span>
//             <span className="stat-label">Total Executives</span>
//           </div>
//           <div className="stat-card success">
//             <span className="stat-value">{stats.active}</span>
//             <span className="stat-label">Active Members</span>
//           </div>
//           <div className="stat-card info">
//             <span className="stat-value">{stats.leadership}</span>
//             <span className="stat-label">Leadership Roles</span>
//           </div>
//           <div className="stat-card warning">
//             <span className="stat-value">{stats.initiatives}</span>
//             <span className="stat-label">Total Initiatives</span>
//           </div>
//           <div className="stat-card danger">
//             <span className="stat-value">{stats.events}</span>
//             <span className="stat-label">Events Organized</span>
//           </div>
//         </div>
//       </header>

//       <div className="controls-section">
//         <div className="search-filters">
//           <div className="search-bar">
//             <Search className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search by name, position, or location..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="filter-controls">
//             <button 
//               className="filter-toggle"
//               onClick={() => setIsFilterExpanded(!isFilterExpanded)}
//             >
//               <Filter size={18} />
//               Filters
//               <ChevronDown 
//                 size={18} 
//                 className={`chevron ${isFilterExpanded ? 'expanded' : ''}`}
//               />
//             </button>

//             {isFilterExpanded && (
//               <div className="expanded-filters">
//                 <div className="filter-group">
//                   <label>Status</label>
//                   <select 
//                     value={selectedFilter}
//                     onChange={(e) => setSelectedFilter(e.target.value)}
//                   >
//                     <option value="all">All Status</option>
//                     <option value="active">Active</option>
//                     <option value="leadership">Leadership</option>
//                   </select>
//                 </div>

//                 <div className="filter-group">
//                   <label>Year Group</label>
//                   <select
//                     value={selectedYear}
//                     onChange={(e) => setSelectedYear(e.target.value)}
//                   >
//                     <option value="all">All Years</option>
//                     <option value="1980">1980</option>
//                     <option value="1981">1981</option>
//                     <option value="1982">1982</option>
//                   </select>
//                 </div>

//                 <div className="filter-group">
//                   <label>Location</label>
//                   <select
//                     value={selectedLocation}
//                     onChange={(e) => setSelectedLocation(e.target.value)}
//                   >
//                     <option value="all">All Locations</option>
//                     <option value="Ago Iwoye">Ago Iwoye</option>
//                     <option value="Lagos">Lagos</option>
//                     <option value="United Kingdom">United Kingdom</option>
//                   </select>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="view-controls">
//             <button 
//               className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}
//               onClick={() => setViewMode('grid')}
//             >
//               Grid View
//             </button>
//             <button 
//               className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
//               onClick={() => setViewMode('list')}
//             >
//               List View
//             </button>
//           </div>
//         </div>

//         <div className="sort-controls">
//           <label>Sort by:</label>
//           <select 
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="name">Name</option>
//             <option value="position">Position</option>
//             <option value="yearJoined">Year Joined</option>
//           </select>
//         </div>
//       </div>

//       <div className={`executives-container ${viewMode}`}>
//         {filteredAndSortedExecutives.map(executive => (
//           <div 
//             key={executive.id}
//             className={`executive-card ${executive.role || ''}`}
//             onClick={() => handleModalOpen(executive)}
//           >
//             <div className="card-header">
//               <div className="executive-image">
//                 <img 
//                   src={executive.image} 
//                   alt={executive.name}
//                   onError={(e) => {
//                     e.target.src = `/api/placeholder/400/400?text=${executive.name.charAt(0)}`;
//                   }}
//                 />
//                 <span className={`status-indicator ${executive.status}`} />
//               </div>
//               {executive.isLeadership && (
//                 <div className="leadership-badge">
//                   <Star size={14} />
//                   Leadership
//                 </div>
//               )}
//             </div>

//             <div className="card-content">
//               <h3 className="executive-name">{executive.name}</h3>
//               <p className="executive-position">{executive.position}</p>
              
//               <div className="executive-details">
//                 <div className="detail-item">
//                   <Mail size={16} />
//                   <span>{executive.email}</span>
//                 </div>
//                 <div className="detail-item">
//                   <Phone size={16} />
//                   <span>{executive.phone}</span>
//                 </div>
//                 <div className="detail-item">
//                   <MapPin size={16} />
//                   <span>{executive.location}</span>
//                 </div>
//                 <div className="detail-item">
//                   <Calendar size={16} />
//                   <span>Age Group: {executive.ageGroup}</span>
//                 </div>
//               </div>

//               {viewMode === 'list' && (
//                 <div className="list-view-extras">
//                   <div className="metrics">
//                     <div className="metric-item">
//                       <span className="metric-value">{executive.numInitiatives}</span>
//                       <span className="metric-label">Initiatives</span>
//                     </div>
//                     <div className="metric-item">
//                       <span className="metric-value">{executive.numEvents}</span>
//                       <span className="metric-label">Events</span>
//                     </div>
//                   </div>
//                   <button className="view-profile-btn">
//                     View Full Profile
//                     <ExternalLink size={14} />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && selectedExecutive && (
//         <div className="modal-overlay" onClick={handleModalClose}>
//           <div className="executive-modal" onClick={e => e.stopPropagation()}>
//             <button className="close-modal" onClick={handleModalClose}>
//               <X size={24} />
//             </button>

//             <div className="modal-header">
//               <div className="modal-image-container">
//                 <img 
//                   src={selectedExecutive.image} 
//                   alt={selectedExecutive.name}
//                   className="modal-image"
//                   onError={(e) => {
//                     e.target.src = `/api/placeholder/400/400?text=${selectedExecutive.name.charAt(0)}`;
//                   }}
//                 />
//               </div>

//               <div className="modal-content-header">
//                 <h2>{selectedExecutive.name}</h2>
//                 <p className="position">{selectedExecutive.position}</p>
                
//                 <div className="contact-info">
//                   <div className="info-item">
//                     <Mail size={16} />
//                     <a href={`mailto:${selectedExecutive.email}`}>{selectedExecutive.email}</a>
//                   </div>
//                   <div className="info-item">
//                     <Phone size={16} />
//                     <a href={`tel:${selectedExecutive.phone}`}>{selectedExecutive.phone}</a>
//                   </div>
//                   <div className="info-item">
//                     <MapPin size={16} />
//                     <span>{selectedExecutive.location}</span>
//                   </div>
//                   <div className="info-item">
//                     <Briefcase size={16} />
//                     <span>Joined {selectedExecutive.yearJoined}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="modal-tabs">
//               <button 
//                 className={`tab-button ${activeTab === 'bio' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('bio')}
//               >
//                 Biography
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('achievements')}
//               >
//                 Achievements
//               </button>
//               <button 
//                 className={`tab-button ${activeTab === 'committees' ? 'active' : ''}`}
//                 onClick={() => setActiveTab('committees')}
//               >
//                 Committees
//               </button>
//             </div>

//             <div className="modal-body">
//               {activeTab === 'bio' && (
//                 <div className="bio-content">
//                   <h3>Professional Biography</h3>
//                   <p>{selectedExecutive.bio}</p>
                  
//                   <div className="expertise-section">
//                     <h4>Areas of Expertise</h4>
//                     <div className="expertise-tags">
//                       {selectedExecutive.expertise.map((item, index) => (
//                         <span key={index} className="expertise-tag">{item}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="education-section">
//                     <h4>Education</h4>
//                     <p>{selectedExecutive.education}</p>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'achievements' && (
//                 <div className="achievements-content">
//                   <h3>Key Achievements</h3>
//                   <ul className="achievements-list">
//                     {selectedExecutive.achievements.map((achievement, index) => (
//                       <li key={index} className="achievement-item">
//                         <Award size={16} />
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="metrics-grid">
//                     <div className="metric-box">
//                       <Users size={24} />
//                       <div className="metric-details">
//                         <span className="metric-value">{selectedExecutive.numInitiatives}</span>
//                         <span className="metric-label">Initiatives Led</span>
//                       </div>
//                     </div>
//                     <div className="metric-box">
//                       <Calendar size={24} />
//                       <div className="metric-details">
//                         <span className="metric-value">{selectedExecutive.numEvents}</span>
//                         <span className="metric-label">Events Organized</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'committees' && (
//                 <div className="committees-content">
//                   <h3>Committee Memberships</h3>
//                   <ul className="committees-list">
//                     {selectedExecutive.committees.map((committee, index) => (
//                       <li key={index} className="committee-item">
//                         <Users size={16} />
//                         <span>{committee}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {selectedExecutive.socialMedia && (
//                     <div className="social-links">
//                       <h4>Connect</h4>
//                       <div className="social-buttons">
//                         {selectedExecutive.socialMedia.linkedin && (
//                           <a 
//                             href={selectedExecutive.socialMedia.linkedin} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="social-button linkedin"
//                           >
//                             LinkedIn Profile
//                             <ExternalLink size={14} />
//                           </a>
//                         )}
//                         {selectedExecutive.socialMedia.twitter && (
//                           <a 
//                             href={`https://twitter.com/${selectedExecutive.socialMedia.twitter}`} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="social-button twitter"
//                           >
//                             Twitter Profile
//                             <ExternalLink size={14} />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExecutivePage;