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
          src="@/assets/images/portfolio.png"
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
          v-if="$route.name.includes('profile')"
          @click="$router.push(`/profile/freelancer/portfolio/${portfolio?.id}`)"
          class="text-black text-[18px] font-semibold xl:text-[14px] xl:font-medium cursor-pointer"
        >
          {{ portfolio?.name }}
        </h4>
        <h4
          v-else
          class="text-black text-[18px] font-semibold xl:text-[14px] xl:font-medium cursor-pointer"
        >
          {{ portfolio?.name }}
        </h4>
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
          {{ specialit?.name_ru }}
        </p>
        <p
          v-if="hiddenButtonsCount"
          class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
        >
          + {{ hiddenButtonsCount }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["portfolio"],
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
