<template>
  <div>
       <ul class="todo-main">
            <UserItem 
              v-for="todo in todolist" 
              :key="todo.id" 
              :todoObj='todo' 
              :changeDone='changeDone' 
              :handelDelete='handelDelete'  
            />
            <!-- 通过for in遍历，动态的将待做事项todos渲染到列表中 -->
            <!-- ：key绑定id做唯一标识父符 -->
            <!-- 使用props传值，使用todoObj做名称，将每一个todo对象传给item -->
       </ul>
  </div>

</template>

<script>
import UserItem from './UserItem.vue'
export default {
    name:'UserList',
    components:{UserItem},
    props:['todolist','changeDone','handelDelete'],
}
</script>

<style scoped>
/*list*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>