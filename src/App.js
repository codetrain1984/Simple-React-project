import "./App.css";
import Courses from "./Components/Courses/Courses";
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
    </div>
  );
}

export default App;
