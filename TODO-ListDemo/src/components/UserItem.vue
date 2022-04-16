<template>
  <div>
    <transition appear>
     <li>
      <label>
        <input
          type="checkbox"
          :checked="todoObj.done"
          @click="todoDone(todoObj.id)"
        />
        <span v-show="!todoObj.isEditor">{{ todoObj.title }}</span>
        <input
          type="text"
          v-show="todoObj.isEditor"
          :value="todoObj.title"
          @blur="blur(todoObj, $event)"
          ref="titleFocus"
        />
      </label>

      <button class="btn btn-danger" @click="deleteDone(todoObj.id)">
        删除
      </button>
      <button class="btn btn-editor" @click="handelEditor(todoObj)">
        编辑
      </button>
    </li>
    </transition>
   
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["todoObj"],
  //   使用props接收list传来的值，注意要使用数组形式，且每一项都要用引号包裹
  methods: {
    // 勾选or取消
    todoDone(id) {
      this.$bus.$emit("changeDone", id);
    },
    // 删除
    deleteDone(id) {
      this.$bus.$emit("handelDelete", id);
    },
    // 编辑
    handelEditor(todoObj) {
      // 让isEditor只设定一次
      if (todoObj.hasOwnProperty("isEditor")) {
        todoObj.isEditor = true;
      } else {
        // 这里不能是todoObj.$set 因为todoObj是所点到的列表项的对象，身上没有$set属性
        this.$set(todoObj, "isEditor", true);
        // console.log(this);
        // console.log(todoObj);

      }
      setInterval(()=>{
                  // 自动获取焦点
        this.$refs.titleFocus.focus();
      },200)


      // todoObj.title=
    },
    // 失去焦点隐藏
    blur(todoObj, e) {
      // 校验输入不能为空
      if (!e.target.value.trim()) {
        alert("输入不能为空");
      } else {
        // 设置isEditor为false使其隐藏
        this.todoObj.isEditor = false;

        // 不能在点击编辑的时候返回，应该在失去焦点时候返回值给app
        this.$bus.$emit("Editor", todoObj.id, e.target.value);
        // console.log(todoObj.id,e.target.value);
      }
    },
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

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
.v-enter-active{
    animation: donghua 1s;
}
.v-leave-active{
    animation: donghua 1s reverse;
}

@keyframes donghua{
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>
