<template>
  <div>
    <h2 class="title">编辑个人资料</h2>
    <div class="change-avatar">
      <TheAvatar :width="48" :height="48" :src="profileData.avatar" />
      <TheButton>修改头像</TheButton>
      <input type="file" class="input-file" @change="uploadAvatar" />
    </div>
    <form class="profile-form" @submit.prevent="updateUser">
      <label for="username">用户名：</label>
      <input type="text" v-model="profileData.username" id="username" />
      <label for="name">昵称：</label>
      <input type="text" v-model="profileData.name" id="name" />
      <label for="intro">简介：</label>
      <textarea rows="12" v-model="profileData.intro" id="intro"></textarea>
      <label for="mobile-phone">手机号：</label>
      <input type="text" v-model="profileData.mobilePhone" id="mobile-phone" />
      <label>性别：</label>
      <div class="genderRadios">
        <label
          ><input
            type="radio"
            name="gender"
            id="M"
            value="M"
            v-model="profileData.gender"
          />
          男</label
        >
        <label
          ><input
            type="radio"
            name="gender"
            id="F"
            value="F"
            v-model="profileData.gender"
          />
          女</label
        >
      </div>
      <label for="website">网站：</label>
      <input type="text" v-model="profileData.website" id="website" />
      <div class="actions">
        <TheButton type="reset" reverse @click.prevent="router.push('/profile')"
          >取消</TheButton
        >
        <TheButton type="submit">确认</TheButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import TheAvatar from "@/components/TheAvatar.vue";
import TheButton from "@/components/TheButton.vue";
import { useUserStore } from "@/stores/user";
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { uploadFile } from "@/apis/file";

const userStore = useUserStore();
const router = useRouter();
const user = computed(() => userStore.user);

const profileData = reactive({
  avatar: user.value.avatar,
  username: user.value.username,
  name: user.value.name,
  intro: user.value.intro,
  mobilePhone: user.value.mobilePhone,
  gender: user.value.gender,
  website: user.value.website,
});

const uploadAvatar = async (e: any) => {
  const file = e.target.files[0];
  profileData.avatar = await uploadFile(file);
};

const updateUser = async () => {
  await userStore.updateUser(profileData);
  router.push("/profile").then();
};
</script>

<style scoped>
.title {
  margin-bottom: 42px;
  font-size: 24px;
  font-weight: 600;
}

.change-avatar {
  display: flex;
  align-items: center;
  position: relative;
}

.change-avatar #change-avatar-button {
  margin-left: 26px;
}

.input-file {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
}

.profile-form {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 32px;
  column-gap: 10px;
  margin-top: 38px;
}

.profile-form > label {
  grid-column: 1 / 2;
  justify-self: end;
  position: relative;
  top: 6px;
}

.profile-form .actions {
  grid-column: 1 / 3;
  justify-self: end;
  display: flex;
  gap: 16px;
}
</style>
