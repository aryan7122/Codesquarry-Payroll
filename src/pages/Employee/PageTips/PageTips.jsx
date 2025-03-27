import React from "react";
import "./PageTips.scss";
import { BiCloset } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { X } from "lucide-react";  // close icon

const PageTips = ({ title, content, onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h2>{title}</h2>
                    <IoIosCloseCircleOutline size={24} onClick={onClose} className="close-icon" />
                </div>
                <div className="popup-content">
                    {content.map((item, index) => (
                        <div key={index} className="content-section">
                            <h3>{item.heading}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageTips;
