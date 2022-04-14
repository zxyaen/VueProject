<template>
  <div class="box1">
      <h2 @click="showName">学校名称：{{name  | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
      <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>
// import {mixin} from '../mixin'
export default {
    data(){
        return{
            name:'CDUT123',
            address:'二仙桥'
        }
    },
    // mixins:[mixin]
}
</script>

<style>
.box1{
    background-color: pink;
}
</style>