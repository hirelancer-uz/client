<template lang="html">
  <div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ padding: '16px', paddingLrft: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      :width="width || 712"
      @ok="handleOk"
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
            @click="handleOk"
            class="h-[54px] items-center flex justify-center border border-solid border-grey-light rounded-[8px] text-base font-medium text-grey-64"
          >
            {{ close || "Yo'q" }}
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
            <span> {{ save || "Ha" }}</span>
            <LoaderBtn v-if="loadingBtn" />
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import LoaderBtn from "@/components/loader-btn.vue";
export default {
  props: [
    "visibleProp",
    "title",
    "save",
    "close",
    "width",
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
    handleOk() {
      this.visible = false;
      this.$emit("handleOkProp");
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.$emit("handleOkProp");
      }
    },
    visibleProp(val) {
      this.visible = val;
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
