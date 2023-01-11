<template>
  <div class="post-item">
    <img
      src="https://tc1.ipangbo.cn/image/Cover/220522.png"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
      :data-n="n"
    />
    <div class="post-info">
      <div class="post-meta">
        <TheAvatar
          src="https://cravatar.cn/avatar/641dc07b0ec22b5dd4a5be73766c49be?s=256&d=mm&r=g"
        ></TheAvatar>
        <span>章鱼飞</span>
        <span class="post-pub-date">12小时之前发布</span>
        <PostActions></PostActions>
      </div>
      <div class="post-desc">
        <p>
          别把结果拖延到明天 Maybe we just slow down. Anyone but you's so wrong
          当音乐再次奏响 连呼吸都在碰撞 把心放你手掌 沦陷在你目光 享受着步调摇晃
          舞会开场 左手保护你的腰 不会碰到你的背 右手托住你的心跳 不论向前或后退
          如果你很信任我 手抬高原地转个圈 烦恼都丢掉像幻灯片
          当我们站在舞台的正中间 如果我们的热情依然在增加
          自然跳起象征着爱情的伦巴 一起跳到下一个晚宴 到星星布满天
          把飞逝的时间给扔下 已然忘记美好的今天要拍照片 不知不觉就已送你到楼下
          目前这些美好的幻想还没套现 希望你的回答可以让我留下
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheAvatar from "@/components/TheAvatar.vue";
import PostActions from "@/components/PostActions.vue";
</script>

<style scoped>
.post-item {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.post-info {
  padding: 24px;
}

.post-item > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.post-meta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.post-meta .avatar {
  grid-area: avatar;
}

.post-meta .post-pub-date {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.post-desc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
