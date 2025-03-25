import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FaHome,
    FaUser,
    FaCog,
    FaFileAlt,
    FaChevronDown,
    FaChevronRight,
    FaCalendarWeek,
} from "react-icons/fa";
import "./Sidebar.scss";
// import logo from "./assets/logo.png"; // Apna logo yaha lagao

const menuItems = [
    { title: "Dashboard", icon: <FaHome />, link: "/dashboard", subPages: [] },
    {
        title: "Employee",
        icon: <FaUser />,
        link: "/employee",
        subPages: ["Salary Details","Salary Components", "Attendance", "Leaves"],
    },
    {
        title: "Pay Runs",
        icon: <FaCog />,
        link: "/pay-runs",
        subPages: [],
    },
    {
        title: "Approvals",
        icon: <FaCog />,
        link: "/approvals",
        subPages: ["Reimbursements", "Proof Of Investments", "Salary Revision"],
    },
    { title: "Form 16", icon: <FaFileAlt />, link: "/form16", subPages: [] },
    {
        title: "Settings",
        icon: <FaCog />,
        link: "/settings",
        subPages: ["Profile", "Security", "Notifications"],
    },
];

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation();

    const toggleMenu = (index) => {
        setOpenMenu((prev) => (prev === index ? null : index));
    };

    return (
        <div className="sidebar">
            <div className="logo-container">
                {/* <img src={logo} alt="Logo" className="logo" /> */}
                <div className="logo">
                    {/* <FaCalendarWeek/> */}
                </div>
                <h2>Payroll</h2>
            </div>

            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.link}
                            className={`menu-item ${location.pathname.includes(item.link) ? "active" : ""
                                }`}
                            onClick={() => toggleMenu(index)}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                            {item.subPages.length > 0 &&
                                (openMenu === index ? <FaChevronDown /> : <FaChevronRight />)}
                        </NavLink>

                        {item.subPages.length > 0 && openMenu === index && (
                            <ul className="sub-menu">
                                {item.subPages.map((sub, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={`${item.link}/${sub.toLowerCase().replace(/ /g, "-")}`}
                                            className={({ isActive }) => (isActive ? "active-sub" : "")}
                                        >
                                            {sub}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
