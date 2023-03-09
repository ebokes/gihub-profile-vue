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
  <!-- <Suspense> -->
  <main class="container">
    <div class="left">
      <div class="blue-back"></div>
      <div v-if="error">
        Sorry, could not fetch Chibuokem's Profile at this moment
      </div>
      <div v-else-if="loading">loading...</div>
      <div v-else class="details">
        <img class="avatar" :src="data.avatar_url" alt="" />
        <div class="title">
          <h3>{{ data.name }}</h3>
          <p class="username">@{{ data.login }}</p>
        </div>
        <div class="bio">
          <a
            class="follow"
            href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Febokes"
            >Follow</a
          >
          <span>
            <img src="../assets/portfolio-svgrepo-com.svg" alt="bio" />
            <p>{{ data.bio }}</p>
          </span>
          <span>
            <img src="../assets/location-svgrepo-com.svg" alt="location" />
            <p>Edo, Nigeria</p>
          </span>
          <span>
            <img src="../assets/mail-svgrepo-com.svg" alt="mail" />
            <a href="mailto:chibuokemegbuchulam@gmail.com"
              >chibuokemegbuchulam@gmail.com</a
            >
          </span>
          <span>
            <img src="../assets/twitter-svgrepo-com.svg" alt="twitter" />
            <a :href="data.twitter_username">{{ data.twitter_username }}</a>
          </span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="row1">
        <h3>Overview</h3>
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <font-awesome-icon
              icon="fa-solid fa-folder-blank"
              class="fa-folder"
            />
            <p class="text-red-500">Repositories</p>
          </li>
          <li>Commits</li>
          <li>Followers</li>
          <li>Following</li>
        </ul>
      </div>
      <div class="row2">
        <h3>Repositories</h3>
      </div>
    </div>
  </main>
  <!-- </Suspense> -->
</template>

<style scoped>
.container {
  max-width: 1200px;
  /* text-align: center; */
  margin: 10% auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* color: #fff; */
}

.blue-back {
  background-color: var(--blue-1);
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 90px;
}

.left {
  /* border: 1px solid black; */
  height: 600px;
  width: 322px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 5px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 40px;

  /* z-index: 1; */
}

.h3 {
  margin: 5px 0;
  font-weight: 400;
}

.details {
  display: flex;
  flex-direction: column;

  /* gap: 5px; */
}

.follow {
  background: linear-gradient(45deg, #6185d8, #3c74da);
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
  color: var(--light-1);
  display: block;
}

.username {
  color: var(--light-4);
}

.title {
  text-align: center;
}

.bio {
  display: flex;
  flex-direction: column;
  margin: 40px 20px 10px 20px;
  gap: 15px;
}

span img {
  width: 15px;
}

.right {
  /* border: 1px solid black; */
  height: 600px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* flex: 0.8; */
}
.right ul {
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 15px;
  height: 80px;
  /* border: 1px solid black; */
  background-color: var(--light-1);
}

.right ul li {
  padding: 10px 20px;
  border-radius: 6px;
}

li img {
  width: 30px;
  /* background-color: #474b59; */
}

a {
  color: var(--blue-1);
}

span {
  display: flex;
  gap: 10px;
}

span p {
  /* border: 1px solid blue; */
  padding: 5px;
  border-radius: 5px;
}

.fa-folder {
  color: var(--blue-1);
}

.row2 {
}
</style>
