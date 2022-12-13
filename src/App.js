import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import RegisterContainer from "./Register/RegisterContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <RegisterContainer />
    </div>
  );
}

export default App;
