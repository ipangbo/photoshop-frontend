import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createPost, favorPost, likePost, loadPosts } from "@/apis/post";

export const usePostStore = defineStore("post", () => {
  const showPostUpload = ref(false);
  const showPostDetail = ref(false);
  const currentPostDetail = ref<object>();
  const list = ref<any[]>([]);

  const uploadPost = async ({
    image,
    description,
  }: {
    image: File;
    description: string;
  }) => {
    await createPost(image, description);
    loadAllPosts().then();
    showPostUpload.value = false;
  };

  const loadAllPosts = async () => {
    list.value = await loadPosts();
  };

  const toggleLike = async (id: string) => {
    const isLike = await likePost(id);
    const post = list.value.find((post) => post.id === id);
    if (isLike) {
      post.liked_bies = (post.liked_bies || 0) + 1;
    } else {
      post.liked_bies--;
    }
    post.likedByMe = isLike;
  };

  const toggleFavor = async (id: string) => {
    const isFavor = await favorPost(id);
    const post = list.value.find((post) => post.id === id);
    if (isFavor) {
      post.favored_bies = (post.favored_bies || 0) + 1;
    } else {
      post.favored_bies--;
    }
    post.favoredByMe = isFavor;
  };

  const loadPostDetailById = (id: string) => {
    currentPostDetail.value = list.value.find((post) => post.id === id);
    showPostDetail.value = true;
  };

  const increaseCommentCount = (id: string) => {
    const post = list.value.find((post) => post.id === id);
    post.comments++;
  };

  return {
    showPostUpload,
    uploadPost,
    list,
    loadAllPosts,
    toggleLike,
    toggleFavor,
    loadPostDetailById,
    showPostDetail,
    currentPostDetail,
    increaseCommentCount,
  };
});
