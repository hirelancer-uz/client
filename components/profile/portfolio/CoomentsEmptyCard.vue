<template>
  <div
    class="comments-empty-card px-6 py-6 xl:px-4 xl:py-4 border border-solid border-grey-8 rounded-[16px] xl:rounded-[12px] flex flex-col gap-4"
  >
    <div class="head flex gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="xl:w-16 xl:h-16"
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="72"
          height="72"
          rx="36"
          fill="#F5F5F7"
          stroke="#EBEBEB"
        />
        <path
          d="M60.883 52.9953C61.4792 52.3302 62.5208 52.3302 63.117 52.9953L64.523 54.5639C64.9638 55.0557 65.5813 55.3531 66.2407 55.3912L68.3437 55.5124C69.2354 55.5638 69.8849 56.3782 69.7366 57.259L69.3868 59.3362C69.2771 59.9875 69.4297 60.6558 69.8111 61.195L71.0275 62.9148C71.5432 63.6439 71.3115 64.6595 70.5304 65.0927L68.6882 66.1144C68.1106 66.4347 67.6833 66.9706 67.4995 67.605L66.9134 69.6283C66.6648 70.4862 65.7263 70.9382 64.9006 70.5976L62.9533 69.7943C62.3427 69.5425 61.6573 69.5425 61.0467 69.7943L59.0994 70.5976C58.2737 70.9382 57.3352 70.4862 57.0866 69.6283L56.5005 67.605C56.3167 66.9706 55.8894 66.4347 55.3118 66.1144L53.4696 65.0927C52.6885 64.6595 52.4568 63.644 52.9725 62.9148L54.1889 61.195C54.5703 60.6558 54.7229 59.9875 54.6132 59.3362L54.2634 57.259C54.1151 56.3782 54.7646 55.5638 55.6563 55.5124L57.7593 55.3912C58.4187 55.3531 59.0362 55.0557 59.477 54.5639L60.883 52.9953Z"
          fill="#F5F5F7"
          stroke="#E0E0ED"
        />
        <path
          d="M60 62.6527L61.0962 63.8303C61.4044 64.087 61.8833 64.0477 62.1379 63.7448L65 61"
          stroke="#E0E0ED"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="w-full flex flex-col justify-center gap-2">
        <span
          class="flex w-full bg-apple-grey rounded-[4px] h-[28px] xl:h-6   max-w-[250px]"
        ></span>
        <div class="flex gap-2">
          <span
            class="flex w-full bg-apple-grey rounded-[4px] h-4   max-w-[83px]"
          ></span>
          <span
            class="flex w-full bg-apple-grey rounded-[4px] h-4  max-w-[83px]"
          ></span>
        </div>
      </div>
    </div>
    <div class="body flex flex-col gap-4">
      <div class="bg-apple-grey px-4 flex items-center border border-solid border-grey-light h-[88px] xl:h-[84px] rounded-[8px]"><p class="text-grey-64 text-base font-medium">Izoh hozirda mavjud emas</p></div>
     <div class="flex flex-col gap-2">
        <span
          class="flex w-full bg-apple-grey rounded-[4px] h-6 px-4 py-3"
        ></span>
       <span
         class="flex w-full bg-apple-grey rounded-[4px] h-6 px-4 py-3 max-w-[90%]"
       ></span>
       <span
         class="w-full bg-apple-grey rounded-[4px] h-6 px-4 py-3 max-w-[95%] hidden xl:flex"
       ></span>
       <span
         class=" w-full bg-apple-grey rounded-[4px] h-6 px-4 py-3 max-w-[80%] hidden xl:flex"
       ></span>
       <span
         class=" w-full bg-apple-grey rounded-[4px] h-6 px-4 py-3 max-w-[97%] hidden xl:flex"
       ></span>
     </div>
    </div>
  </div>
</template>
<script setup>
</script>
