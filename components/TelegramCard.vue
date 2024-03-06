<template lang="html">
  <div class="telegram grid telegram-card relative rounded-2xl bg-bg-grey px-4">
    <div class="py-4 flex flex-col justify-between">
      <h6 class="text-base font-medium text-black">
        {{ $store.state.translations["header.sub-telega"] }}
      </h6>
      <a class="text-blue text-[14px] font-medium font-tt underline" href="">{{
        $store.state.translations["header.more"]
      }}</a>
    </div>
    <div>
      <img
        loading="lazy"
        class="absolute bottom-0"
        src="@/assets/images/telegram.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.telegram {
  grid-template-columns: 3fr 2fr;

  height: 120px;
}
</style>
