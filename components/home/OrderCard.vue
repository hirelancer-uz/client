<template lang="html">
  <div
    class="card relative order-card px-8 py-6 rounded-3xl bg-white cursor-pointer xl:border-[1px] xl:border-solid xl:border-grey-8 xl:rounded-[16px] xl:p-[16px]"
    @click="
      $router.push(
        myRequest ? `/profile/freelancer/order/view/${order?.id}` : `/orders/${order?.id}`
      )
    "
  >
    <div class="header flex justify-between xl:flex-col-reverse xl:gap-2">
      <div class="flex gap-6 items-center xl:gap-[12px] w-full">
        <span
          v-if="order?.urgent"
          class="border light-yellow rounded-[500px] border-solid border-dark-yellow text-dark-yellow h-[36px] xl:h-[32px] px-[20px] xl:pl-2 xl:pr-3 flex items-center xl:text-[12px] xl:gap-1"
          ><svg
            class="xl:w-[16px] xl:h-[16px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.9255 14.0454C17.9255 17.3183 15.2723 19.9716 11.9994 19.9716C8.72646 19.9716 6.07324 17.3183 6.07324 14.0454C6.07324 12.9548 6.28062 11.8523 6.6336 10.7859C6.92071 11.9807 7.99626 12.8687 9.27921 12.8687C10.7819 12.8687 12 11.6505 12 10.1479C12 8.64521 10.9755 7.62256 10.9755 6.16175C10.9755 4.26039 12.3526 2.80322 13.9319 2.80322C13.9319 5.08252 14.7668 5.94496 15.6731 7.40821C16.749 9.14521 17.9255 11.0447 17.9255 14.0454Z"
              stroke="#F2994A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Срочный заказ</span
        >
        <span
          v-if="step1"
          class="flex gap-[7px] items-center rounded-[8px] text-dark-yellow text-[14px] font-medium"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
              fill="#F2994A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C19.3506 13 19.6872 13.0602 20 13.1707V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13.1707C4.31278 13.0602 4.64936 13 5 13ZM10.75 8.5C10.75 7.5335 11.5335 6.75 12.5 6.75C13.4665 6.75 14.25 7.5335 14.25 8.5C14.25 9.4665 13.4665 10.25 12.5 10.25C11.5335 10.25 10.75 9.4665 10.75 8.5ZM12.5 5.25C10.7051 5.25 9.25 6.70507 9.25 8.5C9.25 9.12574 9.42684 9.71018 9.73327 10.2061L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303C8.76256 12.8232 9.23744 12.8232 9.53033 12.5303L10.7939 11.2667C11.2898 11.5732 11.8743 11.75 12.5 11.75C14.2949 11.75 15.75 10.2949 15.75 8.5C15.75 6.70507 14.2949 5.25 12.5 5.25Z"
              fill="#F2994A"
            />
          </svg>
          Идет прием заявок</span
        >
        <span
          v-if="step2"
          class="flex gap-[7px] items-center rounded-[8px] text-main-color text-[14px] font-medium"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="8" fill="#5C46E6" fill-opacity="0.4" />
            <path
              d="M6 18V14.551C6 13.7054 6.66581 13.0205 7.48785 13.0205H14.4309C15.253 13.0205 15.9188 13.7054 15.9188 14.551V18M15.9196 8.25878L17.2862 9.66379L20 6.87213M13.164 8.26746C13.164 9.51974 12.1771 10.5349 10.9598 10.5349C9.74238 10.5349 8.7555 9.51974 8.7555 8.26746C8.7555 7.01518 9.74238 6 10.9598 6C12.1771 6 13.164 7.01518 13.164 8.26746Z"
              stroke="#5C46E6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Испольнитель выбран</span
        >
        <span
          v-if="step3"
          class="flex gap-[7px] items-center rounded-[8px] text-green text-[14px] font-medium"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
              fill="#009A10"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C19.3506 13 19.6872 13.0602 20 13.1707V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13.1707C4.31278 13.0602 4.64936 13 5 13ZM15.5645 6.49389C15.8372 6.18216 15.8056 5.70834 15.4939 5.43558C15.1822 5.16282 14.7084 5.1944 14.4356 5.50613L11.5657 8.78603C11.4776 8.88671 11.3258 8.90019 11.2214 8.81662L9.46855 7.41436C9.1451 7.1556 8.67313 7.20804 8.41438 7.53149C8.15562 7.85494 8.20806 8.3269 8.53151 8.58566L10.2843 9.98792C11.0156 10.5729 12.0779 10.4786 12.6946 9.77378L15.5645 6.49389Z"
              fill="#009A10"
            />
          </svg>

          Выполненно</span
        >
        <span
          v-if="order?.urgent"
          class="flex w-[1px] h-[27px] bg-grey-8 xl:hidden"
        ></span>
        <div ref="widthHandle" class="flex-auto flex gap-6 items-center xl:gap-[12px]">
          <button
            v-for="(special, index) in visibleButtons"
            :key="special?.id"
            :ref="`button${index}`"
            class="whitespace-nowrap h-[36px] xl:h-[32px] flex items-center bg-apple-grey font-tt text-grey-64 py-2 px-4 rounded-[22px] text-[14px] xl:text-[12px]"
          >
            {{ special?.name_ru }}
          </button>
          <button
            v-if="hiddenButtonsCount"
            class="whitespace-nowrap h-[36px] xl:h-[32px] flex items-center bg-apple-grey font-tt text-grey-64 py-2 px-4 rounded-[22px] text-[14px] xl:text-[12px]"
          >
            + {{ hiddenButtonsCount }}
          </button>
        </div>
      </div>
      <div class="flex gap-[28px] items-center xl:justify-between">
        <div class="flex gap-[16px] items-center xl:gap-[12px]">
          <p class="text-base text-grey-40 xl:text-[14px]">
            {{ moment(order?.created_at).format(hourFormat) }}
          </p>
          <span class="flex w-[1px] h-[27px] xl:h-[20px] bg-grey-8"></span>
          <p class="text-base text-grey-40 xl:text-[14px]">
            {{ moment(order?.created_at).format(dateFormat) }}
          </p>
        </div>
        <!-- <button
          class="w-[42px] h-[42px] xl:w-[40px] xl:h-[40px] rounded-full border-[2px] border-grey-light border-solid flex items-center justify-center"
        >
          <svg
            class="xl:w-[22px] xl:h-[22px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.667 19.9139L12 16.0839L5.33301 19.9139V7.08594C5.33301 5.42894 6.67601 4.08594 8.33301 4.08594H15.666C17.323 4.08594 18.666 5.42894 18.666 7.08594V19.9139H18.667Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> -->
      </div>
    </div>
    <div
      class="body flex gap-4 flex-col mt-6 border-[0] border-b border-grey-8 border-solid pb-4 xl:mt-4 xl:gap-[8px]"
    >
      <h6
        class="text-[20px] font-semibold text-black xl:text-base xl:leading-[19px] title"
      >
        {{ order?.name }}
      </h6>
      <span
        class="text-base text-grey-80 xl:text-[14px] xl:line-clamp-3 order-desc"
        v-html="order?.description"
      >
      </span>
      <div class="justify-start hidden xl:flex mt-[-4px]">
        <button
          class="underline text-grey-80 text-base font-medium text-center xl:text-main-color"
        >
          Подробнее
        </button>
      </div>
    </div>
    <div
      class="footer flex items-center justify-between mt-4 xl:flex-row-reverse xl:mt-[20px] xl:gap-[20px]"
    >
      <h1
        class="text-grey-80 text-[24px] font-semibold xl:text-base price"
        v-if="order?.price"
      >
        {{ order?.price.toLocaleString() }} sum
      </h1>
      <h1 class="text-grey-80 text-[24px] font-semibold xl:text-base" v-else>
        По договоренности
      </h1>

      <div class="flex gap-6 xl:flex-col xl:gap-[20px]">
        <div class="flex gap-[24px] items-center xl:gap-[12px]">
          <p
            class="text-base flex gap-2 text-grey-40 xl:text-[12px] xl:gap-[6px] items-center"
          >
            <svg
              class="xl:w-[16px] xl:h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21.1303 10.3531C22.2899 11.5732 22.2899 13.4268 21.1303 14.6469C19.1745 16.7047 15.8155 19.5 12 19.5C8.18448 19.5 4.82549 16.7047 2.86971 14.6469C1.7101 13.4268 1.7101 11.5732 2.86971 10.3531C4.82549 8.29533 8.18448 5.5 12 5.5C15.8155 5.5 19.1745 8.29533 21.1303 10.3531Z"
                stroke="#9A999B"
                stroke-width="1.5"
              />
              <circle cx="12" cy="12.5" r="3" stroke="#9A999B" stroke-width="1.5" /></svg
            >{{ order?.view_count }}
          </p>
          <span class="flex w-[1px] h-[27px] bg-grey-8"></span>
          <p
            class="text-base flex gap-2 text-grey-40 font-tt xl:text-[12px] xl:gap-[6px] items-center"
          >
            <svg
              class="xl:w-[16px] xl:h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M13 3.5H11C6.02944 3.5 2 7.52944 2 12.5V17.5C2 19.7091 3.79086 21.5 6 21.5H13C17.9706 21.5 22 17.4706 22 12.5C22 7.52944 17.9706 3.5 13 3.5Z"
                stroke="#9A999B"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <circle cx="12" cy="12.5" r="1" fill="#9A999B" />
              <circle cx="16" cy="12.5" r="1" fill="#9A999B" />
              <circle cx="8" cy="12.5" r="1" fill="#9A999B" /></svg
            >{{ order?.request_count }} запросов
          </p>
        </div>
        <div class="buttons flex gap-6 xl:flex-col-reverse xl:hidden">
          <button
            class="h-12 flex items-center text-grey-64 px-6 border border-solid border-grey-24 rounded-lg text-base font-medium text-center xl:pb-[20px]"
          >
            Подробнее
          </button>
          <!-- <button
            class="py-[15px] px-[20px] font-semibold font-tt bg-blue text-white rounded-lg text-center"
          >
            Отправить заявку
          </button> -->
        </div>
      </div>
    </div>
    <button
      class="py-[12px] text-[14px] w-full justify-center font-semibold font-tt bg-white text-blue rounded-lg border border-solid border-blue hidden xl:flex text-center mt-[20px]"
    >
      Отправить заявку
    </button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["order"],
  data() {
    return {
      dateFormat: "DD.MM.YYYY",
      hourFormat: "HH:mm",
      visibleButtons: [],
      currentWidth: 0,
    };
  },
  async mounted() {
    this.visibleButtons = await this.order?.specialities;
    this.widthHandle();
  },
  computed: {
    hiddenButtonsCount() {
      return this.order?.specialities.length - this.visibleButtons.length;
    },
    myRequest() {
      return Boolean(
        this.order?.requests.find(
          (item) => item.freelancer_id == this.$store.state.userInfo?.id
        )
      );
    },
    step1() {
      return !this.order?.selected_request && !this.order?.start_of_execution;
    },
    step2() {
      return (
        this.order?.selected_request &&
        this.order?.start_of_execution &&
        !this.order?.end_of_execution
      );
    },
    step3() {
      return (
        this.order?.selected_request &&
        this.order?.start_of_execution &&
        this.order?.end_of_execution
      );
    },
  },
  methods: {
    moment,
    widthHandle() {
      if (this.$refs.widthHandle) {
        let containerWidth = this.$refs.widthHandle.offsetWidth;
        let totalWidth = 0;
        let visibleButtonsCount = 0;
        if (this.order?.specialities.length > 0) {
          setTimeout(() => {
            for (let i = 0; i < this.order?.specialities.length; i++) {
              totalWidth += this.$refs[`button${i}`][0]?.offsetWidth;
              if (totalWidth <= containerWidth) {
                visibleButtonsCount++;
              } else {
                break;
              }
            }
            this.visibleButtons = this.order?.specialities.slice(0, visibleButtonsCount);
          }, 0);
        }
      }
    },
  },
};
</script>
<style lang="css" scoped>
.card:hover {
  box-shadow: 0px 16px 40px 0px rgba(0, 25, 53, 0.08);
}
.card:hover .title,
.card:hover .price {
  color: var(--main-color);
}
.title,
.price,
.card {
  transition: 0.3s;
}

.light-yellow {
  background-color: rgba(242, 153, 74, 0.16);
}
:deep(.order-desc p) {
  display: none;
}
:deep(.order-desc p:first-child) {
  display: block;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
