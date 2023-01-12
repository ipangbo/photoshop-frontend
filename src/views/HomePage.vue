<template>
  <div>
    <!--    <PostDetails></PostDetails>-->
    <PostUpload
      v-if="postStore.showPostUpload"
      @close="closePostUpload"
    ></PostUpload>
    <PostList>
      <PostItem v-for="n in 12" :key="n"></PostItem>
    </PostList>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
import PostUpload from "@/components/PostUpload.vue";
import { usePostStore } from "@/stores/post";

const postStore = usePostStore();

const closePostUpload = () => {
  postStore.showPostUpload = false;
};
</script>

<style scoped></style>
