import React from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { MainContainer } from "./styledComponent";

const App = () => {
  return (
    <MainContainer>
      <Nav />
      <Intro />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </MainContainer>
  );
};

export default App;
