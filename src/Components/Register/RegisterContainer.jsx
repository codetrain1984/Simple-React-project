import React from "react";
import "./registerContainer.css";

const RegisterContainer = () => {
  return (
    <div className="registerContainer">
      <div className="registerSection">
        <div className="registerContent">
          <h2>
            Register now and get a discount <span>50%</span> discount until 1
            January
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ducimus maiores, illum iusto voluptatibus ullam natus dolor aliquam
            minus harum! Voluptas commodi porro dolorum fuga?
          </p>
          <button className="registerBtn">REGISTER NOW</button>
        </div>
      </div>
      <div className="searchCourse">
        <div className="searchSection">
          <h2>Search for your course</h2>
          <div className="searchContent">
            <form>
              <input type="text" placeholder="Course Name" />
              <input type="text" placeholder="Category" />
              <input type="text" placeholder="Degree" />
              <button>SEARCH COURSE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
