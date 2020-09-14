import React from "react";
import "./App.css";
import PointTester from "../src/components/PointTester";
import { Points } from "../src/components/Constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Link Station Locator</h1>
        {Points.map((p, index) => (
          <PointTester key={index} point={p} />
        ))}
      </header>
    </div>
  );
}

export default App;
