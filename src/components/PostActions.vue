<template>
  <div class="post-actions">
    <TheIcon icon="like" fill="none" stroke="#000000"></TheIcon>
    <span>1.5w</span>
    <TheIcon icon="comment" fill="none" stroke="#000000"></TheIcon>
    <span>1w</span>
    <TheIcon icon="favorite" fill="none" stroke="#000000"></TheIcon>
    <span>99w</span>
  </div>
</template>

<script setup lang="ts">
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
