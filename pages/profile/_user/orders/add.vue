<template lang="html">
  <div>
    <OrderTemplate :specialities="specialities" :title="$store.state.translations['header.add-order']" />
  </div>
</template>
<script>
import OrderTemplate from "@/components/profile/orders/OrderTemplate.vue";

export default {
  name: 'order-page',
  components: { OrderTemplate },
  async asyncData({ store,i18n }) {
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
};
</script>
