<template>
  <nav>
    <div class="nav-container">
      <div class="logo">
        <img src="../assets/github-svgrepo-com.svg" alt="" />
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/repositories">Repositories</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 40px;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100vw;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
}

.logo img {
  width: 25px;
}
.nav-links {
  display: flex;
  column-gap: 20px;
  max-width: 1200px;
}

.nav-links a {
  color: var(--light-4);
  /* background-color: blueviolet; */
  padding: 10px;
  border-radius: 8px;
}
</style>
