<template>
  <nav
    class="container py-3 mx-auto flex justify-between items-start md:items-center max-w-[1200px] md:shadow-lg px-2 md:px-5 md:rounded-full bg-light-1 dark:bg-dark-c1-1"
  >
    <div class="flex items-center justify-between">
      <router-link
        class="border border-blue-1 text-blue-1 w-8 rounded text-center"
        to="/"
        >CE
      </router-link>
    </div>
    <div>
      <div @click="showMenu = !showMenu" class="flex justify-end md:hidden">
        <div v-if="!showMenu">
          <button type="button">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div v-if="showMenu">
          <button
            type="button"
            class="text-gray-800 hover:text-light-4 focus:outline-none focus:text-gray-400"
          >
            <img class="w-[26px]" src="../assets/close.svg" alt="close btn" />
          </button>
        </div>
      </div>

      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-right"
      >
        <li class="flex items-center">
          <button @click="toggleDark()">
            <img
              v-show="isDark"
              class="w-6"
              src="../assets/dark.svg"
              alt="dark mode"
            />
            <img
              v-show="!isDark"
              class="w-6"
              src="../assets/light.svg"
              alt="light mode"
            />
          </button>
        </li>
        <li
          class="text-lg hover:text-blue-1 dark:text-light-1 dark:hover:text-blue-c1-1"
        >
          <router-link
            to="/"
            exact-active-class="text-blue-1 dark:text-blue-c1-1"
            @click="showMenu = false"
            >Home</router-link
          >
        </li>
        <li
          class="text-lg hover:text-blue-1 dark:text-light-1 dark:hover:text-blue-c1-1"
        >
          <router-link
            to="/dashboard"
            active-class="text-blue-1 dark:text-blue-c1-1"
            @click="showMenu = false"
            >Repositories</router-link
          >
        </li>
        <li
          class="text-lg hover:text-blue-1 dark:text-light-1 dark:hover:text-blue-c1-1"
        >
          <router-link
            to="/profiles-search"
            active-class="text-blue-1 dark:text-blue-c1-1"
            @click="showMenu = false"
            >Profile Search</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const showMenu = ref(false);
</script>
