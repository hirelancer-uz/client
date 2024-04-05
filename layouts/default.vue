<template>
  <div class="layout W-100 min-h-[100vh] flex flex-col">
    <div class="fixed top-0 left-0 w-full z-50" ref="mHeader">
      <MobileHeader class="xl:block" />
    </div>
    <TheHeader class="xl:hidden" ref="header" />
    <div
      v-if="'index' == $route.name?.split('___')[0]"
      class="header-bg xl:block hidden w-full h-[104px] xl:h-[63px]"
    ></div>
    <div v-else class="header-bg xl:block hidden w-full xl:h-[111px]"></div>

    <div class="flex-auto">
      <Nuxt />
    </div>
    <TheFooter />
    <div v-for="route in routes">
      <BottomBar v-if="route == $route.name.split('___')[0]" />
    </div>
  </div>
</template>
<script>
import BottomBar from "../components/BottomBar.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheHeader from "../components/layouts/TheHeader.vue";

import translationsApi from "@/store/fetchTranslations.js";

export default {
  name: "defalut",
  head() {
    return {
      meta: [
        {
          name: "theme-color",
          content: "#5c46e5",
        },
      ],
    };
  },

  data() {
    return {
      routes: [
        "freelancers",
        "profile-freelancer",
        "index",
        "orders",
        "profile-customer",
      ],
      layoutHeight: 63,
    };
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Lang: this.$i18n.locale,
      },
    });

    await this.$store.commit("getTranslations", translations);
  },
  computed: {
    authCheck() {
      return this.$store.state.auth;
    },
    userCheck() {
      return this.$store.state.userInfo["id"];
    },
    currentLang() {
      return this.$i18n.locale;
    },
  },
  async mounted() {
    console.log(this)
    if (localStorage.getItem("auth-token")) {
      try {
        const [userInfoData] = await Promise.all([
          this.$store.dispatch("fetchAuth/getUserInfo"),
        ]);
        this.$store.commit("getUserInfo", userInfoData);
      } catch (e) {}
    } else {
      this.$store.commit("getUserInfo", {});
    }
  },
  watch: {
    // userCheck(val) {
    //   localStorage.removeItem("auth-token");
    // },
    authCheck(val) {
      if (!val && this.$route.name.includes("profile")) {
        this.$router.push(this.localePath("/"));
      }
    },
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Lang: this.$i18n.locale,
        },
      });
      await this.$store.commit("getTranslations", translations);
    },
  },
  components: { TheHeader, TheFooter, BottomBar, MobileHeader },
};
</script>
<style lang="css">
.layout {
  overflow: hidden;
  width: 100%;
}
</style>
