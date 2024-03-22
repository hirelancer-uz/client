<script>
import TelegramDirectory from "@/components/icons/telegram-directory.vue";
import TgDirectoryBanner from "@/components/icons/tg-directory-banner.vue";

export default {
  name: "directory-banner",
  components: {TgDirectoryBanner, TelegramDirectory },
};
</script>

<template>
  <div class="relative px-6 py-6 rounded-[24px] banner flex flex-col gap-6">
    <TgDirectoryBanner class="absolute bottom-0 right-[50px]" />
    <h4 class="text-white text-[20px] font-medium">Свяжитесь с нами если у вас есть какие-либо вопросы</h4>
    <div class="flex gap-6">
      <a class="bg-white rounded-[12px] h-12 px-5 text-main-color text-base font-semibold flex gap-2 items-center justify-center" href="">Телеграмм <TelegramDirectory />
        </a>
      <a class="text-white  h-12 text-base font-semibold flex items-center" href="">@helphirelancer</a>
    </div>
  </div>
</template>

<style scoped lang="css">
.banner {
  background: linear-gradient(97deg, #5C46E5 -4.09%, #907EFF 106.19%);
}


</style>
