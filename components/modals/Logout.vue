<template lang="html">
  <div>
    <div class="xl:hidden">
      <a-modal
        class="close-modal xl:hidden"
        v-model="visible"
        :body-style="{ padding: '16px', paddingLrft: '32px', borderRadius: '24px' }"
        centered
        :closable="false"
        :width="712"
        @ok="closeModal"
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
              @click="closeModal"
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
    <div class="hidden xl:block">
      <vue-bottom-sheet-vue2
        @closed="closed"
        ref="logoutSheet"
        class="bottom-drawer hidden xl:block"
      >
        <div class="flex flex-col items-center gap-6 relative xl:px-4">
          <button @click="close" class="absolute top-1 right-2">
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
          </button>
          <div class="flex flex-col gap-4 mt-6 items-center xl:gap-2">
            <h4
              class="text-[18px] text-black text-center font-semibold xl:text-[18px] xl:font-semibold mx-auto"
            >
              Siz profildan chiqmoqchimisiz?
            </h4>
          </div>
          <div class="buttons grid grid-cols-2 gap-3 mb-6 xl:w-full">
            <button
              @click="close"
              class="h-[52px] border border-solid border-grey-light rounded-[8px] flex justify-center items-center text-base font-medium text-grey-64"
            >
              Yo’q
            </button>
            <button
              @click="logout"
              class="h-[52px] bg-light-red rounded-[8px] flex justify-center items-center text-base font-medium text-white"
              :class="{
                'pointer-events-none opacity-50': loadingBtn,
              }"
            >
              Ha
              <LoaderBtn v-if="loadingBtn" />
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
  props: ["visibleProp", "loadingBtn"],
  data() {
    return {
      visible: false,
    };
  },

  methods: {
    closed() {
      this.closeModal();
    },
    logout() {
      this.$store.dispatch("logout");
      this.closeModal();
      this.close();
    },
    open() {
      this.$refs.logoutSheet.open();
    },
    close() {
      this.$refs.logoutSheet.close();
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
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
