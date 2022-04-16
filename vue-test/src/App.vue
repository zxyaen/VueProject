<template>
  <div class="box">
    <h1>{{ mes }}</h1>
    <school></school>
    <student />
  </div>
</template>

<script>
import student from "./components/student-info.vue";
import school from "./components/school-info.vue";
export default{
  name:'App',
  data(){
    return{
      mes:'欢迎'
    }
  },
  methods:{

  },
  components:{
    student,
    school
  },

}
</script>
<style>
.box {
  overflow: hidden;
  background-color: rgb(208, 57, 57);
}
</style>
