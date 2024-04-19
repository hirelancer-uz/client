<template>
  <div class="portfolio">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="head flex justify-between items-center gap-4 mt-8 xl:mt-0">
      <h3 class="text-[24px] text-black font-semibold xl:hidden">
        {{ $store.state.translations["profile.portfolio"] }}
      </h3>
      <div class="flex justify-between items-center xl:hidden">
        <button
          @click="$router.push(localePath('/profile/portfolio/add'))"
          class="bg-main-color flex gap-2 h-12 px-6 rounded-[8px] text-white text-base text-medium items-center"
        >
          {{ $store.state.translations["profile.add-portfolio"] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M7.16675 10.0003H13.8334M10.5001 6.66699V13.3337M18.8334 10.0003C18.8334 14.6027 15.1025 18.3337 10.5001 18.3337C5.89771 18.3337 2.16675 14.6027 2.16675 10.0003C2.16675 5.39795 5.89771 1.66699 10.5001 1.66699C15.1025 1.66699 18.8334 5.39795 18.8334 10.0003Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-1 xl:gap-4 xl:mt-4"
      v-if="loading"
    >
      <a-skeleton
        :paragraph="false"
        class="loading-card"
        v-for="elem in [1, 2, 3, 4, 5, 6]"
        :key="elem"
      />
    </div>
    <div
      class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-1 xl:gap-4 xl:mt-4"
      v-if="portfolios.length > 0 && !loading"
    >
      <PortfolioCard
        v-for="portfolio in portfolios"
        :key="portfolio?.id"
        :portfolio="portfolio"
        :portfolios="portfolios"
        :freelancer="$store.state.userInfo"
        @getData="__GET_PORTFOLIOS"
      />
    </div>
    <div
      v-if="portfolios.length == 0 && !loading"
      class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-1 xl:gap-4 xl:mt-4"
    >
      <PortfolioEmptyCard />
      <PortfolioEmptyCard />
      <PortfolioEmptyCard />
    </div>
    <div
      v-if="$route.params.user == 'freelancer'"
      class="fixed-btns fixed bottom-0 w-full z-[7] py-4 px-4 bg-white left-0 hidden xl:flex flex-col gap-2"
    >
      <button
        @click="$router.push(localePath('/profile/portfolio/add'))"
        class="border border-solid border-blue bg-blue rounded-[12px] h-[52px] w-full flex justify-center items-center text-[14px] text-white font-medium gap-2"
      >
        {{ $store.state.translations["profile.portfolio"] }}
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.16675 9.99984L9.27898 11.9008C9.63857 12.2245 10.1972 12.1749 10.4942 11.7931L13.8334 7.49984M10.5001 18.3332C15.1025 18.3332 18.8334 14.6022 18.8334 9.99984C18.8334 5.39747 15.1025 1.6665 10.5001 1.6665C5.89771 1.6665 2.16675 5.39747 2.16675 9.99984C2.16675 14.6022 5.89771 18.3332 10.5001 18.3332Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div>
      <VPagination
        :pageSize="pageSize"
        :totalPage="totalPage"
        @getData="__GET_PORTFOLIOS"
      />
    </div>
    <!-- </ProfileLayout> -->
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import VEmpty from "../../../../components/profile/VEmpty.vue";
import PortfolioEmptyCard from "@/components/profile/portfolio/PortfolioEmptyCard.vue";

export default {
  layout: "profileLayout",
  name: 'portfolio',
  data() {
    return {
      loading: true,
      portfolios: [],
      totalPage: 0,
      pageSize: 6,
    };
  },
  computed: {
    handleUser() {
      return this.$store.state.userInfo["id"];
    },
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async mounted() {
    if (this.$store.state.userInfo["id"]) this.__GET_PORTFOLIOS();
    this.$store.commit("setPageData", {
      title: "Портфолио",
      center: false,
      info: "",
      link: true,
    });
  },
  methods: {
    async __GET_PORTFOLIOS() {
      try {
        const [portfolioData] = await Promise.all([
          this.$store.dispatch("fetchPortfolio/getWorks", {
            params: {
              freelancer: this.$store.state.userInfo["id"],
              page_size: this.pageSize,
              ...this.$route.query,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
            },
          }),
        ]);
        this.portfolios = portfolioData.data;
        this.totalPage = portfolioData?.meta?.total;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    handleUser(val) {
      if (val) this.__GET_PORTFOLIOS();
    },
  },
  components: {
    PortfolioEmptyCard,
    ProfileLayout,
    PortfolioCard,
    VEmpty,
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 390px;
}
.buttons {
  padding-bottom: 5px;
}
.buttons::-webkit-scrollbar {
  height: 0;
}
@media (max-width: 1200px) {
  :deep(.loading-card .ant-skeleton-title) {
    height: 217px;
  }
}
</style>
