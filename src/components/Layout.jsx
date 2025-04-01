import React from "react";
import "./Layout.scss";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ isLoggedIn, children }) => {
    return (
        <div className="layout">
            <Sidebar />
            {isLoggedIn &&
                <Sidebar />
            }
            <div className="main-content">
                <Navbar />
                {isLoggedIn &&
                    <Navbar />
                }
                <div className={isLoggedIn ? `page-content` : 'page-content'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
