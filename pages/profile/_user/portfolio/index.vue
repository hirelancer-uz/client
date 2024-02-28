<template lang="html">
  <div class="portfolio xl:px-4">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="head flex justify-between items-center gap-4 mt-8 xl:mt-0">
      <h3 class="text-[24px] text-black font-semibold xl:hidden">Портфолио</h3>
      <div class="flex justify-between items-center">
        <button
          @click="$router.push('/profile/portfolio/add')"
          class="bg-main-color flex gap-2 h-12 px-6 rounded-[8px] text-white text-base text-medium items-center"
        >
          Добавить портфолио
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
      class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-1 xl:gap-1 xl:mt-4"
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
      class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] xl:grid-cols-1 xl:gap-1 xl:mt-4"
      v-else
    >
      <PortfolioCard
        v-for="portfolio in portfolios"
        :key="portfolio?.id"
        :portfolio="portfolio"
        :portfolios="portfolios"
        :freelancer="$store.state.userInfo"
      />
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

export default {
  layout: "profileLayout",
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
  async mounted() {
    this.__GET_PORTFOLIOS();
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
    ProfileLayout,
    PortfolioCard,
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
