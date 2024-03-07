<template>
  <div
    class="banner grid h-[200px] xl:h-[138px] bg-bg-grey rounded-3xl xl:rounded-xl px-[60px] xl:px-4 xl:overflow-hidden relative"
  >
    <div class="left h-full flex items-center">
      <div
        class="flex justify-between items-center xl:items-start xl:flex-col xl:gap-2"
      >
        <h3
          class="text-[27px] text-black font-bold xl:text-base xl:max-w-[75%] relative z-30"
        >
          {{ $store.state.translations["order.banner-title-1"] }}
          <span class="text-blue">{{
            $store.state.translations["order.banner-title-2"]
          }}</span>
          <span class="text-blue">{{
            $store.state.translations["order.banner-title-3"]
          }}</span>
          {{ $store.state.translations["order.banner-title-4"] }}
        </h3>
        <p
          class="text-xs text-black xl:text-[12px] xl:max-w-[50%] relative z-30"
        >
          {{ $store.state.translations["order.banner-sub"] }}
        </p>
      </div>
    </div>
    <div
      class="right h-full xl:absolute xl:w-[162px] xl:h-[140px] xl:right-[-26px] bottom-0 xl:flex xl:items-end"
    >
      <img
        class="h-full xl:h-[114px] xl:object-cover"
        src="@/assets/images/orders-banner.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.banner {
  grid-template-columns: 5fr 3fr;
  gap: 100px;
}
@media (max-width: 1200px) {
  .banner {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
