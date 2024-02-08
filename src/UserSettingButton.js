// UserSettingsButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserSettingsButton.css";
import avatarImage from "./avatar.png";

const UserSettingsButton = () => {
  const navigate = useNavigate(); // Use useNavigate instead of history

  const handleUserSettingsClick = () => {
    navigate("/user-settings"); // Corrected navigate function call
  };

  return (
    <button className="user-settings-button" onClick={handleUserSettingsClick}>
      <div
        className="avatar"
        style={{ backgroundImage: `url(${avatarImage})` }}
      ></div>
    </button>
  );
};

export default UserSettingsButton;
