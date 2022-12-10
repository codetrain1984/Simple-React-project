import React from "react";
import "./HeaderBox.css";

const HeaderBox = ({ title, logo }) => {
  return (
    <div className="headerBox">
      <span>{logo}</span>
      <h2>{title}</h2>
      <p>View</p>
    </div>
  );
};

export default HeaderBox;
