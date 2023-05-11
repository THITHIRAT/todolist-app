import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: ${theme.colors.black};
  margin: 0;
`;

