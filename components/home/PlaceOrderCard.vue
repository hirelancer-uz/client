<template lang="html">
  <div
    class="card place-order-card px-8 py-8 border-grey-8 border-solid rounded-2xl border flex flex-col gap-[30px] xl:p-[16px] xl:gap-[12px]"
  >
    <h6 class="text-blue font-400 text-base xl:text-[10px] xl:leading-[150%]">
      {{ number }} - {{ $store.state.translations["main.step"] }}
    </h6>
    <div class="flex gap-[30px] xl:flex-col xl:gap-[12px]">
      <slot></slot>
      <p
        class="font-semibold text-[18px] text-black xl:text-[14px] xl:leading-[140%]"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "number"],
};
</script>
<style lang="css" scoped></style>
