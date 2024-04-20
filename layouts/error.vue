<template lang="html">
  <div class="flex items-center justify-center h-[80vh] xl:h-[70vh] xl:mt-10">
    <div class="body flex flex-col items-center h-full justify-center gap-16">
      <!--      <h2 class="font-400 text-[120px] xl:text-[100px] text-black">404</h2>-->
      <p class="text-black text-[24px] xl:text-base font-regular ">
        Afsuski bunday sahifa topilmadi 😔
      </p>
      <div class="flex justify-center items-center">
        <IconsIconMummy class="absolute xl:w-[50px] xl:h-[200px]" />
        <IconsIcon404 class="xl:w-[400px] xl:h-[200px]"  />
      </div>

      <nuxt-link
        class="h-[60px] w-[246px] flex justify-center items-center rounded-[12px] bg-main-color text-base font-semibold text-white hover:text-white"
       :to="localePath('/')"
        >Bosh sahifaga qayting
      </nuxt-link>
    </div>
  </div>
</template>
<script>

export default {
  head() {
    return {
      title: this.$store.state?.siteInfo?.title,
      meta: [
        {
          name: "theme-color",
          content: "#5c46e5",
        },
      ],
    };
  },
}