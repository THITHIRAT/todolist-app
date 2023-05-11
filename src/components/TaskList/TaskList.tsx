import { ITodosResponse } from "../../interfaces";
import {
  ActionButton,
  CheckIcon,
  Checkbox,
  CheckboxWrapper,
  Text,
  TodoListWrapper,
  Wrapper,
} from "./TaskList.style";

interface ITaskList {
  todoList: ITodosResponse[] | undefined;
}

const TaskList = ({ todoList }: ITaskList) => {
  return (
    <Wrapper>
      {todoList?.map((todo) => (
        <TodoListWrapper key={todo.id + todo.title}>
          <CheckboxWrapper>
            <Checkbox completed={todo.completed}>
              <CheckIcon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </CheckIcon>
            </Checkbox>
            <Text completed={todo.completed}>{todo.title}</Text>
          </CheckboxWrapper>
          <ActionButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </ActionButton>
        </TodoListWrapper>
      ))}
    </Wrapper>
  );
};

export default TaskList;
