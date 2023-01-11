<template>
  <template v-if="route.name !== 'login'"
    ><header class="header">
      <NavBar></NavBar>
    </header>
    <TheLayout> <RouterView></RouterView> </TheLayout
  ></template>
  <template v-else>
    <RouterView></RouterView>
  </template>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import NavBar from "@/components/NavBar.vue";
import TheLayout from "@/components/TheLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
