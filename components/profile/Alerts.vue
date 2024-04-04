<template>
  <div class="alerts">
    <div class="flex justify-between">
      <h1
        class="text-black text-[24px] font-semibold flex gap-2 xl:text-[18px] xl:w-full xl:justify-between"
      >
        {{ $store.state.translations["profile.notifs"] }}
      </h1>
      <nuxt-link
        class="flex gap-[6px] text-blue text-base font-medium xl:hidden"
       :to="localePath('/orders')"
        >{{ $store.state.translations["profile.view-more"] }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 16L18 12M18 12L14 8M18 12L6 12"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
    <div class="xl:hidden">
      <div class="alert-swiper swiper mt-6 xl:hidden" v-show="notifications?.length > 0">
        <div class="swiper-wrapper">
          <div
              class="swiper-slide"
              v-for="(notification, index) in notifications"
              :key="notification?.id"
          >
            <AlertsCard
                :class="{
              'xl:ml-4': index === 0 || notifications?.length - 1 === index,
            }"
                :notification="notification"
            />
          </div>
        </div>
      </div>

    </div>

    <div  class="alerts-list gap-2 mt-6 hidden xl:flex xl:overflow-x-scroll xl:mt-4 xl:mx-[-16px]"
          v-show="notifications?.length > 0"
    >
      <AlertsCard
        v-for="(notification, index) in notifications"
        :key="notification?.id"
        :class="{
          'xl:ml-4': index === 0,
          'xl:mr-4': notifications?.length - 1 == index
        }"
        :notification="notification"
      />
    </div>
    <div
        v-if="!loading && notifications?.length == 0"
      class="h-[208px] xl:h-[111px] flex justify-center items-center mb-[-24px]"
    >
      <VEmpty />
    </div>
  </div>
</template>
<script>
import AlertsCard from "./AlertsCard.vue";
import VEmpty from "@/components/profile/VEmpty.vue";
import EventsCard from "@/components/profile/EventsCard.vue";
import { Navigation, Swiper } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  props: ["notifications", "loading"],
  mounted() {
    const swiper = new Swiper(".alert-swiper", {
      slidesPerView: 4,
      spaceBetween: 8,
      modules: [Navigation],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
    });
  },
  components: { EventsCard, AlertsCard, VEmpty },
};
</script>
<style lang="css">
@media (max-width: 1200px) {
  .alerts-list::-webkit-scrollbar {
    display: none;
  }
}
</style>
