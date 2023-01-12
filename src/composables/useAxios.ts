import axios, { AxiosHeaders } from "axios";
import { getJwtToken } from "@/apis/auth";

function useAxios(auth: boolean = true) {
  const instance = axios.create({
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    if (auth) {
      config.headers = { ...config.headers } as AxiosHeaders;
      config.headers.set({
        Authorization: `Bearer ${getJwtToken()}`,
      });
    }
    return config;
  });
}

export default useAxios;
