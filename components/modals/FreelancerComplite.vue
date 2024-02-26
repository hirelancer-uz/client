<template lang="html">
  <div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ padding: '16px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="712px"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-4">
        <div class="flex justify-end">
          <button @click="visible = false">
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
        </div>
        <div class="flex gap-8 flex-col items-center">
          <svg
            width="107"
            height="106"
            viewBox="0 0 107 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="53.5" cy="53" r="53" fill="#5C46E6" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.362 42.0407C48.8225 39.5605 43.8552 38.4366 40.1579 38.0188C38.328 37.812 36.834 39.34 36.834 41.2253V59.9999C36.834 61.8852 38.328 63.4138 40.1579 63.6205C43.8552 64.0383 48.8225 65.1623 52.362 67.6425C52.7022 67.8808 53.1014 68 53.5007 68V42.3983C53.1014 42.3983 52.7022 42.2791 52.362 42.0407ZM40.5989 46.5666C40.7045 45.8844 41.3432 45.417 42.0255 45.5226C44.1968 45.8589 46.642 46.421 48.9517 47.3141C49.5956 47.5631 49.9157 48.2869 49.6667 48.9308C49.4177 49.5747 48.6939 49.8948 48.05 49.6458C45.9522 48.8346 43.6908 48.3103 41.6429 47.9932C40.9606 47.8875 40.4932 47.2488 40.5989 46.5666ZM42.0255 52.1893C41.3432 52.0836 40.7045 52.551 40.5989 53.2333C40.4932 53.9155 40.9606 54.5542 41.6429 54.6598C42.6749 54.8197 43.7644 55.0326 44.8617 55.3095C45.5311 55.4783 46.2106 55.0726 46.3795 54.4032C46.5484 53.7338 46.1427 53.0543 45.4733 52.8854C44.2916 52.5873 43.125 52.3596 42.0255 52.1893Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M54.6386 42.0407C58.1781 39.5605 63.1455 38.4366 66.8428 38.0188C68.6726 37.812 70.1667 39.34 70.1667 41.2253V59.9999C70.1667 61.8852 68.6726 63.4138 66.8428 63.6205C63.1455 64.0383 58.1781 65.1623 54.6386 67.6425C54.2985 67.8808 53.8992 68 53.5 68V42.3983C53.8992 42.3983 54.2985 42.2791 54.6386 42.0407Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M61.8333 55.917C60.6827 55.917 59.75 56.8497 59.75 58.0003C59.75 58.6907 59.1904 59.2503 58.5 59.2503C57.8096 59.2503 57.25 58.6907 57.25 58.0003C57.25 55.469 59.302 53.417 61.8333 53.417C64.3646 53.417 66.4167 55.469 66.4167 58.0003C66.4167 60.5316 64.3646 62.5837 61.8333 62.5837C61.143 62.5837 60.5833 62.024 60.5833 61.3337C60.5833 60.6433 61.143 60.0837 61.8333 60.0837C62.9839 60.0837 63.9167 59.1509 63.9167 58.0003C63.9167 56.8497 62.9839 55.917 61.8333 55.917Z"
              fill="white"
            />
            <path
              d="M63.4993 66.3337C63.4993 67.2541 62.7532 68.0003 61.8327 68.0003C60.9122 68.0003 60.166 67.2541 60.166 66.3337C60.166 65.4132 60.9122 64.667 61.8327 64.667C62.7532 64.667 63.4993 65.4132 63.4993 66.3337Z"
              fill="white"
            />
          </svg>

          <h4 class="text-black text-[24px] font-semibold mb-8">
            {{ title }}
          </h4>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="visible = false"
            class="h-[54px] items-center w-full flex justify-center gap-2 border border-solid border-grey-light rounded-[8px] text-base font-medium text-grey-64"
          >
            {{ cancel || "Yo'q" }}
          </button>
          <button
            @click="$emit('submit')"
            class="h-[54px] items-center w-full flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-base font-medium text-white"
            :class="{
              'pointer-events-none opacity-50': loadingBtn,
            }"
          >
            {{ save || "Ha" }} <LoaderBtn v-if="loadingBtn" />
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import LoaderBtn from "@/components/loader-btn.vue";
export default {
  props: ["visibleProp", "title", "save", "cancel", "loadingBtn"],
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
