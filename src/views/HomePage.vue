<template>
  <div>
    <!--    <PostDetails></PostDetails>-->
    <PostUpload
      v-if="postStore.showPostUpload"
      @close="closePostUpload"
    ></PostUpload>
    <PostList>
      <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </PostList>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
import PostUpload from "@/components/PostUpload.vue";
import { usePostStore } from "@/stores/post";
import { onMounted, ref } from "vue";

const postStore = usePostStore();

const posts = ref([]);

const closePostUpload = () => {
  postStore.showPostUpload = false;
};

onMounted(() => {
  postStore.loadAllPosts().then(() => {
    posts.value = postStore.list;
  });
});
</script>

<style scoped></style>
