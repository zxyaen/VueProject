<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title"  @keyup.enter='addTodo' />
    </div>
  </div>
</template>

<script>

// 导入随机生成id包nano
import {nanoid} from 'nanoid'
export default {
  name: "UserHeader",
  data(){
    return {
      title:''
    }
  },
  methods:{
    addTodo(){
      if(!this.title.trim()) return alert('输入不能为空')
      // nanoid包下的nanoid方法用于随机获取一个id
      const item={id:nanoid(),title:this.title,done:false}
      // 将添加的todo对象传给app组件中的todos
      // this.addTodoList(item)
      this.$emit('addTodoList',item)
      this.title=''
    }
  },
  // props:['addTodoList']
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
