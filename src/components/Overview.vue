<script setup>
import { onMounted } from "vue";
import useFetch from "../composable/useFetch";

const { data, fetchData } = useFetch("https://api.github.com/users/ebokes");

onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <ul
    class="list-none flex flex-wrap flex-row justify-between sm:justify-around gap-y-6 py-4 bg-light-1 dark:bg-dark-c1-1 dark:text-light-2 rounded-lg w-full shadow-lg"
  >
    <a href="https://github.com/ebokes?tab=repositories" target="_blank">
      <li class="overview-container">
        <span class="overview-icon">
          <font-awesome-icon
            icon="fa-solid fa-folder-blank"
            class="text-blue-1 dark:text-blue-c1-1 text-md z-[5]"
          />
        </span>
        <div class="flex flex-col">
          <p class="text-light-4 text-sm w-20">Repositories</p>
          <p>{{ data.public_repos }}</p>
        </div>
      </li>
    </a>
    <li class="overview-container">
      <span class="overview-icon">
        <font-awesome-icon
          icon="fa-solid fa-code-branch"
          class="text-blue-1 dark:text-blue-c1-1 text-md z-[5]"
        />
      </span>
      <div class="flex flex-col">
        <p class="text-light-4 text-sm w-20">Commits</p>
        <p>340</p>
      </div>
    </li>
    <li class="overview-container">
      <span class="overview-icon">
        <font-awesome-icon
          icon="fa-solid fa-users"
          class="text-blue-1 dark:text-blue-c1-1 text-md"
        />
      </span>
      <div class="flex flex-col">
        <p class="text-light-4 text-sm w-20">Followers</p>
        <p>{{ data.followers }}</p>
      </div>
    </li>
    <li class="overview-container">
      <span class="overview-icon">
        <font-awesome-icon
          icon="fa-solid fa-user-friends"
          class="text-blue-1 dark:text-blue-c1-1 text-md"
        />
      </span>
      <div class="flex flex-col">
        <p class="text-light-4 text-sm w-20">Following</p>
        <p>{{ data.following }}</p>
      </div>
    </li>
  </ul>
</template>
