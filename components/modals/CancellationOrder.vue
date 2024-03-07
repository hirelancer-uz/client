<template>
  <div>
    <div class="flex xl:hidden">
      <a-modal
        class="close-modal xl:hidden"
        v-model="visible"
        :body-style="{
          padding: '16px',
          paddingLrft: '32px',
          borderRadius: '24px',
        }"
        :width="width || 712"
        @ok="closeModal"
      >
        <div class="flex flex-col gap-8 items-center">
          <div
            class="w-[106px] h-[106px] rounded-full flex items-center justify-center bg-main-color mt-[50px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.362 9.04074C15.8225 6.56053 10.8552 5.43658 7.15787 5.01879C5.32802 4.81202 3.83398 6.34004 3.83398 8.2253V26.9999C3.83398 28.8852 5.32802 30.4138 7.15787 30.6205C10.8552 31.0383 15.8225 32.1623 19.362 34.6425C19.7022 34.8808 20.1014 35 20.5007 35V9.39825C20.1014 9.39825 19.7022 9.27908 19.362 9.04074ZM7.59889 13.5666C7.70454 12.8844 8.34324 12.417 9.02547 12.5226C11.1968 12.8589 13.642 13.421 15.9517 14.3141C16.5956 14.5631 16.9157 15.2869 16.6667 15.9308C16.4177 16.5747 15.6939 16.8948 15.05 16.6458C12.9522 15.8346 10.6908 15.3103 8.64286 14.9932C7.96063 14.8875 7.49323 14.2488 7.59889 13.5666ZM9.02547 19.1893C8.34324 19.0836 7.70454 19.551 7.59889 20.2333C7.49323 20.9155 7.96063 21.5542 8.64286 21.6598C9.67493 21.8197 10.7644 22.0326 11.8617 22.3095C12.5311 22.4783 13.2106 22.0726 13.3795 21.4032C13.5484 20.7338 13.1427 20.0543 12.4733 19.8854C11.2916 19.5873 10.125 19.3596 9.02547 19.1893Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M21.6386 9.04074C25.1781 6.56053 30.1455 5.43658 33.8428 5.01879C35.6726 4.81202 37.1667 6.34004 37.1667 8.2253V26.9999C37.1667 28.8852 35.6726 30.4138 33.8428 30.6205C30.1455 31.0383 25.1781 32.1623 21.6386 34.6425C21.2985 34.8808 20.8992 35 20.5 35V9.39825C20.8992 9.39825 21.2985 9.27908 21.6386 9.04074Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.8333 22.917C27.6827 22.917 26.75 23.8497 26.75 25.0003C26.75 25.6907 26.1904 26.2503 25.5 26.2503C24.8096 26.2503 24.25 25.6907 24.25 25.0003C24.25 22.469 26.302 20.417 28.8333 20.417C31.3646 20.417 33.4167 22.469 33.4167 25.0003C33.4167 27.5316 31.3646 29.5837 28.8333 29.5837C28.143 29.5837 27.5833 29.024 27.5833 28.3337C27.5833 27.6433 28.143 27.0837 28.8333 27.0837C29.9839 27.0837 30.9167 26.1509 30.9167 25.0003C30.9167 23.8497 29.9839 22.917 28.8333 22.917Z"
                fill="white"
              />
              <path
                d="M30.4993 33.3337C30.4993 34.2541 29.7532 35.0003 28.8327 35.0003C27.9122 35.0003 27.166 34.2541 27.166 33.3337C27.166 32.4132 27.9122 31.667 28.8327 31.667C29.7532 31.667 30.4993 32.4132 30.4993 33.3337Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="flex justify-between flex-col items-center w-full">
            <h4 class="text-black text-[24px] font-semibold">
              {{ title }}
            </h4>
            <button @click="visible = false" class="absolute top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.6565 10.3428L10.3428 21.6566M21.6565 21.6565L10.3428 10.3428"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <slot></slot>
          </div>
          <div class="grid grid-cols-2 gap-4 w-full mt-4">
            <button
              @click="closeModal"
              class="h-[54px] items-center flex justify-center border border-solid border-grey-light rounded-[8px] text-base font-medium text-grey-64"
            >
              {{ closeBtn || $store.state.translations["modal.no"] }}
            </button>
            <button
              @click="$emit('submit')"
              class="h-[54px] items-center flex justify-center gap-2 border border-solid rounded-[8px] text-base font-medium text-white"
              :class="{
                'pointer-events-none opacity-50': loadingBtn || disabled,
                'border-main-color bg-main-color': primary,
                'border-light-red bg-light-red': !primary,
              }"
            >
              <span> {{ save || $store.state.translations["modal.yes"] }}</span>
              <LoaderBtn v-if="loadingBtn" />
            </button>
          </div>
        </div>
      </a-modal>
    </div>
    <div class="hidden xl:block">
      <vue-bottom-sheet-vue2
        ref="specialBottomSheet"
        class="bottom-drawer relative hidden xl:block"
        @closed="closed"
      >
        <div class="flex flex-col items-center relative pb-3 pt-4">
          <button @click="close" class="absolute top-4 right-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.657 10.3431L10.3433 21.6568M21.657 21.6567L10.3433 10.343"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            v-if="primary"
            class="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-main-color mt-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.362 9.04074C15.8225 6.56053 10.8552 5.43658 7.15787 5.01879C5.32802 4.81202 3.83398 6.34004 3.83398 8.2253V26.9999C3.83398 28.8852 5.32802 30.4138 7.15787 30.6205C10.8552 31.0383 15.8225 32.1623 19.362 34.6425C19.7022 34.8808 20.1014 35 20.5007 35V9.39825C20.1014 9.39825 19.7022 9.27908 19.362 9.04074ZM7.59889 13.5666C7.70454 12.8844 8.34324 12.417 9.02547 12.5226C11.1968 12.8589 13.642 13.421 15.9517 14.3141C16.5956 14.5631 16.9157 15.2869 16.6667 15.9308C16.4177 16.5747 15.6939 16.8948 15.05 16.6458C12.9522 15.8346 10.6908 15.3103 8.64286 14.9932C7.96063 14.8875 7.49323 14.2488 7.59889 13.5666ZM9.02547 19.1893C8.34324 19.0836 7.70454 19.551 7.59889 20.2333C7.49323 20.9155 7.96063 21.5542 8.64286 21.6598C9.67493 21.8197 10.7644 22.0326 11.8617 22.3095C12.5311 22.4783 13.2106 22.0726 13.3795 21.4032C13.5484 20.7338 13.1427 20.0543 12.4733 19.8854C11.2916 19.5873 10.125 19.3596 9.02547 19.1893Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M21.6386 9.04074C25.1781 6.56053 30.1455 5.43658 33.8428 5.01879C35.6726 4.81202 37.1667 6.34004 37.1667 8.2253V26.9999C37.1667 28.8852 35.6726 30.4138 33.8428 30.6205C30.1455 31.0383 25.1781 32.1623 21.6386 34.6425C21.2985 34.8808 20.8992 35 20.5 35V9.39825C20.8992 9.39825 21.2985 9.27908 21.6386 9.04074Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.8333 22.917C27.6827 22.917 26.75 23.8497 26.75 25.0003C26.75 25.6907 26.1904 26.2503 25.5 26.2503C24.8096 26.2503 24.25 25.6907 24.25 25.0003C24.25 22.469 26.302 20.417 28.8333 20.417C31.3646 20.417 33.4167 22.469 33.4167 25.0003C33.4167 27.5316 31.3646 29.5837 28.8333 29.5837C28.143 29.5837 27.5833 29.024 27.5833 28.3337C27.5833 27.6433 28.143 27.0837 28.8333 27.0837C29.9839 27.0837 30.9167 26.1509 30.9167 25.0003C30.9167 23.8497 29.9839 22.917 28.8333 22.917Z"
                fill="white"
              />
              <path
                d="M30.4993 33.3337C30.4993 34.2541 29.7532 35.0003 28.8327 35.0003C27.9122 35.0003 27.166 34.2541 27.166 33.3337C27.166 32.4132 27.9122 31.667 28.8327 31.667C29.7532 31.667 30.4993 32.4132 30.4993 33.3337Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            v-else
            class="py-1 flex w-[72px] h-[72px] bg-[#f2154a1a] rounded-full justify-center items-center mt-9 border border-solid border-light-red"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0892 7.2326C12.2576 5.24843 8.28369 4.34926 5.32585 4.01503C3.86198 3.84961 2.66675 5.07203 2.66675 6.58024V21.5999C2.66675 23.1081 3.86198 24.331 5.32585 24.4964C8.28369 24.8307 12.2576 25.7298 15.0892 27.714C15.3613 27.9047 15.6807 28 16.0001 28V7.5186C15.6807 7.5186 15.3613 7.42327 15.0892 7.2326ZM5.67867 10.8533C5.76319 10.3075 6.27416 9.93358 6.81993 10.0181C8.55697 10.2871 10.5132 10.7368 12.3609 11.4513C12.876 11.6505 13.1321 12.2295 12.9329 12.7446C12.7337 13.2598 12.1547 13.5159 11.6395 13.3167C9.96136 12.6677 8.15222 12.2483 6.51385 11.9945C5.96807 11.91 5.59415 11.3991 5.67867 10.8533ZM6.81993 15.3514C6.27416 15.2669 5.76319 15.6408 5.67867 16.1866C5.59415 16.7324 5.96807 17.2434 6.51385 17.3279C7.3395 17.4557 8.21107 17.6261 9.08893 17.8476C9.62443 17.9827 10.1681 17.6581 10.3032 17.1226C10.4383 16.5871 10.1137 16.0434 9.57819 15.9083C8.63284 15.6698 7.69958 15.4877 6.81993 15.3514Z"
                fill="#F2154A"
              />
              <path
                opacity="0.4"
                d="M16.9109 7.2326C19.7425 5.24843 23.7164 4.34926 26.6742 4.01503C28.1381 3.84961 29.3333 5.07203 29.3333 6.58024V21.5999C29.3333 23.1081 28.1381 24.331 26.6742 24.4964C23.7164 24.8307 19.7425 25.7298 16.9109 27.714C16.6388 27.9047 16.3194 28 16 28V7.5186C16.3194 7.5186 16.6388 7.42327 16.9109 7.2326Z"
                fill="#F2154A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.6667 18.333C21.7462 18.333 21 19.0792 21 19.9997C21 20.552 20.5523 20.9997 20 20.9997C19.4477 20.9997 19 20.552 19 19.9997C19 17.9746 20.6416 16.333 22.6667 16.333C24.6917 16.333 26.3333 17.9746 26.3333 19.9997C26.3333 22.0247 24.6917 23.6663 22.6667 23.6663C22.1144 23.6663 21.6667 23.2186 21.6667 22.6663C21.6667 22.1141 22.1144 21.6663 22.6667 21.6663C23.5871 21.6663 24.3333 20.9201 24.3333 19.9997C24.3333 19.0792 23.5871 18.333 22.6667 18.333Z"
                fill="#F2154A"
              />
              <path
                d="M23.9999 26.6663C23.9999 27.4027 23.403 27.9997 22.6666 27.9997C21.9302 27.9997 21.3333 27.4027 21.3333 26.6663C21.3333 25.93 21.9302 25.333 22.6666 25.333C23.403 25.333 23.9999 25.93 23.9999 26.6663Z"
                fill="#F2154A"
              />
            </svg>
          </span>
          <div class="flex flex-col gap-4 items-center mt-4">
            <h4 class="text-[18px] text-black font-semibold text-center">
              {{ title }}
            </h4>
          </div>
          <slot></slot>
          <div class="buttons grid grid-cols-2 gap-3 w-full mt-10 px-4">
            <button
              @click="close"
              class="border border-solid w-full border-grey-light rounded-lg h-12 flex justify-center items-center text-[14px] font-medium text-grey-64"
            >
              <span>
                {{ closeBtn || $store.state.translations["modal.no"] }}
              </span>
            </button>
            <button
              @click="$emit('submit')"
              class="w-full rounded-lg h-12 items-center flex justify-center text-[14px] font-medium text-white"
              :class="{
                'pointer-events-none opacity-50': loadingBtn || disabled,
                'border-main-color bg-main-color': primary,
                'border-light-red bg-light-red': !primary,
              }"
            >
              {{ save || $store.state.translations["modal.yes"] }}
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
    </div>
  </div>
</template>
<script>
import LoaderBtn from "@/components/loader-btn.vue";
export default {
  props: [
    "title",
    "save",
    "width",
    "closeBtn",
    "primary",
    "loadingBtn",
    "disabled",
  ],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    closed() {
      this.closeModal();
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    open() {
      this.$refs.specialBottomSheet?.open();
    },
    close() {
      this.$refs.specialBottomSheet.close();
    },
  },
  watch: {
    visible(val) {
      if (!val) this.close();
    },
  },
  components: {
    LoaderBtn,
  },
};
</script>
<style lang="css" scoped>
.close-modal :deep(.ant-modal-content) {
  border-radius: 16px;
}
</style>
