import React from "react";
import CourseBoxes from "./CourseBoxes";
import "./courses.css";
import image1 from "../../images/Course/Best-Laptop.jpg";
import image2 from "../../images/Course/Photography-Brief.jpg";
import image3 from "../../images/Course/photoshop-wallpaper.jpg";

const Courses = () => {
  return (
    <div className="courseContainer">
      <div className="titleCourse">
        <div className="line"></div>
        <h2>Popular Courses</h2>
        <div className="courseBoxes">
          <CourseBoxes image={image1} boxTitle="A complete guide to design" />
          <CourseBoxes image={image2} boxTitle="Beginners guide to HTML" />
          <CourseBoxes image={image3} boxTitle="Advanced Photoshop" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
