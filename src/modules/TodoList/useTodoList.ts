import { useMutation, useQuery, useQueryClient } from "react-query";
import { createTask, deleteTask, getTask, updateTask } from "../../api/task";
import { useEffect, useState } from "react";

const useTodoList = () => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { data: todoList, isLoading: getTodoLoading } = useQuery(
    "getTasks",
    () => getTask()
  );
  const { mutate: createTodo, isLoading: createTodoLoading } = useMutation(
    createTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTasks");
      },
    }
  );
  const { mutate: updateTodo, isLoading: updateTodoLoading } = useMutation(
    updateTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTasks");
      },
    }
  );
  const { mutate: deleteTodo, isLoading: deleteTodoLoading } = useMutation(
    deleteTask,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTasks");
      },
    }
  );

  useEffect(() => {
    setIsLoading(
      getTodoLoading ||
        createTodoLoading ||
        updateTodoLoading ||
        deleteTodoLoading
    );
  }, [getTodoLoading, createTodoLoading, updateTodoLoading, deleteTodoLoading]);

  return {
    isLoading,
    todoList,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoList;
