import React from 'react'
import './Events.css'

const EventParts = ({ title, image }) => {
  return (
    <div className="eventPart">
      <div className="eventCalender">
        <h1>07</h1>
        <h4>January</h4>
      </div>
      <div className="eventDescription">
        <h3>{title}</h3>
        <h5>Grand Central Park</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ullam
          culpa illum voluptas aspernatur cupiditate sit dicta dolorum
          reiciendis asperiores!
        </p>
      </div>
      <div className="eventImage">
        <img width={360} height={180} src={image} alt="/" />
      </div>
    </div>
  )
}

export default EventParts
