<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition appear>
    <h2 v-show="!isShow" class="show" >你好啊！</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() { 
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.show {
  background-color: aquamarine;
    text-align: center;
  line-height: 50px;
}
.v-enter-active{
    animation: donghua 1s;
}
.v-leave-active{
    animation: donghua 1s reverse;
}

@keyframes donghua{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>
