<template>
  <div>
    <h2>当前数值为{{sum}}</h2>
 
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数时+</button>
    <button @click="incrementWait(n)">等一下再加</button>
    <p>{{bigSum}}</p>
    <p>下方组件总人数是：{{personList.length}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: "sum",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //借用mapMutations生成对应方法，方法中会调用commit去联系mutations
    ...mapMutations('ccc',{increment:'Increment',decrement:'Decrement'}),
    ...mapActions('ccc',{incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
  },
  computed:{
    //结构赋值到计算属性（对象写法）
    // ...mapState({na:'name',ages:'age',subject:'sub',all:'sum'})
    //数组写法
    ...mapState('ccc',['name','age','sub','sum']),
    ...mapState('ppp',['personList']),

    // mapGetters 同理
    ...mapGetters('ccc',{bigSum:'getSum'}),

    // personList(){
    //   return this.$store.ppp.state.personList
    // },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>
