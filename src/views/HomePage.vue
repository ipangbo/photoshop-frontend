<template>
  <div>
    <!--    <PostDetails></PostDetails>-->
<!--    <PostUpload></PostUpload>-->
    <PostList>
      <PostItem v-for="n in 12" :key="n"></PostItem>
    </PostList>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
import PostUpload from "@/components/PostUpload.vue";
</script>

<style scoped></style>
