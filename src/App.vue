<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <TheLayout>
    <RouterView></RouterView>
  </TheLayout>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import NavBar from "@/components/NavBar.vue";
import TheLayout from "@/components/TheLayout.vue";
</script>

<style scoped></style>
