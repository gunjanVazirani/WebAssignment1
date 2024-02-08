// NavigationBar.js
import React, { useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sticky">
      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul>
          <li>
            <a href="/module-management">Module Management</a>
          </li>
          <li>
            <a href="/quiz-management">Quiz Management</a>
          </li>
          <li>
            <a href="/access-management">Access Management</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
