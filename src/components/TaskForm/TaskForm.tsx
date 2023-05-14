import { ChangeEvent, useState } from "react";
import { Input, SaveButton, Wrapper } from "./TaskForm.style";
import { UseMutateFunction } from "react-query";
import { ITodo } from "../../interfaces";

interface ITaskForm {
  task?: ITodo | undefined;
  setEditTaskId?: React.Dispatch<React.SetStateAction<string>>
  onCreate?: UseMutateFunction<ITodo, unknown, string, unknown>;
  onUpdate?: UseMutateFunction<ITodo, unknown, ITodo, unknown>;
}

const TaskForm = ({ task, setEditTaskId, onCreate, onUpdate }: ITaskForm) => {
  const [title, setTitle] = useState(task?.title || "");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleSave = () => {
    if (task) {
      onUpdate && onUpdate({ ...task, title });
      setEditTaskId && setEditTaskId("");
    } else {
      onCreate && onCreate(title);
    }
    setTitle("");
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
