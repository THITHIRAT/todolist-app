import { ChangeEvent, useState } from "react";
import { Input, SaveButton, Wrapper } from "./TaskForm.style";
import { UseMutateFunction } from "react-query";
import { ITodo } from "../../interfaces";

interface ITaskForm {
  onCreate: UseMutateFunction<ITodo, unknown, string, unknown>;
}

const TaskForm = ({ onCreate }: ITaskForm) => {
  const [title, setTitle] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleSave = () => {
    onCreate(title);
  }

  return (  
    <Wrapper>
      <Input
        value={title}
        onChange={onInputChange}
        placeholder="Add your todo..."
      />
      {title ? <SaveButton onClick={handleSave}>Save</SaveButton> : null}
    </Wrapper>
  );
};

export default TaskForm;
