<template>
  <div class="master container xl:pt-4">
    <div class="sort__comments">
      <a-select v-model="currentStatus" class="xl:w-full">
        <a-select-option
          :value="item.value"
          :key="index"
          v-for="(item, index) in status"
        >
          {{ item.label }}
        </a-select-option>
      </a-select>
    </div>
    <div
      class="personal-information items mt-8 xl:mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4 mb-[40px]"
      v-if="loading"
    >
      <a-skeleton
        :paragraph="false"
        class="loading-card"
        v-for="elem in [1, 2, 3, 4, 5, 6]"
        :key="elem"
      />
    </div>
    <div
      class="personal-information items mt-8 xl:mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4 mb-[40px]"
      v-if="comments.length > 0 && !loading"
    >
      <CommentsCard
        v-for="feedback in comments"
        :key="feedback?.id"
        :feedback="feedback"
      />
    </div>
    <div
      v-if="comments.length == 0 && !loading"
      class="personal-information items mt-8 xl:mt-6 grid grid-cols-2 xl:grid-cols-1 gap-4 mb-[40px]"
    >
      <CoomentsEmptyCard />
      <CoomentsEmptyCard />
      <!-- <div
    class="personal-information items mt-8 xl:mt-6 grid grid-cols-2 gap-4 mb-[40px] xl:grid-cols-1 xl:gap-[16px] xl:mb-[16px] xl:mt-[16px]"
  >
    <CommentsCard />
    <CommentsCard />
    <CommentsCard />
    <CommentsCard /> -->
    </div>
    <VPagination
      :totalPage="totalPage"
      @getData="__GET_COMMENTS"
      :pageSize="pageSize"
    />
  </div>
</template>

<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import CommentsCard from "@/components/profile/CommentsCard.vue";
import VPagination from "@/components/VPagination.vue";
import CoomentsEmptyCard from "@/components/profile/portfolio/CoomentsEmptyCard.vue";

export default {
  layout: "profileLayout",

  components: {
    CoomentsEmptyCard,
    ProfileLayout,
    CommentsCard,
    VPagination,
  },
  data() {
    return {
      loading: false,
      comments: [],
      currentStatus: "positive",
      status: [
        {
          label: "Ijobiy izohlar",
          value: "positive",
        },
        {
          label: "Qoniqarsiz izohlar",
          value: "negative",
        },
      ],
      totalPage: 0,
      pageSize: 6,
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
    this.__GET_COMMENTS();
    this.$store.commit("setPageData", {
      title: "Отзывы",
      center: false,
      info: "",
      link: true,
    });
  },
  methods: {
    async __GET_COMMENTS() {
      try {
        this.loading = true;
        const commentsData = await this.$store.dispatch(
          "fetchOrders/getFreelancerComments",
          {
            params: {
              freelancer: this.$store.state.userInfo["id"],
              page_size: this.pageSize,
              ...this.$route.query,
            },
          }
        );
        this.comments = commentsData.content.data;
        this.totalPage = commentsData.content.total;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    handleUser(val) {
      if (val) this.__GET_COMMENTS();
    },
    async currentStatus(val) {
      if (this.$route.query?.type != val)
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, type: val },
        });
      if (val == this.$route.query.type) this.__GET_COMMENTS();
    },
  },
};
</script>

<style scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 384px;
}
.sort__comments {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -50px;
}
:deep(.ant-select) {
  width: 216px;
}
:deep(.ant-select-selection) {
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  height: 50px;
  display: flex;
  align-items: center;
}
:deep(.ant-select-selection__rendered) {
  margin-left: 16px;
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
@media (max-width: 1200px) {
  .sort__comments {
    margin-top: 0;
  }
  :deep(.ant-select) {
    width: 100%;
  }
  :deep(.ant-select-selection) {
    height: 48px;
  }
}
</style>
