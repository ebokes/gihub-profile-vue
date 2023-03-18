<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="flex flex-col max-w-[1200px] gap-y-12">
      <Navbar />
      <router-view />
    </div>
    <Footer />
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
