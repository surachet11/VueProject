<template>
  <div class="box">
    <h1 class="title">Level2</h1>
    <p>Counter(props):{{ counter }}</p>
    <p>Number:{{ number }}</p>
  </div>
</template>

<script>
export default {
  props: ["counter"],
  computed: {
      number(){
          return this.$store.state.number
      }
  }
};
</script>
