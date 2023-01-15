import { request } from "@/utils/request";

export async function createComment(content: string, postId: string) {
  await request("/api/comments", {
    method: "POST",
    body: {
      data: {
        content,
        post: postId,
      },
    },
  });
}

export async function loadComments(postId: string) {
  if (!postId) return [];
  const response = await request(
    "/api/comments?populate=*&filters[post][id][$eq]=" + postId
  );

  return response.data.map((comment: any) => {
    const result = comment?.attributes;
    return {
      id: comment?.id,
      content: result?.content,
      pubDate: result?.publishedAt,
      user: {
        id: result?.user?.data?.id,
        ...result?.user?.data?.attributes,
      },
    };
  });
}
