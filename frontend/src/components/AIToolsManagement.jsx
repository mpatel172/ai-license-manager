import React, { useState } from 'react';
import '../styles/AIToolsManagement.css';

function AIToolsManagement() {
  const [aiTools, setAiTools] = useState([
    { id: 1, name: 'ChatGPT', vendor: 'OpenAI', status: 'Active', licenseCount: 50 },
    { id: 2, name: 'Claude', vendor: 'Anthropic', status: 'Active', licenseCount: 30 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    vendor: '',
    status: 'Active',
    licenseCount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTool = (e) => {
    e.preventDefault();
    if (formData.name && formData.vendor && formData.licenseCount) {
      const newTool = {
        id: Date.now(),
        ...formData,
        licenseCount: parseInt(formData.licenseCount),
      };
      setAiTools([...aiTools, newTool]);
      setFormData({
        name: '',
        vendor: '',
        status: 'Active',
        licenseCount: '',
      });
    }
  };

  const handleRemoveTool = (id) => {
    setAiTools(aiTools.filter((tool) => tool.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setAiTools(
      aiTools.map((tool) =>
        tool.id === id ? { ...tool, status: newStatus } : tool
      )
    );
  };

  return (
    <div className="ai-tools-container">
      <div className="ai-tools-form-section">
        <h2>Add New AI Tool</h2>
        <form onSubmit={handleAddTool} className="ai-tool-form">
          <div className="form-group">
            <label htmlFor="name">Tool Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., ChatGPT"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="vendor">Vendor *</label>
            <input
              type="text"
              id="vendor"
              name="vendor"
              value={formData.vendor}
              onChange={handleInputChange}
              placeholder="e.g., OpenAI"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseCount">License Count *</label>
            <input
              type="number"
              id="licenseCount"
              name="licenseCount"
              value={formData.licenseCount}
              onChange={handleInputChange}
              placeholder="Number of licenses"
              required
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Trial">Trial</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Tool
          </button>
        </form>
      </div>

      <div className="ai-tools-list-section">
        <h2>AI Tools List</h2>
        {aiTools.length === 0 ? (
          <p className="empty-message">No AI tools added yet.</p>
        ) : (
          <table className="ai-tools-table">
            <thead>
              <tr>
                <th>Tool Name</th>
                <th>Vendor</th>
                <th>Status</th>
                <th>License Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {aiTools.map((tool) => (
                <tr key={tool.id} className="tool-row">
                  <td>{tool.name}</td>
                  <td>{tool.vendor}</td>
                  <td>
                    <select
                      value={tool.status}
                      onChange={(e) => handleStatusChange(tool.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Trial">Trial</option>
                    </select>
                  </td>
                  <td>{tool.licenseCount}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveTool(tool.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AIToolsManagement;
