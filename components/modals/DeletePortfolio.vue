<template>
  <div>
    <vue-bottom-sheet-vue2 ref="deletePortfolio" class="bottom-drawer">
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
            class="text-[18px] text-black text-center font-semibold xl:text-[18px] xl:font-semibold max-w-[90%] mx-auto"
          >
            {{ $store.state.translations["modal.sure-delete"] }}
          </h4>
        </div>
        <div class="buttons grid grid-cols-2 gap-3 mb-6 xl:w-full">
          <button
            @click="close"
            class="h-[52px] border border-solid border-grey-light rounded-[8px] flex justify-center items-center text-base font-medium text-grey-64"
          >
            {{ $store.state.translations["modal.yes"] }}
          </button>
          <button
            @click="submit"
            class="h-[52px] bg-light-red rounded-[8px] flex justify-center items-center text-base font-medium text-white"
          >
            {{ $store.state.translations["modal.no"] }}
          </button>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>
<script>
export default {
  methods: {
    submit() {
      this.$emit("submit");
    },
    open() {
      this.$refs.deletePortfolio.open();
    },
    close() {
      this.$refs.deletePortfolio.close();
    },
  },
};
</script>
<style lang="css">
:deep(.bottom-sheet__draggable-area) {
  display: none;
}
</style>
