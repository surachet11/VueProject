<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";

export default {
  components: {
    navbar: Navbar
  },

  head: {
    title: {
      inner: "หน้าแรก"
    },
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Kanit&display=swap",
        rel: "stylesheet"
      }
    ]
  }
};
</script>

<style>
body {
  font-family: "kanit";
}
</style>
