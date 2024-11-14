import React, { useState } from 'react';
import styles from './PrivacyPolicy.module.css';

const BobagunwaGroup = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bobagunwa Asiwaju Age Group</h1>
        <p>Ago Iwoye Town, Ijebu Ogun State (1980/1981/1982)</p>
      </header>

      <nav className={styles.nav}>
        <ul>
          <li
            className={activeSection === 'introduction' ? styles.active : ''}
            onClick={() => handleSectionClick('introduction')}
          >
            Introduction
          </li>
          <li
            className={activeSection === 'history' ? styles.active : ''}
            onClick={() => handleSectionClick('history')}
          >
            Our History
          </li>
          <li
            className={activeSection === 'members' ? styles.active : ''}
            onClick={() => handleSectionClick('members')}
          >
            Membership
          </li>
          <li
            className={activeSection === 'activities' ? styles.active : ''}
            onClick={() => handleSectionClick('activities')}
          >
            Activities
          </li>
          <li
            className={activeSection === 'projects' ? styles.active : ''}
            onClick={() => handleSectionClick('projects')}
          >
            Community Projects
          </li>
          <li
            className={activeSection === 'leadership' ? styles.active : ''}
            onClick={() => handleSectionClick('leadership')}
          >
            Leadership
          </li>
          <li
            className={activeSection === 'contact' ? styles.active : ''}
            onClick={() => handleSectionClick('contact')}
          >
            Contact Us
          </li>
        </ul>
      </nav>

      <div className={styles.content}>
        {activeSection === 'introduction' && (
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to the official page of the Bobagunwa Asiwaju Age Group of Ago Iwoye. 
              We represent a distinguished collection of individuals born between 1980 and 1982, 
              united in our commitment to preserving our cultural heritage and contributing to 
              the development of Ago Iwoye town in Ijebu, Ogun State.
            </p>
            <p>
              Our age group draws its name from the prestigious Bobagunwa chieftaincy title, 
              symbolizing our role as cultural ambassadors and community leaders within the 
              traditional structure of Ago Iwoye.
            </p>
          </section>
        )}

        {activeSection === 'history' && (
          <section>
            <h2>Our History</h2>
            <p>
              The Bobagunwa Asiwaju Age Group was formally established following the age-old 
              tradition of Ago Iwoye's age grade system. Our group comprises individuals who 
              share birth years between 1980 and 1982, bringing together people during their 
              formative years to foster unity and community development.
            </p>
            <ul>
              <li>Established in accordance with Ago Iwoye traditional customs</li>
              <li>Represents three consecutive birth years (1980-1982)</li>
              <li>Named after the prestigious Bobagunwa chieftaincy title</li>
              <li>Continues the legacy of community service and cultural preservation</li>
            </ul>
          </section>
        )}

        {activeSection === 'members' && (
          <section>
            <h2>Membership</h2>
            <p>
              Our membership consists of distinguished individuals born between 1980 and 1982 
              who are indigenes or residents of Ago Iwoye. We embrace diversity while maintaining 
              our cultural identity.
            </p>
            <ul>
              <li>Open to all 1980-1982 born indigenes of Ago Iwoye</li>
              <li>Active participation in community development</li>
              <li>Regular meetings and cultural activities</li>
              <li>Mentorship programs for younger generations</li>
            </ul>
          </section>
        )}

        {activeSection === 'activities' && (
          <section>
            <h2>Activities</h2>
            <p>
              The Bobagunwa Asiwaju Age Group engages in various cultural and social activities 
              that promote unity and development within Ago Iwoye.
            </p>
            <ul>
              <li>Annual cultural festivals and celebrations</li>
              <li>Monthly member meetings and forums</li>
              <li>Community outreach programs</li>
              <li>Youth development initiatives</li>
              <li>Cultural preservation activities</li>
            </ul>
          </section>
        )}

        {activeSection === 'projects' && (
          <section>
            <h2>Community Projects</h2>
            <p>
              As a progressive age group, we initiate and participate in various community 
              development projects that benefit Ago Iwoye and its residents.
            </p>
            <ul>
              <li>Educational support programs for local schools</li>
              <li>Healthcare awareness campaigns</li>
              <li>Environmental conservation initiatives</li>
              <li>Infrastructure development support</li>
              <li>Cultural heritage preservation projects</li>
            </ul>
          </section>
        )}

        {activeSection === 'leadership' && (
          <section>
            <h2>Leadership</h2>
            <p>
              Our age group is led by dedicated individuals who coordinate our activities 
              and ensure we fulfill our responsibilities to the community.
            </p>
            <ul>
              <li>Executive Committee Members</li>
              <li>Project Coordinators</li>
              <li>Cultural Affairs Officers</li>
              <li>Community Liaison Officers</li>
              <li>Youth Development Coordinators</li>
            </ul>
          </section>
        )}

        {activeSection === 'contact' && (
          <section>
            <h2>Contact Us</h2>
            <p>
              Get in touch with the Bobagunwa Asiwaju Age Group for more information about 
              our activities, membership, or collaboration opportunities:
            </p>
            <p>Email: contact@bobagunwaasiwaju.org</p>
            <p>Phone: +234 xxx xxxx xxx</p>
            <p>Address: Ago Iwoye, Ijebu, Ogun State, Nigeria</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default BobagunwaGroup;