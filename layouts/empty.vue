<template lang="html">
  <div>
    <Nuxt />
    <Loader v-if="loading" />
  </div>
</template>
<script>
import translationsApi from "@/store/fetchTranslations";
import Loader from "@/components/Loader.vue";

export default {
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
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });
    await this.$store.commit("getTranslations", translations);
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
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Lang: this.$i18n.locale,
        },
      });
      await this.$store.commit("getTranslations", translations);
    },
  },
  components: {
    Loader,
  },
};
</script>
<style lang="css"></style>
