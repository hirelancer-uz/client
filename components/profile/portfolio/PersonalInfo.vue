<template>
  <div class="personal-info">
    <div
      class="border border-solid border-grey-8 px-6 py-4 rounded-2xl h-full xl:border-0 xl:p-0"
      :class="{ 'profile-info': profile }"
    >
      <div class="flex justify-between">
        <h6 class="text-[18px] font-medium text-black xl:font-semibold">
          {{ $store.state.translations["profile.about-free"] }}
        </h6>
        <button
          v-if="isEdit"
          @click="$router.push(localePath(`/profile/${$route.params.user}/settings`))"
          class="flex gap-[6px] text-base text-blue font-medium items-center xl:text-[14px]"
        >
          {{ $store.state.translations["profile.edit"] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1294_6805)">
              <path
                d="M18.3334 10.0003V15.0003C18.3334 16.8413 16.841 18.3337 15 18.3337H5.00002C3.15907 18.3337 1.66669 16.8413 1.66669 15.0003V5.00033C1.66669 3.15938 3.15907 1.66699 5.00002 1.66699H10M13.072 3.35262C13.072 3.35262 13.072 4.54453 14.2639 5.73644C15.4558 6.92836 16.6477 6.92836 16.6477 6.92836M7.62891 13.325L10.1319 12.9674C10.493 12.9158 10.8276 12.7485 11.0855 12.4906L17.8396 5.73644C18.4979 5.07817 18.4979 4.01089 17.8396 3.35261L16.6477 2.1607C15.9895 1.50242 14.9222 1.50242 14.2639 2.1607L7.50972 8.91488C7.25183 9.17277 7.08454 9.50736 7.03296 9.86841L6.67538 12.3714C6.59592 12.9277 7.07269 13.4044 7.62891 13.325Z"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1294_6805">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M7 10.5L12 14.5L17 10.5"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="userInfo?.bio"
        class="body pt-6 border-[0] border-t border-solid border-grey-8 mt-4 flex flex-col gap-4 xl:border-[0] xl:pt-0 text-base text-grey-64 xl:text-[14px]"
        v-html="userInfo?.bio"
      ></div>
      <div
        v-else
        class="h-[208px] xl:h-[100px] pt-6 border-[0] border-t border-solid border-grey-8 mt-4 flex justify-center items-center xl:border-b xl:border-t-[0] xl:pt-0"
      >
        <VEmpty />
      </div>
    </div>
  </div>
</template>
<script>
import VEmpty from "../VEmpty.vue";

export default {
  props: ["isEdit", "profile", "userInfo"],
  components: { VEmpty },
};
</script>
<style lang="css" scoped>
.body {
  word-break: break-all;
}
@media (max-width: 1200px) {
  .profile-info {
    border-radius: 0;
    border: 0;
    border-top: 1px solid var(--border-darik);
    padding-top: 24px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
