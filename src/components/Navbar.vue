<!-- <template>
  <nav
    class="container py-3 mx-auto md:flex md:justify-between md:items-center max-w-[1200px] md:shadow-lg px-2 md:px-5 md:rounded-full bg-light-1"
  >
    <div class="flex items-center justify-between">
      <div class="border border-blue-1 w-8 rounded text-center">
        <router-link class="text-blue-1" to="/">EB </router-link>
      </div>
      <div @click="showMenu = !showMenu" class="flex md:hidden">
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
        <div v-else-if="showMenu">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <img class="w-[26px]" src="../assets/close.svg" alt="close btn" />
          </button>
        </div>
      </div>
    </div>

    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-right"
    >
      <li class="text-lg" :class="{ 'text-blue-1': isActive('/') }">
        <router-link to="/" @click="showMenu = false">Home</router-link>
      </li>
      <li class="text-lg" :class="{ 'text-blue-1': isActive('/dashboard') }">
        <router-link to="/dashboard" @click="showMenu = false"
          >Repositories</router-link
        >
      </li>
      <li
        class="text-lg"
        :class="{ 'text-blue-1': isActive('/profiles-search') }"
      >
        <router-link to="/profiles-search" @click="showMenu = false"
          >Profile Search</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const showMenu = ref(false);
const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script> -->

<template>
  <nav
    class="container py-3 mx-auto md:flex md:justify-between md:items-center max-w-[1200px] md:shadow-lg px-2 md:px-5 md:rounded-full bg-light-1"
  >
    <div class="flex items-center justify-between">
      <router-link
        class="border border-blue-1 text-blue-1 w-8 rounded text-center"
        to="/"
        >EB
      </router-link>
    </div>
    <div @click="showMenu = !showMenu" class="flex md:hidden">
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
      <li class="text-lg hover:text-blue-1">
        <router-link
          to="/"
          exact-active-class="text-blue-1"
          @click="showMenu = false"
          >Home</router-link
        >
      </li>
      <li class="text-lg hover:text-blue-1">
        <router-link
          to="/dashboard"
          active-class="text-blue-1"
          @click="showMenu = false"
          >Repositories</router-link
        >
      </li>
      <li class="text-lg hover:text-blue-1">
        <router-link
          to="/profiles-search"
          active-class="text-blue-1"
          @click="showMenu = false"
          >Profile Search</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>
