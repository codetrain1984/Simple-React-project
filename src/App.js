import React, { useContext, useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Events from './Components/EventsPart/Events'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import RegisterContainer from './Components/Register/RegisterContainer'
import Services from './Components/ServiceSection/Services'
import StudentsPrf from './Components/Students/StudentsPrf'
import { ThemeContext } from './Components/Context/ThemeContext'
import { BiUpArrowCircle } from 'react-icons/bi'

function App() {
  const [state, setState] = useState(false)
  const [theme] = useContext(ThemeContext)
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="App" id={theme}>
      <Header />
      <Courses />
      <RegisterContainer />
      <Services />

      <StudentsPrf />
      <Events />
      <Footer />
      <button className="scroll-top" onClick={handleScroll}>
        <BiUpArrowCircle className="scroll-icon" />
      </button>
    </div>
  )
}

export default App
