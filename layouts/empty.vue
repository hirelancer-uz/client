<template lang="html">
  <div>
    <Nuxt />
    <Loader v-if="loading" />
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";

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
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },
  async fetch() {
    const translations = await  this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          Lang: this.$i18n.locale,
        },
      })
    await this.$store.commit("getTranslations", translations?.translates);
  },
  mounted() {
    if (localStorage.getItem("auth-token")) {
      this.$router.push(this.localePath("/"));
    } else {
      this.loading = false;
    }
  },
  watch: {
    async currentLang() {
      const translations = await this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          Lang: this.$i18n.locale,
        },
      })
      await this.$store.commit("getTranslations", translations?.translates);
    },
  },
  components: {
    Loader,
  },
};
</script>
<style lang="css"></style>
