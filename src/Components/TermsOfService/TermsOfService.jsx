import React, { useContext, useState } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import './TermsOfService.css';

const TermsOfService = () => {
  const {
    termsState,
    acceptTerms: handleTermsAccept,
    setHasReadTerms,
    setActiveSection: setTermsActiveSection,
    theme
  } = useGunwa();
  const [showConfetti, setShowConfetti] = useState(false);

  const sections = [
    {
      title: "Welcome to Bobagunwa Asiwaju",
      content: `Welcome to the esteemed age group of Bobagunwa Asiwaju, a distinguished association within Ago Iwoye town, Ijebu, Ogun State. This traditional institution represents the cultural heritage and communal values of our people. As a prospective or current member, it is essential to understand our principles, responsibilities, and commitments to the community.`
    },
    {
      title: "Membership Eligibility & Responsibilities",
      content: `Membership in the Bobagunwa Asiwaju age group is open to qualified individuals from Ago Iwoye who demonstrate commitment to community development and cultural preservation. Members are expected to participate in community activities, support traditional ceremonies, and contribute to the town's development. Regular attendance at meetings, payment of dues, and active participation in group activities are mandatory requirements.`
    },
    {
      title: "Cultural Heritage & Traditions",
      content: `The Bobagunwa Asiwaju age group plays a crucial role in preserving and promoting the rich cultural heritage of Ago Iwoye. Members are guardians of our traditions, customs, and festivals. We maintain strong ties with the traditional institutions of Ago Iwoye and participate in important cultural ceremonies throughout the year. Members must respect and uphold these traditions while promoting their preservation for future generations.`
    },
    {
      title: "Community Service & Development",
      content: `Our age group is committed to the development and progress of Ago Iwoye. Members are expected to participate in community service projects, support educational initiatives, and contribute to the town's infrastructure development. We organize and support programs that benefit youth, elderly, and vulnerable members of our community. Regular financial and physical contributions to community projects are essential aspects of membership.`
    },
    {
      title: "Code of Conduct",
      content: `Members of Bobagunwa Asiwaju must maintain high moral standards and exhibit exemplary behavior in the community. This includes respecting traditional authorities, maintaining peace and harmony, and representing the age group with dignity. Any actions that bring disrepute to the group or violate traditional norms may result in disciplinary action. Members must also maintain confidentiality regarding group matters and support fellow members in times of need.`
    }
  ];

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setHasReadTerms(true);
    }
  };

  const handleAccept = () => {
    handleTermsAccept();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className={`terms-container ${theme}`}>
      <header className="terms-header">
        <h1>Bobagunwa Asiwaju Terms of Service</h1>
        <div className="progress-bar">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index <= termsState.activeSection ? 'active' : ''}`}
              onClick={() => setTermsActiveSection(index)}
            />
          ))}
        </div>
      </header>
      <main className="terms-content" onScroll={handleScroll}>
        {sections.map((section, index) => (
          <section
            key={index}
            className={`terms-section ${index === termsState.activeSection ? 'active' : ''}`}
          >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <footer className="terms-footer">
        <button
          className={`prev-btn ${termsState.activeSection === 0 ? 'disabled' : ''}`}
          onClick={() => setTermsActiveSection(Math.max(0, termsState.activeSection - 1))}
          disabled={termsState.activeSection === 0}
        >
          Previous
        </button>
        
        {termsState.activeSection === sections.length - 1 ? (
          <button
            className={`accept-btn ${!termsState.hasReadTerms ? 'disabled' : ''}`}
            onClick={handleAccept}
            disabled={!termsState.hasReadTerms}
          >
            I Accept
          </button>
        ) : (
          <button
            className="next-btn"
            onClick={() => setTermsActiveSection(Math.min(sections.length - 1, termsState.activeSection + 1))}
          >
            Next
          </button>
        )}
      </footer>
      {showConfetti && <div className="confetti" />}
    </div>
  );
};

export default TermsOfService;