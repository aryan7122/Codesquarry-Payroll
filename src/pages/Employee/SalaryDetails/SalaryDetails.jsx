import React, { useState } from "react";
import "./SalaryDetails.scss";
import { FaFilter, FaArrowUp, FaArrowDown, FaTimes } from "react-icons/fa";
import CustomDropdown from "../../../util/CustomDropdown/CustomDropdown";
import { useNavigate } from "react-router-dom";

const initialData = [
    { id: "EMP - 0078659", name: "Prachi", email: "prachi@email.com", phone: "+91 97645 12015", department: "Development", designation: "Developer", date: "2025-05-16", status: "Active" },
    { id: "EMP - 0078660", name: "Riya", email: "riya@gmail.com", phone: "+91 98765 43210", department: "Software Engineering", designation: "Engineer", date: "2025-04-10", status: "Inactive" },
    { id: "EMP - 0078661", name: "Avi Mehta", email: "arjun.kumar88@yahoo.com", phone: "+91 87654 32109", department: "Quality Assurance", designation: "QA Tester", date: "2025-06-22", status: "Terminated" },
    { id: "EMP - 0078662", name: "Nia Kapoor", email: "isha.patel77@outlook.com", phone: "+91 76543 21098", department: "Product Management", designation: "Manager", date: "2025-08-05", status: "Active" },

    { id: "EMP - 0078663", name: "Kiran Singh", email: "rahul.verma99@gmail.com", phone: "+91 65432 10987", department: "User Experience", designation: "UX Designer", date: "2025-09-15", status: "Active" },
    { id: "EMP - 0078664", name: "Vikram Joshi", email: "sneha.joshi85@gmail.com", phone: "+91 54321 09876", department: "Technical Support", designation: "Support Engineer", date: "2025-10-30", status: "Active" },
    { id: "EMP - 0078665", name: "Maya Patel", email: "vikas.sharma76@gmail.com", phone: "+91 43210 98765", department: "Human Resources", designation: "HR Manager", date: "2025-11-12", status: "Active" },
    { id: "EMP - 0078666", name: "Ravi Choudhury", email: "anita.agarwal90@gmail.com", phone: "+91 32109 87654", department: "Marketing", designation: "Marketing Executive", date: "2025-12-01", status: "Active" },

    { id: "EMP - 0078667", name: "Sita Verma", email: "manish.mishra81@yahoo.com", phone: "+91 21098 76543", department: "Sales", designation: "Sales Manager", date: "2025-02-14", status: "Active" },
    { id: "EMP - 0078668", name: "Neel Agarwal", email: "deepak.74@outlook.com", phone: "+91 10987 65432", department: "Research and Development", designation: "Research Scientist", date: "2025-03-03", status: "Active" },
    { id: "EMP - 0078669", name: "Alok Sharma", email: "alok.sharma@email.com", phone: "+91 99876 54321", department: "Finance", designation: "Accountant", date: "2025-04-25", status: "Inactive" },
    { id: "EMP - 0078670", name: "Meena Roy", email: "meena.roy@gmail.com", phone: "+91 88765 43210", department: "Operations", designation: "Operations Manager", date: "2025-05-20", status: "Active" }
];


const departments = ["Development", "Software Engineering", "Quality Assurance", "Product Management"];
const designations = ["Developer", "Engineer", "QA Tester", "Manager"];
const statuses = ["Active", "Inactive", "Terminated"];

const SalaryDetails = () => {
    const [data, setData] = useState(initialData);
    const [filters, setFilters] = useState({ id: "", department: "All", designation: "All", status: "All" });
    const [sortOrder, setSortOrder] = useState("asc");
    const [isRotating, setIsRotating] = useState(false);
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const navigate = useNavigate();


    const filteredData = data.filter((item) => {
        return (
            item.id.toLowerCase().includes(filters.id.toLowerCase()) &&
            (filters.department === "All" || item.department === filters.department) &&
            (filters.designation === "All" || item.designation === filters.designation) &&
            (filters.status === "All" || item.status === filters.status)
        );
    });

    // const handleFilterChange = (field, value) => {
    //     setFilters((prev) => ({ ...prev, [field]: value }));
    // };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
        setCurrentPage(1);  // Reset page to 1 after filtering
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
        setCurrentPage(1);
    };


    // Function to handle reload icon click
    const handleReload = async () => {
        setIsRotating(true);  // Start rotation
        resetFilters();        // Reset filters
        // await fetchData(); // Call API to fetch data
        setTimeout(() => {
            setIsRotating(false);  // Stop rotation after fetching
        }, 2000);
    };
    const resetFilters = () => {
        setFilters({
            id: "",
            department: "All",
            designation: "All",
            status: "All"
        });
        setCurrentPage(1);
    };



    const handleRowClickNewAdd = () => {
        navigate(`/employee/add-new?=add-salary-details`);
    };


    return (
        <div className="container">
            <div className="header">

                <div className="left">


                    <div className="left_title">
                        <h1>
                            All Employee list
                        </h1>
                        <span className="length">{filteredData.length}  total</span>
                    </div>
                    <p>Keep track of all employees and their details</p>
                </div>
                <div className="right" >
                    <button className="add-btn" onClick={() => handleRowClickNewAdd}>  Add salary details </button>

                    <div className="dataTypeView"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M9 5L21 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 5L5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M9 12L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 12L5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M9 19L21 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 19L5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg> List View</div>
                    <div
                        className="reload_data"
                        onClick={handleReload}
                    >
                        {!isRotating ?
                            <svg className={` ${isRotating ? "rotating" : ""}`}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            :
                            <svg className={` ${isRotating ? "rotating" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M12 3V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12 18V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M21 12L18 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M6 12L3 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M7.75804 16.2422L5.63672 18.3635" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M7.75804 7.75804L5.63672 5.63672" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        }
                    </div>
                    <div className="action_">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M11.9959 12H12.0049" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.9998 12H18.0088" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.99981 12H6.00879" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="detail_data">
                <div className="filters">
                    <div className="left_filter">
                        {/* ID Search */}
                        <input
                            type="text"
                            placeholder="ID"
                            value={filters.id}
                            onChange={(e) => handleFilterChange("id", e.target.value)}
                            className="ID"
                        />

                        {/* Department Dropdown */}
                        <div className="dropdown">
                            <CustomDropdown
                                label="Department"
                                options={["All", ...departments]}
                                searchable={true}
                                onSelect={(value) => handleFilterChange("department", value)}
                            />
                            {/* {filters.department !== "All" && (
                                <FaTimes className="clear-icon" onClick={() => clearFilter("department")} />
                            )} */}
                        </div>

                        {/* Designation Dropdown */}
                        <div className="dropdown">
                            <CustomDropdown
                                label="Designation"
                                options={["All", ...designations]}
                                searchable={true}
                                onSelect={(value) => handleFilterChange("designation", value)}
                            />
                            {/* {filters.designation !== "All" && (
                                <FaTimes className="clear-icon" onClick={() => clearFilter("designation")} />
                            )} */}
                        </div>

                        {/* Status Dropdown */}
                        <div className="dropdown">
                            <CustomDropdown
                                label="Status"
                                options={["All", ...statuses]}
                                searchable={false}  // Search disable kiya kyunki status fixed hote hain
                                onSelect={(value) => handleFilterChange("status", value)}
                            />
                            {/* {filters.status !== "All" && (
                                <FaTimes className="clear-icon" onClick={() => clearFilter("status")} />
                            )} */}
                        </div>
                    </div>
                    <div className="right_filter">
                        <button className="filter-btn">
                            <FaFilter /> Filter
                        </button>

                        <button className="sort-btn" onClick={handleSort}>
                            Created on {sortOrder === "asc" ? <FaArrowDown /> : <FaArrowUp />}
                        </button>
                    </div>

                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Department</th>
                                <th>Date Of Joining</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.department}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {totalPages > 1 && (
                        <div className="pagination">
                            <div>
                                <span>Page {currentPage} of {totalPages}</span>
                            </div>
                            <div>
                                <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
                                <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalaryDetails;
// 