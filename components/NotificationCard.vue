<template lang="html">
  <div
    class="notification-card border border-solid border-border-darik rounded-[16px] px-6 py-4"
  >
    <h5 class="text-dark-grey-100 text-[20px] font-medium mb-4">
      {{ notification.theme }}{{ notification?.type }}
    </h5>
    <div
      class="body pb-12 border-[0] border-b border-border-darik border-solid"
    >
      <p class="text-base text-dark-grey-80 desc">
        {{ notification.message }}
      </p>
    </div>
    <div class="footer mt-6 flex justify-between items-center">
      <span class="text-[14px] text-dark-grey-70 flex items-center gap-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 9H21M8 2V5M16 2V5M7 22H17C19.2091 22 21 20.2091 21 18V7.5C21 5.29086 19.2091 3.5 17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V18C3 20.2091 4.79086 22 7 22Z"
            stroke="#6C757D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >{{ dateFormat }}</span
      >
      <nuxt-link
        class="text-main-color text-base font-medium flex items-center gap-2"
        v-if="notification?.type === 1"
        :to="localePath(`/profile/${notification?.user_id === $store.state.userInfo?.id ? 'customer':'freelancer'}/order/view/${notification?.link}`)"
        >Buyurtmaga o‘tish</nuxt-link
      >
      <nuxt-link
        class="text-main-color text-base font-medium flex items-center gap-2"
        v-if="notification?.type === 2"
       :to="localePath('/directory')"
        >Reyting formulasi</nuxt-link
      >
      <nuxt-link
        class="text-main-color text-base font-medium flex items-center gap-2"
        v-if="notification?.type === 3"
        :to="localePath(`/profile/${notification?.user_id === $store.state.userInfo?.id ? 'customer':'freelancer'}/order/view/${notification?.link}`)"
        >Taklifni ko’rish</nuxt-link
      >
      <button
        v-if="notification?.type === 4"
        @click="openModal"
        class="text-main-color text-base font-medium flex items-center gap-2"
      >
        {{ $store.state.translations["header.open"] }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 7L14 12L10 17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <NotificationShow
      ref="notificationShow"
      :notification="notification"
      :date="dateFormat"
    />
  </div>
</template>
<script>
import NotificationShow from "@/components/modals/NotificationShow.vue";
import moment from "moment";

export default {
  props: ["notification"],
  computed: {
    dateFormat() {
      return moment(this.notification?.created_at).format("DD.MM.YYYY");
    },
  },
  methods: {
    moment,
    openModal() {
      this.$refs.notificationShow.openModal();
      this.$refs.notificationShow.open();
    },
  },
  components: {
    NotificationShow,
  },
};
</script>
<style lang="css" scoped>
.desc {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
</style>
