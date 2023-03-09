<template>
  <div v-if="error">Sorry, cannot fetch this repo at the moment</div>
  <div v-else-if="loading">loading...</div>
  <div v-else>
    <div v-if="repo.id">
      <h4>{{ repo.name }}</h4>
      <h4>{{ repo.created_at.substring(0, 10) }}</h4>
    </div>
    <div v-else>
      <h2>Repo not found</h2>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

// const data = ref(null);
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

// return repo;

// import { useRoute } from "vue-router";
// import { onMounted } from "@vue/runtime-core";
// export default {
//   setup() {
//     const post = ref({});

//     // we don't have access to this in the composition API so lets use a hook
//     const route = useRoute();

//     const fetchPost = () => {
//       const { postId } = route.params;
//       const endpoint = `https://dummyjson.com/posts/${postId}`;

//       fetch(endpoint)
//         .then((response) => response.json())
//         .then((json) => (post.value = json));
//     };

//     onMounted(() => {
//       fetchPost();
//     });

//     return {
//       post,
//     };
//   },
// };
</script>

<style></style>
