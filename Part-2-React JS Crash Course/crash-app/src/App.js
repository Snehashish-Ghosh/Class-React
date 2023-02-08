import "./App.css";
import AnotherCount from "./components/AnotherCount";
import Count from "./components/count";
import First from "./components/First";
import Next from "./components/Next";
import Service from "./components/service";
import User from "./components/User";

function App() {
  const fName = "Sneha";
  const year = "2023";
  const birthYear = "2020";
  const startSchool = false;
  return (
    <div className="App">
      <h2>My name is {fName}</h2>
      <h3>I'm {year - birthYear} years old</h3>
      <h4>{startSchool ? "Started her school" : "Not Started School"}</h4>
      <First />
      <Next />
      <hr />
      <User />
      <hr />
      <User userName={"Sneha Ghosh"} UserId={"Sneha"} />
      <hr />
      <User userName={"User Two"} UserId={"User Two ID"} />
      <hr />
      <h1>Service Section</h1>
      <Service sName={"Web Development"} />
      <hr />
      <Service sName={"UI/US Design"} />
      <hr />
      <Service sName={"Graphic Design"} />
      <hr /> <hr />
      <h1>UseState Count</h1>
      <Count />
      <hr />
      <h1>UseEffect Count</h1>
      <AnotherCount />
    </div>
  );
}

export default App;
