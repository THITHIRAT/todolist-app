import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  overflow-y: auto;
  margin-top: 16px;
`;

export const TodoListWrapper = styled.div`
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

export const Checkbox = styled.div<{ completed: boolean }>`
  flex: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${theme.colors.selectBackground};
  border-radius: 6px;
  background-color: ${({ completed }) => completed ? theme.colors.selectBackground : theme.colors.white};
`;

export const CheckIcon = styled.svg`
  color: ${theme.colors.white};
`

export const Text = styled.p<{ completed: boolean }>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ completed }) => completed ? theme.colors.mediumGrey : theme.colors.darkGrey};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
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
