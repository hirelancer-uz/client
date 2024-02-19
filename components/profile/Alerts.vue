<template lang="html">
  <div class="alerts">
    <div class="flex justify-between">
      <h1
        class="text-black text-[24px] font-semibold flex gap-2 xl:text-[18px] xl:w-full xl:justify-between"
      >
        Оповещение
      </h1>
      <nuxt-link
        class="flex gap-[6px] text-blue text-base font-medium xl:hidden"
        to="/orders"
        >Ko’proq ko’rish
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
          /></svg
      ></nuxt-link>
    </div>
    <div
      class="alerts-list grid grid-cols-4 gap-2 mt-6 xl:flex xl:overflow-x-scroll xl:mt-4 xl:mx-[-16px]"
      v-if="true"
    >
      <AlertsCard class="xl:ml-4" />
      <AlertsCard />
      <AlertsCard />
      <AlertsCard class="xl:mr-4" />
    </div>
    <div v-else class="h-[208px] flex justify-center items-center">
      <p class="text-[18px] text-grey-64 font-medium">Afuski ma’lumot topilmadi!</p>
    </div>
  </div>
</template>
<script>
import AlertsCard from "./AlertsCard.vue";

export default {
  components: { AlertsCard },
};
</script>
<style lang="css" scoped>
@media (max-width: 1200px) {
  .alerts-list::-webkit-scrollbar {
    display: none;
  }
}
</style>
