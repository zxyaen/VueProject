<template>
  <div class="container">
    <search/>
    <user/>
  </div>
</template>

<script>
import  './assets/css/bootstrap.css'
import Search from './components/Search.vue'
import User from './components/User.vue'


export default {
  name: 'App',
  components: {
    Search,
    User

  },
  
}
</script>

<style>


</style>
