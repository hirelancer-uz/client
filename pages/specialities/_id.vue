<template>
  <div class="orders pt-8 pb-[170px] xl:pt-6 xl:pb-6 relative">
    <transition name="fade-left" mode="out-in">
      <div class="2xl:container container mx-auto xl:flex xl:flex-col xl:gap-6">
        <Banner class="xl:hidden" />
        <div
          class="flex justify-between items-end mt-8 xl:mt-0 xl:flex-col-reverse head-grid"
        >
          <div class="flex justify-between gap-10 xl:w-full items-center">
            <h1
              class="text-[32px] font-semibold text-black xl:hidden whitespace-nowrap"
            >
              {{ $store.state.translations["main.orders"] }}:
              {{ activeSpecial }}
            </h1>
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
          <div>
            <a
              href="#"
              class="telegram  hover:text-white flex gap-2 h-[60px] px-[20px] items-center rounded-lg justify-center text-white font-semibold text-[16px] xl:w-full xl:text-[16px] py-[12px] xl:h-[48px]"
              >{{ $store.state.translations["profile.telegram-channel"] }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M0.896455 6.79637L16.2851 0.145754C17.0088 -0.166999 17.7929 0.441585 17.6695 1.22023L15.5655 14.4962C15.4355 15.3162 14.4206 15.6299 13.8506 15.0262L10.3977 11.3686C9.72058 10.6514 9.66752 9.54749 10.2727 8.76857L12.7107 5.63084C12.8501 5.45146 12.63 5.21549 12.4414 5.34204L7.59406 8.59387C6.77148 9.14569 5.77341 9.37269 4.79309 9.2309L1.15003 8.70401C0.15204 8.55968 -0.0291716 7.1964 0.896455 6.79637Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <OrdersList
          class="xl:mt-0"
          :orders="orders"
          :specialities="specialities"
          @filter="queryCreater"
          @getOrders="__GET_ORDERS"
          :totalPage="totalPage"
          :pageSize="pageSize"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import Banner from "@/components/orders/Banner.vue";
import OrdersList from "@/components/orders/OrdersList.vue";

export default {
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  data() {
    return {
      tab: true,
      pageSize: 10,
      search: "",
      searchVal: "",
    };
  },
  computed: {
    allSpecialities() {
      let allSpec = [...this.specialities];
      this.specialities.forEach((elem) => {
        allSpec.push(...elem.children);
      });
      return allSpec;
    },
    activeSpecial() {
      const currentSpec = this.allSpecialities.find(
        (elem) => Number(elem?.id) === Number(this.$route.params.id)
      );
      return currentSpec?.name;
    },
  },
  mounted() {
    this.$store.commit("setPageData", {
      title: "Buyurtmalar",
      center: false,
      info: "",
      link: true,
    });
    this.debouncedSearch = this.debounce(this.changeSearch, 500);
    if (this.$route.query?.search) {
      this.search = this.$route.query.search;
    }
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async asyncData({ store, params, query, i18n }) {
    const pageSize = 10;
    const [ordersData, specialitiesData] = await Promise.all([
      store.dispatch("fetchOrders/getOrders", {
        params: {
          page_size: pageSize,
          ...query,
          [`specialities[${params.id}]`]: params.id,
        },
      }),
      store.dispatch("fetchSpecialities/getSpecialities",{
        headers: {
          Lang: i18n.locale,
        },
      }),
    ]);

    const orders = ordersData.data;
    const specialities = specialitiesData.content;
    const totalPage = ordersData?.meta?.total;
    return {
      orders,
      specialities,
      totalPage,
    };
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
    async changeSearch() {
      if (this.searchVal.length > 2) {
        if (this.$route.query?.search !== this.searchVal)
          await this.$router.replace({
            path: this.$route.path,
            query: { ...this.$route.query, search: this.searchVal, page: 1 },
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
    async queryCreater(name, id) {
      let query = { ...this.$route.query };
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
          query: { ...query },
        });
      }
      this.__GET_ORDERS();
    },
    async __GET_ORDERS() {
      this.loading = true;
      try {
        const data = await this.$store.dispatch("fetchOrders/getOrders", {
          params: {
            ...this.$route.query,
            [`specialities[${this.$route.params.id}]`]: this.$route.params.id,
          },
        });
        this.orders = data.data;
        this.totalPage = data?.meta?.total;
        this.loading = false;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: { Banner, OrdersList },
};
</script>
<style lang="css" scoped>
.buttons .active {
  background-color: white;
  border: 1px solid var(--blue);
  color: var(--blue);
}

.telegram {
  background: linear-gradient(0deg, #28a9ea 0%, #28a9ea 100%), #1878f3;
  transition: .3s !important;
  opacity: 1;
}
.telegram:hover {
  opacity: 0.7;
}


.head-grid {
  display: grid;
  grid-template-columns: 1fr 332px;
  gap: 32px;
}

@media screen and (max-width: 1024px) {
  .head-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
}
</style>
