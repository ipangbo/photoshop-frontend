<template>
  <div>
    <h2 class="title">编辑个人资料</h2>
    <div class="change-avatar">
      <TheAvatar :width="48" :height="48"></TheAvatar>
      <TheButton id="change-avatar-button">修改头像</TheButton>
      <input type="file" class="input-file" />
    </div>
    <form class="profile-form">
      <label for="username">用户名: </label>
      <input type="text" id="username" />
      <label for="name">昵称: </label>
      <input type="text" id="name" />
      <label for="intro">简介: </label>
      <textarea rows="12" id="intro" />
      <label for="mobile-phone">手机号: </label>
      <input type="text" id="mobile-phone" />
      <label>性别: </label>
      <div class="gender-radios">
        <label><input type="radio" id="M" name="gender" value="M" />男</label>
        &nbsp;&nbsp;
        <label> <input type="radio" id="F" name="gender" value="F" />女 </label>
      </div>
      <label for="website">网站</label>
      <input type="text" id="website" />
      <div class="actions">
        <TheButton type="reset" reverse>取消</TheButton>
        <TheButton type="submit">确认</TheButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import TheAvatar from "@/components/TheAvatar.vue";
import TheButton from "@/components/TheButton.vue";
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
