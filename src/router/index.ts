import { createRouter, createWebHistory } from "vue-router";
import { getJwtToken } from "@/apis/auth";

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
      component: () => import("@/views/ProfileEditing.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
  ],
});

router.beforeEach((to) => {
  if (to.name !== "login" && !getJwtToken()) {
    return { name: "login" };
  }
  if (to.name === "login" && getJwtToken()) {
    return { name: "home" };
  }
});

export default router;
