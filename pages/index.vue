<template>

  <div class="pt-[40px] xl:pt-4 pb-[120px] xl:pb-[24px]">

    <div class="2xl:container container mx-auto xl:px-4 ">
      <Banner :specialities="specialities" />
      <PlaceOrder />
      <PlaceSpecialists :specialities="specialities" />
    </div>
    <Orders :orders="orders" :totalOrder="totalOrder" />
    <TheFreelancers
      :freelancers="freelancers"
      :totalFreelancer="totalFreelancer"
    />
    <!-- <OrderBanner /> -->
  </div>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Orders from "../components/home/Orders.vue";
import PlaceOrder from "../components/home/PlaceOrder.vue";
import PlaceSpecialists from "../components/home/PlaceSpecialists.vue";
import TheFreelancers from "../components/home/TheFreelancers.vue";
import OrderBanner from "../components/home/OrderBanner.vue";

export default {
  name: "IndexPage",
  middleware: "auth",
  async asyncData({ store,i18n }) {
    const [freeLancersData, specialitiesData, ordersData] = await Promise.all([
      store.dispatch("fetchFreelancers/getFreelancers", {
        params: {
          page_size: 12,
        },
      }),
      store.dispatch("fetchSpecialities/getSpecialities",{
        params: {
          limit: 12,
        },
        headers: {
          Lang: i18n.locale,
        },
      }),
      store.dispatch("fetchOrders/getOrders", {
        params: {
          page_size: 10,
        },
      }),
    ]);
    const freelancers = freeLancersData.data || [];
    const specialities = specialitiesData.content;
    const orders = ordersData.data;
    const totalOrder = ordersData?.meta?.total;
    const totalFreelancer = freeLancersData?.meta?.total;
    return {
      freelancers,
      specialities,
      orders,
      totalOrder,
      totalFreelancer,
    };
  },
  components: {
    Banner,
    PlaceOrder,
    PlaceSpecialists,
    Orders,
    TheFreelancers,
    OrderBanner,
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-progress-circle-path) {
  transition: stroke-dasharray 1s linear !important;
  stroke: red !important;
}
</style>
