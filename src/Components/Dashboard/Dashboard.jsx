import React, { useState, useEffect } from 'react';
import { useGunwa } from '../../Context/GunwaContext';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as LineTooltip, Legend as LineLegend } from 'recharts';
import { Calendar, Clock } from 'lucide-react';
import './Dashboard.css'

// Simple Card component implementation
const Card = ({ className, children }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};

// Simple CardContent component implementation
const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

const Dashboard = () => {
  const { theme, totalMembers, activeMembers, newMembers30Days } = useGunwa();
  const [memberData, setMemberData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetchMemberData();
    fetchActivityData();
  }, []);

  const fetchMemberData = () => {
    setMemberData([
      { name: '20', value: 42 },
      { name: '15', value: 43 },
      { name: '10', value: 44 },
    ]);
  };

  const fetchActivityData = () => {
    setActivityData([
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 500 },
      { name: 'Apr', value: 350 },
      { name: 'May', value: 450 },
      { name: 'Jun', value: 400 },
    ]);
  };

  const getNextMonthlyMeeting = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Find third Sunday
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
    
    // If this month's meeting has passed, get next month's
    if (date < now) {
      date = new Date(year, month + 1, 1);
      sundayCount = 0;
      while (sundayCount < 3) {
        if (date.getDay() === 0) {
          sundayCount++;
        }
        if (sundayCount < 3) {
          date.setDate(date.getDate() + 1);
        }
      }
    }
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-info">
          <div className="info-card">
            <h3>Total Members</h3>
            <p>{totalMembers.toLocaleString()}</p>
          </div>
          <div className="info-card">
            <h3>Active Members</h3>
            <p>{activeMembers.toLocaleString()}</p>
          </div>
          <div className="info-card">
            <h3>New Members (30 days)</h3>
            <p>{newMembers30Days.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="events-section">
          <h2>Important Events</h2>
          <div className="events-grid">
            <Card className="event-card monthly-meeting">
              <CardContent>
                <div className="event-header">
                  <Calendar className="event-icon" />
                  <h3>Monthly Meeting</h3>
                </div>
                <p className="event-timing">Every Third Sunday</p>
                <p className="event-next">Next: {getNextMonthlyMeeting()}</p>
              </CardContent>
            </Card>

            <Card className="event-card festival">
              <CardContent>
                <div className="event-header">
                  <Calendar className="event-icon" />
                  <h3>Ago Iwoye Day</h3>
                </div>
                <p className="event-timing">Every October</p>
                <p className="event-description">Annual cultural festival celebration</p>
              </CardContent>
            </Card>

            <Card className="event-card ojude-oba">
              <CardContent>
                <div className="event-header">
                  <Calendar className="event-icon" />
                  <h3>Ojude Oba</h3>
                </div>
                <p className="event-timing">Annual Celebration</p>
                <p className="event-description">Date varies yearly</p>
              </CardContent>
            </Card>

            <Card className="event-card royal-prayer">
              <CardContent>
                <div className="event-header">
                  <Calendar className="event-icon" />
                  <h3>Royal Prayer</h3>
                </div>
                <p className="event-timing">Second Week of January</p>
                <p className="event-description">Annual prayer with the King</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Member Age Distribution</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={memberData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Monthly Activity</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={activityData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <LineTooltip />
                <LineLegend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;