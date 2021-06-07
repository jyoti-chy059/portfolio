import React from "react";
import Nav from "./Nav";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import { MainContainer } from "./styledComponent";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const viewProps = {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
  };

  return (
    <MainContainer>
      <Nav />
      <Intro {...viewProps} />
      <Skills {...viewProps} />
      <Projects {...viewProps} />
      <ContactMe />
      <Footer />
    </MainContainer>
  );
};

export default App;
