import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  max-width: 720px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  background-color: ${theme.colors.boxBackground};
  margin: 16px;
  padding: 16px;
  gap: 32px;

  @media ${theme.breakpoints.tablet} {
    padding: 32px 64px;
  }

  @media ${theme.breakpoints.laptop} {
    padding: 64px 96px;
  }
`;
