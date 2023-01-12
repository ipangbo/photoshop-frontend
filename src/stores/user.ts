import { ref } from "vue";
import { defineStore } from "pinia";
import { getUser, login, register } from "@/apis/auth";

export const useUserStore = defineStore("user", () => {
  const user = ref(getUser());

  const registerUser = async ({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) => {
    user.value = await register(email, username, password); // register函数包含存储localStorage
  };

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    user.value = await login(email, password);
  };

  return { user, registerUser, loginUser };
});
