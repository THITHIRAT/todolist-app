import { UseMutateFunction } from "react-query";
import { TASK_STATUS } from "../../constants";
import { ITodo } from "../../interfaces";
import Select from "../Select/Select";
import { TaskList } from "../TaskList";
import { Header, HeaderText, Wrapper } from "./Task.style";

interface ITask {
  todoList: ITodo[] | undefined;
  taskStatusOptions: TASK_STATUS[];
  taskStatus: TASK_STATUS;
  setTaskStatus: (taskStatus: TASK_STATUS) => void;
  onUpdate: UseMutateFunction<ITodo, unknown, ITodo, unknown>;
  onDelete: UseMutateFunction<any, unknown, string, unknown>
}

const Task = ({
  todoList,
  taskStatusOptions,
  taskStatus,
  setTaskStatus,
  onUpdate,
  onDelete,
}: ITask) => {
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
      <TaskList todoList={todoList} onUpdate={onUpdate} onDelete={onDelete} />
    </Wrapper>
  );
};

export default Task;
