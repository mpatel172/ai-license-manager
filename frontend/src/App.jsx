import React, { useState } from 'react';
import './App.css';
import AIToolsManagement from './components/AIToolsManagement';
import EmployeeManagement from './components/EmployeeManagement';
import Dashboard from './components/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI License Manager</h1>
        <p>Manage AI Tools and Employees</p>
      </header>

      <nav className="navbar">
        <button
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`nav-btn ${activeTab === 'ai-tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai-tools')}
        >
          AI Tools
        </button>
        <button
          className={`nav-btn ${activeTab === 'employees' ? 'active' : ''}`}
          onClick={() => setActiveTab('employees')}
        >
          Employees
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'ai-tools' && <AIToolsManagement />}
        {activeTab === 'employees' && <EmployeeManagement />}
      </main>
    </div>
  );
}

export default App;
