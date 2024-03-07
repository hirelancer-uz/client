<template lang="html">
  <div
    class="registration pt-[130px] h-[100vh] xl:h-full w-full overflow-hidden xl:pt-20 relative xl:px-4"
  >
    <div class="2xl:container container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center xl:h-full">
        <UserType @sendCode="sendCode" :loading="loading" :codeInvalid="codeInvalid" @clearError="clearError" />
      </div>
    </div>
  </div>
</template>
<script>
import UserType from "@/components/registration/UserType.vue";

export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      codeInvalid: false
    };
  },
  methods: {
    sendCode(form) {
      this.__POST_SEND_CODE(form);
    },
    clearError() {
      this.codeInvalid = false
    },
    async __POST_SEND_CODE(form) {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchAuth/postLogin", form);
        if (data.success) {
          await localStorage.setItem("auth-token", data.content.accessToken);
          await this.__GET_USER();
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.codeInvalid = true
        }
        this.$notification["error"]({
          message: "Error",
          description: e.response?.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
    async __GET_USER() {
      try {
        let returnLink = localStorage.getItem("return_link");
        if (localStorage.getItem("auth-token")) {
          const userInfoData = await this.$store.dispatch("fetchAuth/getUserInfo");
          this.userInfo = userInfoData;
          this.$store.commit("getUserInfo", userInfoData);
          if (this.userInfo?.name) {
            returnLink
              ? await this.$router.push(returnLink)
              : await this.$router.push("/profile/freelancer");
          } else {
            localStorage.setItem("return_link2", returnLink);
            await this.$router.push("/registration/user-info");
          }
        }
      } catch (e) {}
    },
  },
  destroyed() {
    localStorage.removeItem("return_link");
  },
  components: { UserType },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
