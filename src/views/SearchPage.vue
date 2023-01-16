<template>
  <div>
    <h2 class="title">搜索结果：{{ postStore.searchTerm }}</h2>
    <PostList>
      <PostItem
        v-for="post in searchResult"
        :key="post.id"
        :post="post"
      ></PostItem>
    </PostList>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
import { usePostStore } from "@/stores/post";
import { computed } from "vue";

const postStore = usePostStore();
const searchResult = computed(() => postStore.searchResult);
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
