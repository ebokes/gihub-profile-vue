<script setup>
import { onMounted } from "vue";
import useFetch from "../composable/useFetch";

const { data, error, loading, fetchData } = useFetch(
  "https://api.github.com/users/ebokes"
);

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div
    class="bg-light-1 w-full md:w-[363px] rounded-lg relative md:mr-5 mb-6 md:mb-0 pb-12"
  >
    <div class="bg-blue-1 w-full h-[100px] rounded-lg mb-[90px]"></div>
    <div v-if="error">
      Sorry, could not fetch Chibuokem's Profile at this moment
    </div>
    <div v-else-if="loading" class="w-full h-full">
      <img src="../assets/loading.svg" class="mx-auto" alt="loading" />
    </div>
    <div v-else class="flex flex-col">
      <img
        class="w-44 h-44 rounded-full mb-1 absolute right-1/2 translate-x-1/2 top-16"
        :src="data.avatar_url"
        alt=""
      />
      <div class="text-center mt-16">
        <h3 class="my-[5px] font-normal">{{ data.name }}</h3>
        <p class="text-light-4">@{{ data.login }}</p>
      </div>
      <div
        class="flex flex-col items-start justify-center gap-4 px-5 mt-10 mb-2 mx-auto md:w-[363px]"
      >
        <a
          class="px-3 py-3 w-[206px] sm:w-[60%] md:w-[300px] rounded-[5px] text-center my-[10px] text-light-1 no-underline block bg-gradient-to-tr from-blue-2 to-blue-3 mx-auto"
          href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Febokes"
          >Follow</a
        >
        <span class="flex mt-3 gap-x-2">
          <img
            class="w-[20px]"
            src="../assets/portfolio-svgrepo-com.svg"
            alt="bio"
          />
          <p class="font-light">{{ data.bio }}</p>
        </span>
        <span class="flex gap-x-2">
          <img
            class="w-[20px]"
            src="../assets/location-svgrepo-com.svg"
            alt="location"
          />
          <p class="font-light">Edo, Nigeria</p>
        </span>
        <span class="flex gap-x-2">
          <img
            class="w-[20px]"
            src="../assets/mail-svgrepo-com.svg"
            alt="mail"
          />
          <a class="text-blue-1 font-light" href="mailto:talk2chibu@gmail.com"
            >talk2chibu@gmail.com</a
          >
        </span>
        <span class="flex gap-x-2">
          <img
            class="w-[20px]"
            src="../assets/twitter-svgrepo-com.svg"
            alt="twitter"
          />
          <a
            class="text-blue-1 font-light"
            href="https://twitter.com/Chibu_91"
            target="_blank"
            >@{{ data.twitter_username }}</a
          >
        </span>
      </div>
    </div>
  </div>
</template>
