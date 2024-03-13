<template>
  <div
    class="comments-card border border-solid border-grey-8 rounded-[12px] px-6 py-6 flex flex-col gap-[19px] xl:gap-4 xl:min-w-[90%] xl:px-4 xl:py-4"
  >
    <div class="flex gap-4 items-center">
      <div
        class="image w-[72px] h-[72px] rounded-full overflow-hidden xl:w-10 xl:h-10"
      >
        <img
          class="w-full h-full object-cover"
          src="../../assets/images/user-avatar.jpg"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-2">
        <h6
          class="text-[18px] text-black font-medium xl:text-[12px] xl:leading-4"
        >
          {{ feedback?.user?.name }} {{ feedback?.user?.surname }}
        </h6>
        <div class="flex text-[14px] text-[#9A999B] items-center gap-[12px]">
          <p class="clock">{{ hour }}</p>
          <p class="stick bg-[#EBEBEB] w-[1px] h-[16px]"></p>
          <p class="date">{{ date }}</p>
        </div>
      </div>
    </div>
    <div
      class="price-info rounded-[8px] border-[#E7EDFB] border-solid border-[1px] text-grey-80 text-base p-4 xl:px-2 xl:py-2 xl:text-[12px] xl:leading-4 bg-[#F8F9FF]"
    >
      <h4
        @click="
          $router.push(localePath(`/profile/freelancer/order/view/${feedback?.order?.id}`))
        "
        class="text-black font-medium w-full text-[16px] mb-[8px] truncate cursor-pointer"
      >
        {{ feedback?.order?.name }}
      </h4>
      <div class="flex items-center gap-[12px]">
        <div class="direction text-[#5D5D5F] text-[14px]">Web design</div>
        <p class="stick bg-[#EBEBEB] w-[1px] h-[16px]"></p>
        <div
          class="flex flex-col justify-between gap-2 items-end xl:flex-row xl:items-center"
        >
          <span
            v-if="feedback?.is_positive"
            class="flex gap-1 items-center bg-grey-light text-main-color text-[14px] py-[2px] px-[16px] rounded-[50px] xl:text-[12px] xl:font-semibold"
          >
            {{ $store.state.translations["modal.positive"] }}</span
          >
          <span
            v-else
            class="flex gap-1 items-center bg-[#FFDDE5] text-light-red text-[14px] py-[2px] px-[16px] rounded-[50px] xl:text-[12px] xl:font-semibold"
          >
            {{ $store.state.translations["profile.negative"] }}</span
          >
        </div>
      </div>
    </div>
    <div class="body">
      <p class="text-base text-[#5D5D5F] xl:text-[14px] xl:leading-5">
        {{ feedback?.feedback }}
      </p>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["feedback"],
  computed: {
    date() {
      return moment(this.feedback?.created_at).format("DD.MM.YYYY");
    },
    hour() {
      return moment(this.feedback?.created_at).format("HH:mm");
    },
  },
};
</script>
<style lang="css" scoped></style>
