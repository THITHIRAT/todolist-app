import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
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
  background-color: ${({ completed }) =>
    completed ? theme.colors.selectBackground : theme.colors.white};
`;

export const CheckIcon = styled.svg`
  color: ${theme.colors.white};
`;

export const Text = styled.p<{ completed: boolean }>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ completed }) =>
    completed ? theme.colors.mediumGrey : theme.colors.darkGrey};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  margin: 0;
`;

export const ActionWrapper = styled.div`
  position: relative;
`;

export const ActionButton = styled.div`
  position: relative;
  flex: none;
  width: 28px;
  height: auto;
  color: ${theme.colors.mediumGrey};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ActionButtonList = styled.div`
  width: 98px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 18px 22px;
  margin: 5px 0px 0px 0px;
  list-style-type: none;
  z-index: 40;
`;

export const ActionText = styled.span<{ color?: string }>`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  color: ${({ color }) => color || theme.colors.darkGrey};
`;
