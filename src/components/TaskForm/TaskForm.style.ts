import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  border-radius: 999px;
  padding: 12px 20px;
  margin-top: 16px;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;

export const SaveButton = styled.button`
  flex: none;
  width: 64px;
  height: 36px;
  border: none;
  border-radius: 999px;
  background-color: ${theme.colors.selectBackground};
  color: ${theme.colors.white};
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;
