<template>
  <div>
    <p>上方组件求和为：{{ sum }}</p>
    <input type="text" placeholder="请输入姓名" v-model="personName" />
    <button @click="add">点击添加</button>
    <ul>
      <!-- 功能模块中state传来的是一个数组 -->
      <!-- 此处personList是一个数组，p是遍历到的数组中的一个个对象 -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapState } from "vuex";
export default {
  name: "person",
  data() {
    return {
      personName: "",
    };
  },
  computed: {
    ...mapState("ppp", ["personList"]),
    ...mapState("ccc", ["sum"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.personName };
      //   console.log(personObj);
      this.$store.dispatch("ppp/add_person", personObj);
      this.personName = "";
    },
  },
};
</script>

<style></style>
