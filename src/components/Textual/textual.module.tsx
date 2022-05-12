import styled from "styled-components";

interface homeTextProps {
  fontSize?: string;
  fontWeight?: number;
  paddingLeft?: string;
  margin?: string;
}
export const TextContent = styled.p<homeTextProps>`
  margin: ${({ margin }) => margin || "10px"};
  font-size: ${({ fontSize }) => fontSize || "26px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  padding-left: ${({ paddingLeft }) => paddingLeft || "0px"};
  color: white;
  font-family: "Rajdhani", sans-serif;
`;
