import React, { useState } from "react";
import "./EmployeeOverview2.scss";

const EmployeeOverview2 = () => {
  const [employee, setEmployee] = useState({
    fullName: "Akash Prasad Shinde",
    contact: "+91-9764910135",
    email: "akash225@gmail.com",
    dateOfJoining: "12 Jan, 2025",
    department: "Design",
    designation: "UI Designer",
    gender: "Male",
    workLocation: "Head Office",
    dob: "02/03/2011",
    fatherName: "Sunil",
    pan: "15-Apr-2024",
    address: "123 Maple Street, Pune, Maharashtra, 411001, India",
    differentlyAbled: "None",
    deductions: {
      epf: false,
      esi: true,
      professionalTax: true,
      labourWelfareFund: false,
    },
    paymentMode: "Net Banking",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
<div className="employee-details-container">
      {/* <div className="header">
        <nav>
          <span>Home &gt; Employee &gt; Employee Details</span>
        </nav>
      </div> */}
      <div className="content-wrapper">
        <div className="profile-card">
          <div className="profile-box">
            <h3>Employee Information</h3>
            <img src="/profile-placeholder.png" alt="Profile" className="profile-image" />
            <h2>{employee.fullName} (emp-001)</h2>
            <p>{employee.designation}</p>
            <p><strong>Contact:</strong> {employee.contact}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Designation:</strong> {employee.designation}</p>
            <p><strong>Gender:</strong> {employee.gender}</p>
            <p><strong>Work Location:</strong> {employee.workLocation}</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>
        <div className="info-sections">
          <div className="info-box">
            <h3>Employee Information</h3>
            <p><strong>Contact:</strong> {employee.contact}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Designation:</strong> {employee.designation}</p>
            <p><strong>Gender:</strong> {employee.gender}</p>
            <p><strong>Work Location:</strong> {employee.workLocation}</p>
          </div>
          <div className="info-box">
            <h3>Personal Information</h3>
            <p><strong>Date of Birth:</strong> {employee.dob}</p>
            <p><strong>Father's Name:</strong> {employee.fatherName}</p>
            <p><strong>PAN:</strong> {employee.pan}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Disabled:</strong> {employee.differentlyAbled}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview2;
