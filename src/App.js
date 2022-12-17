import "./App.css";
import Courses from "./Components/Courses/Courses";
import Events from "./Components/EventsPart/Events";
import Header from "./Components/Header/Header";
import RegisterContainer from "./Components/Register/RegisterContainer";
import Services from "./Components/ServiceSection/Services";
import StudentsPrf from "./Components/Students/StudentsPrf";

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <RegisterContainer />
      <Services />
      <StudentsPrf />
      <Events />
    </div>
  );
}

export default App;
