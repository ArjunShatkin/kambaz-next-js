"use client";

import { useState } from "react";

export default function Modules() {
  const handleCollapseAll = () => alert("Collapse All clicked!");
  const handleViewProgress = () => alert("View Progress clicked!");
  const handleAddModule = () => alert("Add Module clicked!");

  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePublishAll = () => alert("Publish All clicked!");
  const handleUnpublishAll = () => alert("Unpublish All clicked!");

  return (
    <div>
      <div className="wd-module-buttons" style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <button className="wd-button" onClick={handleCollapseAll}>Collapse All</button>
        <button className="wd-button" onClick={handleViewProgress}>View Progress</button>

        {/* Publish All Dropdown */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            className="wd-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Publish All ▼
          </button>
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ccc",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                zIndex: 1000,
              }}
            >
              <button
                className="wd-button"
                style={{ display: "block", width: "100%" }}
                onClick={handlePublishAll}
              >
                Publish All
              </button>
              <button
                className="wd-button"
                style={{ display: "block", width: "100%" }}
                onClick={handleUnpublishAll}
              >
                Unpublish All
              </button>
            </div>
          )}
        </div>

        <button className="wd-button" onClick={handleAddModule}>Add Module</button>
      </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}

