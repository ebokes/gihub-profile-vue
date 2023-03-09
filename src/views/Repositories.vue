<script setup>
import { onMounted } from "vue";
import useFetch from "../composable/useFetch";

const { data, error, loading, fetchData } = useFetch(
  "https://api.github.com/users/ebokes/repos"
);

onMounted(async () => {
  await fetchData();
});

// const repoLength = data.length;

console.log(data);
</script>
<template>
  <div v-if="error">Sorry, could not fetch repositories</div>
  <div v-else-if="loading">loading...</div>
  <div class="bur" v-else>
    <div>
      <div class="bar" v-for="item in data" :key="item.id">
        <p @click="$router.push(`/repositories/${item.id}`)">
          {{ item.name }}
        </p>
        <span>
          <button @click="$router.push(`/repositories/${item.id}`)">
            View More
          </button>
          <!-- <a :href="x.homepage">Demo</a> -->
        </span>
      </div>
    </div>
  </div>
  <Pagination />
</template>

<style scoped>
.bur {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1f4fc;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 900px;
  max-width: 900px;
  /* border: 1px solid red; */
  padding: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.146);
  background-color: #fff;
}

.bar p {
  cursor: pointer;
  color: #1577a1;
}

span {
  /* flex: 0.4; */
  display: flex;
  gap: 10px;
}
button {
  text-decoration: none;
  background-color: #33b2e8;
  padding: 5px;
  color: #fff;
  width: 90px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}
</style>
