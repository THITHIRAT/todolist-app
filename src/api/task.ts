import { ITodosResponse } from "../interfaces";
import axiosInstance from "./axiosInstance";

export const getTask = async () => {
  const response = await axiosInstance.get<ITodosResponse[]>('/todos');
  return response.data;
};

