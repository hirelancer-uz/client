<template lang="html">
  <div
    class="profile-orders-card border border-solid rounded-2xl border-grey-8 px-8 py-6 flex flex-col xl:px-4 xl:py-4"
  >
    <div class="head flex justify-between items-center xl:flex-col xl:items-start">
      <div
        class="flex gap-[10px] flex-col items-start xl:pb-4 xl:border-[0] xl:border-b xl:border-solid xl:border-grey-8 max-w-[76%] xl:max-w-full"
      >
        <a-tooltip placement="bottomRight">
          <template slot="title">
            <span>{{ order?.name }}</span>
          </template>
          <h3
            class="text-[20px] text-black font-medium cursor-pointer xl:text-base truncate max-w-full"
            @click="$router.push(`/profile/customer/order/edit/${order?.id}`)"
          >
            {{ order?.name }}
          </h3>
        </a-tooltip>
      </div>
      <p
        class="text-[20px] text-black font-medium xl:text-base xl:mt-4"
        v-if="order?.price"
      >
        {{ order?.price.toLocaleString() }} сум
      </p>
      <p class="text-[20px] text-black font-medium xl:text-base xl:mt-4" v-else>
        По договоренности
      </p>
    </div>
    <div class="body flex justify-between mt-6 xl:mt-4">
      <div class="flex gap-[40px] xl:gap-0 xl:grid xl:grid-cols-2 xl:w-full">
        <div class="flex gap-4 items-center xl:order-last">
          <p class="text-base text-grey-64 flex gap-[6px] xl:flex-col xl:text-[12px]">
            Срок выполнение:
            <span class="text-black xl:text-[14px]">{{
              order?.start_of_execution ? order?.start_of_execution : "---"
            }}</span>
          </p>
        </div>
        <span class="h-[24px] w-[1px] bg-grey-8 xl:hidden"></span>
        <div class="flex items-center gap-2">
          <p class="text-base text-grey-64 flex gap-[6px] xl:flex-col xl:text-[12px]">
            Срок начала:
            <span class="text-black xl:text-[14px]">{{
              order?.end_of_execution ? order?.end_of_execution : "---"
            }}</span>
          </p>
        </div>
      </div>
      <nuxt-link
        :to="`/profile/customer/order/view/${order?.id}`"
        class="text-main-color text-base font-medium flex gap-2 items-center xl:w-full xl:border xl:border-solid xl:border-main-color xl:rounded-[8px] xl:h-11 xl:justify-center xl:text-[14px] xl:font-medium xl:flex xl:gap-2 xl:items-center"
        >Подробнее<svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8L18 12M18 12L14 16M18 12L6 12"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
    <div
      class="offers flex flex-col gap-4 mt-[42px] xl:mt-6"
      v-if="$route.params.status != 'pending'"
    >
      <!-- <div
        v-if="$route.params.status != 'pending'"
        class="rounded-[8px] border border-solid border-light-yellow-br xl:border-yellow-br bg-light-yellow px-6 xl:pl-4 xl:pr-3 py-[14px] xl:py-3 cursor-pointer overflow-hidden"
      >
        <h4 class="text-base font-regular flex gap-2 text-grey-64 xl:text-dark-yellow xl:text-[14px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V12C11.25 12.3228 11.4566 12.6094 11.7628 12.7115L14.7628 13.7115C15.1558 13.8425 15.5805 13.6301 15.7115 13.2372C15.8425 12.8442 15.6301 12.4195 15.2372 12.2885L12.75 11.4594V7Z"
              fill="#F2994A"
            />
          </svg>
          Ожидание ответа модератора
        </h4>
      </div> -->
      <!-- <div
        v-if="$route.params.status != 'pending'"
        class="rounded-[8px] border border-solid border-[#DFEEDF] bg-[#FAFFFA] xl:border-yellow-br px-6 xl:pl-4 xl:pr-3 py-[14px] xl:py-3 cursor-pointer overflow-hidden"
      >
        <h4
          class="text-base text-grey-64 xl:text-dark-yellow xl:text-[14px] flex gap-2 items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M17 12C17 13.1046 16.1046 14 15 14H7V17C7 18.1046 7.89543 19 9 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H17V12Z"
                fill="#009A10"
              />
            </g>
            <path
              d="M3.75 15H15.1072C16.1526 15 17.0001 14.1046 17.0001 13V5C17.0001 3.89543 16.1526 3 15.1072 3H3.75V15Z"
              fill="#009A10"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 1.25C3.41421 1.25 3.75 1.58579 3.75 2V22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22V2C2.25 1.58579 2.58579 1.25 3 1.25Z"
              fill="#009A10"
            />
          </svg>

          Предложений:
          <span
            class="text-white min-w-[28px] h-[28px] bg-[#EB5757] rounded-full flex justify-center items-center px-1 text-base font-medium"
            >{{ order?.request_count }}</span
          >
        </h4>
      </div> -->
      <div
        class="rounded-[8px] border border-solid border-[#C6CBFF] bg-[#F3F4FF] xl:border-yellow-br px-6 xl:pl-4 xl:pr-3 py-[14px] xl:py-3 cursor-pointer overflow-hidden"
      >
        <h4
          class="text-base text-grey-64 xl:text-dark-yellow xl:text-[14px] flex gap-2 items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.02945 6.51219L10.2355 12.4802C11.2874 13.2453 12.7126 13.2453 13.7645 12.4802L21.9706 6.51219C21.7299 4.53314 20.044 3 18 3H6C3.95599 3 2.27007 4.53314 2.02945 6.51219ZM22 8.96377L14.9409 14.0977C13.1876 15.3728 10.8124 15.3728 9.05914 14.0977L2 8.96377V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V8.96377Z"
              fill="#3C4BDC"
            />
          </svg>

          Сообщении
          <span
            class="text-white min-w-[28px] h-[28px] bg-[#EB5757] rounded-full flex justify-center items-center px-1 text-base font-medium"
            >{{ order?.request_count }}</span
          >
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["order"],
  data() {
    return {
      offersList: [],
    };
  },
  methods: {
    open(id) {
      if (!this.offersList.includes(id)) {
        this.offersList.push(id);
      } else {
        this.offersList = this.offersList.filter((item) => item != id);
      }
    },
  },
};
</script>
<style lang="css" scoped>
.status-red {
  background: rgba(237, 50, 55, 0.1);
}
.offers .inactive {
  max-height: 0;
  transition: 0.3s linear;
}
.offer-body {
  max-height: 300px;
  transition: 0.3s linear;
}
</style>
