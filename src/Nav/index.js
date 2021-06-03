import React, { useRef, useState } from "react";
import { Menu } from "antd";
import logo from "../Images/initial-logo.png";
import { NavContainer, LogoContainer, Logo } from "./styledComponents";

const Nav = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const navContainerRef = useRef(null);

  const handleClick = (event) => {
    setSelectedNav(event.key);
  };
  return (
    <NavContainer ref={navContainerRef}>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
      <Menu
        mode="horizontal"
        selectedKeys={selectedNav}
        onClick={handleClick}
        style={{ display: "inline-block", width: "auto" }}
        getPopupContainer={() => navContainerRef.current}
      >
        <Menu.Item key="skill">Skill</Menu.Item>
        <Menu.Item key="project">Project</Menu.Item>

        <Menu.Item key="personal">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal
          </a>
        </Menu.Item>
      </Menu>
    </NavContainer>
  );
};

export default Nav;
