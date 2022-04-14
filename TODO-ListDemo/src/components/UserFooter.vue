<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <input type="checkbox" :cbhecked="isAll" @click="checkAll" />
      </label>
      <span>
        <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
      </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "UserFooter",
  props: ["todos","checkedAll","clearTodo"],
  computed: {
    doneTotal() {
      // todo是一个todos遍历到的对象
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    total() {
      return this.todos.length;
    },
    isAll() {
      if (this.doneTotal === this.total && this.total > 0) return true
    },
  },
  methods:{
    checkAll(e){
      // console.log(e.target.checked);
      const done= e.target.checked
      this.checkedAll(done)
    },
    clearAll(){
      this.clearTodo()
    }
  }
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
