import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: ${theme.colors.progressBackground};
  padding: 18px;
`;

export const HeaderText = styled.h1`
  font-weight: 500;
  font-size: 28px;
  color: ${theme.colors.white};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background-color: ${theme.colors.progressBarBackground};
`;

export const CompletedBar = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 8px;
  border-radius: 999px;
  background-color: ${theme.colors.white};
`;

export const TitleText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${theme.colors.progressTitle};
`;
