<script>
export default {
  name: "directory-search",
  data() {
    return {
      searchVal: "",
      search: "",
    };
  },
  mounted() {
    // this.$store.commit("setPageData", {
    //   title: "Buyurtmalar",
    //   center: false,
    //   info: "",
    //   link: true,
    // });
    this.debouncedSearch = this.debounce(this.changeSearch, 500);
    if (this.$route.query?.search) {
      this.search = this.$route.query.search;
    }
  },
  methods: {
    debounce(func, delay) {
      let timer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    },
    handleInput(event) {
      this.searchVal = event.target.value;
      this.debouncedSearch();
    },
    async queryCreater(name, id) {
      let query = {...this.$route.query};
      if (!this.$route.query[name]) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            ...query,
            page: 1,
            [`${name}`]: id,
          },
        });
      } else {
        delete query[name];
        await this.$router.replace({
          path: this.$route.path,
          query: {...query},
        });
      }
      this.__GET_ORDERS();
    },
    __GET_ORDERS() {

    },
    async changeSearch() {
      if (this.searchVal.length > 2) {
        if (this.$route.query?.search !== this.searchVal)
          await this.$router.replace({
            path: this.$route.path,
            query: {...this.$route.query, search: this.searchVal, page: 1},
          });
        if (this.searchVal === this.$route.query.search) this.__GET_ORDERS();
      } else if (this.searchVal.length === 0) {
        this.clearFilter(this.$route.path);
      }
    },
    async clearFilter() {
      if (Object.keys(this.$route.query).length > 2) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            page: 1,
            page_size: this.$route.query.page_size,
          },
        });
        this.__GET_ORDERS();
      }
    },
  }
}
</script>

<template>
<div>
  <div
    class="searcher max-w-[758px] w-full border-[1px] border-solid border-grey-light h-[60px] rounded-[8px] px-[16px] py-[12px] flex items-center justify-between xl:h-[48px]"
  >
    <input
      type="text"
      :placeholder="$store.state.translations[`freelancers.search`]"
      v-model="search"
      class="text-[16px] text-[#353437] leading-[150%] h-[100%] w-[90%]"
      @input="handleInput"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M21 21L19 19M1 10.5C1 5.25329 5.25329 1 10.5 1C15.7467 1 20 5.25329 20 10.5C20 15.7467 15.7467 20 10.5 20C5.25329 20 1 15.7467 1 10.5Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</div>
</template>

<style scoped lang="css">

</style>
