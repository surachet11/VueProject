<template>
  <div>
    <h1 class="title">Search</h1>
    <hr />
    <input @keyup="getUser()" v-model="search" type="text" class="input" />

    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";


const url = "https://jsonplaceholder.typicode.com/users?q=";

export default {
  created() {
      this.getUser = _.debounce(this.getUser,1000)
  },

  methods: {
    async getUser() {
      const res = await axios.get(url + this.search);
      this.user = res.data;
    }
  },

  data() {
    return {
      user: [],
      search: ""
    };
  }
};
</script>
