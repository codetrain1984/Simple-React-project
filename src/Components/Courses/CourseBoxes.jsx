import React from "react";
import "./CourseBoxes.css";

const CourseBoxes = ({ image }) => {
  return (
    <div className="courseBox">
      <img className="courseImg" src={image} alt="/" />
      <div className="boxItems">
        <h3>A complete guide to design</h3>
        <p>Adobe Guide, Layes, Smart Objects etc...</p>
      </div>
      <div className="personelBox">
        <img src="" alt="/" />
        <p>
          Michael Smith,<span>Author</span>
        </p>
        <h4>29$</h4>
      </div>
    </div>
  );
};

export default CourseBoxes;
