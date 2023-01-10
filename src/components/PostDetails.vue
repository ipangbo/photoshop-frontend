<template>
  <TheModal>
    <div class="post-details">
      <img
        class="post-image"
        src="https://tc1.ipangbo.cn/image/Cover/220522.png"
        alt=""
      />
      <div class="post-meta">
        <div class="author">
          <TheAvatar />
          <span>章鱼飞</span>
        </div>
        <pre class="post-desc">
          别把结果拖延到明天 Maybe we just slow down. Anyone but you's so
          wrong 当音乐再次奏响 连呼吸都在碰撞 把心放你手掌 沦陷在你目光
          享受着步调摇晃 舞会开场 左手保护你的腰 不会碰到你的背
          右手托住你的心跳 不论向前或后退 如果你很信任我 手抬高原地转个圈
          烦恼都丢掉像幻灯片 当我们站在舞台的正中间 如果我们的热情依然在增加
          自然跳起象征着爱情的伦巴 一起跳到下一个晚宴 到星星布满天
          把飞逝的时间给扔下 已然忘记美好的今天要拍照片
          不知不觉就已送你到楼下 目前这些美好的幻想还没套现
          希望你的回答可以让我留下
        </pre>
        <div class="comments">
          <div class="comment" v-for="n in 2" :key="n">
            <TheAvatar />
            <span class="user">{{ n }}</span>
            <span class="comment-date"> 13小时前 </span>
            <p class="comment-content"></p>
          </div>
        </div>
        <div class="actions">
          <PostActions />
          <span class="post-pub-date">12小时前</span>
          <input
            type="text"
            name="comment"
            id=""
            class="comment-input"
            placeholder="写一条评论吧！"
          />
          <button class="comment-pub-button">发布</button>
        </div>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import PostActions from "@/components/PostActions.vue";
import TheAvatar from "@/components/TheAvatar.vue";
import TheModal from "@/components/TheModal.vue";
</script>

<style scoped>
.post-details {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 80vw;
  height: 80vh;
}
.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-meta {
  padding: 24px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.post-desc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.comment-date {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.comment-content {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.post-actions > :deep(svg) {
  transform: scale(0.8125);
}
.post-pub-date {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.comment-input {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}
.comment-input::placeholder {
  color: #b9b9b9;
  border: none;
}
.comment-pub-button {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}
</style>
