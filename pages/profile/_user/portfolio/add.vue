<template lang="html">
  <div>
   <PortfolioTemplate :specialities="specialities"/>
  </div>
</template>
<script>
import PortfolioTemplate from "@/components/profile/portfolio/PortfolioTemplate.vue";
export default {
  name: 'portfolio-add',
  async asyncData({ store }) {
    const [specialitiesData] = await Promise.all([
      store.dispatch("fetchSpecialities/getSpecialities"),
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
