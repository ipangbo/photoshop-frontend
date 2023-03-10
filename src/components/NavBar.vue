<template>
  <nav class="navbar">
    <router-link to="/" class="logo-link">
      <img src="../assets/logo.svg" alt="logo" class="logo-image" />
    </router-link>
    <div class="search-input">
      <input type="text" @change="searchPosts" />
      <TheIcon icon="search"></TheIcon>
    </div>
    <div class="nav-items">
      <router-link to="/">
        <TheIcon icon="home"></TheIcon>
      </router-link>
      <button @click="publishPost">
        <TheIcon icon="publish"></TheIcon>
      </button>
      <!-- dropdown -->
      <div class="profile-dropdown">
        <TheAvatar
          :src="userStore.user.avatar"
          :width="42"
          :height="42"
          style="cursor: pointer"
          @click="showDropdown = !showDropdown"
        ></TheAvatar>
        <div class="dropdown-menu" v-show="showDropdown">
          <ul class="profile-menu">
            <li>
              <router-link to="/profile">个人主页</router-link>
            </li>
            <li @click="handleUserLogout">退出登录</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
import TheAvatar from "@/components/TheAvatar.vue";
import { usePostStore } from "@/stores/post";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const postStore = usePostStore();
const userStore = useUserStore();
const router = useRouter();

const showDropdown = ref(false);
const publishPost = () => {
  postStore.showPostUpload = true;
};

const searchPosts = async (e: any) => {
  postStore.searchTerm = e.target.value;
  await postStore.searchPosts();
};

const handleUserLogout = () => {
  userStore.logoutUser();
  router.push("/login");
};
</script>

<style scoped>
.navbar {
  width: 80vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.navbar .logo-link {
  display: block;
  height: 80px;
  padding: 5px;
}
.navbar .logo-image {
  height: 100%;
}
.navbar svg {
  width: 38px;
  height: 38px;
}

.search-input {
  position: relative;
}

.search-input input {
  width: 100%;
  padding: 12px 12px 12px 36px;

  background: #f1f1f1;
  border-radius: 14px;
  border: none;
}

.search-input > svg {
  position: absolute;
  top: 11px;
  left: 12px;
}

.nav-items {
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-items > button {
  border: none;
  background: none;
}

.profile-dropdown {
  position: relative;
}

.profile-menu {
  position: absolute;
  width: max-content;
  padding: 24px 26px;
  list-style: none;
  background: white;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  right: 0;
  display: grid;
  row-gap: 18px;
  transform: translateY(18px);
}

.profile-menu::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: -12px;
  right: 10px;
  border-bottom: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.profile-menu a,
.profile-menu li {
  text-decoration: none;
  cursor: pointer;
}

.profile-menu a:visited {
  color: initial;
}
</style>
