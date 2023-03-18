<template>
  <div class="my-5" :class="{ 'dark-mode': dark }">
    <h3 class="text-xl font-bold mb-4">Repositories</h3>
    <div v-if="error">
      Sorry, I cannot fetch the repositories at the moment. Please try again
    </div>
    <div v-else-if="loading" class="w-full">
      <img src="../assets/loading.svg" class="mx-auto" alt="loading" />
    </div>
    <div>
      <div class="flex flex-wrap justify-between gap-y-8 gap-x-4 md:gap-x-10">
        <div
          @click="$router.push(`/repositories/${item.id}`)"
          class="w-full lg:w-[46.5%] h-[160px] bg-light-1 p-3 text-blue-1 font-normal flex flex-col justify-between rounded-lg shadow-lg cursor-pointer hover:scale-[1.01] transition duration-200 ease-in-out"
          v-for="item in paginatedData"
          :key="item.id"
        >
          <p class="text-lg font-bold">{{ item.name }}</p>
          <p class="text-sm font-light mb-2">{{ item.description }}</p>
          <span class="flex justify-start">
            <span class="flex items-center gap-1">
              <div
                class="w-2 h-2 bg-vue rounded"
                v-if="item.language === 'Vue'"
              ></div>
              <div
                class="w-2 h-2 bg-js rounded"
                v-if="item.language === 'JavaScript'"
              ></div>
              <div
                class="w-2 h-2 bg-html rounded"
                v-if="item.language === 'HTML'"
              ></div>
              <div
                class="w-2 h-2 bg-css rounded"
                v-if="item.language === 'CSS'"
              ></div>
              <p v-if="item.language" class="text-sm mr-3 font-light">
                {{ item.language }}
              </p>
            </span>

            <p class="text-sm font-light">
              Updated on {{ item.updated_at.substring(0, 10) }}
            </p>
          </span>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-y-6 items-center justify-between mt-8 sm:flex-wrap"
      >
        <p class="text-lg font-normal text-blue-1">
          Page {{ currentPage }} of {{ pageCount }}
        </p>
        <div
          class="flex items-center space-x-2 flex-wrap justify-center gap-y-3"
        >
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="bg-blue-1 text-light-1 rounded-lg py-2 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-900 hover:bg-blue-2 transition duration-200 ease-in-out"
          >
            Prev
          </button>
          <div class="flex items-center space-x-2">
            <button
              v-for="pageNumber in pageNumbers"
              :key="pageNumber"
              @click="currentPage = pageNumber"
              :class="{
                'bg-blue-1 rounded-lg py-2 px-4 text-light-1':
                  currentPage === pageNumber,
                'text-blue-1 hover:text-light-2 hover:bg-blue-2 rounded-lg py-2 px-4 border':
                  currentPage !== pageNumber,
              }"
            >
              {{ pageNumber }}
            </button>
          </div>
          <button
            @click="nextPage"
            :disabled="currentPage === pageCount"
            class="bg-blue-1 text-light-1 rounded-lg py-2 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-900 hover:bg-blue-2 transition duration-200 ease-in-out"
          >
            Next
          </button>
        </div>
        <div>
          <label
            for="pageCountSelect"
            class="mr-2 text-lg text-blue-1 font-normal"
            >Repo Count:</label
          >
          <select
            id="pageCountSelect"
            v-model="itemsPerPage"
            @change="changePageCount"
            class="border-blue-1 rounded-lg py-2 px-4 text-lg font-normal text-blue-1"
          >
            <option
              v-for="option in pageCountOptions"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import useFetch from "../composable/useFetch";

export default {
  setup() {
    const { data, error, loading, fetchData } = useFetch(
      "https://api.github.com/users/ebokes/repos?sort=updated"
    );
    const currentPage = ref(1);
    const itemsPerPage = ref(6);
    const dark = ref(false);

    const pageCount = computed(() => {
      return Math.ceil(data.value.length / itemsPerPage.value);
    });

    const pageNumbers = computed(() => {
      const numbers = [];
      for (let i = 1; i <= pageCount.value; i++) {
        numbers.push(i);
      }
      return numbers;
    });

    const toggleDarkMode = () => {
      dark.value = !dark.value;
    };

    onMounted(async () => {
      await fetchData();
    });

    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return data.value.slice(startIndex, endIndex);
    });

    const changePageCount = (event) => {
      itemsPerPage.value = parseInt(event.target.value, 10);
      currentPage.value = 1;
    };

    const prevPage = () => {
      currentPage.value--;
    };

    const nextPage = () => {
      currentPage.value++;
    };

    const pageCountOptions = [6, 12, 18];

    return {
      data,
      error,
      loading,
      currentPage,
      itemsPerPage,
      pageCount,
      pageNumbers,
      paginatedData,
      changePageCount,
      prevPage,
      nextPage,
      pageCountOptions,
      dark,
      toggleDarkMode,
    };
  },
};
</script>
