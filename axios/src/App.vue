<template>
  <div id="app">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/info/students").then(
        (res) => {
          console.log("请求成功", res.data);
        },
        (err) => {
          console.log(err.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (res) => {
          console.log("请求成功", res.data);
        },
        (err) => {
          console.log(err.message);
        }
      );
    },
  },
};
</script>

<style></style>
