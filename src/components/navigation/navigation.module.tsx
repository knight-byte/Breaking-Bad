import styled from "styled-components";

/**
 * Navigation container
 */

export const VerticalNavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 3em;
  right: 2%;
  top: 20%;
  align-items: center;
  @media only screen and (max-width: 728px) {
    display: none;
  }
`;

export const VerticalNavLink = styled.p`
  text-align: right;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 1.6em;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const NavLinkIndicator = styled.div`
  display: flex;
  margin: 0%;
  align-items: center;
  gap: 1px;
`;

export const NavArrow = styled.img<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  width: 10px;
`;

/**
 * Line and Github Icon
 */

export const Line = styled.div`
  height: 10em;
  width: 2px;
  background-color: white;
`;

export const GitHubIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px solid white;
  padding: 10px;
  fill: black;
`;

export const LineGithub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
