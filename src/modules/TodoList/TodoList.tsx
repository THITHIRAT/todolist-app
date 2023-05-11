import { useState } from "react";
import { Progress, Task } from "../../components";
import { TASK_STATUS } from "../../constants";
import { Box, Wrapper } from "./TodoList.style";

const taskStatusOptions = [
  TASK_STATUS.ALL,
  TASK_STATUS.DONE,
  TASK_STATUS.UNDONE,
];

const TodoList = () => {
  const [taskStatus, setTaskStatus] = useState(taskStatusOptions[0]);
  return (
    <Wrapper>
      <Box>
        <Progress />
        <Task
          taskStatusOptions={taskStatusOptions}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
        />
      </Box>
    </Wrapper>
  );
};

export default TodoList;
