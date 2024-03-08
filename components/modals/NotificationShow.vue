<template>
  <div>
    <div class="xl:hidden">
      <a-modal
        class="xl:hidden flex"
        v-model="visible"
        :body-style="{ padding: '24px 32px', borderRadius: '24px' }"
        centered
        :closable="false"
        width="954px"
        @ok="closeModal"
      >
        <div class="flex flex-col relative">
          <div class="head flex justify-between items-center">
            <h1 class="text-[24px] font-semibold text-black">
              {{ notification?.theme }}
            </h1>
            <p class="text-base text-dark-grey-70 font-medium flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V9M3 9V7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V9M3 9H21M16 2V5M8 2V5"
                  stroke="#6C757D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {{ date }}
            </p>
          </div>
          <div class="body mt-6">
            <p class="text-grey-80 text-[18px]">{{ notification?.message }}</p>
          </div>
          <div class="buttons flex justify-end mt-8">
            <button
              @click="closeModal"
              class="h-[54px] w-[194px] rounded-[8px] bg-main-color flex justify-center items-center gap-2 text-white text-base font-medium"
            >
              Yopish
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.06495 11.757L11.438 14.129L15.695 9.87098M19.998 11.999C19.998 16.4161 16.4171 19.997 12 19.997C7.58278 19.997 4.00195 16.4161 4.00195 11.999C4.00195 7.5818 7.58278 4.00098 12 4.00098C16.4171 4.00098 19.998 7.5818 19.998 11.999Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </a-modal>
    </div>
    <div class="hidden xl:block">
      <vue-bottom-sheet-vue2
        @closed="closed"
        ref="orderSucccess"
        class="bottom-drawer"
      >
        <div class="flex flex-col relative px-4 pb-4">
          <div
            class="head flex justify-between items-center xl:items-start xl:gap-2 xl:flex-col xl:justify-start"
          >
            <h1
              class="text-[24px] font-semibold text-black xl:text-[18px] xl:font-medium"
            >
              {{ notification?.theme }}
            </h1>
            <p
              class="text-base xl:text-[14px] text-dark-grey-70 font-medium flex gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V9M3 9V7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V9M3 9H21M16 2V5M8 2V5"
                  stroke="#6C757D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {{ date }}
            </p>
          </div>
          <div class="body mt-6 xl:mt-4">
            <p class="text-grey-80 text-[18px] xl:text-base">
              {{ notification?.message }}
            </p>
          </div>
          <div class="buttons flex mt-8">
            <button
              @click="closeModal"
              class="h-[54px] w-full rounded-[8px] bg-main-color flex justify-center items-center gap-2 text-white text-base font-medium"
            >
              Yopish
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.06495 11.757L11.438 14.129L15.695 9.87098M19.998 11.999C19.998 16.4161 16.4171 19.997 12 19.997C7.58278 19.997 4.00195 16.4161 4.00195 11.999C4.00195 7.5818 7.58278 4.00098 12 4.00098C16.4171 4.00098 19.998 7.5818 19.998 11.999Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
    </div>
  </div>
</template>
<script>
export default {
  props: ["notification", "date"],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    closed() {
      this.closeModal();
    },
    closeModal() {
      this.visible = false;
    },
    openModal() {
      this.visible = true;
    },
    open() {
      this.$refs.orderSucccess.open();
    },
    close() {
      this.$refs.orderSucccess.close();
    },
    toProfile() {
      this.visible = false;
      this.$router.push(`/profile/freelancer/order/view/${this.order?.id}`);
    },
  },
  watch: {
    visible(val) {
      if (!val) this.close();
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-modal-content) {
  border-radius: 24px;
}
</style>
