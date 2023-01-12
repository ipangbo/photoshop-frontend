import { getJwtToken } from "@/apis/auth";

export async function createPost(image: File, description: string) {
  const formData = new FormData();
  formData.append("files.image", image);
  formData.append("data", JSON.stringify({ description }));

  await fetch("/api/posts", {
    method: "POST",
    body: formData,
    headers: { Authorization: `Bearer ${getJwtToken()}` },
  });
}
