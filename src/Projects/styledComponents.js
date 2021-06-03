import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const Header = styled.h2`
  width: 10rem;
`;

export const ProjectCardContainer = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  width: inherit;
  box-shadow: 0px 20px 40px 0px rgb(75 90 126 / 14%);
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
  width: 20rem;
  height: 20rem;
  margin-right: 8px;
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
`;
