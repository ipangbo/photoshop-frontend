<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>

</style>
