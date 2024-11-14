// GalleryPage.jsx
import React, { useState, useMemo } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import { Eye, Grid, List, Search, X } from 'lucide-react';
import './GalleryPage.css';

const GalleryPage = () => {
  const {
    gallery,
    galleryFilters,
    filterGalleryItems,
    totalGallery,
  } = useGunwa();

  const [viewMode, setViewMode] = useState('grid');
  const [searchText, setSearchText] = useState('');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter gallery items based on search text
  const filteredGallery = useMemo(() => {
    const items = filterGalleryItems();
    if (!searchText) return items;
    
    return items.filter(item => 
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [filterGalleryItems, searchText]);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleGalleryItemClick = (item) => {
    setSelectedGalleryItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGalleryItem(null);
  };

  const GalleryItem = ({ item }) => {
    const { type, title, description, imageUrl, videoUrl } = item;
    
    return (
      <div
        className={`gal010-gallery-item ${viewMode}`}
        onClick={() => handleGalleryItemClick(item)}
      >
        <div className="gal010-click-indicator">
          <Eye size={16} className="gal010-eye-icon" />
          <span className="gal010-tooltip">Click to preview</span>
        </div>
        
        <div className="gal010-preview-overlay">
          <span className="gal010-preview-text">
            <Eye size={24} />
            Preview Details
          </span>
        </div>
        
        <div className="gal010-media-container">
          {type === 'image' && (
            <img 
              src={imageUrl} 
              alt={title} 
              loading="lazy" 
              className="gal010-media"
            />
          )}
          
          {type === 'video' && (
            <video controls className="gal010-media">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="gal010-gallery-item-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="gal010-gallery-modal" onClick={onClose}>
        <div className="gal010-gallery-modal-content" onClick={e => e.stopPropagation()}>
          <button className="gal010-close-button" onClick={onClose}>
            <X size={24} />
          </button>
          
          <div className="gal010-modal-media-container">
            {item.type === 'image' && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="gal010-modal-media"
              />
            )}
            
            {item.type === 'video' && (
              <video controls className="gal010-modal-media">
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="gal010-modal-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="gal010-gallery-page">
      <div className="gal010-gallery-header">
        <h1>Gallery</h1>
        
        <div className="gal010-gallery-controls">
          <button
            className={`gal010-view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('grid')}
            aria-label="Grid View"
          >
            <Grid size={20} />
          </button>
          
          <button
            className={`gal010-view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => handleViewModeChange('list')}
            aria-label="List View"
          >
            <List size={20} />
          </button>
          
          <div className="gal010-search-container">
            <Search size={20} className="gal010-search-icon" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="gal010-gallery-search-input"
            />
          </div>
        </div>
      </div>

      <div className={`gal010-gallery-content ${viewMode}`}>
        {filteredGallery && filteredGallery.length > 0 ? (
          filteredGallery.map(item => (
            <GalleryItem key={item.id} item={item} />
          ))
        ) : (
          <div className="gal010-no-results">
            <p>No gallery items found.</p>
          </div>
        )}
      </div>

      <div className="gal010-gallery-stats">
        <p>Total Gallery Items: {totalGallery}</p>
        <p>Showing: {filteredGallery.length} items</p>
      </div>

      {isModalOpen && (
        <Modal item={selectedGalleryItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default GalleryPage;