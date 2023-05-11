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

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Checkbox = styled.div`
  flex: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${theme.colors.selectBackground};
  border-radius: 6px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.darkGrey};
`;

export const ActionButton = styled.div`
  flex: none;
  width: 28px;
  height: auto;
  color: ${theme.colors.mediumGrey};
  display: flex;
  align-items: center;
  cursor: pointer;
`
