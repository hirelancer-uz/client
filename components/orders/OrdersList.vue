<template>
  <div class="orders-list mt-[37px]">
    <div class="filter-head hidden xl:flex justify-between">
      <h4 class="text-black text-[14px] font-medium xl:hidden">13 630 результатов</h4>
      <button
        @click="open"
        class="flex items-center gap-2 text-blue text-[14px] font-medium taeyeon"
      >
        <span class="xl:hidden"> Фильтры </span>
        <svg
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
      <div class="flex flex-col gap-4 mb-[100px] xl:mb-[24px]" v-if="orders?.length > 0">
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
      <VPagination
        :pageSize="pageSize"
        @getData="$emit('getOrders')"
        :totalPage="totalPage"
      />
    </div>
    <div class="right flex flex-col gap-6">
      <div
        class="filter px-6 py-6 border border-solid border-grey-8 rounded-3xl flex flex-col xl:hidden"
      >
        <div class="flex flex-col">
          <h4
            class="text-[20px] font-semibold text-grey-80 pb-4 border-[0] border-b border-grey-8 border-solid"
          >
            Тип работы
          </h4>
          <div class="drop-list flex flex-col mt-[4px] mx-[-16px]">
            <div
              class="dropdown overflow-hidden"
              :class="{
                active:
                  (dropItem.children.find((item) => item.id == dropdownOpen) ||
                    dropdownOpen == dropItem?.id) &&
                  dropItem.children.length > 0,
              }"
              v-for="dropItem in specialities"
              :key="dropItem?.id"
            >
              <button
                class="drop-head xl:px-0 xl:py-0 bg-white relative z-20 w-full flex justify-between items-center px-4 py-[12px]"
              >
                <h2
                  @click="toPage(dropItem?.id)"
                  class="text-base text-blue-night flex gap-2 items-center"
                  :class="{
                    'text-main-color': dropItem?.id == $route.params.id,
                  }"
                >
                  {{ dropItem?.name_ru }}

                  <div class="count text-[#9A999B]">
                    ({{ dropItem?.children.length }})
                  </div>
                </h2>
                <span
                  @click="handleDropdown(dropItem.id)"
                  :class="{
                    'rotate-180':
                      (dropItem.children.find((item) => item.id == dropdownOpen) ||
                        dropdownOpen == dropItem?.id) &&
                      dropItem.children.length > 0,
                    'pointer-events-none opacity-50': dropItem.children.length == 0,
                  }"
                  class="drop-icon w-[24px] h-[24px] rounded-[50%] bg-[#F8F9FF] flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                      fill="#28303F"
                    /></svg
                ></span>
              </button>

              <div class="drop-body relative z-10">
                <div class="px-4 py-4 pt-[0] pb-[8px] flex flex-col gap-4 xl:gap-8">
                  <button
                    class="text-[14px] text-grey-80 flex gap-2 items-center hover:text-main-color"
                    v-for="dropIn in dropItem.children"
                    :key="dropIn?.id"
                    @click="toPage(dropIn?.id)"
                    :class="{
                      'text-main-color': $route.params.id == dropIn?.id,
                    }"
                  >
                    <a-tooltip placement="right">
                      <template slot="title">
                        <span>{{ dropIn?.name_ru }}</span>
                      </template>
                      <span> {{ dropIn?.name_ru }}</span>
                    </a-tooltip>
                    <span class="text-[12px] text-grey-40"
                      >({{ dropIn?.freelancers_count }})</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-4 border-[0] border-t border-grey-8 border-solid pt-4 mt-2"
        >
          <h4 class="text-[20px] font-semibold text-grey-80">Статус заказов</h4>
          <div class="flex flex-col gap-6">
            <a-checkbox :checked="Boolean(status)" @change="filterStatus"
              >Прием заявок</a-checkbox
            >
          </div>
        </div>
      </div>
      <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer" :can-swipe="false">
        <div
          class="filter px-6 xl:border-0 py-6 xl:px-4 xl:pb-4 xl:py-4 border border-solid border-grey-8 rounded-3xl flex flex-col gap-6 xl:justify-between h-full"
        >
          <div class="x absolute top-[16px] right-[16px]" @click="close()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.2427 7.75738L7.75745 16.2427M16.2427 16.2426L7.75745 7.75732"
                stroke="#353437"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex flex-col gap-6 xl:gap-[16px]">
            <h2 class="mt-[24px] text-[24px] xl:font-bold">Filtr</h2>
            <h4 class="text-[20px] xl:text-[18px] font-semibold text-black">
              Тип работы
            </h4>
            <div class="drop-list flex flex-col gap-[16px]">
              <div
                class="dropdown overflow-hidden"
                :class="{
                  active:
                    (dropItem.children.find((item) => item.id == dropdownOpen) ||
                      dropdownOpen == dropItem?.id) &&
                    dropItem.children.length > 0,
                }"
                v-for="dropItem in specialities"
                :key="dropItem?.id"
              >
                <button
                  class="drop-head xl:px-0 xl:py-0 bg-white relative z-20 w-full flex justify-between items-center px-4 py-[12px]"
                >
                  <h2
                    @click="toPage(dropItem?.id)"
                    class="text-base text-blue-night flex gap-2 items-center"
                    :class="{
                      'text-main-color': dropItem?.id == $route.params.id,
                    }"
                  >
                    {{ dropItem?.name_ru }}

                    <div class="count text-[#9A999B]">
                      ({{ dropItem?.children.length }})
                    </div>
                  </h2>
                  <span
                    @click="handleDropdown(dropItem.id)"
                    :class="{
                      'rotate-180':
                        (dropItem.children.find((item) => item.id == dropdownOpen) ||
                          dropdownOpen == dropItem?.id) &&
                        dropItem.children.length > 0,
                      'pointer-events-none opacity-50': dropItem.children.length == 0,
                    }"
                    class="drop-icon w-[24px] h-[24px] rounded-[50%] bg-[#F8F9FF] flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                        fill="#28303F"
                      /></svg
                  ></span>
                </button>

                <div class="drop-body relative z-10">
                  <div
                    class="px-4 py-4 pt-[0] pb-[8px] flex flex-col gap-4 xl:gap-[12px]"
                  >
                    <button
                      class="text-[14px] text-grey-80 flex gap-2 items-center hover:text-main-color"
                      v-for="dropIn in dropItem.children"
                      :key="dropIn?.id"
                      @click="toPage(dropIn?.id)"
                      :class="{
                        'text-main-color': $route.params.id == dropIn?.id,
                      }"
                    >
                      <a-tooltip placement="right">
                        <template slot="title">
                          <span>{{ dropIn?.name_ru }}</span>
                        </template>
                        <span> {{ dropIn?.name_ru }}</span>
                      </a-tooltip>
                      <span class="text-[12px] text-grey-40"
                        >({{ dropIn?.freelancers_count }})</span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-4 border-[0] border-t border-grey-8 border-solid pt-4 mt-2"
            >
              <h4 class="text-[20px] font-semibold text-grey-80">Статус заказов</h4>
              <div class="flex flex-col gap-6">
                <a-checkbox :checked="Boolean(status)" @change="filterStatus"
                  >Прием заявок</a-checkbox
                >
              </div>
            </div>
          </div>
          <div class="flex gap-4 xl:grid xl:gap-[12px] xl:grid-cols-2">
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
            >
              Сбросить
            </button>
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
            >
              Применить
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
      <TelegramCard class="cole" />
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import VPagination from "../VPagination.vue";
import OrderCard from "../home/OrderCard.vue";

export default {
  props: ["orders", "specialities", "pageSize", "totalPage"],
  data() {
    return {
      dropdown: false,
      sort: undefined,
      dropdownOpen: null,
      status: false,
    };
  },
  mounted() {
    this.status = this.$route.query?.status ? true : false;
    this.dropdownOpen = this.$route.params.id;
  },
  computed: {
    routerName() {
      return this.$route.path;
    },
  },
  methods: {
    async toPage(id) {
      await this.close();
      this.$router.push({
        path: `/specialities/${id}`,
        query: { page: 1, page_size: this.$route.query.page_size },
      });
    },
    filterStatus() {
      this.status = !this.status;
      this.$emit("filter", `status`, 1);
    },
    handleDropdown(id) {
      if (this.dropdownOpen == id) {
        this.dropdownOpen = null;
      } else {
        this.dropdownOpen = id;
      }
    },
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
  },
  watch: {
    routerName() {
      this.close();
    },
  },
  components: { OrderCard, TelegramCard, VPagination },
};
</script>
<style lang="css" scoped>
.drop-body {
  max-height: 0;
  /* height: 0; */
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.drop-icon {
  transition: 0.2s linear;
}
.drop-list .active .drop-body {
  max-height: 200px;
  /* height: auto; */
}
.drop-head {
  transition: 0.2s linear;
}
.drop-list .active {
  border-radius: 16px;
  /* border: 1px solid var(--Border-darik, #e0e0ed); */
  background: var(--BG-grey, #f8f9ff);
  margin-bottom: 4px;
}
.drop-list .dropdown:last-child.active {
  margin-bottom: 0;
}
.drop-list .active .drop-head {
  padding: 16px;
  padding-top: 8px;
  background-color: var(--bg-grey);
}
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
    gap: 0;
  }
  .taeyeon {
    position: fixed;
    bottom: 100px;
    right: 16px;
    z-index: 99;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--White, #fff);
    box-shadow: 0px 12px 24px 0px rgba(0, 25, 53, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cole {
    display: none;
  }
}
.bottom-drawer :deep(.bottom-sheet__content) {
  overflow: hidden;
}
.bottom-drawer :deep(.bottom-sheet__header) {
  display: none;
}
.bottom-drawer :deep(.bottom-sheet__main) {
  height: 100%;
}
.bottom-drawer :deep(.bottom-sheet__content) {
  min-height: 100%;
  border-radius: 0;
  height: 100%;
}
</style>
