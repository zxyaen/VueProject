<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWords"
        />
        &nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      keyWords: "",
    };
  },

  methods: {
    getUsers() {
      // 初始设置info
      this.$bus.$emit("updateUsers", {
        userList: [],
        isFirst: false,
        isLoading: true,
        errorMes: "",
      });
      axios.get("https://api.github.com/search/users?q=" + this.keyWords).then(
        (response) => {
          // console.log(response.data.items);
          this.$bus.$emit("updateUsers", {
            userList: response.data.items,
            isLoading:false
          });
        },
        (err) => {
        //   console.log(err.message);
          this.$bus.$emit("updateUsers", {
            userList: [],
            isLoading:false,
            errorMes:err.message ,
          });
        }
      );
    },
  },
};
</script>

<style></style>
