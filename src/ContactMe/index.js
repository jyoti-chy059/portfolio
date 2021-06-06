import React from "react";
import {
  ContactMeContainer,
  SocialMediaLinkContainer,
  SocialMediaLink,
  Image,
} from "./styledComponent";

import LinkedinIcon from "../Images/linkedin-icon.svg";
import GithubIcon from "../Images/github-logo-icon.svg";
import EmailIcon from "../Images/email-icon.jpeg";

const ContactMe = () => {
  return (
    <ContactMeContainer>
      <h2>{"Let's connect"}</h2>
      <SocialMediaLinkContainer>
        <SocialMediaLink
          href={"https://www.linkedin.com/in/jyoti-kumari-12b221136/"}
          target="_blank"
        >
          <Image src={LinkedinIcon} />
        </SocialMediaLink>
        <SocialMediaLink
          href={"https://github.com/jyoti-chy059"}
          target="_blank"
        >
          <Image src={GithubIcon} />
        </SocialMediaLink>
        <SocialMediaLink href="mailto:jyoti.chy059@gmail.com">
          <Image src={EmailIcon} />
        </SocialMediaLink>
      </SocialMediaLinkContainer>
    </ContactMeContainer>
  );
};

export default ContactMe;
