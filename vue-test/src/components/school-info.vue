<template>
  <div class="box1">
    <h1>你好：{{ studentName }}</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// import {mixin} from '../mixin'
export default {
  data() {
    return {
      name: "CDUT",
      address: "二仙桥",
      studentName: "",
    };
  },
  methods: {
    // // school想收到student的值，则在school身上绑定自定义事件，回调函数留在school
    // getName(vla) {
    //   this.studentName = vla;
    // },
  },
  mounted() {
      this.$bus.$on('getStudentName',(vla)=>{
          this.studentName=vla
      })
  },
  beforeDestroy(){
      this.$off('getStudentName')
  }
};
</script>

<style scoped>
.box1 {
  background-color: pink;
  padding: 5px;
  margin: 5px;
}
</style>
