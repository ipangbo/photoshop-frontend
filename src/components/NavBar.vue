<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="../assets/logo.svg" alt="logo" />
    </router-link>
    <div class="search-input">
      <input type="text" />
      <TheIcon icon="search"></TheIcon>
    </div>
    <div class="nav-items">
      <router-link to="/">
        <TheIcon icon="home"></TheIcon>
      </router-link>
      <button>
        <TheIcon icon="publish"></TheIcon>
      </button>
      <!-- dropdown -->
      <div class="profile-dropdown">
        <TheAvatar
          src="https://cravatar.cn/avatar/641dc07b0ec22b5dd4a5be73766c49be?s=256&d=mm&r=g"
          :width="42"
          :height="42"
          style="cursor: pointer"
        ></TheAvatar>
        <!--        <div class="dropdown-menu">-->
        <!--          <ul class="profile-menu">-->
        <!--            <li>-->
        <!--              <router-link to="/profile">个人主页</router-link>-->
        <!--            </li>-->
        <!--            <li>退出登录</li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
import TheAvatar from "@/components/TheAvatar.vue";
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
.navbar svg,
.navbar img {
  width: 38px;
  height: 38px;
}

.search-input {
  position: relative;
}

.search-input input {
  width: 100%;
  padding: 12px;
  padding-left: 36px;

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
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
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
