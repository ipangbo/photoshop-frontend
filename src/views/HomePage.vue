<template>
  <div class="content">
    <div class="post-list">
      <div class="post-item" v-for="n in 10" :key="n">
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
            <div class="post-actions">
              <TheIcon icon="like" fill="none" stroke="#000000"></TheIcon>
              <span>1.5w</span>
              <TheIcon icon="comment" fill="none" stroke="#000000"></TheIcon>
              <span>1w</span>
              <TheIcon icon="favorite" fill="none" stroke="#000000"></TheIcon>
              <span>99w</span>
            </div>
          </div>
          <div class="post-desc">
            <p>
              别把结果拖延到明天 Maybe we just slow down. Anyone but you's so
              wrong 当音乐再次奏响 连呼吸都在碰撞 把心放你手掌 沦陷在你目光
              享受着步调摇晃 舞会开场 左手保护你的腰 不会碰到你的背
              右手托住你的心跳 不论向前或后退 如果你很信任我 手抬高原地转个圈
              烦恼都丢掉像幻灯片 当我们站在舞台的正中间 如果我们的热情依然在增加
              自然跳起象征着爱情的伦巴 一起跳到下一个晚宴 到星星布满天
              把飞逝的时间给扔下 已然忘记美好的今天要拍照片
              不知不觉就已送你到楼下 目前这些美好的幻想还没套现
              希望你的回答可以让我留下
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
import TheAvatar from "@/components/TheAvatar.vue";
</script>

<style scoped>
.content {
  width: 80vw;
  max-width: 1124px;
  margin: 88px auto 0;
}
/*PostList*/
.post-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

/*PostItem*/
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

.post-actions {
  grid-area: actions;
  justify-self: end;
}

.post-desc {
  margin-top: 28px;
  white-space: pre-line;
}

/*PostDetails*/
.postDetails {
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
  padding: 36px 24px 24px;
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
.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.commentContent {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0 -24px;
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
.commentInput {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}
.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}
.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}

/*Post Actions*/
.post-actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.post-actions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.post-actions > span {
  font-size: 14px;
}
</style>
