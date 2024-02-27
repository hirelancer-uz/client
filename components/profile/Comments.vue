<template lang="html">
  <div class="comments flex flex-col gap-4">
    <div class="flex justify-between">
      <h1
        class="text-black text-[24px] font-semibold xl:text-[18px] xl:flex xl:w-full xl:justify-between"
      >
        Отзывы клиентов
        <span class="hidden xl:block">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10.5L12 14.5L17 10.5"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </h1>
      <div class="flex gap-4 items-center xl:hidden">
        <a-select v-model="currentStatus" class="w-[216px]">
          <a-select-option
            :value="item.value"
            :key="index"
            v-for="(item, index) in status"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
        <nuxt-link
          class="flex gap-[6px] text-blue text-base font-medium"
          to="/profile/freelancer/comments"
          >Ko’proq ko’rish
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 16L18 12M18 12L14 8M18 12L6 12"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></nuxt-link>
      </div>
    </div>
    <div class="xl:hidden grid grid-cols-2 gap-4" v-if="feedbacks?.length > 0">
      <div class="swiper-slide h-full" v-for="feedback in feedbacks" :key="feedback?.id">
        <CommentsCard :feedback="feedback" class="h-full" />
      </div>
      <!-- <div class="comments-swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="feedback in feedbacks" :key="feedback?.id">
            <CommentsCard :feedback="feedback" />
          </div>
        </div>
      </div> -->
    </div>
    <div v-else class="h-[208px] flex justify-center items-center xl:hidden">
      <p class="text-[18px] text-grey-64 font-medium">Afuski ma’lumot topilmadi!</p>
    </div>
    <div
      class="hidden xl:flex gap-3 xl:overflow-x-scroll comments-grid"
      v-if="feedbacks?.length > 0"
    >
      <CommentsCard
        v-for="feedback in feedbacks"
        :key="feedback?.id"
        :feedback="feedback"
      />
    </div>
    <div v-else class="h-[208px] hidden xl:flex justify-center items-center">
      <p class="text-[18px] text-grey-64 font-medium">Afuski ma’lumot topilmadi!</p>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import AlertsCard from "./AlertsCard.vue";
import CommentsCard from "./CommentsCard.vue";

export default {
  props: ["feedbacks"],
  data() {
    return {
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
    };
  },
  mounted() {
    const swiper = new Swiper(".comments-swiper", {
      slidesPerView: 2,
      spaceBetween: 16,
      modules: [Navigation],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
  },
  watch: {
    async currentStatus(val) {
      if (this.$route.query?.type != val)
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, type: val },
        });
      if (val == this.$route.query.type) this.$emit("getComments");
    },
  },
  components: { AlertsCard, CommentsCard },
};
</script>
<style lang="css" scoped>
.comments :deep(.ant-select-selection__rendered) {
  line-height: 53px;
  margin-left: 16px;
}
.comments :deep(.ant-select-selection--single) {
  height: 53px;
}
.comments :deep(.ant-select-selection__placeholder) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
}
.comments :deep(.ant-select-selection) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: white;
}
.comments
  :deep(.ant-select-focused
    .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  box-shadow: 0 0 0 2px rgba(92, 70, 229, 0.2);
}
@media (max-width: 1200px) {
  .comments-grid::-webkit-scrollbar {
    display: none;
  }
}
</style>
