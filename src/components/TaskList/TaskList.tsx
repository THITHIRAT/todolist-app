import {
  ActionButton,
  Checkbox,
  CheckboxWrapper,
  Text,
  Wrapper,
} from "./TaskList.style";

const TaskList = () => {
  return (
    <Wrapper>
      <CheckboxWrapper>
        <Checkbox />
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
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
    </Wrapper>
  );
};

export default TaskList;
