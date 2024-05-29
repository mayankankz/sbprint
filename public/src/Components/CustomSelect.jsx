import React, { useState } from "react";

export const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="custom-select">
      <div
        className={`select-control ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="selected-option">{selectedOption}</div>
        <div className="dropdown-icon">
          <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <ul className="options">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className="option"
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
