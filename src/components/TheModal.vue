<template>
  <Teleport to="body">
    <div class="modal">
      <div class="backdrop"></div>
      <div class="modal-content">
        <button class="close-button">
          <TheIcon icon="close"></TheIcon>
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
}
.backdrop {
  background: rgba(0, 0, 0, 0.56);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.modal-content {
  position: relative;
  background: white;
  border-radius: 52px;
  overflow: hidden;
}
.close-button {
  position: absolute;
  background: none;
  border: none;
  right: 14px;
  top: 10px;
}
.close-button svg {
  width: 54px;
  height: 54px;
}
</style>
