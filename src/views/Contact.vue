<template>
  <div>
    <h1>Contact</h1>
    <div class="list is-hoverable">
        <a v-for="each in languages" :key="each.text" href="#" class="list-item">{{each.text}}</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      languages: [
        { text: "Javascript" },
        { text: "Swift" },
        { text: "React" },
        { text: "Flutter" },
        { text: "GO" }
      ]
    };
  }
};
</script>

<style>
</style>
