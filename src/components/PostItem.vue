<template>
  <div class="post-item">
    <img
      :src="post.image"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
    />
    <div class="post-info">
      <div class="post-meta">
        <TheAvatar :src="post?.user?.avatar" />
        <span>{{ post?.user?.name }}</span>
        <span class="post-pub-date">{{
          dateToRelative(post.publishedAt)
        }}</span>
        <PostActions
          :likes="post.liked_bies"
          :comments="post.comments"
          :favors="post.favored_bies"
          :likedByMe="post.likedByMe"
          :favoredByMe="post.favoredByMe"
        />
      </div>
      <div class="post-desc">
        <p>
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheAvatar from "@/components/TheAvatar.vue";
import PostActions from "@/components/PostActions.vue";
import { dateToRelative } from "@/utils/date";

interface Props {
  post: object;
}
defineProps<Props>();
</script>

<style scoped>
.post-item {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.post-info {
  padding: 24px;
}

.post-item > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.post-meta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.post-meta .avatar {
  grid-area: avatar;
}

.post-meta .post-pub-date {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.post-desc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
