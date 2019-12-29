<template>
  <div>
    <img :style="style" src="/cat.jpg" alt="Photo" @click="isSelected=!isSelected" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    //   select: { border: "solid black 3px", cursor: "pointer" },
    //   deselect: { cursor: "pointer" }
    };

  },
  computed: {
      style() {
          return this.isSelected ? {border: "solid black 3px", cursor: "pointer" } : { cursor: "pointer" }
      }
  }
};
</script>
