<template lang="html">
  <div
    class="notifications pt-12 pb-[400px] max-w-[954px] mx-auto xl:pt-4 xl:pb-6"
  >
    <div class="2xl:container container mx-auto flex flex-col gap-12">
      <h2 class="text-black text-[32px] font-semibold xl:hidden">
        {{ $store.state.translations["profile.notifs"] }}
      </h2>
      <div class="body flex flex-col gap-10">
        <div class="list grid grid-cols-1 gap-4" v-if="loading">
          <a-skeleton
            :paragraph="false"
            class="loading-card"
            v-for="elem in skeletonList"
            :key="elem"
          />
        </div>
        <div class="list grid grid-cols-1 gap-4" v-else>
          <NotificationCard
            v-for="notification in notifications"
            :key="notification?.id"
            :notification="notification"
          />
        </div>
        <VPagination
          :totalPage="totalPage"
          @getData="__GET_NOTIFICATIONS"
          :pageSize="pageSize"
        />
      </div>
    </div>
  </div>
</template>
<script>
import NotificationCard from "../components/NotificationCard.vue";
import VPagination from "../components/VPagination.vue";

export default {
  name: 'notifications',
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  data() {
    return {
      notifications: [],
      loading: true,
      pageSize: 6,
      totalPage: 10,
      skeletonList: [1, 2, 3, 4, 5, 6],
    };
  },
  async mounted() {
    this.$store.commit("setPageData", {
      title: this.$store.state.translations["profile.notifs"],
      center: false,
      info: "",
      link: true,
    });
    this.__GET_NOTIFICATIONS();
  },
  methods: {
    async __GET_NOTIFICATIONS() {
      try {
        const data = await this.$store.dispatch(
          "fetchNotifications/getNotifications"
        );
        this.notifications = data?.content;
        // this.totalPage = ""
      } catch (e) {
        this.$notification.error({
          description: e.response.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },

  components: { VPagination, NotificationCard },
};
</script>
<style lang="css" scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 196px;
  border-radius: 16px;
}
</style>
