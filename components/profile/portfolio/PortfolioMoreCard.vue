<template lang="html">
  <div
    class="rounded-2xl border border-solid border-grey-8 bg-bg-grey px-[80px] py-[80px] cursor-pointer"
    @click="$router.push(`/freelancer/${$route.params.index}/portfolio`)"
  >
    <div
      class="flex flex-col justify-center items-center gap-2 w-full h-full rounded-2xl bg-white"
    >
      <h3 class="text-blue text-[48px] font-400">{{ count }}+</h3>
      <p class="text-base text-black font-medium">Barcha ishlarni korish</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["count"],
};
</script>
<style lang=""></style>
