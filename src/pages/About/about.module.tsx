import styled from "styled-components";

export const AboutSectionContainer = styled.div`
  margin: 0px;
  background-color: #122021;
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  background-position: center center;
  font-family: "Rajdhani", sans-serif;
`;
interface SayMyNameProps {
  strokeSize?: string;
  fontSize?: string;
  color?: string;
  right?: string;
  margin?: string;
}
export const SayMyName = styled.p<SayMyNameProps>`
  right: ${({ right }) => right || "20%"};
  position: absolute;
  margin: ${({ margin }) => margin || "80px 200px 100px 100px"};
  font-size: ${({ fontSize }) => fontSize || "140px"};
  font-weight: 700;
  color: ${({ color }) => color || "white"};
  font-family: "Rajdhani", sans-serif;
  -webkit-text-stroke: ${({ strokeSize }) => strokeSize || "0px"} white;
`;

export const AboutFlexWrapper = styled.div`
  padding-top: 170px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12em;
`;

export const AboutTextContent = styled.div`
  margin-top: 120px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const AboutPoster = styled.img`
  width: 450px;
  height: fit-content;
  border-radius: 5%;
`;
