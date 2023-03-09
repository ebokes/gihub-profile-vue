<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import "./assets/main.css";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped></style>
