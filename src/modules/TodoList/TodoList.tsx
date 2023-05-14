import { useMemo, useState } from "react";
import { Progress, Task } from "../../components";
import { TASK_STATUS } from "../../constants";
import { Box, Wrapper } from "./TodoList.style";
import useTodoList from "./useTodoList";

const TaskStatusOptions = [
  TASK_STATUS.ALL,
  TASK_STATUS.DONE,
  TASK_STATUS.UNDONE,
];

const TodoList = () => {
  const [taskStatus, setTaskStatus] = useState(TaskStatusOptions[0]);
  const { isLoading, todoList, createTodo, updateTodo, deleteTodo } =
    useTodoList();

  const displayList = useMemo(() => {
    const list = todoList || [];
    return {
      [TASK_STATUS.ALL]: list,
      [TASK_STATUS.DONE]: list.filter((task) => task.completed),
      [TASK_STATUS.UNDONE]: list.filter((task) => !task.completed),
    };
  }, [todoList]);

  return (
    <div>
      <Wrapper>
        <Box>
          <Progress
            isLoading={isLoading}
            completeTask={displayList[TASK_STATUS.DONE].length}
            allTask={displayList[TASK_STATUS.ALL].length}
          />
          <Task
            todoList={displayList[taskStatus]}
            taskStatusOptions={TaskStatusOptions}
            taskStatus={taskStatus}
            setTaskStatus={setTaskStatus}
            onCreate={createTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        </Box>
      </Wrapper>
    </div>
  );
};

export default TodoList;
