<template>
  <div>
    <mes-banner/>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" to="/home/news" active-class="active">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" to="/home/message" active-class="active" >Message</router-link>
      </li>
    </ul>
    <keep-alive include="message">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mesBanner from '../components/mesBanner.vue';
export default {
  components: { mesBanner },
  name: "home",
};
</script>

<style></style>
