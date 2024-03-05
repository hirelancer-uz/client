<template>
  <div
    class="card price-card px-6 py-6 xl:px-4 xl:py-4 rounded-2xl bg-bg-grey flex flex-col gap-6"
  >
    <div class="flex flex-col rower gap-6 xl:gap-4">
      <div
        class="flex justify-between pricer items-center xl:flex-row xl:justify-between xl:items-center"
      >
        <p class="text-grey-64 text-[14px] xl:text-base xl:font-semibold price__sup">
          Buyrtma narxi:
        </p>
        <h1
          class="text-black text-base font-semibold xl:text-base exact__price whitespace-nowrap"
        >
          {{
            order?.price ? `${order?.price.toLocaleString()} so’m` : "По договоренности"
          }}
        </h1>
      </div>
      <div
        class="flex deal justify-between items-center xl:flex-row xl:justify-between xl:items-center"
      >
        <p class="text-grey-64 text-[14px] xl:font-medium">Срок:</p>
        <h4
          class="text-main-color text-[18px] font-semibold xl:font-medium xl:text-[14px]"
        >
          По договоренности
        </h4>
      </div>
    </div>
    <div class="buttons flex flex-col gap-4 xl:hidden" v-if="accessApp">
      <button
        @click="$emit('open')"
        class="app-btn relative over h-[52px] xl:h-12 justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-blue border-blue text-base xl:text-[14px] text-white font-medium"
      >
        <span class="relative z-20"> Отправить заявку</span>
        <svg
          class="relative z-20 xl:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.35303 16V18.381C5.35303 19.124 6.13503 19.608 6.80003 19.275L21.353 12L6.80003 4.72501C6.13503 4.39201 5.35303 4.87601 5.35303 5.61901V12H12.02"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <!-- <button
        class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-white border-blue text-base text-blue font-medium"
      >
        Написать<svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M8.5 10H16.5M8.5 14H12.5M11.5 3H13.5C18.4706 3 22.5 7.02944 22.5 12C22.5 16.9706 18.4706 21 13.5 21H6.5C4.29086 21 2.5 19.2091 2.5 17V12C2.5 7.02944 6.52944 3 11.5 3Z"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["order"],
  computed: {
    accessApp() {
      return (
        !this.order?.requests.find(
          (item) => item.freelancer_id == this.$store.state.userInfo?.id
        ) &&
        !this.order?.start_of_execution &&
        this.order?.client?.id != this.$store.state.userInfo?.id
      );
    },
  },
};
</script>
<style lang="css" scoped>
.app-btn {
  overflow: hidden;
}
.app-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--Button-gradient, linear-gradient(0deg, #5c46e5 0%, #9882ff 106.73%));
  box-shadow: 0px 12px 16px 0px rgba(92, 70, 229, 0.16);
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
}
.app-btn:hover::after {
  opacity: 1;
}
</style>
