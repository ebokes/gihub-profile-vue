<script>
import Profile from "../components/Profile.vue";
import Repositories from "../components/Repositories.vue";
import Overview from "../components/Overview.vue";

export default {
  components: { Profile, Repositories, Overview },
};
</script>
<template>
  <main
    class="flex justify-between flex-col md:flex-row mx-2 md:mx-5 items-start gap-3"
  >
    <Profile />
    <div class="flex flex-col">
      <Overview />
      <Repositories />
    </div>
  </main>
</template>
