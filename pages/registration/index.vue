<template>
  <div
    class="registration xl:h-full h-[100vh] w-full overflow-hidden xl:pt-20 xl:px-4 relative flex items-center justify-center"
  >
    <!-- <img class="absolute z-10" src="../../assets//images/register-img.png" alt=""> -->
    <div
      class="2xl:container container mx-auto h-full flex flex-col justify-center gap-4 relative z-20 xl:static"
    >
      <div class="flex justify-center">
        <NumberCheck @checkNumber="__POST_SEND_CODE" :loading="loading" />
      </div>
    </div>
  </div>
</template>
<script>
import NumberCheck from "@/components/registration/NumberCheck.vue";
import translationsApi from "@/store/fetchTranslations";
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async __POST_SEND_CODE(form) {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchAuth/postSendCode", form);
        if (data.success) {
          await this.setToLocaleTimer(data?.content?.in_seconds)
          await this.$router.push(this.localePath("/registration/user-type"));
        }
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response?.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
    setToLocaleTimer(value) {
      localStorage.setItem('in_seconds',value)
    }
  },
  components: { NumberCheck },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
.registration {
  /* background: linear-gradient(128.71deg, #000043 -1.76%, #585cc5 98.51%); */
}
</style>
