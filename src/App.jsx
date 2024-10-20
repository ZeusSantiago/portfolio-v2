import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
