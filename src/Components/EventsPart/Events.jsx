import React from 'react'
import EventParts from './EventParts'
import './Events.css'
import festival from '../../images/Course/festival.jpg'
import campus from '../../images/Course/belmont-campus.jpg'
import graduation from '../../images/Course/Student-Graduation-Ceremony.jpg'

const Events = () => {
  return (
    <div className="eventContainer" id="events">
      <div className="eventSection">
        <div className="line"></div>
        <h2>Upcoming Events</h2>
        <div className="">
          <EventParts title="Student Festival" image={festival} />
          <EventParts
            title="Open day in the Univesrsity campus"
            image={campus}
          />
          <EventParts title="Student Graduation Ceremony" image={graduation} />
        </div>
      </div>
    </div>
  )
}

export default Events
