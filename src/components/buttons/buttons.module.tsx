import styled from "styled-components";
import { TextContent } from "../Textual/textual.module";
interface buttonProps {
  border: string;
  height: string;
  width: string;
  marginLeft?: string;
}
export const StartWatchingBtn = styled.button<buttonProps>`
  border: ${({ border }) => border} solid white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: rgba(0, 0, 10, 0);
  margin-left: ${({ marginLeft }) => marginLeft || "0px"};
  color: white;
  &:hover {
    border: ${({ border }) => border} solid rgba(0, 0, 10, 0);
    background-color: white;
    ${TextContent} {
      color: black;
    }
  }
`;
