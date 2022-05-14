import styled from "styled-components";
import { TextContent } from "../../components/Textual/textual.module";

export const AboutSectionContainer = styled.div`
  margin: 0px;
  background-color: #122021;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background-position: center center;
  font-family: "Rajdhani", sans-serif;
  scroll-snap-align: start;
`;
interface SayMyNameProps {
  strokeSize?: string;
  fontSize?: string;
  color?: string;
  right?: string;
  margin?: string;
  paddingLeft?: string;
}

export const SayMyName = styled.p<SayMyNameProps>`
  padding-left: ${({ paddingLeft }) => paddingLeft || "0px"};
  margin: 0%;
  font-size: ${({ fontSize }) => fontSize || "140px"};
  font-weight: 700;
  color: ${({ color }) => color || "white"};
  font-family: "Rajdhani", sans-serif;
  -webkit-text-stroke: ${({ strokeSize }) => strokeSize || "0px"} white;

  @media only screen and (max-width: 728px) {
    font-size: 50px;
    padding-left: ${({ paddingLeft }) => (paddingLeft ? "15px" : "0px")};
  }
`;
export const SayMyNameFlex = styled.div`
  right: 20%;
  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: column;
  position: absolute;
  @media only screen and (max-width: 728px) {
    position: relative;
    justify-content: center;
    right: 0%;
    padding-top: 50px;
    flex-direction: row;
    /* right: 10%; */
    align-items: center;
  }
`;

export const AboutFlexWrapper = styled.div`
  padding-top: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;

  @media only screen and (max-width: 728px) {
    flex-direction: column-reverse;
    gap: 0em;
    padding-top: 0px;
    margin-top: -30px;
  }
`;

export const AboutTextContent = styled.div`
  margin-top: 120px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media only screen and (max-width: 728px) {
    align-self: center;
    margin-top: 10px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    text-align: justify;
    ${TextContent} {
      font-size: 20px;
      &:nth-of-type(1) {
        font-size: 35px;
      }
    }
  }
`;

export const AboutPoster = styled.img`
  width: 25%;
  height: fit-content;
  border-radius: 5%;
  @media only screen and (max-width: 728px) {
    width: 250px;
    align-self: center;
  }
`;
