<template>
  <div>
    <div v-for="(item, index) in items" class="h-10 bg-[red]" :key="index">
      {{ item }}
    </div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ],
      loading: false,
      page: 1, // Initial page number
      totalPages: null, // Total pages from API response
    };
  },
  mounted() {
    this.fetchData();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      if (this.loading || (this.totalPages && this.page > this.totalPages)) return;

      this.loading = true;
      try {
        // const response = await axios.get(`/api/data?page=${this.page}`);
        this.items.push(...[1, 2, 3, 4, 5, 6, 7, 8, 12, 2, 3, 4, 7, 7]);
        // this.totalPages = response.data.totalPages;
        // this.page++;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll() {
      const bottomOfWindow =
        document.documentElement.scrollHeight - window.innerHeight - 1 <= window.scrollY;
      if (bottomOfWindow && !this.loading) {
        this.fetchData();
      }
    },
  },
};
</script>
