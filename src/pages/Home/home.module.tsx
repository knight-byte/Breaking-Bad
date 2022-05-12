import styled from "styled-components";
import bgImage from "../../assets/images/backgroud_g.jpg";
export const HomeContainer = styled.div`
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  background-position: center center;
  font-family: "Rajdhani", sans-serif;
`;

export const Logo = styled.img`
  margin: 50px;
  width: 120px;
  height: inherit;
`;

export const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  max-width: 550px;
`;
