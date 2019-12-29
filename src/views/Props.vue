<template>
  <div class="box">
    <h1 class="title">Props</h1>
    <p>Counter:{{ counter }}</p>
    <button @click="counter += 1" :class="button">Update</button>
    <hr />

    <p> <button @click= "$store.commit('updateNumber')" class="button">Update</button></p>
    <level1 :counter="counter"/>
  </div>
</template>

<script>
import Level1 from "../components/Level1";

export default {
  components: {
    level1: Level1
  },
  data() {
    return {
      counter: 1
    };
  }
};
</script>
