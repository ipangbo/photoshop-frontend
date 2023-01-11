<template>
  <button
    class="pub-button button"
    :class="{ primary: color === 'primary', reverse }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: "primary" | null;
  reverse?: boolean;
}

withDefaults(defineProps<Props>(), {
  color: "primary",
  reverse: false,
});
</script>

<style scoped>
.button {
  border-radius: 8px;
  padding: 10px 32px;
  border: none;
  color: white;
  font-size: 16px;
}

.button.primary {
  background: #1da0ff;
}

.button.reverse {
  background: none;
  border: 1px solid #e8e8e8;
  color: initial;
}
</style>
