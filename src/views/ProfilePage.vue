<template>
  <div>
    <div class="profile-container">
      <TheAvatar :width="186" :height="186" :src="user.avatar" />
      <div class="profile">
        <p class="name">
          <span>{{ user.name }}</span
          ><router-link to="/profile/edit">编辑个人资料</router-link>
        </p>
        <p class="handle">@{{ user.username }}</p>
        <div class="description">
          <pre>{{ user.intro }}</pre>
        </div>
        <p class="website">{{ user.website }}</p>
      </div>
    </div>
    <div class="tabs">
      <div
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === currentTab }"
        @click="currentTab = index"
      >
        <TheIcon :icon="tab.icon" />
        <p>{{ tab.label }}</p>
      </div>
    </div>
    <div class="tab-content">
      <p>{{ myPosts[currentTab].length }}篇帖子</p>
      <div class="posts">
        <img
          v-for="post in myPosts[currentTab]"
          :key="post.id"
          class="post-image"
          alt=""
          :src="post.image"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import { useUserStore } from "@/stores/user";
import { computed, reactive, ref, watch } from "vue";
import { loadPostsByMe, loadPostsLikedOrFavoredByMe } from "@/apis/post";

const userStore = useUserStore();

const user = computed(() => userStore.user);

const tabs = ref([
  {
    label: "我的",
    icon: "posts",
  },
  {
    label: "赞过",
    icon: "like",
  },
  {
    label: "收藏",
    icon: "favorite",
  },
]);

const currentTab = ref(0);

const myPosts = reactive({
  0: [],
  1: [],
  2: [],
});

watch(
  currentTab,
  async () => {
    switch (currentTab.value) {
      case 0:
        if (myPosts[0].length === 0) {
          myPosts[0] = await loadPostsByMe();
        }
        break;
      case 1:
        if (myPosts[1].length === 0) {
          myPosts[1] = await loadPostsLikedOrFavoredByMe();
        }
        break;
      case 2:
        if (myPosts[2].length === 0) {
          myPosts[2] = await loadPostsLikedOrFavoredByMe("favors");
        }
        break;
      default:
        return;
    }
  },
  { immediate: true }
);
</script>
<style scoped>
.profile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vw;
}

.avatar {
  justify-self: end;
}

.profile .name {
  display: flex;
  align-items: center;
}

.profile .name > span {
  font-size: 26px;
}
.profile .name > a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}
.profile .handle {
  margin-top: 4px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  margin-bottom: 22px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 88px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 20px;
}

.tab {
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
}
.tab > svg {
  width: 32px;
  height: 32px;
  stroke: #8a9194;
  fill: #8a9194;
}

.tab.active {
  background: #f6f9fb;
  border-radius: 18px;
}

.tab.active > svg {
  stroke: #1787d9;
  fill: #1787d9;
}
.tab.active > p {
  color: #1787d9;
}

.tab-content > p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.post-image {
  width: 100%;
  height: 321px;
  background: #eee;
  object-fit: cover;
}
</style>
