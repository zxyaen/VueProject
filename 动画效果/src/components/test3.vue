<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInUp"
        leave-active-class="animate__backOutUp">
        <h2 v-show="!isShow" key="1" class="show">你好啊！</h2>
        <h2 v-show="isShow" key="2" class="show">嘻嘻嘻！</h2>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';

export default {
    name: "test3",
  data() { 
    return {
      isShow: true,
    };
  },
}
</script>

<style>
.show {
  background-color: aquamarine;
    text-align: center;
  line-height: 50px;
}
</style>