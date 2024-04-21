<template>
  <div class="place-order flex flex-col mb-[120px] xl:mb-[40px]">
    <h2
      class="text-black text-[32px] mb-8 font-semibold xl:text-[18px] xl:mb-[12px]"
    >
      {{ $store.state.translations["main.how-to-order"] }}
    </h2>
    <div class="list grid grid-cols-3 gap-4 xl:grid-cols-1 xl:gap-3">
      <PlaceOrderCard
        :title="$store.state.translations[`main.first-step`]"
        number="1"
      >
        <img src="../../assets/images/step-1.png" class="xl:w-[24px]" alt="" />
      </PlaceOrderCard>
      <PlaceOrderCard
        number="2"
        :title="$store.state.translations[`main.second-step`]"
      >
        <img src="../../assets/images/step-2.png" class="xl:w-[24px]" alt="" />
      </PlaceOrderCard>
      <PlaceOrderCard
        number="3"
        :title="$store.state.translations[`main.third-step`]"
      >
        <img src="../../assets/images/step-3.png" class="xl:w-[24px]" alt="" />
      </PlaceOrderCard>
    </div>
    <!-- <p class="text-base text-black text-center mt-4 xl:hidden">
      🛡 Xizmatda pulingiz xavfsiz. Ishni qabul qilganingizdan so'ng pudratchi to'lovni
      oladi. Agar frilanser ish bo'lmasa, biz pulni qaytarib beramiz
    </p> -->
  </div>
</template>
<script>
import PlaceOrderCard from "./PlaceOrderCard.vue";

export default {
  components: { PlaceOrderCard },
};
</script>
<style lang="css" scoped></style>
