import React from "react";
import frontendIcon from "../Images/frontend.svg";
import backendIcon from "../Images/backend.svg";
import ToolTcon from "../Images/tool-icon.svg";
import JSIcon from "../Images/js-icon.svg";
import HtmlIcon from "../Images/html-icon.svg";
import SaasIcon from "../Images/saas-icon.svg";
import CssIcon from "../Images/css-icon.svg";
import AngularIcon from "../Images/angular-icon.svg";
import ReactIcon from "../Images/react-skill-icon.svg";
import JavaIcon from "../Images/java-icon.svg";
import GoLogo from "../Images/go-logo.svg";
import GitIcon from "../Images/git-icon.svg";
import VscodeIcon from "../Images/vscode-icon.svg";
import JiraIcon from "../Images/jira-icon.svg";
import GithubIcon from "../Images/github-icon.svg";
import NodeJsIcon from "../Images/nodejs-icon.svg";
import NpmIcon from "../Images/npm-icon.svg";
import BootstrapIcon from "../Images/bootstrap-icon.svg";

import {
  SkillsContainer,
  CardContainer,
  Card,
  Header,
  ContentContainer,
  HeaderIcon,
  HeaderContent,
  IconConatiner,
  LanguageConatiner,
  Language,
  Icon,
  Description,
  SubHeader,
} from "./styledComponents";

const Skills = ({ isTabletOrMobile }) => {
  return (
    <SkillsContainer>
      <CardContainer isTabletOrMobile={isTabletOrMobile}>
        <Card isTabletOrMobile={isTabletOrMobile}>
          <Header>
            <IconConatiner>
              <HeaderIcon src={frontendIcon} alt="Frontend" />
            </IconConatiner>
            <HeaderContent>{"Front-end"}</HeaderContent>
          </Header>
          <ContentContainer>
            <Description>
              {
                "From the beginning of my career, I have always had keen interest in design.  I have always believed a product with great design makes it stand out. That is where my expertiese lies, having keen eye for design that is best for user experience perspective."
              }
            </Description>
            <SubHeader>{"Languages I speak:"}</SubHeader>
            <LanguageConatiner>
              <Language>
                <Icon src={HtmlIcon} />
              </Language>
              <Language>
                <Icon src={CssIcon} />
              </Language>
              <Language>
                <Icon src={SaasIcon} />
              </Language>
              <Language>
                <Icon src={JSIcon} />
              </Language>
              <Language>
                <Icon src={AngularIcon} />
              </Language>
              <Language>
                <Icon src={ReactIcon} />
              </Language>
            </LanguageConatiner>
          </ContentContainer>
        </Card>
        <Card isTabletOrMobile={isTabletOrMobile}>
          <Header>
            <IconConatiner>
              <HeaderIcon src={backendIcon} alt="Frontend" />
            </IconConatiner>
            <HeaderContent>{"Back-end"}</HeaderContent>
          </Header>
          <ContentContainer>
            <Description>
              {
                "I have tried my hand at backend development from time to time whenever i got opportunity. I may explore this field of software developement given a chance but right now i am a very beginner in this."
              }
            </Description>
            <SubHeader>{"Languages I have spoken:"}</SubHeader>
            <LanguageConatiner>
              <Language>
                <Icon src={JavaIcon} />
              </Language>
              <Language>
                <Icon src={GoLogo} />
              </Language>
            </LanguageConatiner>
          </ContentContainer>
        </Card>
        <Card isTabletOrMobile={isTabletOrMobile}>
          <Header>
            <IconConatiner>
              <HeaderIcon src={ToolTcon} alt="Frontend" />
            </IconConatiner>
            <HeaderContent>{"Tools"}</HeaderContent>
          </Header>
          <ContentContainer>
            <Description>
              {
                "I believe having a good command over different tools that helps in application development is must. It make developer life easy  as well as  the apllication development process."
              }
            </Description>

            <SubHeader>{"Tools i have used:"}</SubHeader>

            <LanguageConatiner>
              <Language>
                <Icon src={GitIcon} />
              </Language>
              <Language>
                <Icon src={GithubIcon} />
              </Language>
              <Language>
                <Icon src={VscodeIcon} />
              </Language>
              <Language>
                <Icon src={JiraIcon} />
              </Language>
              <Language>
                <Icon src={NodeJsIcon} />
              </Language>
              <Language>
                <Icon src={NpmIcon} />
              </Language>
              <Language>
                <Icon src={BootstrapIcon} />
              </Language>
            </LanguageConatiner>
          </ContentContainer>
        </Card>
      </CardContainer>
    </SkillsContainer>
  );
};

export default Skills;
