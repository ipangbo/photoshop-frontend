import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/search-result",
      name: "searchResult",
      component: () => import("@/views/SearchPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfilePage.vue"),
    },
    {
      path: "/profile/edit",
      name: "profileEdit",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/HomePage.vue"),
    },
  ],
});

export default router;
