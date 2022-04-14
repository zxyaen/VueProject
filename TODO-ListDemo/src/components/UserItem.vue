<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todoObj.done"  @changett ch="todoDone"/>
        <span>{{todoObj.title}}</span>
      </label>
      <button class="btn btn-danger" @click="deleteDone" >删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["todoObj","changeDone",'handelDelete'],
  //   使用props接收list传来的值，注意要使用数组形式，且每一项都要用引号包裹
  methods: {
    todoDone(){
      this.changeDone(this.todoObj.id)
    },
    deleteDone(){
      this.handelDelete(this.todoObj.id)
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>
