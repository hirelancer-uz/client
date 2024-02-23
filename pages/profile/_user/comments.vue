<template>
  <div class="master">
    <!-- <ProfileLayout :profile="false" :freelancer="freelancer" :show="true"> -->
      <div class="sort__comments">
        <a-select default-value="good">
          <a-select-option value="good"> Ijobiy izohlar </a-select-option>
          <a-select-option value="bad"> Qoniqarsiz izohlar </a-select-option>
        </a-select>
      </div>
      <div
        class="personal-information items mt-8 xl:mt-6 grid grid-cols-2 gap-4 mb-[40px]"
      >
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
        <CommentsCard />
      </div>
      <VPagination :totalPage="50" />
    <!-- </ProfileLayout> -->
  </div>
</template>

<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import CommentsCard from "@/components/profile/CommentsCard.vue";
import VPagination from "@/components/VPagination.vue";

export default {
  layout: "profileLayout",

  components: {
    ProfileLayout,
    CommentsCard,
    VPagination,
  },

  async asyncData({ store, query, params }) {
    try {
      const [freeLancerData, portfoliosData] = await Promise.all([
        store.dispatch("fetchFreelancers/getFreelancerById", {
          params: {
            params: {},
          },
          id: params.index,
        }),
        store.dispatch("fetchPortfolio/getWorks", {
          params: {
            freelancer: params.index,
          },
        }),
      ]);
      const portfolios = portfoliosData.data;
      const freelancer = freeLancerData.content;
      return {
        freelancer,
        portfolios,
      };
    } catch (e) {}
  },
};
</script>

<style scoped>
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
</style>
