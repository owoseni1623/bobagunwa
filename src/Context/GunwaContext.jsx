import React, { createContext, useState, useContext, useCallback } from 'react';
import galleryData from '../Data/galleryData';
import { initialRoyalCourtData } from '../Data/royalCourtData';
import initialEvents from '../Data/initialEvents';
import { fullMemberData, memberStats } from '../Data/memberData';

// Create context
const GunwaContext = createContext(undefined);

// Constants
const EVENT_TYPES = {
  RECURRING_MONTHLY: 'recurring-monthly',
  RECURRING_YEARLY: 'recurring-yearly',
  YEARLY: 'yearly'
};

// Initial states
const initialMembers = [
  {
    id: 1,
    fullName: "John Smith",
    dateOfBirth: "1990-05-15",
    yearJoined: 2020,
    position: "Team Leader",
    imageUrl: "/images/members/john-smith.jpg",
    isActive: true
  },
  {
    id: 2,
    fullName: "Sarah Johnson",
    dateOfBirth: "1992-08-22",
    yearJoined: 2019,
    position: "Senior Member",
    imageUrl: "/images/members/sarah-johnson.jpg",
    isActive: true
  }
];

const initialActivityData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 350 },
  { name: 'May', value: 450 },
  { name: 'Jun', value: 400 }
];

const initialMemberData = [
  { name: '20', value: 42 },
  { name: '15', value: 43 },
  { name: '10', value: 44 }
];

// Initial privacy settings
const initialPrivacySettings = {
  marketingConsent: false,
  analyticsConsent: false,
  thirdPartyConsent: false,
  lastUpdated: null,
  version: '1.0.0',
  acceptedTerms: false,
  language: 'en',
  preferences: {
    notifications: true,
    dataSharing: false,
    cookiePreferences: {},
    locationTracking: false
  }
};

// Initial privacy violations report
const initialViolationsReport = {
  incidents: [],
  totalReports: 0,
  resolvedReports: 0,
  pendingReports: 0,
  lastReportDate: null
};

const initialTermsState = {
  acceptedTerms: false,
  acceptedVersion: null,
  acceptedDate: null,
  hasReadTerms: false,
  activeSection: 0,
  termsVersion: '1.0.0',
  sections: [
    {
      title: "Welcome to Our Platform",
      content: `These Terms of Service ("Terms") govern your access to and use of our age group platform. 
      By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any 
      part of the Terms, you may not access the platform.`
    },
    {
      title: "User Eligibility",
      content: `You must be at least 13 years old to use this platform. If you are under 18, you represent 
      that you have your parent or guardian's permission to use the platform. We reserve the right to 
      terminate accounts of users who misrepresent their age.`
    },
    {
      title: "Privacy and Data Protection",
      content: `We take your privacy seriously. Our collection and use of personal information is governed 
      by our Privacy Policy. By using our platform, you consent to our data practices as described in the 
      Privacy Policy.`
    },
    {
      title: "User Conduct",
      content: `You agree to use the platform in a manner consistent with all applicable laws and regulations. 
      Prohibited activities include: harassment, hate speech, sharing inappropriate content, impersonating 
      others, and any form of malicious behavior.`
    },
    {
      title: "Content Guidelines",
      content: `Users are responsible for the content they post. We reserve the right to remove content that 
      violates our guidelines. This includes but is not limited to: explicit content, spam, misleading 
      information, and copyrighted material without permission.`
    }
  ]
};

export function GunwaProvider({ children }) {
  // Theme and UI State
  const [theme, setTheme] = useState('light');
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // User State
  const [userName, setUserName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('member');

  
  // User state
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');
  
  // Terms of Service state
  const [termsState, setTermsState] = useState(initialTermsState);
  

  // Event State
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventViewMode, setEventViewMode] = useState('list'); // Changed to list as default
  const [eventFilters, setEventFilters] = useState({
    type: 'all',
    priority: 'all',
    timeFrame: 'upcoming'
  });

  // Activity State
  const [activityData, setActivityData] = useState(initialActivityData);
  const [currentActivity, setCurrentActivity] = useState(null);

  // Form State
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Royal Court State
  const [royalCourt, setRoyalCourt] = useState(initialRoyalCourtData);
  const [selectedRoyalMember, setSelectedRoyalMember] = useState(null);
  const [isRoyalMemberModalOpen, setIsRoyalMemberModalOpen] = useState(false);
  

  // Gallery State
  const [gallery, setGallery] = useState(galleryData);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [galleryViewMode, setGalleryViewMode] = useState('grid');
  const [galleryFilters, setGalleryFilters] = useState({
    type: 'all',
    category: 'all',
    searchQuery: '',
    tags: []
  });
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [galleryError, setGalleryError] = useState(null);

  // Member State
const [members, setMembers] = useState(fullMemberData);
const [selectedMember, setSelectedMember] = useState(null);
const [totalMembers, setTotalMembers] = useState(memberStats.totalMembers);
const [activeMembers, setActiveMembers] = useState(memberStats.activeMembers);
const [newMembers30Days, setNewMembers30Days] = useState(memberStats.newMembers30Days);
const [memberData, setMemberData] = useState([
  { name: '1980', value: memberStats.membersByYear['1980'] },
  { name: '1981', value: memberStats.membersByYear['1981'] },
  { name: '1982', value: memberStats.membersByYear['1982'] }
]);

// Theme State
// const [theme, setTheme] = useState('dark');
const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
const [activePolicySection, setActivePolicySection] = useState('introduction');

// Privacy Settings State
const [privacySettings, setPrivacySettings] = useState(initialPrivacySettings);
const [privacyViolations, setPrivacyViolations] = useState(initialViolationsReport);
const [userConsent, setUserConsent] = useState({});
const [policyVersion, setPolicyVersion] = useState('1.0.0');
const [policyUpdateDate, setPolicyUpdateDate] = useState(new Date().toISOString());

// User Data State
const [userData, setUserData] = useState({
  personalInfo: {},
  preferences: {},
  activityLog: [],
  consentHistory: []
});

// Notification State
const [notifications, setNotifications] = useState([]);
const [unreadNotifications, setUnreadNotifications] = useState(0);


const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);


// Cookie preferences states
const [acceptedCookies, setAcceptedCookies] = useState(false);
const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
const [marketingEnabled, setMarketingEnabled] = useState(false);
const [functionalEnabled, setFunctionalEnabled] = useState(false);

  // Theme Functions
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // Member Functions
  // const addMember = useCallback((newMember) => {
  //   setMembers(prev => [...prev, { ...newMember, id: prev.length + 1 }]);
  //   setTotalMembers(prev => prev + 1);
  //   setActiveMembers(prev => prev + 1);
  //   setNewMembers30Days(prev => prev + 1);
  // }, []);

  // const updateMember = useCallback((id, updatedData) => {
  //   setMembers(prev => 
  //     prev.map(member => member.id === id ? { ...member, ...updatedData } : member)
  //   );
  // }, []);

  // const deleteMember = useCallback((id) => {
  //   setMembers(prev => {
  //     const member = prev.find(m => m.id === id);
  //     if (member?.isActive) {
  //       setActiveMembers(current => current - 1);
  //     }
  //     return prev.filter(m => m.id !== id);
  //   });
  //   setTotalMembers(prev => prev - 1);
  // }, []);

  // Event Functions
  const addEvent = useCallback((newEvent) => {
    setEvents(prev => [...prev, { ...newEvent, id: prev.length + 1 }]);
  }, []);

  const updateEvent = useCallback((id, updatedData) => {
    setEvents(prev => 
      prev.map(event => event.id === id ? { ...event, ...updatedData } : event)
    );
  }, []);

  const deleteEvent = useCallback((id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  }, []);

  const filterEvents = useCallback((filters) => {
    return events.filter(event => {
      const typeMatch = 
        filters.type === 'all' || 
        event.type === filters.type;
      
      const priorityMatch = 
        filters.priority === 'all' || 
        (filters.priority === 'high' && event.isHighPriority) ||
        (filters.priority === 'normal' && !event.isHighPriority);

      const today = new Date();
      let timeFrameMatch = true;
      
      if (filters.timeFrame === 'upcoming') {
        const eventDate = new Date(event.date);
        timeFrameMatch = eventDate >= today;
      } else if (filters.timeFrame === 'past') {
        const eventDate = new Date(event.date);
        timeFrameMatch = eventDate < today;
      }

      return typeMatch && priorityMatch && timeFrameMatch;
    });
  }, [events]);

  const getUpcomingEvents = useCallback((days = 30) => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000));
    
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= futureDate;
    });
  }, [events]);

  // Gallery Functions
  const addGalleryItem = useCallback((newItem) => {
    setGallery(prev => [...prev, { ...newItem, id: prev.length + 1 }]);
  }, []);

  const updateGalleryItem = useCallback((id, updatedData) => {
    setGallery(prev =>
      prev.map(item => item.id === id ? { ...item, ...updatedData } : item)
    );
  }, []);

  const deleteGalleryItem = useCallback((id) => {
    setGallery(prev => prev.filter(item => item.id !== id));
  }, []);

  const filterGalleryItems = useCallback(() => {
    return gallery.filter(item => {
      const typeMatch = galleryFilters.type === 'all' || item.type === galleryFilters.type;
      const categoryMatch = galleryFilters.category === 'all' || item.category === galleryFilters.category;
      const searchMatch = !galleryFilters.searchQuery || 
        item.title.toLowerCase().includes(galleryFilters.searchQuery.toLowerCase());
      const tagsMatch = galleryFilters.tags.length === 0 || 
        galleryFilters.tags.some(tag => item.tags?.includes(tag));

      return typeMatch && categoryMatch && searchMatch && tagsMatch;
    });
  }, [gallery, galleryFilters]);

  // Authentication Functions
  const login = useCallback(async (credentials) => {
    setFormSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
      setUserName(credentials.userName);
      setAgeGroup(credentials.ageGroup);
      setFormSubmitted(true);
      setFormErrors({});
      return true;
    } catch (error) {
      setFormErrors({ submit: 'Login failed. Please try again.' });
      return false;
    } finally {
      setFormSubmitting(false);
    }
  }, []);

  // Add these member management functions
const addMember = useCallback((newMember) => {
  setMembers(prev => {
    const nextId = Math.max(...prev.map(m => m.id)) + 1;
    const memberToAdd = { ...newMember, id: nextId };
    return [...prev, memberToAdd];
  });
  setTotalMembers(prev => prev + 1);
  if (newMember.status === 'active') {
    setActiveMembers(prev => prev + 1);
  }
}, []);

const updateMember = useCallback((id, updatedData) => {
  setMembers(prev => {
    const oldMember = prev.find(m => m.id === id);
    const newMembers = prev.map(member => 
      member.id === id ? { ...member, ...updatedData } : member
    );
    
    // Update active members count if status changed
    if (oldMember.status !== updatedData.status) {
      if (updatedData.status === 'active') {
        setActiveMembers(prev => prev + 1);
      } else {
        setActiveMembers(prev => prev - 1);
      }
    }
    
    return newMembers;
  });
}, []);

const deleteMember = useCallback((id) => {
  setMembers(prev => {
    const memberToDelete = prev.find(m => m.id === id);
    if (memberToDelete.status === 'active') {
      setActiveMembers(prev => prev - 1);
    }
    return prev.filter(m => m.id !== id);
  });
  setTotalMembers(prev => prev - 1);
}, []);

// Privacy Policy Functions
const updatePrivacySettings = useCallback((newSettings) => {
  setPrivacySettings(prev => ({
    ...prev,
    ...newSettings,
    lastUpdated: new Date().toISOString()
  }));
  
  // Log the privacy settings update
  addToActivityLog({
    type: 'PRIVACY_SETTINGS_UPDATE',
    timestamp: new Date().toISOString(),
    changes: newSettings
  });
}, []);

const toggleConsent = useCallback((consentType) => {
  setPrivacySettings(prev => ({
    ...prev,
    [consentType]: !prev[consentType],
    lastUpdated: new Date().toISOString()
  }));
  
  // Update consent history
  const consentAction = {
    type: consentType,
    granted: !privacySettings[consentType],
    timestamp: new Date().toISOString()
  };
  
  setUserData(prev => ({
    ...prev,
    consentHistory: [...prev.consentHistory, consentAction]
  }));
}, [privacySettings]);

const reportPrivacyViolation = useCallback((violationData) => {
  const newViolation = {
    id: Date.now(),
    ...violationData,
    status: 'pending',
    reportDate: new Date().toISOString()
  };
  
  setPrivacyViolations(prev => ({
    ...prev,
    incidents: [...prev.incidents, newViolation],
    totalReports: prev.totalReports + 1,
    pendingReports: prev.pendingReports + 1,
    lastReportDate: new Date().toISOString()
  }));
  
  // Add notification for admins
  addNotification({
    type: 'PRIVACY_VIOLATION_REPORT',
    message: `New privacy violation report: ${violationData.description}`,
    severity: 'high'
  });
}, []);

// Activity Logging
const addToActivityLog = useCallback((activity) => {
  setUserData(prev => ({
    ...prev,
    activityLog: [...prev.activityLog, {
      id: Date.now(),
      ...activity
    }]
  }));
}, []);

// Notification Management
const addNotification = useCallback((notification) => {
  const newNotification = {
    id: Date.now(),
    ...notification,
    read: false,
    timestamp: new Date().toISOString()
  };
  
  setNotifications(prev => [newNotification, ...prev]);
  setUnreadNotifications(prev => prev + 1);
}, []);

const markNotificationAsRead = useCallback((notificationId) => {
  setNotifications(prev => 
    prev.map(notif => 
      notif.id === notificationId 
        ? { ...notif, read: true }
        : notif
    )
  );
  setUnreadNotifications(prev => Math.max(0, prev - 1));
}, []);

// Data Export
const exportUserData = useCallback(() => {
  const exportData = {
    personalInfo: userData.personalInfo,
    privacySettings,
    activityLog: userData.activityLog,
    consentHistory: userData.consentHistory,
    exportDate: new Date().toISOString()
  };
  
  // Create and download file
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `privacy-data-export-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Log the export
  addToActivityLog({
    type: 'DATA_EXPORT',
    timestamp: new Date().toISOString()
  });
}, [userData, privacySettings]);

// Policy Navigation
const navigateToSection = useCallback((section) => {
  setActivePolicySection(section);
  addToActivityLog({
    type: 'POLICY_NAVIGATION',
    section,
    timestamp: new Date().toISOString()
  });
}, []);



// Terms of Service functions
const acceptTerms = useCallback(() => {
  setTermsState(prev => ({
    ...prev,
    acceptedTerms: true,
    acceptedVersion: prev.termsVersion,
    acceptedDate: new Date().toISOString(),
  }));
}, []);

const setHasReadTerms = useCallback((value) => {
  setTermsState(prev => ({
    ...prev,
    hasReadTerms: value
  }));
}, []);

const setActiveSection = useCallback((sectionIndex) => {
  setTermsState(prev => ({
    ...prev,
    activeSection: sectionIndex
  }));
}, []);


const viewRoyalMemberDetails = useCallback((member) => {
  setSelectedRoyalMember(member);
  setIsRoyalMemberModalOpen(true);
}, []);

const closeRoyalMemberModal = useCallback(() => {
  setIsRoyalMemberModalOpen(false);
  setSelectedRoyalMember(null);
}, []);




  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserRole('member');
    setUserName('');
    setAgeGroup('');
  }, []);

  // Context value
  const value = {
    // Theme and UI
    theme,
    setTheme,
    isHeaderExpanded,
    setIsHeaderExpanded,
    viewMode,
    setViewMode,
    toggleTheme,

    termsState,
    acceptTerms,
    setHasReadTerms,
    setActiveSection,

    // User
    userName,
    ageGroup,
    isLoggedIn,
    userRole,
    login,
    logout,

    // Members
    members,
    selectedMember,
    totalMembers,
    activeMembers,
    newMembers30Days,
    memberData,
    addMember,
    updateMember,
    deleteMember,
    setMembers,

    // Events
    events,
    selectedEvent,
    setSelectedEvent,
    eventViewMode,
    setEventViewMode,
    eventFilters,
    setEventFilters,
    addEvent,
    updateEvent,
    deleteEvent,
    filterEvents,
    getUpcomingEvents,

    // Gallery
    gallery,
    selectedGalleryItem,
    galleryViewMode,
    galleryFilters,
    isGalleryModalOpen,
    galleryLoading,
    galleryError,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    filterGalleryItems,
    totalGallery: gallery.length,
    // sortGallery,

    // Royal Court
    royalCourt,
    selectedRoyalMember,
    isRoyalMemberModalOpen,
    viewRoyalMemberDetails,  // Add this
    closeRoyalMemberModal,   // Add this

    // Form
    formErrors,
    formSubmitting,
    formSubmitted,

    // Cookies 
    acceptedCookies,
    setAcceptedCookies,
    analyticsEnabled,
    setAnalyticsEnabled,
    marketingEnabled,
    setMarketingEnabled,
    functionalEnabled,
    setFunctionalEnabled,

    // Activities
    activityData,
    currentActivity
  };
    toggleTheme,
    
    // User
    user,
    setUser,
    language,
    setLanguage,
    
    // Terms of Service
    termsState,
    acceptTerms,
    setHasReadTerms,
    setActiveSection,
    hasAcceptedTerms,
    acceptTerms,

  
  
  // Privacy Policy UI
  isPrivacyPolicyVisible,
  setIsPrivacyPolicyVisible,
  activePolicySection,
  navigateToSection,
  
  // Privacy Settings
  privacySettings,
  updatePrivacySettings,
  toggleConsent,
  policyVersion,
  policyUpdateDate,
  
  // Violations
  privacyViolations,
  reportPrivacyViolation,
  
  // User Data
  userData,
  setUserData,
  exportUserData,
  
  // Notifications
  notifications,
  unreadNotifications,
  addNotification,
  markNotificationAsRead,
  
  // Activity Logging
  addToActivityLog

  return (
    <GunwaContext.Provider value={value}>
      {children}
    </GunwaContext.Provider>
  );
}

// Custom hook for using the context
export function useGunwa() {
  const context = useContext(GunwaContext);
  if (context === undefined) {
    throw new Error('useGunwa must be used within a GunwaProvider');
  }
  return context;
}