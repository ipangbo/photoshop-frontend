import { request } from "@/utils/request";

export function getJwtToken() {
  return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt: string) {
  localStorage.setItem("jwtToken", jwt);
}

export function getUser(): any {
  return JSON.parse(localStorage.getItem("user") || "{}");
}

export function saveUser(user: object) {
  localStorage.setItem("user", JSON.stringify(user));
}

export async function register(
  email: string,
  username: string,
  password: string
) {
  const result = await request("/api/auth/local/register", {
    method: "POST",
    auth: false,
    body: {
      email,
      username,
      password,
      name: username,
    },
  });
  setJwtToken(result.jwt);
  saveUser(result.user);
  return result.user;
}

export async function login(email: string, password: string) {
  const result = await request("/api/auth/local", {
    method: "POST",
    auth: false,
    body: {
      identifier: email,
      password,
    },
  });
  setJwtToken(result.jwt);
  saveUser(result.user);
  return result.user;
}
