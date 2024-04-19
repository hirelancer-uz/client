<template lang="html">
  <div>
   <PortfolioTemplate :specialities="specialities"/>
  </div>
</template>
<script>
import PortfolioTemplate from "@/components/profile/portfolio/PortfolioTemplate.vue";
export default {
  name: 'portfolio-add',
  async asyncData({ store, i18n }) {
    const [specialitiesData] = await Promise.all([
      store.dispatch("fetchSpecialities/getSpecialities",{
        headers: {
          Lang: i18n.locale,
        },
      }),
    ]);
    const specialities = specialitiesData.content;
    return {
      specialities,
    };
  },
  components: {
    PortfolioTemplate
  }
}
</script>
