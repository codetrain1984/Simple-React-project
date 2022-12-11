import React from "react";
import "./HeaderBox.css";

const HeaderBox = ({ title, logo }) => {
  return (
    <div className="headerBox">
      <div className="items">
        <span>{logo}</span>
        <h2>{title}</h2>
      </div>
      <p>View</p>
    </div>
  );
};

export default HeaderBox;
