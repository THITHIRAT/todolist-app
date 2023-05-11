import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { IActionButtonList, ITodosResponse } from "../../interfaces";
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

interface ITaskList {
  todoList: ITodosResponse[] | undefined;
}

const TaskList = ({ todoList }: ITaskList) => {
  const [isSelectOpen, setIsSelectOpen] = useState<ITodosResponse | undefined>(
    undefined
  );

  const ref = useDetectClickOutside({
    onTriggered: () => setIsSelectOpen(undefined),
  });

  const ActionButtonOptionList: IActionButtonList[] = [
    { label: "Edit", onClick: () => console.log("edit") },
    {
      label: "Delete",
      textColor: theme.colors.progressBackground,
      onClick: () => console.log("delete"),
    },
  ];

  const handleActionButtonClick = (onClick: () => void) => {
    onClick();
    setIsSelectOpen(undefined);
  };

  return (
    <Wrapper ref={ref}>
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
                {ActionButtonOptionList?.map((option) => (
                  <ActionText
                    key={option.label}
                    color={option?.textColor}
                    onClick={() => handleActionButtonClick(option.onClick)}
                  >
                    {option.label}
                  </ActionText>
                ))}
              </ActionButtonList>
            ) : null}
          </ActionWrapper>
        </TodoListWrapper>
      ))}
    </Wrapper>
  );
};

export default TaskList;
