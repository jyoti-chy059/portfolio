import styled from "styled-components";

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
  width: ${props => (props.isTabletOrMobile ? "30rem" : "60rem")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 50rem; */
  margin-bottom: ${props => props.isTabletOrMobile && "2rem"};
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
  flex: 1;
  /* width: 20rem;
  height: 20rem;
  margin-right: 8px; */
  margin: 1rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
`;

export const TechImageContainer = styled.div`
  width: 8rem;
  height: 3rem;
  padding: 6px;
  display: flex;
  flex-direction: column;
`;
export const TechName = styled.span`
  align-self: center;
`;
