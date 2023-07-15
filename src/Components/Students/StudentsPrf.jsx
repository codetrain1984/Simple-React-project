import React from 'react'
import './StudentPrf.css'
import stuImag from '../../images/Course/Graduation.jpg'
import { IoMdQuote } from 'react-icons/io'

const StudentsPrf = () => {
  return (
    <div className="stuContainer">
      <div className="stuSection">
        <div className="line"></div>
        <h2>What our students say</h2>
        <div className="stuContent">
          <IoMdQuote className="stuIcon" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            iure. Accusamus maiores nemo sequi esse aspernatur iure cupiditate
            earum inventore vel atque! Autem adipisci modi repudiandae tempore
            nisi voluptate. Laborum unde natus quibusdam labore maiores?
          </p>
          <div className="stuImage">
            <img width={94} height={94} src={stuImag} alt="/" />
            <h3>Jessie Cooper</h3>
            <h4>Graduate Student</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsPrf
