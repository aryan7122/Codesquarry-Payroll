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
                            {/* {item.list && item.list.length > 0 && (
                                <ul>
                                    {item.list.map((li, i) => (
                                        <li key={i}>{li}</li>

                                    ))}
                                </ul>
                            )} */}
                            {item.list && item.list.length > 0 && (
                                <ul>
                                    {item.list.map((li, i) => (
                                        <li key={i}>
                                            {typeof li === "string" ? (
                                                li
                                            ) : (
                                                <>
                                                    {li.text}
                                                    <ul>
                                                        {li.nestedList.map((nestedLi, j) => (
                                                            <li key={j}>{nestedLi}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageTips;
