<template lang="html">
  <div
    class="registration pt-[130px] pb-[100px] xl:pt-20 w-full overflow-hidden xl:px-4 xl:pb-4"
  >
    <div class="2xl:container container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center">
        <UserInfo
          @sendRegister="sendRegister"
          :regions="regions"
          :specialities="specialities"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UserInfo from "../../components/registration/UserInfo.vue";

export default {
  layout: "empty",
  data() {
    return {};
  },
  async asyncData({ store,i18n }) {
    const [regionsData, freeLancersData] = await Promise.all([
      store.dispatch("fetchRegions/getRegions"),
      store.dispatch("fetchSpecialities/getSpecialities",{
        headers: {
          Lang: i18n.locale,
        },
      }),
    ]);
    const regions = regionsData.content;
    const specialities = freeLancersData.content;

    return {
      regions,
      specialities,
    };
  },
  methods: {
    sendRegister(form) {
      this.__POST_REGISTER(form);
    },
    async __POST_REGISTER(form) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postRegister", form);
        if (data.success) {
          const returnLink = localStorage.getItem("return_link2");
          returnLink
            ? await this.$router.push(this.localePath(returnLink))
            : await this.$router.push(this.localePath("/profile/freelancer"));
        }
      } catch (e) {

        this.$notification["error"]({
          message: "Error",
          description: e.response?.statusText,
        });
      }
    },
  },
  destroyed() {
    localStorage.removeItem("return_link2");
  },
  components: { UserInfo },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
