<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

const error = ref(null);
const loading = ref(false);
loading.value = true;

const repo = ref({});
const route = useRoute();
console.log(route);

const fetchData = async () => {
  try {
    const { repoId } = route.params;
    const res = await fetch(`https://api.github.com/repositories/${repoId}`);
    console.log(res);
    if (!res.ok) {
      error.value = "could not fetch data";
    }
    repo.value = await res.json();
  } catch (err) {
    error.value = err.message;
  }
  loading.value = false;
};

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <div class="mx-auto w-full md:w-[750px]">
    <div class="mx-2 sm:mx-5 max-w-[750px] mt-[15%]">
      <div v-if="error">
        Sorry, I cannot fetch this repository at the moment. Please try again
      </div>
      <div v-else-if="loading" class="w-full h-full">
        <img src="../assets/loading.svg" class="mx-auto" alt="loading" />
      </div>
      <div v-else>
        <div class="bg-light-1 p-4 sm:p-8 text-xl shadow-lg rounded-lg">
          <div
            class="flex items-center justify-center py-4 text-light-1 mb-8 lin-grad"
          >
            <h2 class="text-3xl px-3">{{ repo.name }}</h2>
          </div>
          <div v-if="repo.id" class="flex flex-col gap-y-2">
            <p v-if="repo.description">
              Description:
              <span class="font-light">{{ repo.description }}</span>
            </p>
            <a v-if="repo.homepage" :href="repo.homepage" target="_blank"
              >Webpage: <span class="text-blue-1">{{ repo.name }}</span></a
            >
            <h4>
              Created:
              <span class="font-light">{{
                repo.created_at.substring(0, 10)
              }}</span>
            </h4>
            <p>
              Size: <span class="font-light">{{ repo.size }}KB</span>
            </p>
            <p>
              Branch: <span class="font-light">{{ repo.default_branch }}</span>
            </p>
            <span
              class="flex justify-center items-center flex-col sm:flex-row gap-3 mt-6"
            >
              <a
                v-if="repo.html_url"
                :href="repo.html_url"
                target="_blank"
                class="px-3 py-2 text-light-1 rounded-lg inline-block lin-grad text-center w-fit"
                >View Repo</a
              >
              <router-link
                v-if="repo.html_url"
                to="/dashboard"
                class="text-blue-1 px-3 py-2 border bg-light-1 rounded-lg inline-block text-center w-fit"
                >Back</router-link
              >
            </span>
          </div>
          <div v-else>
            <h2>Repo not found</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
