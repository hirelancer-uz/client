<template>
  <div class="profile">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="mt-8 xl:mt-6">
      <Alerts :notifications="notifications"  :loading="loading"/>
    </div>
    <div
      class="personal-information mt-8"
      v-if="$route.params.user == 'freelancer'"
    >
      <PersonalInfo
        :isEdit="true"
        :profile="true"
        :userInfo="$store.state.userInfo"
      />
      <!-- <Achievements :profile="true" /> -->
    </div>
    <div
      class="personal-information mt-10"
      v-if="$route.params.user == 'freelancer'"
    >
      <Statistics :userInfo="$store.state.userInfo" />
    </div>
    <!-- <div class="mt-[45px]">
      <Events />
    </div> -->
    <div class="mt-10" v-if="$route.params.user == 'freelancer'">
      <Comments :feedbacks="comments" @getComments="__GET_COMMENTS" />
    </div>
    <!-- </ProfileLayout> -->
  </div>
</template>
<script>
import PersonalInfo from "@/components/profile/portfolio/PersonalInfo.vue";
import Achievements from "@/components/profile/portfolio/Achievements.vue";
import Portfolios from "@/components/profile/portfolio/Portfolios.vue";
import Events from "@/components/profile/Events.vue";
import Alerts from "@/components/profile/Alerts.vue";
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import Statistics from "@/components/profile/Statistics.vue";
import Comments from "@/components/profile/Comments.vue";

export default {
  layout: "profileLayout",
  data() {
    return {
      userInfo: {},
      comments: [],
      notifications: [],
      loading: false
    };
  },
  async mounted() {
    this.__GET_NOTIFICATIONS()
    this.__GET_COMMENTS();
    this.$store.commit("setPageData", {
      title: "Профиль",
      center: false,
      info: "",
      link: true,
    });
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  methods: {
    async __GET_NOTIFICATIONS() {
      try {
        const data = await this.$store.dispatch(
            "fetchNotifications/getNotifications"
        );
        this.notifications = data?.content?.data;
        // this.totalPage = ""
      } catch (e) {
        this.$notification.error({
          description: e.response.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
    async __GET_COMMENTS() {
      try {
        this.loading = true;
        const commentsData = await this.$store.dispatch(
          "fetchOrders/getFreelancerComments",
          {
            params: {
              freelancer: this.$store.state.userInfo["id"],
              page_size: 2,
            },
          }
        );
        this.comments = commentsData.content.data;
        this.totalPage = commentsData.content.total;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    handleUser(val) {
      if (val) this.__GET_COMMENTS();
    },
  },
  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
    Statistics,
    Alerts,
    Comments,
  },
};
</script>
<style lang="css" scoped>
.personal-information {
  /* display: grid; */
  /* grid-template-columns: 2fr 1fr; */
  /* grid-gap: 16px; */
}
@media (max-width: 1200px) {
  .personal-information {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .container {
    padding: 0 !important;
  }
}
</style>
