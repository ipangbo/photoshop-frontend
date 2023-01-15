<template>
  <div class="post-actions">
    <TheIcon
      icon="like"
      @click="$emit('likeClick')"
      :fill="likedByMe ? '#FF3C3C' : 'none'"
      :stroke="likedByMe ? '#FF3C3C' : '#000000'"
    /><span>{{ likes || "" }}</span>
    <TheIcon
      icon="comment"
      @click="$emit('commentsClick')"
      fill="none"
      stroke="#000000"
    /><span>{{ comments || "" }}</span>
    <TheIcon
      icon="favorite"
      @click="$emit('favorClick')"
      :fill="favoredByMe ? '#FFD12E' : 'none'"
      :stroke="favoredByMe ? '#FFD12E' : '#000000'"
    /><span>{{ favors || "" }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  likes: number;
  comments: number;
  favors: number;
  likedByMe: boolean;
  favoredByMe: boolean;
}

defineProps<Props>();
defineEmits(["likeClick", "commentsClick", "favorClick"]);
import TheIcon from "@/components/TheIcon.vue";
</script>

<style scoped>
.post-actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.post-actions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.post-actions > span {
  font-size: 14px;
}
</style>
