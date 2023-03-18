<template>
  <div>
    <div
      class="text-center mb-12 text-white px-8 py-10 sm:p-10 max-w-[800px] bg-light-1 dark:bg-dark-c1-1 border-x-8 border-blue-1 rounded-xl shadow-lg flex flex-col gap-y-6 mx-2 md:mx-5 min-[843px]:mx-auto"
    >
      <h1 class="text-3xl md:text-4xl font-bold text-blue-1 font-Mulish">
        PROFILE SEARCH
      </h1>
      <p class="text-lg dark:text-light-1">Search for a GitHub Profile</p>
      <form @submit.prevent="onSubmitHandler">
        <input
          v-model="input"
          type="search"
          placeholder="Search profile"
          class="px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:ring-1 focus:ring-indigo-500 w-full bg-light-3 dark:bg-dark-c1-3 dark:text-light-2 text-xl"
        />
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-blue-1 rounded-lg hover:bg-indigo-500 mt-5 border hover:bg-gradient-to-tr from-blue-1 to-blue-4 hover:text-light-1"
        >
          Search
        </button>
      </form>
    </div>
  </div>
  <div class="flex flex-wrap justify-center mx-2 md:mx-5 mt-3 mb-10">
    <div v-if="loading" class="text-center">
      <img class="center" src="../assets/loading.svg" alt="loading" />.
    </div>
    <div v-else>
      <div
        class="flex justify-center max-w-[1200px] flex-wrap gap-8 items-center"
      >
        <div
          v-for="user in userSearch"
          :key="user.id"
          class="card bg-white shadow-lg rounded-lg overflow-hidden max-w-[350px] bg-light-1 dark:bg-dark-c1-1 flex flex-col gap-y-3 items-center p-4 text-center"
          :class="{
            'min-[580px]:w-[45%] md:w-[30%]': userSearch.length >= 3,
          }"
        >
          <img alt="avatar" :src="user.avatar_url" class="w-[50%]" />
          <div class="text px-6 py-4">
            <h1 class="dark:text-light-1 font-bold text-xl mb-6">
              {{ user.login }}
            </h1>
            <a
              :href="user.html_url"
              target="_blank"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-blue-1 border hover:bg-blue-1 hover:text-light-1 hover:border-light-1 transition duration-150 ease-in"
              >View Profile</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  setup() {
    const input = ref("");
    const userSearch = ref([]);
    const loading = ref(false);

    const onSubmitHandler = async () => {
      try {
        loading.value = true;
        const response = await axios.get(
          `https://api.github.com/search/users?q=${input.value}`
        );
        userSearch.value = response.data.items;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    watch(input, (newValue, oldValue) => {
      if (newValue.length < oldValue.length) {
        userSearch.value = [];
      }
    });

    return {
      input,
      userSearch,
      loading,
      onSubmitHandler,
    };
  },
};
</script>
