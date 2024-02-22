<template>
  <transition name="fade-left" mode="out-in">
    <div class="freelancers pt-16 pb-[120px] xl:px-4 xl:pt-6 xl:pb-6">
      <div class="2xl:container mx-auto">
        <div class="title items-center xl:hidden grider">
          <h2 class="text-black text-[32px] font-semibold">Frilanserlar</h2>
          <div class="button grid header gap-4 items-center">
            <div
              class="searcher border-[1px] border-solid border-grey-light h-[60px] rounded-[8px] px-[16px] py-[12px] flex items-center justify-between"
            >
              <input
                type="text"
                placeholder="Поиск"
                class="text-[16px] text-[#353437] leading-[150%] h-[100%] w-[90%]"
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
              @click="$router.push('/profile/customer')"
              class="xl:hidden h-[60px] w-[204px] flex justify-center items-center bg-white rounded-[12px] text-base font-medium text-blue border-[1px] border-blue border-solid"
            >
              Buyurtma qoshish
            </button>
            <button
              v-else
              @click="$router.push('/registration')"
              class="xl:hidden h-[60px] w-[204px] flex justify-center items-center bg-blue rounded-xl text-base font-medium text-white"
            >
              Buyurtma qoshish
            </button>
          </div>
        </div>
        <div class="filter-head hidden xl:flex justify-between xl:mb-6">
          <h4 class="text-black text-[14px] font-medium">
            {{ totalPage.toLocaleString() }} результатов
          </h4>
          <button
            @click="open"
            class="flex items-center gap-2 text-blue text-[14px] font-medium"
          >
            Фильтры<svg
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
        <!-- <div class="tab flex gap-4 xl:grid xl:grid-cols-2">
          <button
            class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg xl:justify-center xl:h-[44px] text-[14px] text-grey-64 border border-solid border-bg-grey"
            :class="{ active: true }"
          >
            Фрилансеры
          </button>
          <button
            class="px-6 h-[40px] flex items-center bg-bg-grey rounded-lg xl:justify-center xl:h-[44px] text-[14px] text-grey-64 border border-solid border-bg-grey"
          >
            Команды
          </button>
        </div> -->
        <div class="body mt-[30px] xl:mt-4">
          <FreelancersFilter
          :regions="regions"
            class="xl:hidden"
            :specialities="specialities"
            @filter="queryCreater"
          />
          <FreelancersContainer
            :freelancers="freelancers"
            :specialities="specialities"
            @deleteFilter="queryCreater"
            :loading="loading"
            :totalPage="totalPage"
            @getData="__GET_FREELANCERS"
          />
        </div>
        <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer">
          <FreelancersFilter
            class="hidden xl:flex pb-6"
            :specialities="specialities"
            @filter="queryCreater"
            :regions="regions"
          />
        </vue-bottom-sheet-vue2>
      </div>
    </div>
  </transition>
</template>
<script>
import FreelancersContainer from "../components/freelancers/FreelancersContainer.vue";
import FreelancersFilter from "../components/freelancers/FreelancersFilter.vue";
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
    };
  },
  async asyncData({ store, query }) {
    store.commit("setPageData", { title: "TitleQul" });
    const [freeLancersData, specialitiesData, regionsData] = await Promise.all([
      store.dispatch("fetchFreelancers/getFreelancers", {
        params: {
          page: query.page || 1,
          page_size: query.page_size || 15,
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
    console.log(regions);
    return {
      freelancers,
      specialities,
      totalPage,
      regions
    };
  },
  mounted() {
    this.getFirstData();
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
    async queryCreater(name, id) {
      let query = { ...this.$route.query };
      if (!this.$route.query[name]) {
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
        const data = await this.$store.dispatch("fetchFreelancers/getFreelancers", {
          params: { ...this.$route.query },
        });
        this.freelancers = data.data;
        this.totalPage = data?.meta?.total;
        this.loading = false;
      } catch (e) {
      } finally {
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
}
</style>
