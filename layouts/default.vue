<template>
  <div class="layout W-100 min-h-[100vh] flex flex-col">
    <div
      class="fixed top-0 left-0 w-full z-50 header-container"
      ref="navScroll"
    >
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
      <BottomBar v-if="route == $route.name?.split('___')[0]" />
    </div>
  </div>
</template>
<script>
import BottomBar from "../components/BottomBar.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheHeader from "../components/layouts/TheHeader.vue";
export default {
  name: "defalut",
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
    const [translations, siteInfo] = await Promise.all([
      this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          Lang: this.$i18n.locale,
        },
      }),
      this.$store.dispatch("fetchSiteInfo/getSiteInfo", {
        headers: {
          Lang: this.$i18n.locale,
        },
      }),
    ]);

    this.$store.commit("getTranslations", translations?.translates);
    this.$store.commit("getSiteInfo", siteInfo?.content);
  },
  computed: {
    authCheck() {
      return this.$store.state.auth;
    },
    currentLang() {
      return this.$i18n.locale;
    },
  },
  async mounted() {
    this.headerScrollHandle();
    localStorage.getItem("auth-token")
      ? this.__GET_USER()
      : this.$store.commit("getUserInfo", {});
  },

  methods: {
    async __GET_USER() {
      const userInfoData = await this.$store.dispatch("fetchAuth/getUserInfo");
      this.$store.commit("getUserInfo", userInfoData);
    },
    headerScrollHandle() {
      let header = this.$refs.navScroll;
      window.addEventListener("scroll", () => {

        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (
          scrollTop > this.lastScrollTop &&
          document.documentElement.scrollTop >= 300
        ) {
          if (this.$route.name?.split("___")[0] != "index")
            header.style.top = "-54px";
        } else {
          header.style.top = "0";
        }
        this.lastScrollTop = scrollTop;
      }, { passive: true });
    },
  },

  watch: {
    authCheck(val) {
      if (!val && this.$route.name.includes("profile")) {
        this.$router.push(this.localePath("/"));
      }
    },
    async currentLang() {
      // const translations = await this.$store.dispatch(
      //   "fetchTranslations/getTranslations",
      //   {
      //     headers: {
      //       Lang: this.$i18n.locale,
      //     },
      //   }
      // );

      // await this.$store.commit("getTranslations", translations?.translates);
      const [translations, siteInfo] = await Promise.all([
      this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          Lang: this.$i18n.locale,
        },
      }),
      this.$store.dispatch("fetchSiteInfo/getSiteInfo", {
        headers: {
          Lang: this.$i18n.locale,
        },
      }),
    ]);
    this.$store.commit("getTranslations", translations?.translates);
    this.$store.commit("getSiteInfo", siteInfo?.content);
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

.header-container {
  transition: 0.4s;
}
</style>
