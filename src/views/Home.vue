<template>
  <div>
    <h1 class="title">Home {{ counter }}</h1>
    <p>
      <button @click="counter += 1" :class="'button' + className">Update</button>
    </p>
    <br />
    <p style="margin-top:25px">
      <progress :class="'progress' + className" :value="counter" max="20">{{ counter }}%</progress>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  computed: {
    className() {
      return this.counter % 2 ? " is-primary" : " is-danger";
    }
  }
};
</script>
