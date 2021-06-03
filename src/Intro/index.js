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
const Intro = () => {
  return (
    <IntroContainer>
      <Title>{"Designer, Front-end Developer & Mentor"}</Title>
      <SubTitle>{"I design and code beautifully things, with love."}</SubTitle>
      <Avatar>
        <AvatarImage src={avatar} alt={"avatar"} />
      </Avatar>
      <MainContent>
        <Header>{"Hi, I’m Jyoti. Nice to meet you."}</Header>
        <SubHeader>{`Since beginning my journey as a developer nearly 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.`}</SubHeader>
      </MainContent>
    </IntroContainer>
  );
};

export default Intro;
