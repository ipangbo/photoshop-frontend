<template>
  <div class="post-list">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.post-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
