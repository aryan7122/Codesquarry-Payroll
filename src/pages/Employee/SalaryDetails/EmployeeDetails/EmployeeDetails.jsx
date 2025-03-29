import React, { useState } from "react";
import "./EmployeeDetails.scss";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EmployeeOverview from "./EmployeeDetailsPage/EmployeeOverview/EmployeeOverview";
import SalaryDetails from "./EmployeeDetailsPage/SalaryDetails/SalaryDetails";

const tabs = ["Overview", "SalaryDetails", "Investments", "PayslipsForms"];

const tableData = {
    Overview: {
        headers: ["Name", "Earning Type", "Calculation Type", "Consider for EPF", "Consider for ESI", "Status", "Action"],
        rows: [
            { name: "Basic", type: "Basic", calculation: "Fixed; 50% of CTC", epf: "Yes", esi: "Yes", status: "Active", action: ["Active", "Inactive"] },
            { name: "House Rent Allowance", type: "House Rent Allowance", calculation: "Fixed; 50% of Basic", epf: "No", esi: "Yes", status: "Active", action: ["Active", "Inactive"] },
            { name: "Conveyance Allowance", type: "Conveyance Allowance", calculation: "Fixed; Flat Amount", epf: "Yes (If PF Wage <15k)", esi: "No", status: "Active", action: ["Active", "Inactive"] },
            { name: "Fixed Allowance", type: "Fixed Allowance", calculation: "Fixed; Flat Amount", epf: "Yes (If PF Wage <15k)", esi: "Yes", status: "Active", action: ["Active", "Inactive"] },
            { name: "Bonus", type: "Bonus", calculation: "Variable; Flat Amount", epf: "No", esi: "No", status: "Active", action: ["Active", "Inactive"] },
            { name: "Commission", type: "Commission", calculation: "Variable; Flat Amount", epf: "No", esi: "Yes", status: "Active", action: ["Active", "Inactive"] },
            { name: "Children Education Allowance", type: "Children Education Allowance", calculation: "Fixed; Flat Amount", epf: "Yes (If PF Wage <15k)", esi: "Yes", status: "Active", action: ["Active", "Inactive"] },
            { name: "Transport Allowance", type: "Transport Allowance", calculation: "Fixed; Flat amount of 1600", epf: "Yes (If PF Wage <15k)", esi: "Yes", status: "Inactive", action: ["Active", "Inactive"] },
            { name: "Travelling Allowance", type: "Travelling Allowance", calculation: "Fixed; Flat Amount", epf: "Yes (If PF Wage <15k)", esi: "No", status: "Inactive", action: ["Active", "Inactive"] },
            { name: "Leave Encashment", type: "Leave Encashment", calculation: "Variable; Flat Amount", epf: "No", esi: "No", status: "Active", action: ["Active", "Inactive"] },
            { name: "Gratuity", type: "Gratuity", calculation: "Variable; Flat Amount", epf: "No", esi: "No", status: "Active", action: ["Active", "Inactive"] },
            { name: "Overtime Allowance", type: "Overtime Allowance", calculation: "Variable; Flat Amount", epf: "No", esi: "Yes", status: "Inactive", action: ["Active", "Inactive"] },
            { name: "Notice Pay", type: "Notice Pay", calculation: "Variable; Flat Amount", epf: "No", esi: "No", status: "Active", action: ["Active", "Inactive"] },
            { name: "Hold Salary", type: "Hold Salary", calculation: "Variable; Flat Amount", epf: "No", esi: "No", status: "Active", action: ["Active", "Inactive"] }
        ]
    },
    SalaryDetails: {
        headers: ["Name", "Deduction Type", "Deduction Frequency", "Status", "Actions"],
        rows: [
            { td1: "Notice Pay Deduction", td2: "Notice Pay Deduction", td3: "One time", status: "Inactive", action: ['Active', 'Inactive'] },
            { td1: "Withheld Salary", td2: "Withheld Salary", td3: "One time", status: "Active", action: ['Active', 'Inactive'] },
        ]
    },
    Investments: {
        headers: ["Name", "Benefit Type", "Benefit Frequency", "Status", "Action"],
        rows: [
            { td1: "Voluntary Provident Fund", td2: "Voluntary Provident Fund", td3: "Recurring", status: "Active", action: ['Active', 'Inactive'] },
        ]
    },
    PayslipsForms: {
        headers: ["Name", "Reimbursement Type", "Maximum Reimbursable Amount", "Status", "Action"],
        rows: [
            { td1: "Fuel Reimbursement", td2: "Fuel Reimbursement", td3: "0 per month", status: "Inactive", action: ['Active', 'Inactive'] },
        ]
    },
};

const EmployeeDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [statusData, setStatusData] = useState(tableData);
    const navigate = useNavigate();

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    // 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;



    const totalPages = Math.ceil(tableData[activeTab].rows.length / itemsPerPage);
    const currentItems = tableData[activeTab].rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // status
    const handleStatusChange = (rowIndex, newStatus) => {
        const updatedData = { ...statusData };
        updatedData[activeTab].rows[rowIndex].status = newStatus;
        setStatusData(updatedData);
        setDropdownOpen(null);
    };

    const handleRowClick = (item) => {
        const formattedName = (item.name || item.td1 || "").toLowerCase().replace(/\s+/g, "-");

        const queryParams = new URLSearchParams({
            type: activeTab,
            name: item.name || item.td1 || "",
        }).toString();

        navigate(`/employee/salary-components/edit?${queryParams}`);
    };

    const handleRowClickNewAdd = (item) => {
        navigate(`/employee/salary-components/add-new?type=${item}`);
    };


    const [isRotating, setIsRotating] = useState(false);
    const handleReload = async () => {
        setIsRotating(true);  // Start rotation
        // await fetchData(); // Call API to fetch data
        setTimeout(() => {
            setIsRotating(false);  // Stop rotation after fetching
        }, 2000);
    };

    return (
        <div className="emp_container_detail">
            {/* <button className="add-btn" onClick={() => handleRowClickNewAdd(activeTab)}> Add New {activeTab}</button> */}
            <div className="header">
                <div className="left">
                    <div className="left_title">
                        <h1>
                            All Employee list
                        </h1>
                        <span className="length">22 total</span>
                    </div>
                    <p></p>
                </div>
                <div className="right" >
                    <button className="add-btn" onClick={() => handleRowClickNewAdd}>  Add  </button>


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
            <div className="tableData">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                            {tab === 'Overview' ? 'Overview' : ''}
                            {tab === 'SalaryDetails' ? 'Salary Details' : ''}
                            {tab === 'Investments' ? 'Investments' : ''}
                            {tab === 'PayslipsForms' ? 'Payslips & Forms' : ''}
                        </button>
                    ))}
                </div>

                <div className="table">
                        <>
                            {activeTab === 'Overview' &&
                                <EmployeeOverview />
                            }
                            {activeTab === 'SalaryDetails' &&
                                <SalaryDetails />
                            }
                        </>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
