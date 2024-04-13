<template>
  <div
    class="alerts-card rounded-[8px] bg-bg-grey px-6 pb-[25px] pt-[36px] xl:px-4 xl:pt-[28px] xl:pb-4 relative h-[195px] xl:h-auto xl:min-w-[270px]"
  >
    <button class="top-2 right-2 absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M13.5355 6.46489L6.46448 13.536M13.5355 13.5359L6.46448 6.46484"
          stroke="#5D5D5F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="flex flex-col justify-between h-full xl:gap-4">
      <div class="flex flex-col gap-2">
        <h3
          class="text-base font-medium text-black xl:text-[14px] truncate break-all"
        >
          {{ notification?.theme }}
        </h3>
        <p class="text-[14px] text-gray-64 xl:text-[12px] desc break-all">
          {{ notification?.message }}
        </p>
      </div>
      <nuxt-link
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
        v-if="notification?.type === 1"
        :to="
          localePath(
            `/profile/${
              notification?.user_id === $store.state.userInfo?.id
                ? 'customer'
                : 'freelancer'
            }/order/view/${notification?.link}`
          )
        "
        >{{ $store.state.translations["profile.goto-order"] }} <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.332 8.33333L9.9987 5M9.9987 5L6.66537 8.33333M9.9987 5L9.9987 15"
          stroke="#5C46E6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg></nuxt-link
      >
      <nuxt-link
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
        v-if="notification?.type === 2"
        :to="localePath('/directory')"
        >{{ $store.state.translations["profile.formula-reyt"] }}<svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.332 8.33333L9.9987 5M9.9987 5L6.66537 8.33333M9.9987 5L9.9987 15"
          stroke="#5C46E6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg></nuxt-link
      >
      <nuxt-link
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
        v-if="notification?.type === 3"
        :to="
          localePath(
            `/profile/${
              notification?.user_id === $store.state.userInfo?.id
                ? 'customer'
                : 'freelancer'
            }/order/view/${notification?.link}`
          )
        "
        >{{ $store.state.translations["profile.goto-order"] }} <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.332 8.33333L9.9987 5M9.9987 5L6.66537 8.33333M9.9987 5L9.9987 15"
          stroke="#5C46E6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg></nuxt-link
      >
      <button
        v-if="notification?.type === 4"
        @click="openModal"
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
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
<!--            <nuxt-link-->
<!--              :to="localePath(`/profile/customer/order/view/${notification?.link}`)"-->
<!--              class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"-->
<!--              >{{ $store.state.translations["profile.read"] }}-->
<!--              <svg-->
<!--                width="20"-->
<!--                height="20"-->
<!--                viewBox="0 0 20 20"-->
<!--                fill="none"-->
<!--                xmlns="http://www.w3.org/2000/svg"-->
<!--              >-->
<!--                <path-->
<!--                  d="M13.332 8.33333L9.9987 5M9.9987 5L6.66537 8.33333M9.9987 5L9.9987 15"-->
<!--                  stroke="#5C46E6"-->
<!--                  stroke-width="1.5"-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                />-->
<!--              </svg>-->
<!--            </nuxt-link>-->
    </div>
    <NotificationShow
      ref="notificationShow"
      :notification="notification"
      :date="dateFormat"
    />
  </div>
</template>
<script>
import moment from "moment/moment";
import NotificationShow from "@/components/modals/NotificationShow.vue";

export default {
  components: { NotificationShow },
  props: ["notification"],
  name: "AlertsCard",
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
};
</script>
<style lang="css">
.desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  /* text-align: left; */
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>
