<template>
  <div>
    <h2 class="title">搜索结果：章鱼飞</h2>
    <PostList>
      <PostItem v-for="n in 12" :key="n"></PostItem>
    </PostList>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
