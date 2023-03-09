<template>
  <div>
    <ul>
      <li v-for="item in paginatedItems" :key="item.id">
        <a :href="item.html_url">{{ item.name }}</a>
      </li>
    </ul>
    <pagination v-model="currentPage" :total-items="totalItems"></pagination>
  </div>
</template>

<script>
// import { ref, computed, onMounted } from "vue";
// import axios from "axios";
// import Pagination from "./Pagination.vue";

// export default {
//   components: { Pagination },
//   setup() {
//     const items = ref([]);
//     const currentPage = ref(1);
//     const pageSize = 5;

//     const startIndex = computed(() => (currentPage.value - 1) * pageSize);
//     const endIndex = computed(() => startIndex.value + pageSize - 1);

//     const paginatedItems = computed(() =>
//       items.value.slice(startIndex.value, endIndex.value + 1)
//     );
//     const totalItems = computed(() => items.value.length);

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.github.com/users/ebokes/repos"
//         );
//         items.value = response.data;
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     onMounted(() => {
//       fetchData();
//     });

//     return {
//       currentPage,
//       pageSize,
//       startIndex,
//       endIndex,
//       paginatedItems,
//       totalItems,
//     };
//   },
// };
</script>

<style scoped>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
