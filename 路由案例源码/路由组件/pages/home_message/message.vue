<template>
  <div>
    <h2 :style="{ opacity }">你好</h2>
    <ul>
      <li v-for="n in mesList" :key="n.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${n.id}/${n.title}`">{{n.title}}</router-link>&nbsp;&nbsp;</li> -->

        <!-- to的对象写法 -->
        <router-link
          :to="{
            name: 'name',
            query: {
              id: n.id,
              title: n.title,
            },
          }"
        >
          {{ n.title }} </router-link
        >&nbsp;&nbsp;
        <input type="text" />
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      opacity: 1,
      mesList: [
        { id: "001", title: "消息1", href: "#" },
        { id: "002", title: "消息2", href: "#" },
        { id: "003", title: "消息4", href: "#" },
      ],
    };
  },
  methods: {
    showInfoPush(n) {
      this.$router.push({
        name: "name",
        query: {
          id: n.id,
          title: n.title,
        },
      });
    },
    showReplace(n) {
      this.$router.replace({
        name: "name",

        query: {
          id: n.id,
          title: n.title,
        },
      });
    },
  },
  //  mounted() {
  //     const timer = setInterval(() => {
  //       this.opacity -= 0.01;
  //       if (this.opacity <= 0) {
  //         this.opacity = 1;
  //       }
  //     },16)
  //   },
  //   beforeDestroy() {
  //     clearInterval(this.timer);
  //   },
  activated() {
    const timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
      console.log('ss');
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer)
  },
};
</script>

<style></style>
