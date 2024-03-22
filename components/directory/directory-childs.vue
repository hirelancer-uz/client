<script>
import LinkArrow from "@/components/icons/link-arrow.vue";

export default {
  name: "directory-chils",
  components: { LinkArrow },
};
</script>

<template>
  <div>
    <h4 class="text-black text-[24px] font-smibold">Все вопросы</h4>
    <ul class="mt-6 flex flex-col gap-4">
      <li>
      <nuxt-link class="flex justify-between text-[20px] font-medium text-grey-80 underline pb-4 border-[0] border-b border-border-darik border-solid hover:underline" to="/directory/1/1">Вы новичок на сайте <LinkArrow/> </nuxt-link>
    </li>
      <li>
        <nuxt-link class="flex justify-between text-[20px] font-medium text-grey-80 underline pb-4 border-[0] border-b border-border-darik border-solid hover:underline" to="/directory/1/2" >Аудио и Видео  <LinkArrow/> </nuxt-link>
      </li>
      <li>
        <nuxt-link class="flex justify-between text-[20px] font-medium text-grey-80 underline pb-4 border-[0] border-b border-border-darik border-solid hover:underline" to="/directory/1/3">Программирование ПО <LinkArrow/> </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
ul {
  list-style: none;
}
</style>
