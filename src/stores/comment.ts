import { defineStore } from "pinia";
import { createComment } from "@/apis/comment";
import { usePostStore } from "@/stores/post";

const postStore = usePostStore();
export const useCommentStore = defineStore("comment", () => {
  const addComment = async (content: string, postId: string) => {
    await createComment(content, postId);
    postStore.increaseCommentCount(postId);
  };
  return { addComment };
});
