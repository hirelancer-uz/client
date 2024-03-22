<script>
import DropArrow from "@/components/icons/drop-arrow.vue";

export default {
  name: "directory-menu",
  components: { DropArrow },
};
</script>

<template>
  <div class="py-4 flex flex-col gap-4 bg-[#FBFBFF] rounded-[24px]">
    <h3 class="px-6 text-grey-80 text-[20px] font-semibold">Категории</h3>
   <div class="px-4"> <span class="flex bg-grey-8 h-[1px] w-full"></span></div>
    <ul>
      <li>
        <nuxt-link  class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base" to="/directory/1">Вы новичок на сайте <DropArrow/> </nuxt-link>
      </li>
      <li>
        <nuxt-link  class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base " to="/directory/2">Аудио и Видео  <DropArrow/> </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.nuxt-link-active {
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}
.nuxt-link-active {
  color: var(--main-color);
}
:deep(.nuxt-link-active svg rect) {
  fill: var(--main-color);
}
:deep(.nuxt-link-active svg path) {
  fill: #fff;
}
</style>
