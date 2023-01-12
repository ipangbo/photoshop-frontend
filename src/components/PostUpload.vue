<template>
  <TheModal>
    <div class="post-upload">
      <label class="upload">
        <img
          :src="imageObjUrl"
          alt="image preview"
          v-if="imageObjUrl"
          class="preview"
        />
        <TheIcon v-else icon="upload-image" />
        <input
          type="file"
          accept="image/*"
          class="file-chooser"
          @change="handleImageUpload"
        />
      </label>
      <div class="post-content">
        <textarea
          placeholder="写下你的想法..."
          class="post-content-input"
        ></textarea>
      </div>
      <TheButton class="pub-button">发布</TheButton>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import TheModal from "@/components/TheModal.vue";
import TheIcon from "@/components/TheIcon.vue";
import TheButton from "@/components/TheButton.vue";
import { ref } from "vue";

const imageObjUrl = ref("");
const handleImageUpload = async (e: any) => {
  if (e.target.files[0]) {
    const imageFile = e.target.files[0];
    if (imageFile) {
      imageObjUrl.value = URL.createObjectURL(imageFile);
    }
  }
};
</script>

<style scoped>
.post-upload {
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}

.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}

.file-chooser {
  opacity: 0;
  position: absolute;
}

.post-content {
  display: grid;
}
.post-content-input {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.post-content-input::placeholder {
  color: #757575;
}

.pub-button {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 34px;
  bottom: 28px;
}
</style>
