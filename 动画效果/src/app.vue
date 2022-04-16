<template>
<div>
    <test></test>
  <test3/>
</div>

</template>

<script>
import Test from './components/Test.vue';
import Test3 from './components/test3.vue';

export default {
  name:'app',
  components:{Test, Test3}
};
</script>

<style>

</style>
