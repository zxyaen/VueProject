<template>
  <div>
    <ul>
      <li v-for="n in mesList" :key="n.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${n.id}/${n.title}`">{{n.title}}</router-link>&nbsp;&nbsp;</li> -->

        <!-- to的对象写法 -->
        <router-link
          :to="{
          name:'name',   
          query:{  
            id:n.id,
            title:n.title
          }
        }"
        >
          {{ n.title }} </router-link
        >&nbsp;&nbsp;
        <button @click="showInfoPush(n)">push跳转</button>
        <button @click="showReplace(n)">replace跳转</button>
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
      mesList: [
        { id: "001", title: "消息1", href: "#" },
        { id: "002", title: "消息2", href: "#" },
        { id: "003", title: "消息4", href: "#" },
      ],
    };
  },
  methods:{
    showInfoPush(n){
      this.$router.push({
          name:'name',   
          query:{  
            id:n.id,
            title:n.title
          }
      })
    },
    showReplace(n){
            this.$router.replace({
          name:'name',   
          query:{  
            id:n.id,
            title:n.title
          }
      })
    }
  }
};
</script>

<style></style>
