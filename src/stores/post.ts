import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createPost, loadPosts } from "@/apis/post";

export const usePostStore = defineStore("post", () => {
  const showPostUpload = ref(false);
  const list = ref([]);

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

  return { showPostUpload, uploadPost, list, loadAllPosts };
});
