<template>
  <div class="login-page">
    <img src="../assets/phone.png" alt="background" class="phone-image" />
    <div class="login-form">
      <img src="../assets/logo.svg" alt="logo" />
      <form @submit.prevent>
        <input type="email" placeholder="邮箱" v-model="email" />
        <input
          type="text"
          placeholder="用户名"
          v-if="!isLogin"
          v-model="username"
        />
        <input type="password" placeholder="密码" v-model="password" />
        <div class="agreement">
          <label v-if="!isLogin">
            <input type="checkbox" v-model="agreementChecked" />
            勾选表示同意隐私协议和使用规范
          </label>
        </div>
        <button
          type="submit"
          class="login-button"
          @click="isLogin ? login() : register()"
        >
          {{ isLogin ? "登录" : "注册" }}
        </button>
        <p class="info" @click="isLogin = !isLogin">
          {{ isLogin ? "还没有账号? 点击注册" : "已有账号, 点击登录" }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const isLogin = ref(true);
const email = ref("");
const username = ref("");
const password = ref("");
const agreementChecked = ref(false);

const register = async () => {
  if (!agreementChecked.value) {
    alert("请先同意");
    return;
  }
  await userStore.registerUser({
    email: email.value,
    username: username.value,
    password: password.value,
  });
  await router.replace("/");
};

const login = async () => {
  await userStore.loginUser({ email: email.value, password: password.value });
  await router.replace("/");
};
</script>

<style scoped>
.login-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #f8f9fb;
  padding: 0 10vw;
}

.phone-image {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.login-form {
  justify-self: start;
  box-shadow: 0 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 74px 60px;
  display: grid;
  place-items: center;
  row-gap: 52px;
  width: 380px;
}

.login-form > img {
  height: 150px;
}

.login-form > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}

input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
}

input::placeholder {
  color: #9e9e9e;
}

.login-button {
  background: linear-gradient(89.93deg, #00c2ff 0.06%, #0047ff 105.68%);
  padding: 12px 0;
  color: white;
  border: none;
}

.info {
  color: #1da0ff;
  text-align: center;
  cursor: pointer;
}

.agreement {
  color: #a1a1a1;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
