import { getJwtToken } from "@/apis/auth";

export async function request(
  url: string,
  {
    method = "GET",
    body = null,
    headers = null,
    auth = true,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: any;
    auth?: boolean;
  }
) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(auth && { Authorization: `Bearer ${getJwtToken()}` }),
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  return await res.json();
}
