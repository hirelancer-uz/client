<template lang="html">
  <div class="orders-list mt-[37px]">
    <div class="filter-head hidden xl:flex justify-between">
      <h4 class="text-black text-[14px] font-medium">13 630 результатов</h4>
      <button
        @click="open"
        class="flex items-center gap-2 text-blue text-[14px] font-medium"
      >
        Фильтры<svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 5H8.33333"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 10H10"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8333 10H17.5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6667 5L17.5 5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8333 15L16.6667 15"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 15H5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="6.66667" cy="15" r="1.66667" stroke="#5C46E6" stroke-width="1.5" />
          <ellipse
            cx="14.1667"
            cy="10"
            rx="1.66667"
            ry="1.66667"
            stroke="#5C46E6"
            stroke-width="1.5"
          />
          <ellipse
            cx="10"
            cy="5.00004"
            rx="1.66667"
            ry="1.66667"
            stroke="#5C46E6"
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>
    <div class="left">
      <div class="flex flex-col gap-4 mb-[100px]" v-if="orders?.length > 0">
        <OrderCard
          class="border border-solid border-grey-8"
          v-for="order in orders"
          :order="order"
          :key="order.id"
        />
      </div>
      <div class="flex flex-col gap-4 items-center justify-center h-[300px]" v-else>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M68.4195 26.6665H11.5794C7.33507 26.6665 4.17138 30.58 5.06069 34.73L11.0743 62.7936C12.3916 68.9412 17.8245 73.3332 24.1117 73.3332H55.8872C62.1744 73.3332 67.6073 68.9412 68.9246 62.7936L74.9382 34.73C75.8275 30.5799 72.6638 26.6665 68.4195 26.6665Z"
            fill="#5C46E6"
          />
          <path
            d="M66.6654 26.6665V23.3332C66.6654 17.8103 62.1882 13.3332 56.6654 13.3332H47.3237C45.0968 13.3332 42.9337 12.5899 41.1772 11.2212L38.0424 8.7785C36.2859 7.40978 34.1228 6.6665 31.8959 6.6665H23.332C17.8092 6.6665 13.332 11.1437 13.332 16.6665V26.6665H66.6654Z"
            fill="#5C46E6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.6667 42.5C38.445 42.5 35.8333 45.1117 35.8333 48.3333C35.8333 51.555 38.445 54.1667 41.6667 54.1667C44.8883 54.1667 47.5 51.555 47.5 48.3333C47.5 45.1117 44.8883 42.5 41.6667 42.5ZM30.8333 48.3333C30.8333 42.3502 35.6836 37.5 41.6667 37.5C47.6498 37.5 52.5 42.3502 52.5 48.3333C52.5 54.3164 47.6498 59.1667 41.6667 59.1667C39.5809 59.1667 37.6327 58.5772 35.9798 57.5558L31.7678 61.7678C30.7915 62.7441 29.2085 62.7441 28.2322 61.7678C27.2559 60.7915 27.2559 59.2085 28.2322 58.2322L32.4442 54.0202C31.4228 52.3673 30.8333 50.4191 30.8333 48.3333Z"
            fill="#5C46E6"
          />
        </svg>
        <p class="text-[18px] font-medium text-grey-64">Afuski buyurtma topilmadi!</p>
      </div>
      <VPagination />
    </div>
    <div class="right flex flex-col gap-6">
      <div
        class="filter px-6 py-6 border border-solid border-grey-8 rounded-3xl flex flex-col gap-6"
      >
        <div class="flex flex-col gap-6">
          <h4 class="text-[20px] font-semibold text-black">Тип работы</h4>
          <div
            class="flex flex-col gap-6 border-[0] border-b border-solid border-grey-8 pb-6"
          >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Дизайн</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Разработка и IT</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Тексты и переводы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />СЕО и трафик</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Соцсети и реклама</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Аудио, видео, съёмка</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Бизнес и жизнь</span
            >
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h4 class="text-[20px] font-semibold text-black">Тип заказов</h4>
          <div class="flex flex-col gap-6">
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Все типы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Открытие</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Тексты и переводы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />PRO заказы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Безопасная сделка</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Срочный заказ</span
            >
          </div>
        </div>
        <div class="flex gap-4">
          <button
            class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
          >
            Применить
          </button>
          <button
            class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
          >
            Сбросить
          </button>
        </div>
      </div>
      <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer">
        <div
          class="filter px-6 xl:border-0 py-6 xl:px-4 xl:pb-4 xl:py-4 border border-solid border-grey-8 rounded-3xl flex flex-col gap-6"
        >
          <div class="flex flex-col gap-6">
            <h4 class="text-[20px] xl:text-[18px] font-semibold text-black">
              Тип работы
            </h4>
            <div
              class="flex flex-col gap-6 border-[0] xl:border-0 border-b border-solid border-grey-8 pb-6 xl:pb-0"
            >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Дизайн</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Разработка и IT</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Тексты и переводы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />СЕО и трафик</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Соцсети и реклама</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Аудио, видео, съёмка</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Бизнес и жизнь</span
              >
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h4 class="text-[20px] xl:text-[18px] font-semibold text-black">
              Тип заказов
            </h4>
            <div class="flex flex-col gap-6">
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Все типы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Открытие</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Тексты и переводы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />PRO заказы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Безопасная сделка</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Срочный заказ</span
              >
            </div>
          </div>
          <div class="flex gap-4 xl:flex-col xl:gap-2 xl:mt-4">
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
            >
              Применить
            </button>
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
            >
              Сбросить
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
      <TelegramCard />
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import VPagination from "../VPagination.vue";
import OrderCard from "../home/OrderCard.vue";

export default {
  props: ["orders"],
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
  },
  components: { OrderCard, TelegramCard, VPagination },
};
</script>
<style lang="css" scoped>
.orders-list {
  display: grid;
  grid-template-columns: 1fr 332px;
  gap: 32px;
}
:deep(.ant-checkbox-inner) {
  border-radius: 4px;
  border: 2px solid #ebebeb;
}
.orders-list :deep(.ant-checkbox + span) {
  padding-left: 16px;
  color: var(--blue-night);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.orders-list :deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}
.orders-list
  :deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover
    .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner) {
  border-color: var(--blue);
}
.orders-list :deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}
@media (max-width: 1200px) {
  .orders-list {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
.bottom-drawer :deep(.bottom-sheet__content) {
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  /* max-height: 90vh !important; */
}
</style>
