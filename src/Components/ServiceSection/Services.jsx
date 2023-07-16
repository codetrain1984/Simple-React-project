import React, { useEffect, useState } from 'react'
import ServiceBoxes from './ServiceBoxes'
import './Services.css'
import { ImEarth } from 'react-icons/im'
import { FaSwatchbook, FaChalkboardTeacher } from 'react-icons/fa'
import { SlNotebook } from 'react-icons/sl'
import { TfiBlackboard } from 'react-icons/tfi'
import { GoMortarBoard } from 'react-icons/go'

const Services = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])
  return (
    <div className="serviceContianer" id="services">
      <div className="line"></div>
      <div className="serviceSection">
        <h2>Our Services</h2>

        <div className={show && 'serviceContent'}>
          <ServiceBoxes icon={<ImEarth />} title="Online Courses" />
          <ServiceBoxes icon={<SlNotebook />} title="Indoor Courses" />
          <ServiceBoxes icon={<FaSwatchbook />} title="Amazing Library" />
          <ServiceBoxes
            icon={<FaChalkboardTeacher />}
            title="Exceptional Professors"
          />
          <ServiceBoxes icon={<TfiBlackboard />} title="Top Programs" />
          <ServiceBoxes icon={<GoMortarBoard />} title="Graduate Diploma" />
        </div>
      </div>
    </div>
  )
}

export default Services
