import { ITodo } from "../interfaces";
import axiosInstance from "./axiosInstance";

export const getTask = async () => {
  const response = await axiosInstance.get<ITodo[]>('/todos');
  return response.data;
};

export const updateTask = async (task: ITodo) => {
  const response = await axiosInstance.put<ITodo>(`/todos/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
}