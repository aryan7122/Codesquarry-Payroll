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
import logo from "../../assets/icon/logo.svg";

const menuItems = [
    {
        title: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="12" cy="18" r="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M12 15V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        link: "/dashboard", subPages: []
    },
    {
        title: "Employee",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        link: "/employee",
        subPages: ["Salary Details", "Salary Components", "Attendance", "Leaves"],
    },
    {
        title: "Pay Runs",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M7 11H6C2.69067 11 2 11.6907 2 15V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V15C22 12.7889 21.6917 11.7468 20.5 11.2987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.2442 3.13291C17.6913 2.64778 17.9149 2.40522 18.1524 2.26374C18.7256 1.92234 19.4315 1.91173 20.0142 2.23573C20.2557 2.37001 20.4862 2.60575 20.947 3.07721C21.4079 3.54868 21.6383 3.78441 21.7696 4.03149C22.0863 4.62767 22.0759 5.34971 21.7422 5.93611C21.6039 6.17913 21.3668 6.40783 20.8926 6.86523L15.2504 12.3075C13.7556 13.7493 12.8297 14.0483 10.7592 13.9941C10.3833 13.9842 10.1954 13.9793 10.0862 13.8551C9.9769 13.731 9.99182 13.5393 10.0216 13.1558C10.1592 11.3881 10.4706 10.4824 11.6737 9.17706L17.2442 3.13291Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
        link: "/pay-runs",
        subPages: [],
    },
    {
        title: "Approvals",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M18.0003 18.5L18.2777 17.1138C18.4244 16.3806 18.8164 15.7048 18.9562 14.9703C18.9852 14.818 19.0003 14.6608 19.0003 14.5C19.0003 13.1193 17.881 12 16.5003 12C15.1196 12 14.0003 13.1193 14.0003 14.5C14.0003 14.6608 14.0155 14.818 14.0445 14.9703C14.1843 15.7048 14.5763 16.3806 14.723 17.1138L15.0003 18.5M18.0003 18.5H15.0003M18.0003 18.5L20.4966 19.1659C21.375 19.3611 22 20.1402 22 21.0401C22 21.5702 21.5702 22 21.0401 22H20.4966H12.5H11.9599C11.4298 22 11 21.5702 11 21.0401C11 20.1402 11.625 19.3611 12.5034 19.1659L15.0003 18.5" stroke="currentColor" stroke-width="1.5" />
            <path d="M17 9V8C17 5.17157 17 3.75736 16.1213 2.87868C15.2426 2 13.8284 2 11 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M7 8.66667C7 8.66667 7.625 8.66667 8.25 10C8.25 10 10.2353 6.66667 12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6 17H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        link: "/approvals",
        subPages: ["Reimbursements", "Proof Of Investments", "Salary Revision"],
    },
    {
        title: "Form 16",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M17 2V4M12 2V4M7 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V12C20.5 16.714 20.5 19.0711 19.0355 20.5355C17.5711 22 15.214 22 10.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M8 15H12M8 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20.5 14.5C20.5 15.8807 19.3807 17 18 17C17.5007 17 16.912 16.9125 16.4265 17.0426C15.9951 17.1582 15.6582 17.4951 15.5426 17.9265C15.4125 18.412 15.5 19.0007 15.5 19.5C15.5 20.8807 14.3807 22 13 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        link: "/form16", subPages: []
    },
    {
        title: "Settings",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        link: "/settings",
        subPages: ["Profile", "Security", "Notifications"],
    },


];
const menuItems2 = [

   

];
const menuItems3 = [

  
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
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h2>Payroll</h2>
            </div>

            <ul >
                {menuItems.map((item, index) => (
                    <li key={index} className="li_0">
                        <div
                            // to={item.link}
                            className={`menu-item ${location.pathname.includes(item.link) ? "active" : ""
                                }`}
                            onClick={() => toggleMenu(index)}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                            {item.subPages.length > 0 &&
                                (openMenu === index ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>)}
                        </div>

                        {item.subPages.length > 0 && openMenu === index && (
                            <ul className="sub-menu ">
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
