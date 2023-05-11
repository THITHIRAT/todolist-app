import { useMemo, useState } from "react";
import { Progress, Task } from "../../components";
import { TASK_STATUS } from "../../constants";
import { Box, Wrapper } from "./TodoList.style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTask, getTask, updateTask } from "../../api/task";

const TaskStatusOptions = [
  TASK_STATUS.ALL,
  TASK_STATUS.DONE,
  TASK_STATUS.UNDONE,
];

const TodoList = () => {
  const queryClient = useQueryClient();
  const [taskStatus, setTaskStatus] = useState(TaskStatusOptions[0]);
  const { data: todoList } = useQuery("getTasks", () => getTask());
  const { mutate: updateList } = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTasks");
    },
  });
  const { mutate: deleteList } = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("getTasks");
    },
  });

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
          taskStatusOptions={TaskStatusOptions}
          taskStatus={taskStatus}
          setTaskStatus={setTaskStatus}
          onUpdate={updateList}
          onDelete={deleteList}
        />
      </Box>
    </Wrapper>
  );
};

export default TodoList;
