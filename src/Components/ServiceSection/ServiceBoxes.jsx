import React from "react";
import "./ServiceBoxes.css";

const ServiceBoxes = ({ title, icon }) => {
  return (
    <div className="serviceBoxes">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore
        fuga maxime quia sapiente ipsa neque ullam? Sed.
      </p>
    </div>
  );
};

export default ServiceBoxes;
