<template>
  <TheModal @close="postStore.showPostDetail = false">
    <div class="post-details">
      <img class="post-image" :src="post.image" alt="" />
      <div class="post-meta">
        <div class="author">
          <TheAvatar :src="post.user?.avatar" />
          <span>{{ post.user?.name }}</span>
        </div>
        <pre class="post-desc"
          >{{ post.description }}
        </pre>
        <div class="comments">
          <div class="comment" v-for="n in 2" :key="n">
            <TheAvatar />
            <span class="user">{{ n }}</span>
            <span class="comment-date"> 13小时前 </span>
            <p class="comment-content"></p>
          </div>
        </div>
        <div class="actions">
          <PostActions
            :likes="post.liked_bies"
            :comments="post.comments"
            :favors="post.favored_bies"
            :likedByMe="post.likedByMe"
            :favoredByMe="post.favoredByMe"
            @likeClick="postStore.toggleLike(post.id)"
            @favorClick="postStore.toggleFavor(post.id)"
          />
          <span class="post-pub-date">{{
            dateToRelative(post.publishedAt)
          }}</span>
          <input
            type="text"
            name="comment"
            id=""
            class="comment-input"
            placeholder="写一条评论吧！"
            v-model="content"
          />
          <button
            class="comment-pub-button"
            @click="
              commentStore.addComment(content, post.id);
              content = '';
            "
          >
            发布
          </button>
        </div>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import PostActions from "@/components/PostActions.vue";
import TheAvatar from "@/components/TheAvatar.vue";
import TheModal from "@/components/TheModal.vue";
import { usePostStore } from "@/stores/post";
import { computed, ref } from "vue";
import { dateToRelative } from "@/utils/date";
import { useCommentStore } from "@/stores/comment";

const postStore = usePostStore();
const commentStore = useCommentStore();

const post = computed(() => postStore.currentPostDetail);
const content = ref("");
</script>

<style scoped>
.post-details {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 80vw;
  height: 80vh;
}
.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-meta {
  padding: 36px 24px 24px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.post-desc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.comment-date {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.comment-content {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0 -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.post-actions > :deep(svg) {
  transform: scale(0.8125);
}
.post-pub-date {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.comment-input {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}
.comment-input::placeholder {
  color: #b9b9b9;
  border: none;
}
.comment-pub-button {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}
</style>
