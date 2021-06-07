import React from "react";
import SecurityRisk from "../Images/securityRisk.png";
import ReactIcon from "../Images/react-png.png";
import GoLogo from "../Images/go-logo.svg";
import JavaIcon from "../Images/java-logo-icon.svg";

import PostgresqlLogo from "../Images/postgre-sql-logo.png"; //postgresql.png";
import AlightLogo from "../Images/alight.jpg";
import EquinixLogo from "../Images/equinix-dashboard.png";
import MySql from "../Images/mysql_icon.svg";
import AngularIcon from "../Images/angular-logo-icon.svg";
import {
  ProjectContainer,
  Header,
  Project,
  ProjectCardContainer,
  Description,
  ProjectImageContainer,
  Image,
  TechStackContainer,
  TechImageContainer,
  TechName,
} from "./styledComponents";

const Projects = ({ isTabletOrMobile }) => {
  return (
    <ProjectContainer>
      <Header>{"Recent projects"}</Header>
      <ProjectCardContainer isTabletOrMobile={isTabletOrMobile}>
        <Project>
          <Description>
            <p>
              Equinix is a internet company that provides data center services
              to the companies.
            </p>
            <p>
              I am currently working on Equinix Customer Portal that provides
              the customer an interface to order, track and manage multiple
              services related to data center.
            </p>
            <h4>Responsibity:</h4>

            <p>
              I am part of Console Team where right now my job is to migrate the
              existing functionalities of different equinix product and merge
              into one product so that customer can login only once and can
              access all the services that he has subscribed to under one roof.
            </p>
            <p>
              Doing above, what i am specifically doing is creating small
              microfrontends application that cater to a particular
              functionality inside product.
            </p>
            <p> We are following microfrontend architecture here.</p>
            <h4>Tech Stack:</h4>
            <TechStackContainer>
              <TechImageContainer>
                <Image src={ReactIcon} />
                <TechName>{"React JS"}</TechName>
              </TechImageContainer>
              <TechImageContainer>
                <Image src={JavaIcon} />
                <TechName>{"Java"}</TechName>
              </TechImageContainer>

              <TechImageContainer>
                <Image src={MySql} />
                <TechName>{"MySQL"}</TechName>
              </TechImageContainer>
            </TechStackContainer>
          </Description>
          <ProjectImageContainer>
            <Image src={EquinixLogo} />
          </ProjectImageContainer>
        </Project>
      </ProjectCardContainer>

      <ProjectCardContainer isTabletOrMobile={isTabletOrMobile}>
        <Project>
          <Description>
            <p>
              Security Risk is a Web Portal that is used in patroling area that
              is potentially threat and needs continuous protection and
              patrolling.
            </p>
            <p>
              It is used by the Security Manager to manage and control all the
              security activities like notify the guard to start patrol, declare
              an area Danger zone to restrict going and other manager
              activities.
            </p>
            <h4>Responsibity:</h4>

            <p>
              I was part of the team where we have build this project from
              scratch. Once the development got completed, i was engaged in
              managining the web portal for bug fixes and new enhancement.
            </p>
            <h4>Tech Stack:</h4>
            <TechStackContainer>
              <TechImageContainer>
                <Image src={ReactIcon} />
                <TechName>{"React"}</TechName>
              </TechImageContainer>
              <TechImageContainer>
                <Image src={GoLogo} />
                <TechName>{"Golang"}</TechName>
              </TechImageContainer>

              <TechImageContainer>
                <Image src={PostgresqlLogo} />
                <TechName>{"Postgresql"}</TechName>
              </TechImageContainer>
            </TechStackContainer>
          </Description>

          <ProjectImageContainer>
            <Image src={SecurityRisk} />
          </ProjectImageContainer>
        </Project>
      </ProjectCardContainer>

      <ProjectCardContainer isTabletOrMobile={isTabletOrMobile}>
        <Project>
          <Description>
            <p>
              Alight Upoint is an in house product of Alight (now Alight is part
              of Wipro)
            </p>
            <p>
              It is used by all the employee of Alight as well as other clients
              of Alight to manage their employee data and different services
              they provide to their employees.
            </p>
            <h4>Responsibity:</h4>

            <p>
              I was part of the UI-UX team where we were working on maninting
              the application for the smooth access to all the customer as well
              as as per client needs i used to customize the application so that
              it would look as their own in house application for their
              employee.
            </p>
            <p>
              While doing above my main responsibility was to talk to the client
              and as per their need customize the product routinely.
            </p>
            <h4>Tech Stack:</h4>
            <TechStackContainer>
              <TechImageContainer>
                <Image src={AngularIcon} />
                <TechName>{"Angular"}</TechName>
              </TechImageContainer>
              <TechImageContainer>
                <Image src={JavaIcon} />
                <TechName>{"Java"}</TechName>
              </TechImageContainer>
              <TechImageContainer>
                <Image src={MySql} />
                <TechName>{"MySQL"}</TechName>
              </TechImageContainer>
            </TechStackContainer>
          </Description>

          <ProjectImageContainer>
            <Image src={AlightLogo} />
          </ProjectImageContainer>
        </Project>
      </ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Projects;
