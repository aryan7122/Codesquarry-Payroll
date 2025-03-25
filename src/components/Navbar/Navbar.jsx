import React from "react";
import { FaSearch, FaCog, FaBell } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Split the current URL into path segments
    const pathSegments = location.pathname
        .split("/")
        .filter((segment) => segment);

    // Function to navigate based on breadcrumb click
    const handleNavigate = (index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        navigate(path);
    };

    return (
        <div className="navbar">
            {/* Dynamic Breadcrumb */}
            <div className="breadcrumb">
                <span onClick={() => navigate("/")} className="breadcrumb-link">
                    Home
                </span>
                {pathSegments.map((segment, index) => (
                    <span key={index}>
                        <span className="breadcrumb-divider"> &gt; </span>
                        <span
                            className={`breadcrumb-link ${index === pathSegments.length - 1
                                ? "breadcrumb-current"
                                : ""
                                }`}
                            onClick={() => handleNavigate(index)}
                        >
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </span>
                    </span>
                ))}
            </div>

            {/* Actions Section */}
            <div className="nav-actions">
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search Employee" />
                </div>

                <FaCog className="icon" />
                <FaBell className="icon" />

                <div className="profile">
                    <span>Help ▼</span>
                    <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="User"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
