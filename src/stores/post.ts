import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("post", () => {
  const showPostUpload = ref(false);

  return { showPostUpload };
});
