<template>
  <div>
    <h1 ref="txt">{{ msg }}</h1>
    <button @click="showDOM" ref="btn">点击获取上方DOM元素</button>
    <school ref="sch"></school>
    <student></student>
    <student name='xixi' :age='13' address='wl'/>
    <student />
  </div>
</template>

<script>
import student from "./components/student-info.vue";
import school from "./components/school-info.vue";
export default {
  name: "app",
  components: {
    school,
    student,
  },
  data() {
    return {
      msg: "你好",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs);
    },
  },
};
</script>
