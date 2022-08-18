import React from "react";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import ButtonAppBar from "./Navbar";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <Header />
      </header>

      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
