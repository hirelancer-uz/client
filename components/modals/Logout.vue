<template lang="html">
  <div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ padding: '16px', paddingLrft: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      :width="712"
      @ok="handleOk"
    >
      <div class="flex flex-col gap-8 items-center">
        <div
          class="w-[106px] h-[106px] rounded-full flex items-center justify-center bg-light-red mt-[50px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M7.16667 0H13.8333C17.5152 0 20.5 2.98477 20.5 6.66667V23.3333C20.5 27.0152 17.5152 30 13.8333 30H7.16667C3.48477 30 0.5 27.0152 0.5 23.3333V6.66667C0.5 2.98477 3.48477 0 7.16667 0Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.3839 9.11612C15.8957 8.62796 15.1043 8.62796 14.6161 9.11612L9.61612 14.1161C9.12796 14.6043 9.12796 15.3957 9.61612 15.8839L14.6161 20.8839C15.1043 21.372 15.8957 21.372 16.3839 20.8839C16.872 20.3957 16.872 19.6043 16.3839 19.1161L13.5178 16.25H30.5C31.1904 16.25 31.75 15.6904 31.75 15C31.75 14.3096 31.1904 13.75 30.5 13.75H13.5178L16.3839 10.8839C16.872 10.3957 16.872 9.60427 16.3839 9.11612Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="flex justify-between flex-col items-center w-full">
          <h4 class="text-black text-[24px] font-semibold">
            Siz profildan chiqmoqchimisiz?
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
            Yo'q
          </button>
          <button
            @click="logout"
            class="h-[54px] items-center flex justify-center gap-2 border border-solid rounded-[8px] text-base font-medium text-white border-light-red bg-light-red"
            :class="{
              'pointer-events-none opacity-50': loadingBtn,
            }"
          >
            <span> Ha</span>
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
  props: ["visibleProp", "loadingBtn"],
  data() {
    return {
      visible: false,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.handleOk();
    },
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
