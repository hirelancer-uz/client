<template lang="html">
  <div class="layout w-full min-h-[100vh] flex flex-col overflow-hidden">
    <div
      class="fixed top-0 left-0 w-full z-50 header-container"
      ref="navScroll"
    >
      <MobileHeader class="xl:block" />
    </div>
    <TheHeader class="xl:hidden" />
    <div
      v-if="'index' == $route.name?.split('___')[0]"
      class="header-bg xl:block hidden w-full h-[104px]"
    ></div>
    <div
      v-if="
        $route.name?.includes('profile') && $route.name?.includes('settings')
      "
      class="header-bg xl:block hidden w-full xl:h-[145px]"
    ></div>
    <div v-else class="header-bg xl:block hidden w-full xl:h-[111px]"></div>
    <div
      class="profile-layout max-w-[1680px] w-full mx-auto xl:mx-0 pt-12 xl:pt-0 xl:pb-6 pb-[100px] flex-auto"
    >
      <div class="profile-grid">
        <PersonalBlock
          :profile="$route.name?.includes('profile')"
          class="xl:hidden"
          :userInfo="$store.state.userInfo"
        />

        <PersonalBlockMobile
          class="hidden"
          :class="{
            'xl:flex':
              $route.path == '/profile/freelancer' ||
              $route.path == '/profile/customer',
          }"
          :user="false"
          :freelancer="$store.state.userInfo"
        />
        <div
          class="min-w-0"
          :class="{
            'xl:hidden':
              $route.path == '/profile/freelancer' ||
              $route.path == '/profile/customer',
          }"
        >
          <ProfileTab v-if="$route.name?.includes('profile')" />
          <Nuxt />
        </div>
      </div>
      <Loader v-if="loading" />
    </div>
    <TheFooter />
    <div v-for="route in routes">
      <BottomBar v-if="route == $route.path" />
    </div>
  </div>
</template>
<script>
import PersonalBlock from "@/components/profile/PersonalBlock.vue";
import PersonalBlockMobile from "@/components/profile/PersonalBlockMobile.vue";
import ProfileTab from "@/components/profile/ProfileTab.vue";
import Loader from "@/components/Loader.vue";
import MobileHeader from "../components/layouts/MobileHeader.vue";
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BottomBar from "../components/BottomBar.vue";
import translationsApi from "@/store/fetchTranslations";

export default {
  name: "ProfileLayout",
  middleware: "auth",
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
        "/freelancers",
        "/profile/freelancer",
        "/",
        "/orders",
        "/profile/customer",
      ],
      loading: false,
    };
  },
  computed: {
    authHandle() {
      return this.$store.state.auth;
    },
    currentLang() {
      return this.$i18n.locale;
    },
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
    this.userInfo = siteInfo;
    this.$store.commit("getTranslations", translations?.translates);
    this.$store.commit("getSiteInfo", siteInfo?.content);
  },
  async mounted() {
    this.headerScrollHandle();
    if (localStorage.getItem("auth-token")) {
      this.__GET_USER();
      try {
        this.loading = true;
        const [orderCountsData] = await Promise.all([
          this.$store.dispatch("fetchOrders/getOrderCounts"),
        ]);
        this.$store.commit("getOrderCounts", orderCountsData.content);
        this.loading = false;
      } finally {
        this.loading = false;
      }
    } else {
      this.$store.commit("getUserInfo", {});
      this.$router.push(this.localePath("/"));
    }
  },
  methods: {
    async __GET_USER() {
      const userInfoData = await this.$store.dispatch("fetchAuth/getUserInfo");
      this.$store.commit("getUserInfo", userInfoData);
    },
    headerScrollHandle() {
      let header = this.$refs.navScroll;
      window.addEventListener(
        "scroll",
        () => {
          let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (
            scrollTop > this.lastScrollTop &&
            document.documentElement.scrollTop >= 300
          ) {
            header.style.top = "-54px";
          } else {
            header.style.top = "0";
          }
          this.lastScrollTop = scrollTop;
        },
        { passive: true }
      );
    },
  },
  watch: {
    authHandle() {
      if (!localStorage.getItem("auth-token")) {
        this.$router.push(this.localePath("/"));
      }
    },
    async currentLang() {
      // const translations = await this.$store.dispatch("fetchTranslations/getTranslations", {
      //   headers: {
      //     Lang: this.$i18n.locale,
      //   },
      // })
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
  components: {
    PersonalBlock,
    ProfileTab,
    PersonalBlockMobile,
    Loader,
    MobileHeader,
    TheHeader,
    TheFooter,
    BottomBar,
  },
};
</script>
<style lang="css" scoped>
.header-container {
  transition: 0.3s;
}

.profile-grid {
  display: grid;
  grid-template-columns: 408px 1fr;
  grid-gap: 37px;
}

@media (max-width: 1200px) {
  .profile-grid {
    grid-template-columns: 1fr;
    grid-gap: 37px;
  }
}

@media (max-width: 1680px) {
  .profile-layout {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
