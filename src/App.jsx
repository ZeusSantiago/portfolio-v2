import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import Main from "./components/main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
