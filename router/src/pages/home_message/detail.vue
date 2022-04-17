<template>
  <ul>
      <li>消息id:{{id}}</li>
      <li>消息内容{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'detail',
    // props:['id','title'],
    computed:{
        id(){
            return this.$route.query.id
        },
        title(){
            return this.$route.query.title
        }
    }
}
</script>

<style>

</style>