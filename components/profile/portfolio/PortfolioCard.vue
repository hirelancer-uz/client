<template>
  <div
    @click="$emit('handleOk')"
    class="portfolio-card rounded-2xl xl:rounded-lg border border-solid border-grey-8 overflow-hidden"
  >
    <div>
      <div
        class="image overflow-hidden h-[270px] border-[0] border-b border-solid border-grey-8 relative xl:h-[245px]"
      >
        <img
          v-if="portfolio?.images[0]?.img"
          class="h-full w-full object-cover"
          :src="`${imgUrl}${portfolio?.images[0]?.img}`"
          alt=""
        />
        <img
          v-else
          class="h-full w-full object-cover"
          src="@/assets/images/empty.png"
          alt=""
        />
        <div
          v-if="portfolio?.images.length > 1"
          class="count text-purple text-[14px] font-semibold absolute w-[40px] h-[36px] rounded-[8px] border border-solid border-grey-8 bg-white flex items-center justify-center right-4 bottom-4 xl:hidden"
        >
          {{ portfolio?.images.length - 1 }}+
        </div>
      </div>
    </div>
    <div
      class="body px-4 pt-3 pb-4 flex flex-col gap-[44px] xl:gap-1 xl:px-3 xl:py-3 bg-white"
    >
      <div class="flex flex-col gap-2">
        <h4

          @click="openShow"
          class="text-black text-[18px] font-semibold xl:text-[14px] xl:font-medium cursor-pointer"
        >
          {{ portfolio?.name }}
        </h4>
<!--        <h4-->
<!--          v-else-->
<!--          class="text-black text-[18px] font-semibold xl:text-[14px] xl:font-medium cursor-pointer"-->
<!--        >-->
<!--          {{ portfolio?.name }}-->
<!--        </h4>-->
        <div class="flex gap-6">
          <p class="text-[14px] font-medium flex gap-[6px] items-center xl:text-[12px]">
            <svg
              class="xl:w-4 xl:h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.6087 8.21124C18.575 9.22797 18.575 10.7727 17.6087 11.7894C15.9788 13.5042 13.1797 15.8337 10.0001 15.8337C6.82049 15.8337 4.02133 13.5042 2.3915 11.7894C1.42516 10.7727 1.42516 9.22797 2.3915 8.21124C4.02132 6.49644 6.82049 4.16699 10.0001 4.16699C13.1797 4.16699 15.9788 6.49644 17.6087 8.21124Z"
                stroke="#5D5D5F"
                stroke-width="1.5"
              />
              <path
                d="M12.5001 10.0003C12.5001 11.381 11.3808 12.5003 10.0001 12.5003C8.61937 12.5003 7.50008 11.381 7.50008 10.0003C7.50008 8.61961 8.61937 7.50033 10.0001 7.50033C11.3808 7.50033 12.5001 8.61961 12.5001 10.0003Z"
                stroke="#5D5D5F"
                stroke-width="1.5"
              />
            </svg>
            {{ portfolio?.view_count }}
          </p>
          <p class="text-[14px] font-medium flex gap-[6px] items-center xl:text-[12px]">
            <svg
              class="xl:w-4 xl:h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15 6.66667H16.6666C17.5871 6.66667 18.3333 7.41286 18.3333 8.33333V15.8333C18.3333 16.7538 17.5871 17.5 16.6666 17.5H15C14.0795 17.5 13.3333 16.7538 13.3333 15.8333V8.33333C13.3333 7.41286 14.0795 6.66667 15 6.66667Z"
                stroke="#5D5D5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.76924 17.5H9.82406C10.4821 17.5 11.1255 17.3052 11.6731 16.9402L12.9622 16.0807C13.1941 15.9262 13.3333 15.666 13.3333 15.3873V8.55464C13.3333 8.40961 13.2955 8.2671 13.2235 8.14119L9.99998 2.5H8.89273C7.22878 2.5 6.2363 4.35447 7.15929 5.73896L8.33332 7.5H3.80128C2.71699 7.5 1.92139 8.51898 2.18437 9.57089L3.53543 14.9751C3.9064 16.459 5.23968 17.5 6.76924 17.5Z"
                stroke="#5D5D5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >{{ portfolio?.classes_count }}
          </p>
        </div>
      </div>
      <div class="flex gap-2 xl:gap-2 w-full" ref="widthHandle">
        <p
          class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
          v-for="(specialit, index) in visibleButtons"
          :key="specialit?.id"
          :ref="`button${index}`"
        >
          {{ specialit?.name }}
        </p>
        <p
          v-if="hiddenButtonsCount"
          class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
        >
          + {{ hiddenButtonsCount }}
        </p>
      </div>
    </div>
    <PortfolioShow
      ref="portfolioModal"
      :portfolios="portfolios"
      :portfolio="portfolio"
      :freelancer="freelancer"
      @getData="$emit('getData')"
    />
  </div>
</template>
<script>
import PortfolioShow from "../../modals/PortfolioShow.vue";
export default {
  props: ["portfolio", "portfolios", "freelancer"],
  name: "portfolioCard",
  data() {
    return { visibleButtons: [] };
  },
  computed: {
    hiddenButtonsCount() {
      return this.portfolio?.specialities.length - this.visibleButtons.length;
    },
    imgUrl() {
      return this.$config.baseURL + "/storage/"
    },
  },
  async mounted() {
    this.visibleButtons = await this.portfolio?.specialities;
    this.widthHandle();
  },
  methods: {
    openShow() {

      this.$refs.portfolioModal?.openModal();
    },
    widthHandle() {
      if (this.$refs.widthHandle) {
        let containerWidth = this.$refs.widthHandle.offsetWidth;
        let totalWidth = 43;
        let visibleButtonsCount = 0;
        if (this.portfolio?.specialities.length > 0) {
          setTimeout(() => {
            for (let i = 0; i < this.portfolio?.specialities.length; i++) {
              totalWidth += this.$refs[`button${i}`][0]?.offsetWidth;
              if (totalWidth <= containerWidth) {
                visibleButtonsCount++;
              } else {
                break;
              }
            }
            this.visibleButtons = this.portfolio?.specialities.slice(
              0,
              visibleButtonsCount
            );
          }, 0);
        }
      }
    },
  },
  components: { PortfolioShow },
};
</script>
<style lang="css" scoped>
.count {
  box-shadow: 0px 4px 16px 0px rgba(11, 11, 21, 0.16);
}
.image img {
  transition: all 0.3s;
}
.image:hover img {
  transform: scale(1.1);
}
</style>
