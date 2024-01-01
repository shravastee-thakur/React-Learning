import React, { useState } from "react";
import "./App.css";

function App() {
  let [tempValue, setTempValue] = useState(0);
  let [tempColor, setTempColor] = useState("");

  const add = () => {
    const newTempValue = tempValue + 1;

    if (newTempValue > 25) {
      setTempColor("red");
    } else if (newTempValue > 20) {
      setTempColor("orange");
    } else if (newTempValue > 10) {
      setTempColor("blue");
    } else if (newTempValue < 10) {
      setTempColor("green");
    }

    setTempValue(newTempValue);
  };

  const subtract = () => {
    const newTempValue = tempValue - 1;

    if (newTempValue > 25) {
      setTempColor("red");
    } else if (newTempValue > 20) {
      setTempColor("orange");
    } else if (newTempValue > 10) {
      setTempColor("blue");
    } else if (newTempValue < 10) {
      setTempColor("green");
    }
    setTempValue(newTempValue);
  };

  return (
    <>
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${tempColor}`}>
            {tempValue}°C
          </div>
        </div>
        <div className="button-container">
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
