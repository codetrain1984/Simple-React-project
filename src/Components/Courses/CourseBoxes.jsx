import React from 'react'
import personalImg from '../../images/Course/personal.jpg'

const CourseBoxes = ({ image, boxTitle }) => {
  return (
    <div className="courseBox">
      <div className="boxItems">
        <img className="courseImg" src={image} alt="/" />
        <h3>{boxTitle}</h3>
        <p>Adobe Guide, Layes, Smart Objects etc...</p>
      </div>
      <div className="personelBox">
        <img
          width={46}
          height={46}
          className="personalImg"
          src={personalImg}
          alt="/"
        />
        <p>
          Michael Smith,<span>Author</span>
        </p>
        <h4>29$</h4>
      </div>
    </div>
  )
}

export default CourseBoxes
