import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
