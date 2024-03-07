<template>
  <div class="portfolio xl:px-4 xl:pt-6">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="head flex flex-col gap-4 xl:gap-6 mt-8 xl:mt-0">
      <div class="flex justify-between xl:hidden">
        <h3 class="text-[24px] text-black font-semibold">
          {{ $store.state.translations["header.orders"] }}
        </h3>
        <button
          v-if="$route.params.user == 'customer'"
          @click="$router.push('/profile/orders/add')"
          class="bg-blue flex justify-center gap-2 h-[60px] w-[220px] px-6 rounded-[8px] text-white text-base text-medium items-center"
        >
          {{ $store.state.translations["header.add-order"] }}
        </button>
      </div>
      <div>
        <div
          class="border border-solid border-grey-8 rounded-[12px] h-12 px-5 w-full gap-4 items-center hidden xl:flex"
        >
          <input
            :placeholder="$store.state.translations[`freelancers.search`]"
            type="text"
            class="w-full h-full text-base"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.875 8.58366C15.875 12.6107 12.6104 15.8753 8.58329 15.8753C4.55622 15.8753 1.29163 12.6107 1.29163 8.58366C1.29163 4.55658 4.55622 1.29199 8.58329 1.29199C12.6104 1.29199 15.875 4.55658 15.875 8.58366ZM8.58329 17.1253C13.3007 17.1253 17.125 13.3011 17.125 8.58366C17.125 3.86623 13.3007 0.0419922 8.58329 0.0419922C3.86586 0.0419922 0.041626 3.86623 0.041626 8.58366C0.041626 13.3011 3.86586 17.1253 8.58329 17.1253ZM16.1086 15.2251C15.8645 14.981 15.4688 14.981 15.2247 15.2251C14.9806 15.4691 14.9806 15.8649 15.2247 16.1089L16.8913 17.7756C17.1354 18.0197 17.5311 18.0197 17.7752 17.7756C18.0193 17.5315 18.0193 17.1358 17.7752 16.8917L16.1086 15.2251Z"
              fill="#020105"
            />
          </svg>
        </div>
      </div>
      <div class="flex justify-between items-center gap-6">
        <OrdersTab />
        <div
          class="border border-solid border-grey-8 rounded-[12px] h-12 px-5 w-full flex gap-4 items-center xl:hidden"
        >
          <input
            :placeholder="$store.state.translations[`freelancers.search`]"
            type="text"
            class="w-full h-full text-base"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.875 8.58366C15.875 12.6107 12.6104 15.8753 8.58329 15.8753C4.55622 15.8753 1.29163 12.6107 1.29163 8.58366C1.29163 4.55658 4.55622 1.29199 8.58329 1.29199C12.6104 1.29199 15.875 4.55658 15.875 8.58366ZM8.58329 17.1253C13.3007 17.1253 17.125 13.3011 17.125 8.58366C17.125 3.86623 13.3007 0.0419922 8.58329 0.0419922C3.86586 0.0419922 0.041626 3.86623 0.041626 8.58366C0.041626 13.3011 3.86586 17.1253 8.58329 17.1253ZM16.1086 15.2251C15.8645 14.981 15.4688 14.981 15.2247 15.2251C14.9806 15.4691 14.9806 15.8649 15.2247 16.1089L16.8913 17.7756C17.1354 18.0197 17.5311 18.0197 17.7752 17.7756C18.0193 17.5315 18.0193 17.1358 17.7752 16.8917L16.1086 15.2251Z"
              fill="#020105"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="list gap-4 mt-6 mb-[40px] flex flex-col" v-if="loading">
      <a-skeleton
        :paragraph="false"
        class="loading-card"
        v-for="elem in [1, 2]"
        :key="elem"
      />
    </div>
    <div
      class="list flex flex-col gap-4 mt-6 mb-[40px] xl:mt-4"
      v-if="$route.params.user == 'customer' && !loading"
    >
      <CompletedOrdersCard
        v-for="order in orders"
        :order="order"
        :key="order?.id"
      />
    </div>
    <!-- <div
      class="list grid grid-cols-2 gap-4 mt-6 mb-[40px] xl:grid-cols-1"
      v-if="
        $route.params.user == 'customer' &&
        !loading &&
        $route.params.status == 'completed'
      "
    >
      <ComplitedCard v-for="order in orders" :order="order" :key="order?.id" />
    </div> -->
    <div
      class="list flex flex-col gap-4 mt-6 mb-[40px] xl:hidden"
      v-if="$route.params.user == 'freelancer' && !loading"
    >
      <ProfileOrdersCard
        v-for="order in orders"
        :order="order"
        :key="order?.id"
      />
    </div>
    <div
      class="list flex-col gap-4 mt-6 mb-[40px] xl:flex hidden"
      v-if="$route.params.user == 'freelancer' && !loading"
    >
      <ProfileOrdersCard
        v-for="order in orders"
        :order="order"
        :key="order?.id"
      />

      <!-- <ProfileOrderCardMobile v-for="order in orders" :order="order" :key="order?.id" /> -->
    </div>
    <div
      class="w-full h-[300px] flex justify-center items-center"
      v-if="!loading && orders.length == 0"
    >
      <a-empty />
    </div>
    <div
      v-if="$route.params.user == 'customer'"
      class="fixed-btns fixed bottom-0 w-full z-[7] py-4 px-4 bg-white left-0 hidden xl:flex flex-col gap-2"
    >
      <button
        @click="$router.push('/profile/orders/add')"
        class="border border-solid border-blue bg-blue rounded-[12px] h-[52px] w-full flex justify-center items-center text-[14px] text-white font-medium gap-2"
      >
        {{ $store.state.translations["header.add-order"] }}
      </button>
    </div>
    <div>
      <VPagination
        :totalPage="totalPage"
        @getData="__GET_ORDERS"
        :pageSize="pageSize"
      />
    </div>
    <!-- </ProfileLayout> -->
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import ProfileOrdersCard from "@/components/profile/orders/ProfileOrdersCard.vue";
import ProfileOrderCardMobile from "@/components/profile/orders/ProfileOrderCardMobile.vue";
import OrdersTab from "@/components/profile/orders/OrdersTab.vue";
import Loader from "@/components/Loader.vue";
import CompletedOrdersCard from "@/components/profile/orders/CompletedOrdersCard.vue";
import ComplitedCard from "@/components/profile/orders/ComplitedCard.vue";

export default {
  layout: "profileLayout",
  data() {
    return {
      orders: [],
      loading: true,
      pageSize: 5,
      totalPage: 0,
      status: {
        customer: {
          active: 1,
          completed: 4,
          pending: 0,
          cancel: 6,
          in_progress: 2,
        },
        freelancer: {
          active: 2,
          offers: 1,
          completed: 4,
          cancel: 5,
        },
      },
    };
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  computed: {
    handleUser() {
      return this.$store.state.userInfo["id"];
    },
  },
  async mounted() {
    if (this.$store.state.userInfo["id"]) await this.__GET_ORDERS();
    this.$store.commit("setPageData", {
      title: "Проект",
      center: false,
      info: "",
      link: true,
    });
  },
  methods: {
    async __GET_ORDERS() {
      const params = {
        status: this.status[this.$route.params.user][this.$route.params.status],
        page_size: this.pageSize,
        ...this.$route.query,
      };
      this.$route.params.user == "customer"
        ? (params.client = this.$store.state.userInfo["id"])
        : (params.freelancer = this.$store.state.userInfo["id"]);
      try {
        const data = await this.$store.dispatch("fetchOrders/getMyOrders", {
          params: { ...params },
        });
        this.orders = data?.data;
        this.totalPage = data?.meta?.total;
        if (this.$route.params.status == "completed") {
          this.orders = this.orders.filter((elem) => elem?.end_of_execution);
        }
        if (this.$route.params.status == "pending") {
          this.orders = this.orders.filter((elem) => !elem?.end_of_execution);
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    handleUser(val) {
      if (val) this.__GET_ORDERS();
    },
  },
  components: {
    ProfileLayout,
    PortfolioCard,
    ProfileOrdersCard,
    OrdersTab,
    Loader,
    CompletedOrdersCard,
    ProfileOrderCardMobile,
    ComplitedCard,
  },
};
</script>
<style lang="css" scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 230px;
  border-radius: 16px;
}
@media (max-width: 1200px) {
  .fixed-btns {
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);
  }
}
</style>
