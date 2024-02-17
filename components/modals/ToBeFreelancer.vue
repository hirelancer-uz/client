<template lang="html">
  <div>
    <a-modal
      class="xl:hidden flex"
      v-model="visible"
      :body-style="{ padding: '16px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="712px"
      @ok="handleOk"
    >
      <div class="flex flex-col items-center relative">
        <button @click="handleOk" class="absolute top-0 right-2">
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
        <span
          class="py-1 flex w-[106px] h-[106px] bg-main-color rounded-full justify-center items-center mt-12"
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
              d="M19.3615 9.04074C15.822 6.56053 10.8547 5.43658 7.15738 5.01879C5.32753 4.81202 3.8335 6.34004 3.8335 8.2253V26.9999C3.8335 28.8852 5.32753 30.4138 7.15738 30.6205C10.8547 31.0383 15.822 32.1623 19.3615 34.6425C19.7017 34.8808 20.1009 35 20.5002 35V9.39825C20.1009 9.39825 19.7017 9.27908 19.3615 9.04074ZM7.5984 13.5666C7.70406 12.8844 8.34276 12.417 9.02498 12.5226C11.1963 12.8589 13.6415 13.421 15.9512 14.3141C16.5951 14.5631 16.9152 15.2869 16.6662 15.9308C16.4172 16.5747 15.6934 16.8948 15.0495 16.6458C12.9518 15.8346 10.6903 15.3103 8.64237 14.9932C7.96014 14.8875 7.49274 14.2488 7.5984 13.5666ZM9.02498 19.1893C8.34276 19.0836 7.70406 19.551 7.5984 20.2333C7.49274 20.9155 7.96014 21.5542 8.64237 21.6598C9.67444 21.8197 10.7639 22.0326 11.8612 22.3095C12.5306 22.4783 13.2101 22.0726 13.379 21.4032C13.5479 20.7338 13.1422 20.0543 12.4728 19.8854C11.2911 19.5873 10.1245 19.3596 9.02498 19.1893Z"
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
              d="M28.8333 22.9167C27.6827 22.9167 26.75 23.8495 26.75 25.0001C26.75 25.6904 26.1904 26.2501 25.5 26.2501C24.8096 26.2501 24.25 25.6904 24.25 25.0001C24.25 22.4688 26.302 20.4167 28.8333 20.4167C31.3646 20.4167 33.4167 22.4688 33.4167 25.0001C33.4167 27.5314 31.3646 29.5834 28.8333 29.5834C28.143 29.5834 27.5833 29.0238 27.5833 28.3334C27.5833 27.6431 28.143 27.0834 28.8333 27.0834C29.9839 27.0834 30.9167 26.1507 30.9167 25.0001C30.9167 23.8495 29.9839 22.9167 28.8333 22.9167Z"
              fill="white"
            />
            <path
              d="M30.4998 33.3334C30.4998 34.2539 29.7536 35.0001 28.8332 35.0001C27.9127 35.0001 27.1665 34.2539 27.1665 33.3334C27.1665 32.4129 27.9127 31.6667 28.8332 31.6667C29.7536 31.6667 30.4998 32.4129 30.4998 33.3334Z"
              fill="white"
            /></svg
        ></span>
        <div class="flex flex-col gap-4 items-center mt-8">
          <h4 class="text-[24px] max-w-[573px] text-black font-semibold text-center">
            Siz mutaxassislik qo'shmagansiz, buyurtmani olishdan avval mutaxassislikni
            qo'shishingiz kerak
          </h4>
        </div>
        <div class="buttons grid grid-cols-2 gap-4 w-full items-center mt-12 px-4">
          <button
            @click="visible = false"
            class="border border-solid border-grey-light rounded-lg h-[54px] flex justify-center items-center text-base font-medium text-grey-64"
          >
            Yopish
          </button>
          <button
            @click="send"
            class="bg-main-color rounded-lg h-[54px] flex justify-center items-center text-base font-medium text-white"
          >
            Mutaxassislik qo'shish
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  props: ["visibleProp"],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    send() {
      this.$emit("open");
      this.visible = false;
    },
    handleOk() {
      this.visible = false;
    },
  },
  watch: {
    visibleProp(val) {
      this.visible = true;
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-modal-content) {
  border-radius: 24px;
}
</style>
