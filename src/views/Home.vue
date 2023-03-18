<template>
  <div class="mx-2 md:mx-5">
    <div
      class="mx-auto bg-light-1 py-[30%] lg:py-[18%] shadow-lg rounded-lg bg-cover bg-[url('../assets/bg2.jpg')]"
    >
      <div class="flex flex-col gap-y-4 items-center">
        <h1
          class="text-3xl md:text-4xl text-center text-light-1 font-Mulish font-bold"
        >
          Hi, I am Chibuokem,
          <br />
          Welcome to My Github Profile <br />
        </h1>
        <h3 class="text-center text-xl text-light-3">
          Check out my Repositories <br />
          or Search for any Github User
        </h3>
        <div class="flex gap-3 flex-col sm:flex-row">
          <router-link
            class="bg-light-1 text-blue-1 hover:border-light-1 hover:text-light-1 hover:bg-gradient-to-tr from-blue-1 to-blue-4 px-3 py-2 border rounded-lg inline-block transition duration-150 ease-in text-center"
            to="/dashboard"
            >My Repo</router-link
          >
          <router-link
            class="bg-light-1 text-blue-1 hover:border-light-1 hover:text-light-1 hover:bg-gradient-to-tr from-blue-1 to-blue-4 px-3 py-2 border rounded-lg inline-block tr"
            to="/profiles-search"
            >Profile Search</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
