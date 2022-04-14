<template>
  <div id="app">
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <UserHeader :addTodoList="addTodoList" />
          <UserList
            :todolist="todos"
            :changeDone="changeDone"
            :handelDelete="handelDelete"
          />
          <UserFooter
            :todos="todos"
            :checkedAll="checkedAll"
            :clearTodo="clearTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "./components/UserHeader";
import UserList from "./components/UserList";
import UserFooter from "./components/UserFooter";

export default {
  name: "App",
  components: {
    UserHeader,
    UserList,
    UserFooter,
  },
  data() {
    return {
      todos: [
        {
          id: "001", //id使用字符串，js中数字是有尽头的，常用哈希值s
          title: "吃饭",
          done: true, //记录是否做了,注意，这里传入的不应是字符串，传布尔值
        },
        { id: "002", title: "睡觉", done: false },
        { id: "003", title: "打豆豆", done: false },
      ],
    };
  },
  methods: {
    // 向列表添加事项
    addTodoList(value) {
      this.todos.unshift(value);
      console.log(value);
    },
    // 改变选择框布尔值
    changeDone(id) {
      this.todos.forEach((todo) => {
        // console.log(id);
        // console.log(todo.id);
        if (todo.id == id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除列表中事项
    handelDelete(id) {
      if (confirm("确定删除吗？")) {
        {
          // 使用过滤器，过滤掉todos.id==id的对象
          this.todos = this.todos.filter((todo) => todo.id !== id);
          //filter会遍历todos里的每一项todo
          // 由于filter过滤后返回的是一个新数组，不改变原数据，所以要令原数组等于新返回数组
          //返回条件--不相等返回过滤到的对象，相等则丢弃
        }
      }
    },
    // 选中所有事件
    checkedAll(done) {
      // e.target.checked;
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //  清除所有已完成
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done; //done值为假的留下
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
