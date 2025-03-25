import React from "react";

import "./Layout.scss";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="page-content">
                    <div className="page-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
