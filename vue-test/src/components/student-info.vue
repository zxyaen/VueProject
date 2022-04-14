<template>
  <div class="box2">
    <h1>{{ mes }}</h1>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age  }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
// import { mixin } from "../mixin";
// import  from ''
export default {
  data() {
    return {
      mes: "hhh",
      // name:'zs',
      // age:12,
      // address:'as'
    };
  },
  props: ["name", "age", "address"],

  // props:{
  //   name:String,
  //   age:Number,
  //   address:String
  // }

  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //     default: "zs",
  //   },
  // },
  // mixins: [mixin],
}
</script>

<style>
.box2 {
  background-color: rebeccapurple;
}
</style>
