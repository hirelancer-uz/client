<template>
  <div
    class="alerts-card rounded-[8px] bg-bg-grey px-6 pb-[25px] pt-[36px] xl:px-4 xl:pt-[28px] xl:pb-4 relative h-[195px] xl:h-auto xl:min-w-[270px]"
  >
    <button class="top-2 right-2 absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M13.5355 6.46489L6.46448 13.536M13.5355 13.5359L6.46448 6.46484"
          stroke="#5D5D5F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="flex flex-col justify-between h-full xl:gap-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-base font-medium text-black xl:text-[14px] truncate break-all">
          {{ notification?.theme }}
        </h3>
        <p class="text-[14px] text-gray-64 xl:text-[12px] desc break-all">
          {{notification?.message}}
        </p>
      </div>
      <nuxt-link
        :to="localePath(`/profile/customer/order/view/${notification?.link}`)"
        class="text-[12px] text-blue font-semibold uppercase flex gap-1 items-center"
        >{{ $store.state.translations["profile.read"] }}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.332 8.33333L9.9987 5M9.9987 5L6.66537 8.33333M9.9987 5L9.9987 15"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["notification"],
  name: "AlertsCard",
};
</script>
<style lang="css">
.desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  /* text-align: left; */
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

</style>
