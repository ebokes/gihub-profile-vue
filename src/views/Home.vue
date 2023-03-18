<template>
  <div class="mx-2 md:mx-5">
    <div
      class="m-auto bg-light-1 py-[150px] shadow-lg mt-[8%] border-y-8 border-blue-1 rounded-xl"
    >
      <div class="flex flex-col gap-y-4 items-center">
        <h1 class="text-3xl text-center text-blue-1">
          Hi, I am Chibuokem,
          <br />
          Welcome to My Github Porfolio <br />
        </h1>
        <h3 class="text-center text-xl">
          Check out my Profile <br />
          or Search for any Github User
        </h3>
        <div class="flex gap-3 flex-col sm:flex-row">
          <router-link
            class="text-blue-1 px-3 py-2 border bg-light-1 rounded-lg inline-block hover:bg-blue-1 hover:text-light-1 hover:border-light-1 transition duration-150 ease-in text-center"
            to="/dashboard"
            >My Repo</router-link
          >
          <router-link
            class="text-blue-1 px-3 py-2 border bg-light-1 rounded-lg inline-block hover:bg-blue-1 hover:text-light-1 hover:border-light-1 transition duration-150 ease-in text-center"
            to="/profiles-search"
            >Profile Search</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
