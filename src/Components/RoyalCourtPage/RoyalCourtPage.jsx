import React, { useEffect, useState } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import { LayoutGrid, List } from 'lucide-react';
import './RoyalCourtPage.css';

const RoyalCourtPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const {
    royalCourt,
    selectedRoyalMember,
    viewRoyalMemberDetails,
    isRoyalMemberModalOpen,
    closeRoyalMemberModal
  } = useGunwa();

  useEffect(() => {
    document.title = 'Royal Court - Age Group Platform';
  }, []);

  const RoyalMemberCard = ({ member }) => {
    if (viewMode === 'grid') {
      return (
        <div className="roy012-royal-member-card" onClick={() => viewRoyalMemberDetails(member)}>
          <div className="roy012-member-image-container">
            <img src={member.imageUrl} alt={member.fullName} className="roy012-member-image" />
          </div>
          <div className="roy012-member-info">
            <h3 className="roy012-member-title">{member.title}</h3>
            <h4 className="roy012-member-name">{member.fullName}</h4>
            <p className="roy012-member-role">{member.role}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="roy012-royal-member-list-item" onClick={() => viewRoyalMemberDetails(member)}>
        <div className="roy012-list-image-container">
          <img src={member.imageUrl} alt={member.fullName} className="roy012-list-image" />
        </div>
        <div className="roy012-list-info">
          <div className="roy012-list-header">
            <h3 className="roy012-list-title">{member.title}</h3>
            <h4 className="roy012-list-name">{member.fullName}</h4>
          </div>
          <p className="roy012-list-role">{member.role}</p>
          <p className="roy012-list-preview">{member.description?.substring(0, 150)}...</p>
        </div>
      </div>
    );
  };

  const ViewToggle = () => (
    <div className="roy012-view-toggle">
      <button 
        className={`roy012-toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
        onClick={() => setViewMode('grid')}
      >
        <LayoutGrid size={20} />
        <span>Grid</span>
      </button>
      <button 
        className={`roy012-toggle-button ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => setViewMode('list')}
      >
        <List size={20} />
        <span>List</span>
      </button>
    </div>
  );

  const RoyalMemberModal = () => {
    if (!selectedRoyalMember) return null;

    return (
      <div className="roy012-modal-overlay" onClick={closeRoyalMemberModal}>
        <div className="roy012-modal-content" onClick={e => e.stopPropagation()}>
          <button className="roy012-close-button" onClick={closeRoyalMemberModal}>×</button>
          <div className="roy012-modal-body">
            <img
              src={selectedRoyalMember.imageUrl}
              alt={selectedRoyalMember.fullName}
              className="roy012-modal-image"
            />
            <div className="roy012-modal-info">
              <h2>{selectedRoyalMember.title}</h2>
              <h3>{selectedRoyalMember.fullName}</h3>
              <p className="roy012-role">{selectedRoyalMember.role}</p>
              <p className="roy012-description">{selectedRoyalMember.description}</p>
             
              {selectedRoyalMember.achievements && (
                <div className="roy012-achievements">
                  <h4>Achievements</h4>
                  <ul>
                    {selectedRoyalMember.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRoyalMember.initiatives && (
                <div className="roy012-initiatives">
                  <h4>Initiatives</h4>
                  <ul>
                    {selectedRoyalMember.initiatives.map((initiative, index) => (
                      <li key={index}>{initiative}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRoyalMember.responsibilities && (
                <div className="roy012-responsibilities">
                  <h4>Responsibilities</h4>
                  <ul>
                    {selectedRoyalMember.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRoyalMember.quote && (
                <div className="roy012-quote">
                  <p>"{selectedRoyalMember.quote}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="roy012-royal-court-page">
      <div className="roy012-royal-court-header">
        <h1>The Royal Court</h1>
        <p>Meet the esteemed leaders of our community</p>
        <ViewToggle />
      </div>
      <div className={`roy012-royal-court-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
        {royalCourt.map(member => (
          <RoyalMemberCard key={member.id} member={member} />
        ))}
      </div>
      {isRoyalMemberModalOpen && <RoyalMemberModal />}
    </div>
  );
};

export default RoyalCourtPage;