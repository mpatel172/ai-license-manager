import React, { useState } from 'react';
import '../styles/EmployeeManagement.css';

function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', aiToolsAssigned: ['ChatGPT', 'Claude'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', aiToolsAssigned: ['ChatGPT'] },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.department) {
      const newEmployee = {
        id: Date.now(),
        ...formData,
        aiToolsAssigned: [],
      };
      setEmployees([...employees, newEmployee]);
      setFormData({
        name: '',
        email: '',
        department: '',
      });
    }
  };

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleAssignTool = (employeeId, tool) => {
    setEmployees(
      employees.map((emp) => {
        if (emp.id === employeeId) {
          if (emp.aiToolsAssigned.includes(tool)) {
            return {
              ...emp,
              aiToolsAssigned: emp.aiToolsAssigned.filter((t) => t !== tool),
            };
          } else {
            return {
              ...emp,
              aiToolsAssigned: [...emp.aiToolsAssigned, tool],
            };
          }
        }
        return emp;
      })
    );
  };

  const availableTools = ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Perplexity'];

  return (
    <div className="employee-container">
      <div className="employee-form-section">
        <h2>Add New Employee</h2>
        <form onSubmit={handleAddEmployee} className="employee-form">
          <div className="form-group">
            <label htmlFor="name">Employee Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g., john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department *</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </form>
      </div>

      <div className="employee-list-section">
        <h2>Employees List</h2>
        {employees.length === 0 ? (
          <p className="empty-message">No employees added yet.</p>
        ) : (
          <div className="employee-cards">
            {employees.map((employee) => (
              <div key={employee.id} className="employee-card">
                <div className="employee-header">
                  <div className="employee-info">
                    <h3>{employee.name}</h3>
                    <p className="email">{employee.email}</p>
                    <p className="department">Department: {employee.department}</p>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveEmployee(employee.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="ai-tools-assignment">
                  <h4>Assign AI Tools</h4>
                  <div className="tools-checkbox-group">
                    {availableTools.map((tool) => (
                      <div key={tool} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`${employee.id}-${tool}`}
                          checked={employee.aiToolsAssigned.includes(tool)}
                          onChange={() => handleAssignTool(employee.id, tool)}
                        />
                        <label htmlFor={`${employee.id}-${tool}`}>{tool}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {employee.aiToolsAssigned.length > 0 && (
                  <div className="assigned-tools">
                    <strong>Assigned Tools:</strong>
                    <div className="tools-tags">
                      {employee.aiToolsAssigned.map((tool) => (
                        <span key={tool} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeManagement;
