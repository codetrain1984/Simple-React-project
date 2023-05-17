import { useContext } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Events from './Components/EventsPart/Events'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import RegisterContainer from './Components/Register/RegisterContainer'
import Services from './Components/ServiceSection/Services'
import StudentsPrf from './Components/Students/StudentsPrf'
import { ThemeContext } from './Components/Context/ThemeContext'

function App() {
  const [theme] = useContext(ThemeContext)
  return (
    <div className="App" id={theme}>
      <Header />
      <Courses />
      <RegisterContainer />
      <Services />
      <StudentsPrf />
      <Events />
      <Footer />
    </div>
  )
}

export default App
