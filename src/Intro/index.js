import React from "react";
import {
  IntroContainer,
  Title,
  SubTitle,
  Avatar,
  AvatarImage,
  MainContent,
  Header,
  SubHeader,
} from "./styledComponents";
import avatar from "../Images/avatar-girl.png";

const Intro = ({ isDesktopOrLaptop }) => {
  return (
    <IntroContainer>
      <Title>{"Web Application Developer"}</Title>
      <SubTitle>
        {`I believe in using technolgy to solve problems that makes world a better place and future more exciting.`}
      </SubTitle>
      <Avatar>
        <AvatarImage src={avatar} alt={"avatar"} />
      </Avatar>
      <MainContent>
        <Header>{"Hi, I’m Jyoti. Nice to meet you."}</Header>
        <SubHeader isDesktopOrLaptop={isDesktopOrLaptop}>
          {`Since i started working in software developemnt, I have worked with different companies Like Accenture, \
          Wipro, Equinix and others to build web applications that provides different services to their client or customer.\
           I have mostly worked on front-end side of the applications creating great designs, smooth user experience and responsive app.`}
        </SubHeader>
      </MainContent>
    </IntroContainer>
  );
};

export default Intro;
