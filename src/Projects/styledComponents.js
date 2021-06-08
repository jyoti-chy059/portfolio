import styled from "styled-components";
import { device } from "../constant";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Header = styled.h2`
  width: 11rem;
`;

export const ProjectCardContainer = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 30rem;
  }

  @media ${device.laptopL} {
    width: 60rem;
    margin-bottom: 0;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: inherit;
  box-shadow: 0px 20px 40px 0px rgb(75 90 126 / 14%);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export const Description = styled.div`
  flex: 1;
  line-height: normal;
  font-size: 16px;
  padding: 1rem;
`;

export const ProjectImageContainer = styled.div`
  display: none;

  @media ${device.laptopL} {
    display: flex;
    flex: 1;
    margin: 1rem;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TechImageContainer = styled.div`
  width: 4rem;
  height: 2rem;
  padding: 6px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 8rem;
    height: 3rem;
  }
`;
export const TechName = styled.span`
  align-self: center;
`;
