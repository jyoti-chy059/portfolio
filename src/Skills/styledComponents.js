import styled from "styled-components";

export const SkillsContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
`;
export const CardContainer = styled.div`
  /* background-color: orange; */
  display: flex;
  flex-direction: ${props => (props.isTabletOrMobile ? "column" : "row")};
  width: ${props => (props.isTabletOrMobile ? "25rem" : "70rem")};
`;

export const Card = styled.div`
  padding: 2rem;
  /* border: 1px solid black; */
  flex: 1;
  margin-right: 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 20px 40px 0px rgb(75 90 126 / 14%);
  margin-bottom: ${props => props.isTabletOrMobile && "2rem"};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid grey; */
  margin-bottom: 2rem;
`;
export const IconConatiner = styled.div`
  height: 2rem;
  /* width: 5rem; */
`;
export const HeaderIcon = styled.img`
  height: 100%;
  width: 100%;
`;
export const HeaderContent = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* font-family: "eurostile", sans-serif; */
  color: #141c3a;
  font-weight: 500;
`;
export const SubHeader = styled.h4`
  font-weight: 500;
`;
export const LanguageConatiner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Language = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 8px;
`;
export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
export const Description = styled.p`
  text-align: center;
  height: 10rem;
`;
