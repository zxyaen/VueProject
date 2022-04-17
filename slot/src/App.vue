<template>
  <div>
    <sum />
    <hr />
    <person />
  </div>
</template>

<script>
import sum from "./components/sum.vue";
import person from "./components/person.vue";
export default {
  components: { sum, person },
  name: "App",
};
</script>

<style scoped></style>
