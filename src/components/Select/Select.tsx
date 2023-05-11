import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import {
  Icon,
  SelectButton,
  SelectOption,
  SelectOptionList,
  SelectText,
  Wrapper,
} from "./Select.style";
import { TASK_STATUS } from "../../constants";

interface ISelect {
  taskStatusOptions: TASK_STATUS[];
  taskStatus: TASK_STATUS;
  setTaskStatus: (taskStatus: TASK_STATUS) => void;
}

const Select = ({ taskStatusOptions, taskStatus, setTaskStatus }: ISelect) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsSelectOpen((prevValue) => !prevValue)
  };

  const ref = useDetectClickOutside({
    onTriggered: () => handleSelectOpen,
  });

  const handleSelectOptionClick = (option: TASK_STATUS) => {
    setTaskStatus(option);
    handleSelectOpen();
  }

  return (
    <Wrapper ref={ref}>
      <SelectButton onClick={handleSelectOpen}>
        {taskStatus}
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </Icon>
      </SelectButton>
      {isSelectOpen ? (
        <SelectOptionList>
          {taskStatusOptions?.map((option) => (
            <SelectOption key={option} active={option === taskStatus} onClick={() => handleSelectOptionClick(option)}>
              <SelectText>{option}</SelectText>
            </SelectOption>
          ))}
        </SelectOptionList>
      ) : null}
    </Wrapper>
  );
};

export default Select;
