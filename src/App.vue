<template>
  <div class="bg-light-back dark:bg-dark-back">
    <div
      class="flex flex-col justify-between min-h-screen gap-y-12 max-w-[1200px] mx-auto"
    >
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import "./assets/main.css";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar, Footer },
};
</script>
