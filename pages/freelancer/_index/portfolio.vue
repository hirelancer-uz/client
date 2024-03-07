<template>
  <div class="portfolio xl:px-0">
    <ProfileLayout :profile="false" :freelancer="freelancer" :show="false">
      <div class="container">
        <div class="head flex flex-col gap-4 mt-8 xl:mt-6">
          <h3 class="text-[24px] text-black font-semibold xl:hidden">
            {{ $store.state.translations["main.portfolio"] }}
          </h3>
        </div>
        <div
          class="list grid grid-cols-3 gap-4 mb-[40px] xl:grid-cols-1 mt-6"
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
          class="list grid grid-cols-3 gap-4 mb-[40px] xl:grid-cols-1 mt-6"
          v-else
        >
          <PortfolioViewCard
            v-for="portfolio in portfolios"
            :portfolio="portfolio"
            :portfolios="portfolios"
            :key="portfolio?.id"
            :freelancer="freelancer"
          />
        </div>
        <div
          v-if="portfolios.length == 0 && !loading"
          class="h-[208px] xl:h-[111px] flex justify-center items-center mb-[-24px]"
        >
          <VEmpty />
        </div>
        <!-- <div
        class="list grid-cols-3 gap-4 xl:grid-cols-1 mt-4 xl:mt-0 xl:gap-[16px] hidden xl:grid"
      >
        <PortfolioCard
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :key="portfolio?.id"
        />

        <PortfolioMoreCard class="xl:hidden" v-if="portfolios.length > 5" />
      </div> -->
        <div>
          <VPagination
            :totalPage="totalPage"
            @getData="__GET_PORTFOLIOS"
            :pageSize="pageSize"
          />
        </div>
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import PortfolioViewCard from "@/components/profile/portfolio/PortfolioViewCard.vue";
import ModalCard from "@/components/profile/portfolio/ModalCard.vue";
import VEmpty from "../../../components/profile/VEmpty.vue";

export default {
  data() {
    return {
      visible: false,
      loading: true,
      portfolios: [],
      totalPage: 0,
      pageSize: 6,
    };
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async asyncData({ store, query, params }) {
    try {
      const [freeLancerData] = await Promise.all([
        store.dispatch("fetchFreelancers/getFreelancerById", {
          params: {
            params: {},
          },
          id: params.index,
        }),
      ]);
      const freelancer = freeLancerData.content;
      return {
        freelancer,
      };
    } catch (e) {}
  },
  async mounted() {
    this.__GET_PORTFOLIOS();
    this.$store.commit("setPageData", {
      title: this.freelancer?.name + " " + this.freelancer?.surname,
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
              freelancer: this.$route.params.index,
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
  components: {
    ProfileLayout,
    PortfolioCard,
    PortfolioViewCard,
    ModalCard,
    VEmpty,
  },
};
</script>
<style lang="css" scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 356px;
}
</style>
