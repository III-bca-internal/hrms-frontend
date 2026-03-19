import React, { useState } from "react";
import "./AddEmployee.css";

const AddEmployee = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeRole: "",
    salary: "",
    hra: "",
    electricity: "",
    shopping: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("hr-backend-fse0hnffhte7cqeu.centralindia-01.azurewebsites.net/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...employee,
          salary: Number(employee.salary),
          hra: Number(employee.hra),
          electricity: Number(employee.electricity),
          shopping: Number(employee.shopping),
        }),
      });

      if (!response.ok) {
        throw new Error("Backend error");
      }

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2500);

      setEmployee({
        employeeName: "",
        employeeRole: "",
        salary: "",
        hra: "",
        electricity: "",
        shopping: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Cannot reach Backend. Please check backend server or API URL.");
    }
  };

  return (
    <div className="add-employee-wrapper">
      {showPopup && (
        <div className="custom-popup">
          <div className="popup-content">
            <span className="check-icon">✅</span>
            <p>Employee Added Successfully!</p>
          </div>
        </div>
      )}

      <div className="add-employee-container">
        <h2 className="page-title">Add Employee</h2>

        <form className="employee-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Employee Name</label>
              <input
                name="employeeName"
                value={employee.employeeName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Employee Role</label>
              <input
                name="employeeRole"
                value={employee.employeeRole}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Salary</label>
              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>House Rent Allowance</label>
              <input
                type="number"
                name="hra"
                value={employee.hra}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Electricity</label>
              <input
                type="number"
                name="electricity"
                value={employee.electricity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Shopping</label>
              <input
                type="number"
                name="shopping"
                value={employee.shopping}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
