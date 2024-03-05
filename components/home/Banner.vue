<template>
  <div
    class="banner relative bg-bg-grey rounded-[32px] mb-[120px] xl:bg-blue xl:rounded-[12px] xl:mb-[100px]"
  >
    <div
      class="left pt-16 pl-[80px] pb-[50px] flex flex-col justify-between xl:py-[28px] xl:px-[20px] xl:justify-center h-full"
    >
      <div class="flex flex-col">
        <h3
          class="font-semibold text-black text-[48px] xl:text-[16px] xl:text-white"
        >
          <span class="text-blue xl:text-yellow">{{
            $store.state.translations["main.span"]
          }}</span>
          {{ $store.state.translations["main.title"] }}
        </h3>
        <p
          class="text-black text-[18px] mt-4 xl:mt-[6px] xl:text-[12px] xl:text-white xl:hidden"
        >
          {{ $store.state.translations["main.1000"]
          }}<span class="text-blue">{{
            $store.state.translations["main.directions"]
          }}</span
          >{{ $store.state.translations["main.sub"] }}
        </p>
        <p
          class="hidden xl:block text-[12px] text-white leading-[130%] mt-[6px]"
        >
          {{ $store.state.translations["main.sub"] }}
        </p>
        <div class="list flex gap-3 mt-8 xl:hidden mb-[84px]">
          <span
            class="whitespace-nowrap bg-white font-tt text-black py-2 px-4 rounded-[500px] text-[14px]"
          >
            UI/UX dizayner
          </span>
          <span
            class="whitespace-nowrap bg-white font-tt text-black py-2 px-4 rounded-[500px] text-[14px]"
          >
            IOS developer
          </span>
          <span
            class="whitespace-nowrap bg-white font-tt text-black py-2 px-4 rounded-[500px] text-[14px]"
          >
            Grafik dizayner
          </span>
          <span
            class="whitespace-nowrap bg-white font-tt text-black py-2 px-4 rounded-[500px] text-[14px]"
          >
            Copy-writer
          </span>
          <span
            class="whitespace-nowrap bg-white font-tt text-black py-2 px-4 rounded-[500px] text-[14px] flex gap-2"
          >
            Все фрилансеры
          </span>
        </div>
      </div>
      <div class="buttons flex gap-4">
        <button
          @click="
            $router.push(
              $store.state.auth && Boolean($store.state.userInfo['name'])
                ? 'profile/orders/add'
                : 'registration'
            )
          "
          class="flex justify-center gap-2 h-[60px] px-[20px] min-w-[243px] text-base bg-blue rounded-xl text-white font-tt items-center font-medium xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M18.8333 10V15C18.8333 16.841 17.3409 18.3334 15.5 18.3334H5.49999C3.65904 18.3334 2.16666 16.841 2.16666 15V5.00002C2.16666 3.15907 3.65904 1.66669 5.49999 1.66669H10.5M13.572 3.35231C13.572 3.35231 13.572 4.54423 14.7639 5.73614C15.9558 6.92805 17.1477 6.92805 17.1477 6.92805M8.12888 13.3247L10.6319 12.9671C10.993 12.9155 11.3275 12.7482 11.5854 12.4903L18.3396 5.73614C18.9979 5.07786 18.9979 4.01058 18.3396 3.35231L17.1477 2.16039C16.4894 1.50212 15.4221 1.50212 14.7639 2.16039L8.00969 8.91457C7.7518 9.17247 7.58451 9.50705 7.53293 9.86811L7.17535 12.3711C7.09589 12.9274 7.57266 13.4041 8.12888 13.3247Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            /></svg
          >{{ $store.state.translations["main.order-it"] }}
        </button>
        <button
          @click="
            $router.push(
              $store.state.auth && Boolean($store.state.userInfo['name'])
                ? 'orders'
                : 'registration'
            )
          "
          class="h-[60px] flex justify-center min-w-[220px] px-[20px] border-solid text-base border-main-color bg-transparent border rounded-xl text-main-color font-tt items-center font-semibold mobile-button"
        >
          {{ $store.state.translations["main.lets-earn"] }}
        </button>
      </div>
    </div>
    <div class="right h-[100%] xl:h-[100%] absolute right-0 overflow-hidden">
      <img
        src="@/assets/images/banner.png"
        width="100%"
        height="100%"
        alt=""
        class="object-cover h-full xl:w-100"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 1024px) {
  .banner {
    grid-template-columns: 6.5fr 3.5fr;
  }
  .mobile-button {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -64px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    height: 48px;
    border-radius: 12px;
    border: 1px solid var(--Border-darik, #e0e0ed);
    background: var(--White, #fff);
  }
}
</style>
