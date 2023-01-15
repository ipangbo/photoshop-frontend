import { defineStore } from "pinia";
import { createComment, loadComments } from "@/apis/comment";
import { usePostStore } from "@/stores/post";
import { ref } from "vue";

export const useCommentStore = defineStore("comment", () => {
  const list = ref<object[]>();
  const addComment = async (content: string, postId: string) => {
    await createComment(content, postId);
    loadAllComments(postId).then();
    const postStore = usePostStore();
    postStore.increaseCommentCount(postId);
  };
  const loadAllComments = async (postId: string) => {
    list.value = await loadComments(postId);
  };
  return { addComment, loadAllComments, list };
});
