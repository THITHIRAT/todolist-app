import {
  CompletedBar,
  HeaderText,
  ProgressBar,
  TitleText,
  Wrapper,
} from "./Progress.style";

interface IProgress {
  isLoading: boolean
  completeTask: number;
  allTask: number;
}

const Progress = ({ isLoading, completeTask, allTask }: IProgress) => {
  return (
    <Wrapper>
      <HeaderText>Progress</HeaderText>
      <ProgressBar>
        <CompletedBar percentage={completeTask / (allTask || 1) * 100} />
      </ProgressBar> 
      {isLoading ? (
        <TitleText>Loading...</TitleText>
      ) : (
        <TitleText>{completeTask} completed</TitleText>
      )}
    </Wrapper>
  );
};

export default Progress;
