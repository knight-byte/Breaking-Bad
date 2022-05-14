import styled from "styled-components";
import bgImage from "../../assets/images/backgroud_g.jpg";
export const HomeContainer = styled.div`
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  background-position: center;
  font-family: "Rajdhani", sans-serif;
  scroll-snap-align: start;
`;

export const Logo = styled.img`
  margin: 50px;
  width: 120px;
  height: inherit;
  @media only screen and (max-width: 728px) {
    margin: 20px;
    width: 80px;
  }
`;

export const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  max-width: 550px;

  @media only screen and (max-width: 728px) {
    max-width: 650px;
    margin: 20px;
  }
`;
