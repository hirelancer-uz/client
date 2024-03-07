<template>
  <div
    class="orders similar-orders bg-bg-grey py-[64px] xl:py-6 xl:px-4 xl:bg-white xl:pt-0"
  >
    <div class="max-w-[1286px] mx-auto list-grid mb-8 xl:mb-4">
      <div class="flex justify-between">
        <h1 class="text-black text-[32px] font-semibold xl:text-[18px]">
          {{ $store.state.translations["order.similar-orders"] }}
        </h1>
        <nuxt-link
          class="flex gap-[6px] xl:gap-1 text-blue text-[18px] font-medium xl:text-[14px] leading-[19px] xl:items-center"
          to="/orders"
          >{{ $store.state.translations["order.view-more"] }}
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
    </div>
    <div class="max-w-[1286px] mx-auto list-grid">
      <div class="list flex flex-col gap-4">
        <OrderCard v-for="order in orders" :order="order" :key="order?.id" />
      </div>
      <div class="flex flex-col gap-4 xl:hidden">
        <TelegramCard class="bg-white" />
        <div class="relative rounded-2xl bg-white px-4 h-[371px]">
          <div class="py-4 flex flex-col justify-between">
            <h6 class="text-base font-medium text-black">
              {{ $store.state.translations["order.subscribe-telegram"] }}
            </h6>
            <a
              class="text-blue text-[14px] font-medium font-tt underline mt-[19px]"
              href=""
              >{{ $store.state.translations["order.more"] }}</a
            >
          </div>
          <div>
            <img
              class="absolute top-[39px] w-ful h-[332px] bottom-0"
              src="@/assets/images/telegram-card.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import OrderCard from "../home/OrderCard.vue";

export default {
  props: ["orders"],
  components: { OrderCard, TelegramCard },
};
</script>
<style lang="css" scoped>
.list-grid {
  display: grid;
  grid-template-columns: 1fr 332px;
  gap: 16px;
}
@media (max-width: 1200px) {
  .list-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
