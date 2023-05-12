import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { ITodo } from "../../interfaces";
import {
  ActionButton,
  ActionButtonList,
  ActionText,
  ActionWrapper,
  CheckIcon,
  Checkbox,
  CheckboxWrapper,
  Text,
  TodoListWrapper,
  Wrapper,
} from "./TaskList.style";
import { theme } from "../../styles";
import { UseMutateFunction } from "react-query";
import TaskForm from "../TaskForm/TaskForm";

interface ITaskList {
  todoList: ITodo[] | undefined;
  onCreate: UseMutateFunction<ITodo, unknown, string, unknown>;
  onUpdate: UseMutateFunction<ITodo, unknown, ITodo, unknown>;
  onDelete: UseMutateFunction<any, unknown, string, unknown>;
}

const TaskList = ({ todoList, onCreate, onUpdate, onDelete }: ITaskList) => {
  const [isSelectOpen, setIsSelectOpen] = useState<ITodo | undefined>(
    undefined
  );

  const ref = useDetectClickOutside({
    onTriggered: () => setIsSelectOpen(undefined),
  });

  return (
    <Wrapper ref={ref}>
      {todoList?.map((todo) => (
        <TodoListWrapper key={todo.id + todo.title}>
          <CheckboxWrapper>
            <Checkbox
              completed={todo.completed}
              onClick={() => onUpdate({ ...todo, completed: !todo.completed })}
            >
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
          <ActionWrapper>
            <ActionButton onClick={() => setIsSelectOpen(todo)}>
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
            {isSelectOpen?.id === todo.id &&
            isSelectOpen.title === todo.title ? (
              <ActionButtonList>
                <ActionText
                    onClick={() => {}}
                  >
                    Edit
                  </ActionText>
                  <ActionText
                    color={theme.colors.progressBackground}
                    onClick={() => onDelete(todo.id)}
                  >
                    Delete
                  </ActionText>
              </ActionButtonList>
            ) : null}
          </ActionWrapper>
        </TodoListWrapper>
      ))}
      <TaskForm onCreate={onCreate} />
    </Wrapper>
  );
};

export default TaskList;
