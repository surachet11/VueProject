<template>
  <div class="box">
    <h1 class="title">Level1</h1>
    <p>Counter(props):{{ counter }}</p>
    <level2 :counter="counter" />
  </div>
</template>

<script>
import Level2 from "./Level2";

export default {
  props: ["counter"],
  components: {
    level2: Level2
  }
};
</script>
