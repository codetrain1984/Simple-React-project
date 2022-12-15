import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import RegisterContainer from "./Components/Register/RegisterContainer";
import Services from "./Components/ServiceSection/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <RegisterContainer />
      <Services />
    </div>
  );
}

export default App;
