<template lang="html">
  <div>
    <Nuxt />
  </div>
</template>
<script>
import translationsApi from "@/store/fetchTranslations";

export default {
  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });

    await this.$store.commit("getTranslations", translations);
  },
};
</script>
<style lang="css"></style>
