<template lang="html">
  <div
    class="buttons flex gap-6 xl:overflow-x-scroll xl:mx-[-16px] scroll-none xl:border-[0] xl:border-b-[2px] xl:border-solid xl:border-apple-grey"
  >
    <button
      v-if="$route.params.user == 'customer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/pending/status`)"
      :class="{ active: $route.params.status == 'pending' }"
      class="xl:ml-4 px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Ожидание модерации
      <span class="xl:hidden"
        >({{
          $store.state.orderCounts?.customer_orders_counts?.in_moderation || 0
        }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{ $store.state.orderCounts?.customer_orders_counts?.in_moderation || 0 }}</span
      >
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/active/status`)"
      :class="{ active: $route.params.status == 'active' }"
      class="xl:ml-4 px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Активные заказы
      <span class="xl:hidden"
        >({{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.active || 0
        }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.active || 0
        }}</span
      >
    </button>

    <button
      v-if="$route.params.user == 'freelancer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/offers/status`)"
      :class="{ active: $route.params.status == 'offers' }"
      class="px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Ожидания подверждения
      <span class="xl:hidden"
        >({{ $store.state.orderCounts[`freelancer_orders_counts`]?.waiting || 0 }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{ $store.state.orderCounts[`freelancer_orders_counts`]?.waiting || 0 }}</span
      >
    </button>
    <button
      v-if="$route.params.user == 'customer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/in_progress/status`)"
      :class="{ active: $route.params.status == 'in_progress' }"
      class="px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      В процессе
      <span class="xl:hidden"
        >({{ $store.state.orderCounts[`customer_orders_counts`]?.in_process || 0 }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{ $store.state.orderCounts[`customer_orders_counts`]?.in_process || 0 }}</span
      >
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/completed/status`)"
      :class="{ active: $route.params.status == 'completed' }"
      class="px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      {{ $route.params.user == "customer" ? "Выполненные" : "Завершено" }}
      <span class="xl:hidden"
        >({{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.done || 0
        }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.done || 0
        }}</span
      >
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/cancel/status`)"
      :class="{ active: $route.params.status == 'cancel' }"
      class="xl:mr-4 px-6 py-3 xl:px-0 gap-[6px] xl:pb-2 xl:relative xl:bg-white rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey whitespace-nowrap text-base text-grey-64 xl:text-grey-40 font-medium xl:whitespace-nowrap xl:border-[0] xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Отмена
      <span class="xl:hidden"
        >({{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.canceled || 0
        }})</span
      >
      <span
        class="xl:flex hidden h-6 w-6 items-center justify-center bg-grey-8 rounded-full"
        >{{
          $store.state.orderCounts[`${$route.params.user}_orders_counts`]?.canceled || 0
        }}</span
      >
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--main-color);
  color: var(--main-color);
  background-color: #fff;
}

@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
  .buttons button::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
  .buttons .active::after {
    background: var(--Light-purple, #5d5fef);
  }
  .buttons .active span {
    background: var(--main-color);
    color: white;
  }
}
</style>
