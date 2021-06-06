import React from "react";
import logo from "../Images/initial-logo.png";
import { NavContainer, LogoContainer, Logo } from "./styledComponents";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
    </NavContainer>
  );
};

export default Nav;
