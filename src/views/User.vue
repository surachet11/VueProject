<template>
  <div>
    <h1>User</h1>
    <br />
    <p>
      <button @click="getUser" class="button is-primary">Get User</button>
    </p>

    <hr />

    <p>
      <input v-model="query" type="text" max="10" class="input" />
    </p>

    <table class="table">
      <th>
        #
      </th>
      <th>
        ID
      </th>
      <th>
        Name
      </th>
      <th>
        Email
      </th>
      <th>
        Phone
      </th>
      <tr v-for="(each, idx) in filterUser" :key="each.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ each.id }}</td>
        <td>
          <router-link :to="`/users/${each.id}`">{{ each.name }}</router-link>
        </td>
        <td>{{ each.email }}</td>
        <td>{{ each.phone }}</td>
      </tr>
    </table>

    <!-- <figure v-for="(each) in users" :key="each.id" :src="each.url">
    <img :src="each.url"/>
  </figure>  -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async getUser() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.users = res.data;

      /* eslint-disable no-console */
      console.log("Test");
      /* eslint-enable no-console */
    }
  },
  computed: {
    filterUser() {
      const pattern = new RegExp(this.query, "i");
      return this.users.filter(each => {
        return pattern.test(each.name);
      });
    }
  },

  /* eslint-disable no-console */
  /* eslint-enable no-console */

  data() {
    return {
      users: [],
      query: ""
    };
  }
};
</script>
