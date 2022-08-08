import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <Skills />
    
    </div>
  );
}

export default App;
