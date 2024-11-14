import React, { useState } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import './RegistrationForm.css'

const RegistrationForm = () => {
  const {
    isLoggedIn,
    login,
    formErrors,
    formSubmitting,
    formSubmitted
  } = useGunwa();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    occupation: '',
    address: '',
    state: '',
    interests: [],
    bio: '',
    profileImage: null,
    ageGroup: ''
  });

  const ageGroups = [
    '42-43',
    '43-44',
    '44 and above'
  ];

  const interestOptions = [
    'Professional Networking',
    'Community Service',
    'Social Events',
    'Mentorship',
    'Business Collaboration',
    'Educational Programs'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prevData => {
      const updatedInterests = prevData.interests.includes(interest)
        ? prevData.interests.filter(item => item !== interest)
        : [...prevData.interests, interest];
      return {
        ...prevData,
        interests: updatedInterests
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      profileImage: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login({
      userName: `${formData.firstName} ${formData.lastName}`,
      ageGroup: formData.ageGroup,
      ...formData
    });

    if (success) {
      console.log('Form submitted:', formData);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Welcome, {`${formData.firstName} ${formData.lastName}`}!</h2>
          <p className="form-subtitle">You are registered in the {formData.ageGroup} age group.</p>
        </div>
        {formSubmitted && (
          <div className="success-message">
            Thank you for joining Bobagunwa Asiwaju! We've received your application.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="registration-form">
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">Join Bobagunwa Asiwaju</h1>
          <p className="form-subtitle">Complete the form below to become a member of our esteemed community</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                />
                {formErrors.firstName && (
                  <p className="error-message">{formErrors.firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                />
                {formErrors.lastName && (
                  <p className="error-message">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ageGroup">Age Group</label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                >
                  <option value="">Select your age group</option>
                  {ageGroups.map((group) => (
                    <option key={group} value={group}>
                      {group} years
                    </option>
                  ))}
                </select>
                {formErrors.ageGroup && (
                  <p className="error-message">{formErrors.ageGroup}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  disabled={formSubmitting}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                disabled={formSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                disabled={formSubmitting}
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Interests & Profile</h2>
            <div className="form-group">
              <label>Areas of Interest</label>
              <div className="interests-grid">
                {interestOptions.map((interest) => (
                  <div key={interest} className="interest-item">
                    <input
                      type="checkbox"
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      disabled={formSubmitting}
                    />
                    <label htmlFor={interest}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="bio">Brief Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                required
                disabled={formSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="profileImage">Profile Image</label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={handleImageChange}
                accept="image/*"
                disabled={formSubmitting}
              />
            </div>
          </div>

          {formErrors.submit && (
            <p className="error-message">{formErrors.submit}</p>
          )}

          <div className="form-actions">
            <button
              type="submit"
              className="form-button"
              disabled={formSubmitting}
            >
              {formSubmitting ? (
                <>
                  Submitting...
                  <span className="loading-spinner"></span>
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;