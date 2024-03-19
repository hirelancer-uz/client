<template lang="html">
  <div>
    <OrderTemplate :specialities="specialities" :title="$store.state.translations['order.edit-order']"/>
  </div>
</template>
<script>
import OrderTemplate from "@/components/profile/orders/OrderTemplate.vue";

export default {
  name: 'order-edit-page',
  components: { OrderTemplate },
  async asyncData({ store }) {
    const [specialitiesData] = await Promise.all([
      store.dispatch("fetchSpecialities/getSpecialities"),
    ]);
    const specialities = specialitiesData.content;
    return {
      specialities,
    };
  },
};
</script>
