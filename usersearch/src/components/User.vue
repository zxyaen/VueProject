<template>
  <div class="row">
    <!-- 用户列表 -->
    <div
      class="card"
      v-for="user in info.userList"
      :key="user.id"
      v-show="info.userList.length"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}x</p>
    </div>
    <!-- 欢迎界面 -->
    <h2 v-show="info.isFirst">欢迎使用</h2>
    <!-- 加载界面 -->
    <h2 v-show="info.isLoading">加载中......</h2>
    <!-- 错误页 -->
    <h2 v-show="info.errorMes">出错啦:{{info.errorMes}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      info: {
        userList: [],
        isFirst: true,
        isLoading: false,
        errorMes: "",
      },
    };
  },
  methods: {
    updateUsers(userObj) {
      //   console.log(data);
      //   this.userList = data;
      //   this.isFirst = false;
      this.info = {...this.info,...userObj};
    },
  },

  mounted() {
    this.$bus.$on("updateUsers", this.updateUsers);
  },
  beforeDestroy() {
    this.$bus.$off("updateUsers");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
