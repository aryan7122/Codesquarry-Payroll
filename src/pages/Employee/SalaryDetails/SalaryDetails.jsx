import React, { useState } from "react";
import "./SalaryDetails.scss";
import { FaFilter, FaArrowUp, FaArrowDown, FaTimes } from "react-icons/fa";
import CustomDropdown from "../../../util/CustomDropdown/CustomDropdown";

const initialData = [
    { id: "EMP - 0078659", name: "Prachi", email: "prachi@email.com", phone: "+9197645120154", department: "Development", designation: "Developer", date: "2025-05-16", status: "Active" },
    { id: "EMP - 0078660", name: "Riya", email: "riya@gmail.com", phone: "+91 98765 43210", department: "Software Engineering", designation: "Engineer", date: "2025-04-10", status: "Inactive" },
    { id: "EMP - 0078661", name: "Avi Mehta", email: "arjun.kumar88@yahoo.com", phone: "+91 87654 32109", department: "Quality Assurance", designation: "QA Tester", date: "2025-06-22", status: "Terminated" },
    { id: "EMP - 0078662", name: "Nia Kapoor", email: "isha.patel77@outlook.com", phone: "+91 76543 21098", department: "Product Management", designation: "Manager", date: "2025-08-05", status: "Active" },
];

const departments = ["Development", "Software Engineering", "Quality Assurance", "Product Management"];
const designations = ["Developer", "Engineer", "QA Tester", "Manager"];
const statuses = ["Active", "Inactive", "Terminated"];

const SalaryDetails = () => {
    const [data, setData] = useState(initialData);
    const [filters, setFilters] = useState({ id: "", department: "All", designation: "All", status: "All" });
    const [sortOrder, setSortOrder] = useState("asc");
    

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        });

        setData(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const clearFilter = (field) => {
        setFilters((prev) => ({ ...prev, [field]: "All" }));
    };

    const filteredData = data.filter((item) => {
        return (
            item.id.toLowerCase().includes(filters.id.toLowerCase()) &&
            (filters.department === "All" || item.department === filters.department) &&
            (filters.designation === "All" || item.designation === filters.designation) &&
            (filters.status === "All" || item.status === filters.status)
        );
    });

    return (
        <div className="container">
            <div className="filters">

                {/* ID Search */}
                <input
                    type="text"
                    placeholder="ID"
                    value={filters.id}
                    onChange={(e) => handleFilterChange("id", e.target.value)}
                />

                {/* Department Dropdown */}
                <div className="dropdown">
                    <CustomDropdown
                        label="Department"
                        options={["All", ...departments]}
                        searchable={true}
                        onSelect={(value) => handleFilterChange("department", value)}
                    />
                    {filters.department !== "All" && (
                        <FaTimes className="clear-icon" onClick={() => clearFilter("department")} />
                    )}
                </div>

                {/* Designation Dropdown */}
                <div className="dropdown">
                    <CustomDropdown
                        label="Designation"
                        options={["All", ...designations]}
                        searchable={true}
                        onSelect={(value) => handleFilterChange("designation", value)}
                    />
                    {filters.designation !== "All" && (
                        <FaTimes className="clear-icon" onClick={() => clearFilter("designation")} />
                    )}
                </div>

                {/* Status Dropdown */}
                <div className="dropdown">
                    <CustomDropdown
                        label="Status"
                        options={["All", ...statuses]}
                        searchable={false}  // Search disable kiya kyunki status fixed hote hain
                        onSelect={(value) => handleFilterChange("status", value)}
                    />
                    {filters.status !== "All" && (
                        <FaTimes className="clear-icon" onClick={() => clearFilter("status")} />
                    )}
                </div>

                <button className="filter-btn">
                    <FaFilter /> Filter
                </button>

                <button className="sort-btn" onClick={handleSort}>
                    Created on {sortOrder === "asc" ? <FaArrowDown /> : <FaArrowUp />}
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Date Of Joining</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.department}</td>
                            <td>{item.designation}</td>
                            <td>{item.date}</td>
                            <td>
                                <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalaryDetails;
// 