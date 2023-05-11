import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  postion: relative;
`;

export const SelectButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  border-radius: 10px;
  padding: 8px 10px;
  border: none;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;
  color: ${theme.colors.black};
`;

export const SelectOptionList = styled.ul`
  width: 98px;
  position: absolute;
  background: ${theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 6px;
  margin: 5px 0px 0px 0px;
  list-style-type: none;
`;

export const SelectOption = styled.li<{ active: boolean }>`
  position: relative;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ active }) =>
    active ? theme.colors.white : theme.colors.darkGrey};
  background: ${({ active }) =>
    active ? theme.colors.selectBackground : theme.colors.white};

  &:hover {
    color: ${({ active }) =>
      active ? theme.colors.white : theme.colors.darkGrey};
    background: ${({ active }) =>
      active ? theme.colors.selectBackground : theme.colors.boxBackground};
  }
`;

export const SelectText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
