<template>
  <transition name="fade-left" mode="out-in">
    <div class="freelancers pt-16 pb-[120px] xl:pt-6 xl:pb-6">
      <div class="2xl:container container mx-auto">
        <div class="title items-center xl:hidden grider">
          <h2 class="text-black text-[32px] font-semibold titler xl:hidden">
            {{ $store.state.translations["freelancers.title"] }}
            <span class="hidden xl:block" v-if="totalPage"
              >{{ totalPage?.toLocaleString() }}
              {{ $store.state.translations["freelancers.count"] }}</span
            >
          </h2>
          <div class="button grid header gap-4 items-center">
            <div
              class="searcher border-[1px] border-solid border-grey-light h-[60px] rounded-[8px] px-[16px] py-[12px] flex items-center justify-between xl:h-[48px]"
            >
              <input
                type="text"
                :placeholder="$store.state.translations[`freelancers.search`]"
                v-model="search"
                class="text-[16px] text-[#353437] leading-[150%] h-[100%] w-[90%] rounded-[8px]"
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
            <button
              v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
              @click="$router.push(localePath('/profile/orders/add'))"
              class="h-[60px] w-[204px] flex justify-center items-center bg-white rounded-[12px] text-base font-medium text-blue border-[1px] border-blue border-solid buttoner xl:hidden"
            >
              {{ $store.state.translations["freelancers.order"] }}
            </button>
            <button
              v-else
              @click="$router.push(localePath('/registration'))"
              class="h-[60px] w-[204px] flex justify-center items-center bg-white rounded-[12px] text-base font-medium text-blue border-[1px] border-blue border-solid buttoner xl:hidden"
            >
              {{ $store.state.translations["freelancers.order"] }}
            </button>
          </div>
        </div>
        <div class="filter-head hidden xl:flex justify-between xl:mb-0">
          <h4 class="text-black text-[14px] font-medium xl:hidden">
            {{ totalPage.toLocaleString() }}
            {{ $store.state.translations["freelancers.count"] }}
          </h4>
          <button
            @click="open"
            class="flex items-center gap-2 text-blue text-[14px] font-medium filterer"
          >
            <span class="cole">{{
              $store.state.translations["freelancers.filter"]
            }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 5H8.33333"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 10H10"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8333 10H17.5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6667 5L17.5 5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8333 15L16.6667 15"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 15H5"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="6.66667"
                cy="15"
                r="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
              <ellipse
                cx="14.1667"
                cy="10"
                rx="1.66667"
                ry="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
              <ellipse
                cx="10"
                cy="5.00004"
                rx="1.66667"
                ry="1.66667"
                stroke="#5C46E6"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
        <div class="body mt-[30px] xl:mt-4">
          <FreelancersFilter
            :regions="regions"
            class="xl:hidden"
            :specialities="specialities"
            @filter="queryCreater"
            @clear="clearFilter"
          />
          <FreelancersContainer
            :freelancers="freelancers"
            :specialities="specialities"
            @deleteFilter="queryCreater"
            :loading="loading"
            :totalPage="totalPage"
            @getData="__GET_FREELANCERS"
            :pageSize="pageSize"
          />
        </div>
        <vue-bottom-sheet-vue2
          ref="myBottomSheet"
          class="bottom-drawer"
          :can-swipe="false"
        >
          <FreelancersFilter
            class="hidden xl:flex pb-6"
            :specialities="specialities"
            @filter="queryCreater"
            :regions="regions"
            @clear="clearFilter"
            @close="close"
          />
        </vue-bottom-sheet-vue2>
      </div>
    </div>
  </transition>
</template>
<script>
import FreelancersContainer from "@/components/freelancers/FreelancersContainer.vue";
import FreelancersFilter from "@/components/freelancers/FreelancersFilter.vue";
import global from "@/mixins/global";
export default {
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  mixins: [global],
  data() {
    return {
      loading: false,
      search: "",
      pageSize: 10,
      searchVal: "",
    };
  },

  async asyncData({ store, query }) {
    const [freeLancersData, specialitiesData, regionsData] = await Promise.all([
      store.dispatch("fetchFreelancers/getFreelancers", {
        params: {
          page: query.page || 1,
          page_size: query.page_size || 10,
          // [`specialities[${params.id}]`]: params.id,
          ...query,
        },
      }),
      store.dispatch("fetchSpecialities/getSpecialities"),
      store.dispatch("fetchRegions/getRegions"),
    ]);
    const freelancers = freeLancersData.data;
    const specialities = specialitiesData.content;
    const regions = regionsData.content;
    const totalPage = freeLancersData?.meta?.total;
    return {
      freelancers,
      specialities,
      totalPage,
      regions,
    };
  },
  computed: {
    routerName() {
      return Object.keys(this.$route.query).length;
    },
  },
  watch: {
    routerName(newVal, lastVal) {
      if (newVal < lastVal && this.search.length > 0) {
        this.search = "";
      }
    },
  },

  mounted() {
    this.getFirstData();
    this.$store.commit("setPageData", {
      title: "Frilanserlar",
      center: false,
      info: `${this.totalPage?.toLocaleString()} результатов`,
      link: true,
    });
    if (this.$route.query?.search) this.search = this.$route.query?.search;
    this.debouncedSearch = this.debounce(this.changeSearch, 500);
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
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
    async changeSearch() {
      if (this.searchVal.length > 2) {
        if (this.$route.query?.search != this.searchVal)
          await this.$router.replace({
            path: this.$route.path,
            query: { ...this.$route.query, search: this.searchVal, page: 1 },
          });
        if (this.searchVal == this.$route.query.search)
          this.__GET_FREELANCERS();
      } else if (this.searchVal.length == 0) {
        this.clearFilter(this.$route.path);
      }
    },
   
    async clearFilter() {
      if (Object.keys(this.$route.query).length > 2) {
        await this.$router.replace({
          path: "freelancers",
          query: {
            page: 1,
            page_size: this.$route.query.page_size,
          },
        });
        this.__GET_FREELANCERS();
      }
    },
    async queryCreater(name, id) {
      let query = { ...this.$route.query };
      if (this.$route.query[name] != id) {
        await this.$router.replace({
          path: "freelancers",
          query: {
            ...query,
            page: 1,
            [`${name}`]: id,
          },
        });
      } else {
        delete query[name];
        await this.$router.replace({
          path: "freelancers",
          query: { ...query },
        });
      }
      this.__GET_FREELANCERS();
    },

    async __GET_FREELANCERS() {
      this.loading = true;
      try {
        const data = await this.$store.dispatch(
          "fetchFreelancers/getFreelancers",
          {
            params: { ...this.$route.query },
          }
        );
        this.freelancers = data.data;
        this.totalPage = data?.meta?.total;
        this.loading = false;
        this.close();
      } catch (e) {
      } finally {
        this.$store.commit("setPageData", {
          title: "Frilanserlar",
          center: false,
          info: `${this.totalPage?.toLocaleString()} результатов`,
          link: true,
        });
        this.loading = false;
      }
    },
  },

  components: { FreelancersFilter, FreelancersContainer },
};
</script>
<style lang="css" scoped>
.tab .active {
  border-color: var(--blue);
  background-color: white;
  color: var(--blue);
}
.body {
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-gap: 32px;
}
.grider {
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-gap: 32px;
}
.header {
  grid-template-columns: 8fr 2fr;
}
@media (max-width: 1200px) {
  .body {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
  .grider {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  /* .titler {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  } */
  .titler span {
    color: var(--grey-64, #5d5d5f);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
  }
  .filterer {
    position: fixed;
    bottom: 138px;
    right: 16px;
    z-index: 7;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--White, #fff);
    box-shadow: 0px 12px 24px 0px rgba(0, 25, 53, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cole {
    display: none;
  }
  .buttoner {
    position: fixed;
    bottom: 72px;
    left: 50%;
    transform: translateX(-50%);
    width: 92%;
    border-radius: 12px;
    background: var(--Main-color, #5c46e5);
    color: white;
    border-radius: 12px;
    z-index: 9;
  }
  .header {
    grid-template-columns: repeat(1, 1fr);
  }
  .searcher {
    border-radius: 8px;
    border: 1px solid var(--Border-darik, #e0e0ed);
    background: var(--White, #fff);
    padding: 0;
    padding-right: 16px;
  }
  .searcher input {
    padding: 12px 16px;
  }
  .bottom-drawer :deep(.bottom-sheet__content) {
    overflow: hidden;
  }
  .bottom-drawer :deep(.bottom-sheet__header) {
    display: none;
  }
  .bottom-drawer :deep(.bottom-sheet__main) {
    height: 100%;
  }
  .bottom-drawer :deep(.bottom-sheet__content) {
    min-height: 100%;
    border-radius: 0;
    height: 100%;
  }
}
</style>
