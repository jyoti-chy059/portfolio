import React from "react";
import logo from "../Images/initial-logo.png";
import resume from "../Images/resume.svg";
import resumeDoc from "../Doc/resume.pdf";
import {
  NavContainer,
  LogoContainer,
  Logo,
  ImageConatiner,
  Image,
  ResumeContainer,
} from "./styledComponents";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <ResumeContainer>
        <a
          href={resumeDoc}
          download="Jyoti's Resume"
          target="_blank"
          rel="noreferrer"
        >
          <ImageConatiner>
            <Image src={resume} alt="Resume" />
          </ImageConatiner>
        </a>
        <span>{"Resume"}</span>
      </ResumeContainer>
    </NavContainer>
  );
};

export default Nav;
