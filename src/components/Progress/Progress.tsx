import {
  CompletedBar,
  HeaderText,
  ProgressBar,
  TitleText,
  Wrapper,
} from "./Progress.style";

const percentage = 40;

const Progress = () => {
  return (
    <Wrapper>
      <HeaderText>Progress</HeaderText>
      <ProgressBar>
        <CompletedBar percentage={percentage} />
      </ProgressBar>
      <TitleText>{percentage} completed</TitleText>
    </Wrapper>
  );
};

export default Progress;
