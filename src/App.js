import React from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";

/**
 *
 * Things to do:
 * 1. work on skills - to add icons and content
 * 2. Projects: work on making images and icons more good
 * 3.content for intro and header
 * 4. Link the nav to particular doc section
 */
const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
