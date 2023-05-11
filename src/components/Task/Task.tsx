import { TASK_STATUS } from "../../constants";
import { ITodosResponse } from "../../interfaces";
import Select from "../Select/Select";
import { TaskList } from "../TaskList";
import { Header, HeaderText, Wrapper } from "./Task.style";

interface ITask {
  todoList: ITodosResponse[] | undefined;
  taskStatusOptions: TASK_STATUS[];
  taskStatus: TASK_STATUS;
  setTaskStatus: (taskStatus: TASK_STATUS) => void;
}

const Task = ({ todoList, taskStatusOptions, taskStatus, setTaskStatus }: ITask) => {
  return (
    <Wrapper>
      <Header>
        <HeaderText>Tasks</HeaderText>
        <Select
          taskStatusOptions={taskStatusOptions}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
        />
      </Header>
      <TaskList todoList={todoList} />
    </Wrapper>
  );
};

export default Task;
