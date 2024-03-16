<template lang="html">
  <div>
    <CustomerOrder
      v-if="$route.params.user == 'customer'"
      :order="order"
      :loading="loading"
      @selected="selected"
      :reasons="reasons"
    />
    <FreelancerOrder
      v-if="$route.params.user == 'freelancer'"
      :order="order"
      :loading="loading"
      @selected="selected"
      :reasons="reasons"
    />
    <Loader v-if="loading"/>
  </div>
</template>
<script>
import CustomerOrder from "@/components/profile/orders/CustomerOrder.vue";
import FreelancerOrder from "@/components/profile/orders/FreelancerOrder.vue";
import moment from "moment";
import Loader from "@/components/Loader.vue";
export default {
  data() {
    return {
      order: {},
      loading: true,
    };
  },
  async asyncData({ store }) {
    try {
      const [reasonsData] = await Promise.all([
        store.dispatch("fetchReasons/getReasons"),
      ]);
      const reasons = reasonsData.content;
      return {
        reasons,
      };
    } catch (e) {}
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async mounted() {
    this.__GET_ORDERS();
    this.$store.commit("setPageData", {
      title: `Заказ: #${this.$route.params.id}`,
      center: false,
      info: moment(this.order.created_at).format("DD.MM.YYYY | HH:mm"),
      link: true,
    });
  },
  methods: {
    selected() {
      this.__GET_ORDERS();
    },
    async __GET_ORDERS() {
      try {
        const data = await this.$store.dispatch("fetchOrders/getOrderById", {
          id: this.$route.params.id,
        });
        this.order = data?.content;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: {
    CustomerOrder,
    FreelancerOrder,
    Loader
  },
};
</script>
<style lang="css" scoped></style>
