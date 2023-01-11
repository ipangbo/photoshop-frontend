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
  <footer class="footer" :class="{ inside: route.name === 'login' }">
    &copy;ipangbo. All Rights Reserved.
  </footer>
</template>

<script setup lang="ts">
import "@/assets/base.css";
import NavBar from "@/components/NavBar.vue";
import TheLayout from "@/components/TheLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.header {
  height: 80px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.footer {
  text-align: center;
  padding: 38px 0;
  color: #828282;
}
.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
