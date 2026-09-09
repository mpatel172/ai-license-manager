import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const stats = [
    { label: 'Total AI Tools', value: '2', icon: '🤖' },
    { label: 'Total Employees', value: '2', icon: '👥' },
    { label: 'Active Licenses', value: '80', icon: '📜' },
    { label: 'Departments', value: '2', icon: '🏢' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Added ChatGPT tool', timestamp: '2 hours ago' },
    { id: 2, activity: 'Added employee John Doe', timestamp: '2 hours ago' },
    { id: 3, activity: 'Added Claude tool', timestamp: '1 hour ago' },
    { id: 4, activity: 'Added employee Jane Smith', timestamp: '1 hour ago' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Quick summary of your AI License Management</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          {recentActivities.length === 0 ? (
            <p className="empty-message">No recent activities.</p>
          ) : (
            <ul className="activities-list">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="activity-item">
                  <span className="activity-text">{activity.activity}</span>
                  <span className="activity-time">{activity.timestamp}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <a href="#ai-tools" className="quick-link-btn">
              📝 Manage AI Tools
            </a>
            <a href="#employees" className="quick-link-btn">
              👥 Manage Employees
            </a>
            <a href="#reports" className="quick-link-btn">
              📊 View Reports
            </a>
            <a href="#settings" className="quick-link-btn">
              ⚙️ Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
