import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  // logic
  let calcBmi = (e) => {
    e.preventDefault();//server par submit na thay ena mate

    let bmi1 = 0;
    if (weight === 0 || height === 0) {
      alert("Enter the Valid Value")
      
    } else {
      bmi1 = (weight / (height * height)) * 703;
      setBmi(bmi1.toFixed(1));


      //for message
      if (bmi1<25){
        setMessage("You are underweight");
      }
      else if(bmi1>=25 && bmi1<=30){
        setMessage("You are helthy weight person");
      }
      else{
        setMessage("You are overweight");
      }
    }
  };

  //reload
  let reload=()=>{
    window.location.reload();
  }
  console.log(weight);

  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
