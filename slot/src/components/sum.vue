<template>
  <div>
    <h2>当前数值为{{all}}</h2>
 
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数时+</button>
    <button @click="incrementWait">等一下再加</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "sum",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("Increment", this.n);
    },
    decrement() {
      this.$store.commit("Decrement", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
        this.$store.dispatch("incrementWait", this.n);
     
    },

  },
  computed:{

    //结构赋值到计算属性（对象写法）
    // ...mapState({na:'name',ages:'age',subject:'sub',all:'sum'})
    //数组写法
    ...mapState(['name','age','sub','sum'])

    // mapGetters 同理
  },
  mounted() {

  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
