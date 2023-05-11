import axios, { AxiosInstance } from "axios";

interface CreateAxiosInstanceOptions {
  timeout: number;
};

export function createAxiosInstance({
  timeout,
}: CreateAxiosInstanceOptions): AxiosInstance {
  const instance = axios.create({
    timeout,
    baseURL: "http://localhost:3001",
  });
  instance.interceptors.request.use(async (config) => {
    config.baseURL = "http://localhost:3001";

    return config;
  });
  return instance;
}

const axiosInstance = createAxiosInstance({ timeout: 10000 });

export default axiosInstance;
