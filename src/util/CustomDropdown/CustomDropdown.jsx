import React, { useState, useRef, useEffect } from "react";
import "./CustomDropdown.scss";
import { LuChevronsUpDown } from "react-icons/lu";

const CustomDropdown = ({ label, options, searchable = false, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef(null);

    // ✅ Outside click par close hone ka logic
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const filteredOptions = options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className={`dropdown-btn ${isOpen ? "open" : ""}`} onClick={toggleDropdown}>
                <span>{label}</span>
                <LuChevronsUpDown className="arrow" />
            </div>

            {isOpen && (
                <div className="dropdown-content">
                    {searchable && (
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                            className="search-input"
                        />
                    )}
                    <ul>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <li key={index} onClick={() => handleSelect(option)}>
                                    {option}
                                </li>
                            ))
                        ) : (
                            <li>No Results Found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
