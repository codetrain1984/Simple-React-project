import React from "react";
import CourseBoxes from "./CourseBoxes";
import "./courses.css";
import image1 from "../../images/Course/Best-Laptop.jpg";

const Courses = () => {
  return (
    <div className="courseContainer">
      <div className="titleCourse">
        <div className="line"></div>
        <h2>Popular Courses</h2>
        <CourseBoxes image={image1} />
      </div>
    </div>
  );
};

export default Courses;
