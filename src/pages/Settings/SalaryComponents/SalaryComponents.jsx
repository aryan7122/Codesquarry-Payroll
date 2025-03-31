import React, { useState } from "react";
import "./SalaryComponents.scss";
import { FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tabs = ["Earnings", "Deductions", "Benefits", "Reimbursements"];

const tableData = {
    Earnings: {
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
    Deductions: {
        headers: ["Name", "Deduction Type", "Deduction Frequency", "Status", "Actions"],
        rows: [
            { td1: "Notice Pay Deduction", td2: "Notice Pay Deduction", td3: "One time", status: "Inactive", action: ['Active', 'Inactive'] },
            { td1: "Withheld Salary", td2: "Withheld Salary", td3: "One time", status: "Active", action: ['Active', 'Inactive'] },
        ]
    },
    Benefits: {
        headers: ["Name", "Benefit Type", "Benefit Frequency", "Status", "Action"],
        rows: [
            { td1: "Voluntary Provident Fund", td2: "Voluntary Provident Fund", td3: "Recurring", status: "Active", action: ['Active', 'Inactive'] },
        ]
    },
    Reimbursements: {
        headers: ["Name", "Reimbursement Type", "Maximum Reimbursable Amount", "Status", "Action"],
        rows: [
            { td1: "Fuel Reimbursement", td2: "Fuel Reimbursement", td3: "0 per month", status: "Inactive", action: ['Active', 'Inactive'] },
        ]
    },
};

const SalaryComponents = () => {
    const [activeTab, setActiveTab] = useState("Earnings");
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

        navigate(`/settings/salary-components/edit?${queryParams}`);
    };

    const handleRowClickNewAdd = (item) => {
        navigate(`/settings/salary-components/add-new?type=${item}`);
    };



    return (
        <div className="salary-container-SalaryComponents">
            <div className="header">
                <h1>Salary Components</h1>
                <button className="add-btn" onClick={() => handleRowClickNewAdd(activeTab)}> Add New {activeTab}</button>
            </div>
            <div className="tableData">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                {tableData[activeTab].headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {tableData[activeTab].rows.map((item, index) => (
                                <tr key={index} >
                                    {Object.entries(item).map(([key, value], i) => (
                                        <td key={i}>
                                            {key === "status" ? (
                                                <span className={`status ${value.toLowerCase()}`}>{value}</span>
                                            ) : key === "action" ? (
                                                <div className="action-cell">
                                                    <button className="action-button" onClick={() => toggleDropdown(index)}>
                                                        <FaEllipsisV />
                                                    </button>
                                                    {dropdownOpen === index && (
                                                        <div className="dropdown_menu_action">
                                                            {value.map((action, i) => (
                                                                <button key={i} onClick={() => handleStatusChange(index, action)} className="dropdown-item">{action}</button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                        <div onClick={() => handleRowClick(item)}>
                                                    {value}
                                                </div>
                                            )}
                                        </td>
                                    ))}
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

export default SalaryComponents;
