import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { createPost } from "@/apis/post";

export const usePostStore = defineStore("post", () => {
  const showPostUpload = ref(false);

  const uploadPost = async ({
    image,
    description,
  }: {
    image: File;
    description: string;
  }) => {
    await createPost(image, description);
    showPostUpload.value = false;
  };

  return { showPostUpload, uploadPost };
});
