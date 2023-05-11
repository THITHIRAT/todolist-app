import {
  CompletedBar,
  HeaderText,
  ProgressBar,
  TitleText,
  Wrapper,
} from "./Progress.style";

interface IProgress {
  completeTask: number;
  allTask: number;
}

const Progress = ({ completeTask, allTask }: IProgress) => {
  return (
    <Wrapper>
      <HeaderText>Progress</HeaderText>
      <ProgressBar>
        <CompletedBar percentage={completeTask / (allTask || 1) * 100} />
      </ProgressBar>
      <TitleText>{completeTask} completed</TitleText>
    </Wrapper>
  );
};

export default Progress;
