<template>
  <div class="box1">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="demo">
      年龄：<span>{{ age }}</span>
    </h2>
    <button @click="getName">传名字给school</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "zds",
      age: 12,
    };
  },
  methods: {
    getName() {
      this.$bus.$emit("getStudentName", this.name);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.box1 {
  background-color: rebeccapurple;
  padding: 5px;
  margin: 5px;
}
</style>
