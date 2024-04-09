<template>
  <div @click="openShow" class="wrapper">
    <div class="portfolio-card rounded-lg overflow-hidden cursor-pointer">
      <div class="image h-[270px] relative">
        <img
          v-if="portfolio?.images.length > 0"
          class="h-full w-full object-cover"
          :src="`${imgUrl}${portfolio?.images[0]?.img}`"
          alt=""
        />
        <img
          v-else
          class="h-full w-full object-cover"
          src="@/assets/images/portfolio.png"
          alt=""
        />
        <div class="absolute right-[14px] top-[14px] flex gap-[12px]">
          <div
            class="text-blue text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.8477 7.38982C16.7174 8.30488 16.7174 9.69512 15.8477 10.6102C14.3809 12.1535 11.8616 14.25 9 14.25C6.13836 14.25 3.61912 12.1535 2.15228 10.6102C1.28257 9.69512 1.28257 8.30488 2.15228 7.38982C3.61912 5.8465 6.13836 3.75 9 3.75C11.8616 3.75 14.3809 5.8465 15.8477 7.38982Z"
                stroke="#5C46E6"
              />
              <path
                d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
                stroke="#5C46E6"
              />
            </svg>
            {{ portfolio?.view_count }}
          </div>
          <div
            class="text-green text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M4.5 6H3C2.17157 6 1.5 6.67157 1.5 7.5V14.25C1.5 15.0784 2.17157 15.75 3 15.75H4.5C5.32843 15.75 6 15.0784 6 14.25V7.5C6 6.67157 5.32843 6 4.5 6Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9077 15.75H9.15833C8.56605 15.75 7.98703 15.5747 7.49423 15.2462L6.33398 14.4727C6.12533 14.3336 6 14.0994 6 13.8486V7.69917C6 7.56865 6.03406 7.44039 6.09882 7.32707L9 2.25H9.99653C11.4941 2.25 12.3873 3.91902 11.5566 5.16506L10.5 6.75H14.5788C15.5547 6.75 16.2707 7.66708 16.034 8.6138L14.8181 13.4776C14.4842 14.8131 13.2843 15.75 11.9077 15.75Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ portfolio?.classes_count }}
          </div>
        </div>
      </div>
      <div
        class="body px-4 pt-3 pb-4 flex rounded-b-lg flex-col gap-[6px] border-[0] border-t-0 border-b border-x border-solid border-grey-8"
      >
        <h4 class="text-black text-[18px] font-semibold" @click="openShow">
          {{ portfolio?.name }}
        </h4>
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
        <!-- <div class="flex justify-between">
          <p class="text-[15px] text-grey-40">
            {{ portfolio?.specialities[0]?.name }}
          </p>
        </div> -->
      </div>
    </div>
    <PortfolioShow
      ref="portfolioModal"
      :portfolios="portfolios"
      :portfolio="portfolio"
      :freelancer="freelancer"
    />
  </div>
</template>
<script>
import PortfolioShow from "../../modals/PortfolioShow.vue";
export default {
  props: ["portfolio", "portfolios", "freelancer"],
  data() {
    return {
      visibleButtons: [],
    };
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
      console.log('calaldsas')
      this.$refs.portfolioModal.openModal();
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
.cardo__top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
}
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
.count {
  box-shadow: 0px 4px 16px 0px rgba(11, 11, 21, 0.16);
}
.wrapper >>> ant-modal-content {
  border-radius: 16px;
}
.ant-carousel >>> .slick-slide {
  padding-right: 16px;
}
.modal__images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
}
.modal__images div {
  height: 310px;
  overflow: hidden;
  border-radius: 16px;
}
.modal__images div:first-child {
  grid-column: 1 / 4;
  height: 717px;
}
.modal__title {
  color: var(--Black, #020105);
  font-family: "TT Interfaces";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;
}
.komarovo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #5c46e5;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.x {
  position: absolute;
  top: 24px;
  right: 24px;
}
.modal__header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.modal__views {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
}
.modal__likes {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--Blue, #5c46e5);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.modal__desc {
  max-width: 794px;
  margin: 0 auto;
}
.modal__desc p {
  color: var(--grey-64, #5d5d5f);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.modal__owner,
.modal__others {
  background: var(--BG-grey, #f8f9ff);
}
.modal__cardo {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  margin: 0 auto;
  width: 100%;
  max-width: 328px;
  padding: 16px;
}
.modal__owner {
  padding: 32px 0;
}
.modal__cardo-person {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 24px; */
}
.modal__cardo-person img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
}
.modal__cardo-name {
  color: var(--Black, #020105);
  font-family: "TT Interfaces";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin-bottom: 8px;
}
.modal__cardo-status {
  color: var(--grey-40, #9a999b);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.modal__cardo-footer {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.modal__cardo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e7edfb;
}
.modal__cardo-item:last-child {
  border-right: 0;
}
@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
  .modal__header,
  .modal__images,
  .modal__desc,
  .modal__others {
    padding: 0;
  }
  .modal__header {
    flex-direction: column;
    align-items: flex-start;
    grid-area: 12px;
    margin-bottom: 32px;
  }
  .x {
    top: -40px;
    right: 0;
  }
  .modal__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .komarovo {
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
  .modal__images div:first-child {
    height: 217px;
    border-radius: 12px;
    overflow: hidden;
    grid-column: 1/3;
  }
  .modal__images div {
    height: 140px;
  }
  .modal__images {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 16px;
  }
  .modal__desc p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .modal__owner {
    padding: 56px 16px 32px 16px;
    margin: 0 -16px;
  }
  .modal__cardo-person {
    margin-bottom: 8px;
  }
  .modal__cardo img {
    width: 66px;
    height: 66px;
  }
  .modal__cardo-name {
    margin-bottom: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .modal__cardo-status {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .modal__cardo {
    width: 100%;
    max-width: 100%;
  }
  .modal__others {
    margin: 0 -16px -56px -16px;
    padding: 0 16px 56px 16px;
  }
  .ant-carousel >>> .slick-slide {
    padding-right: 4px;
  }
  .cardo__top {
    display: grid;
    grid-template-columns: 66px 1fr;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
  }
}
</style>
