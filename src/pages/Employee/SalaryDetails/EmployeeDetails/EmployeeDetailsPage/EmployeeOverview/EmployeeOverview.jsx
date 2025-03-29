import React from 'react';
import './EmployeeOverview.scss';

const empDetail = [
    {
        id: 'emp-001',
        name: 'Akash Prasad Shinde',
        designation: 'UI Designer',
        contact: '+91-9764910135',
        email: 'akash225@gmail.com',
        joiningDate: '12 Jan, 2025',
        department: 'Design',
        gender: 'Male',
        location: 'Head office',
        dob: '02/03/2011',
        fatherName: 'Sunil',
        pan: '15-Apr-2024',
        personalEmail: 'akash225@gmail.com',
        address: '123 Maple Street, Pune, Maharashtra, 411001, India',
        differentlyAbled: 'None',
        deductions: {
            providentFund: false,
            stateInsurance: false,
            professionalTax: true,
            labourWelfare: true
        },
        paymentMode: 'Net Banking'
    }
];

const EmployeeOverview = () => {
    const employee = empDetail[0];

    return (
        <div className="employee-container">
            <div className="sidebar">
                <div className="profile">
                    <img src="https://via.placeholder.com/80" alt="profile" />
                    <h2>{employee.name} ({employee.id})</h2>
                    <p>{employee.designation}</p>
                </div>
                <div className="info">
                    <p><strong>Full Name:</strong> {employee.name}</p>
                    <p><strong>Contact:</strong> {employee.contact}</p>
                    <p><strong>Email ID:</strong> {employee.email}</p>
                    <p><strong>Date of Joining:</strong> {employee.joiningDate}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <p><strong>Designation:</strong> {employee.designation}</p>
                    <p><strong>Gender:</strong> {employee.gender}</p>
                    <p><strong>Work location:</strong> {employee.location}</p>
                </div>
                <button className="edit-btn">Edit Profile</button>
            </div>
            <div className="main-content">
                <div className="section">
                    <h3>Personal Information</h3>
                    <p><strong>Date of Birth:</strong> {employee.dob}</p>
                    <p><strong>Father's Name:</strong> {employee.fatherName}</p>
                    <p><strong>PAN:</strong> {employee.pan}</p>
                    <p><strong>Personal Email Address:</strong> {employee.personalEmail}</p>
                    <p><strong>Residential Address:</strong> {employee.address}</p>
                    <p><strong>Differently Abled Type:</strong> {employee.differentlyAbled}</p>
                </div>
                <div className="section">
                    <h3>Deductions Access</h3>
                    <label>
                        <input type="checkbox" checked={employee.deductions.providentFund} readOnly /> Employees' Provident Fund
                    </label>
                    <label>
                        <input type="checkbox" checked={employee.deductions.stateInsurance} readOnly /> Employees' State Insurance
                    </label>
                    <label>
                        <input type="checkbox" checked={employee.deductions.professionalTax} readOnly /> Professional Tax
                    </label>
                    <label>
                        <input type="checkbox" checked={employee.deductions.labourWelfare} readOnly /> Labour Welfare Fund
                    </label>
                </div>
                <div className="section">
                    <h3>Payment Information</h3>
                    <p><strong>Payment Mode:</strong> {employee.paymentMode}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeOverview;
