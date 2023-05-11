import { useMemo, useState } from "react";
import { Progress, Task } from "../../components";
import { TASK_STATUS } from "../../constants";
import { Box, Wrapper } from "./TodoList.style";
import { useQuery } from "react-query";
import { getTask } from "../../api/task";

const taskStatusOptions = [
  TASK_STATUS.ALL,
  TASK_STATUS.DONE,
  TASK_STATUS.UNDONE,
];

const TodoList = () => {
  const [taskStatus, setTaskStatus] = useState(taskStatusOptions[0]);
  const { data: todoList } = useQuery("getTasks", () => getTask());

  const displayList = useMemo(() => {
    const list = todoList || [];
    return {
      [TASK_STATUS.ALL]: list,
      [TASK_STATUS.DONE]: list.filter((task) => task.completed),
      [TASK_STATUS.UNDONE]: list.filter((task) => !task.completed),
    };
  }, [todoList]);

  return (
    <Wrapper>
      <Box>
        <Progress
          completeTask={displayList[TASK_STATUS.DONE].length}
          allTask={displayList[TASK_STATUS.ALL].length}
        />
        <Task
          todoList={displayList[taskStatus]}
          taskStatusOptions={taskStatusOptions}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
        />
      </Box>
    </Wrapper>
  );
};

export default TodoList;
