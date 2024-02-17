<template>
  <div
    class="comments-card border border-solid border-grey-8 rounded-[12px] px-6 py-6 flex flex-col gap-[19px] xl:gap-4 xl:min-w-[90%]"
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
          Muhammadullo Egamberdiyev
        </h6>
        <div class="flex text-[14px] text-[#9A999B] items-center gap-[12px]">
          <p class="clock">12.00</p>
          <p class="stick bg-[#EBEBEB] w-[1px] h-[16px]"></p>
          <p class="date">10.02.2000</p>
        </div>
      </div>
    </div>
    <div
      class="price-info rounded-[8px] border-[#E7EDFB] border-solid border-[1px] text-grey-80 text-base p-4 xl:px-2 xl:py-2 xl:text-[12px] xl:leading-4 bg-[#F8F9FF]"
    >
      <span class="text-black font-medium text-[16px] mb-[8px] flex"
        >Google Savdo Markazini Sozlash</span
      >
      <div class="flex items-center gap-[12px]">
        <div class="direction text-[#5D5D5F] text-[14px]">Web design</div>
        <p class="stick bg-[#EBEBEB] w-[1px] h-[16px]"></p>
        <div
          class="flex flex-col justify-between gap-2 items-end xl:flex-row xl:items-center"
        >
          <span
            class="flex gap-1 items-center bg-grey-light text-main-color text-[14px] py-[2px] px-[16px] rounded-[50px] xl:text-[12px] xl:font-semibold"
          >
            Ijobiy</span
          >
        </div>
      </div>
    </div>
    <div class="body">
      <p class="text-base text-[#5D5D5F] xl:text-[14px] xl:leading-5">
        So'nggi o'n yil ichida biz sheriklarimizga yordam berishga harakat
        qildik, kichik va o'rta biznesdan Corel va Oppo kabi biznesgacha,
        raqamli mavjudligini kengaytirish va mahsulot sifatini oshirish. Biz
        buni har doim katta fidoyilik va ishtiyoq bilan qilishga harakat
        qilamiz, chunki bu yo'l!
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped></style>
