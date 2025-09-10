import { useState } from "react";
import "./App.css";
import holbertonLogo from "./assets/holberton-logo.jpg";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo"></img>
        <h1 style={{ color: "#e1003c" }}>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2025 - holberton School</p>
      </div>
    </>
  );
}

export default App;
