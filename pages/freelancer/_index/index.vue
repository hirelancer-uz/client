<template>
  <div class="profile xl:px-0 xl:mt-0">
    <ProfileLayout :profile="false" :freelancer="freelancer" :show="true">
      <div class="flex flex-col container">
        <div class="personal-information mt-8 xl:mt-0">
          <PersonalInfo
            :isEdit="false"
            :freelancer="freelancer"
            :profile="false"
            :userInfo="freelancer"
          />
        </div>
        <div class="portfolio-block mt-[40px] xl:mt-6">
          <Portfolios :portfolios="portfolios" :freelancer="freelancer" />
        </div>
        <div class="mt-10">
          <Comments :feedbacks="freelancer?.customers_feedbacks" />
        </div>
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import PersonalInfo from "@/components/profile/portfolio/PersonalInfo.vue";
import Achievements from "@/components/profile/portfolio/Achievements.vue";
import Portfolios from "@/components/profile/portfolio/Portfolios.vue";
import Events from "@/components/profile/Events.vue";
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import Comments from "@/components/profile/Comments.vue";

export default {
  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
    Comments,
  },
  mounted() {
    this.$store.commit("setPageData", {
      title: this.freelancer?.name + " " + this.freelancer?.surname,
      center: false,
      info: "",
      link: true,
    });
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async asyncData({ store, params }) {
    try {
      const [freeLancerData, portfoliosData] = await Promise.all([
        store.dispatch("fetchFreelancers/getFreelancerById", {
          params: {
            params: {},
          },
          id: params.index,
        }),
        store.dispatch("fetchPortfolio/getWorks", {
          params: {
            freelancer: params.index,
          },
        }),
      ]);
      const portfolios = portfoliosData.data;
      const freelancer = freeLancerData.content;
      return {
        freelancer,
        portfolios,
      };
    } catch (e) {}
  },
};
</script>
<style lang="css" scoped>
.personal-information {
  /* display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px; */
}
@media (max-width: 1200px) {
  .personal-information {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
