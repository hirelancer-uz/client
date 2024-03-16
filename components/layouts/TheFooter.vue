<template lang="html">
  <div class="footer bg-bg-grey pt-10 xl:pb-13 xl:pt-6">
    <div class="max-w-[1678px] mx-auto footer-container">
      <div class="body pb-10 flex justify-between xl:flex-col xl:gap-6">
        <div class="">
          <div class="logo">
            <IconsFooterLogo class="xl:w-[107px]" />
          </div>
          <ul
            class="list flex gap-[56px] mt-[46px] xl:gap-0 xl:justify-between"
          >
            <li>
              <nuxt-link
                to="/orders"
                class="text-[20px] font-medium text-black xl:text-base"
                >{{ $store.state.translations["main.orders"] }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/freelancers"
                class="text-[20px] font-medium text-black xl:text-base"
                >{{ $store.state.translations["header.freelancers"] }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/"
                class="text-[20px] font-medium text-black xl:text-base"
                >{{ $store.state.translations["header.guide"] }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/"
                class="text-[20px] font-medium text-black xl:text-base"
                >{{ $store.state.translations["main.faq"] }}
              </nuxt-link>
            </li>
          </ul>
          <div class="buttons flex gap-10 items-center mt-9 xl:mt-6">
            <div class="flex gap-4">
              <a
                href="#"
                class="w-[80px] h-[80px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center bg-white"
              >
                <img
                  class="xl:w-[18px] xl:h-[18px]"
                  src="@/assets/images/footer-telegram.png"
                  alt=""
                />
              </a>
              <a
                href="#"
                class="w-[80px] h-[80px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center bg-white"
              >
                <img
                  class="xl:w-6 xl:h-6"
                  src="../../assets/images/footer-instagram.png"
                  alt=""
                />
              </a>
              <a
                href="#"
                class="w-[80px] h-[80px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center bg-white"
              >
                <img
                  class="xl:w-5 xl:h-[14px]"
                  src="../../assets/images/footer-youtube.png"
                  alt=""
                />
              </a>
            </div>
            <div class="buttons flex gap-4 xl:hidden">
              <button
                @click="redirectLink('/profile/orders/add')"
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
                  />
                </svg>
                {{ $store.state.translations["main.order-it"] }}
              </button>
              <button
                @click="$router.push(localePath('/orders'))"
                class="h-[60px] flex justify-center min-w-[220px] px-[20px] border-solid text-base border-main-color bg-transparent border rounded-xl text-main-color font-tt items-center font-semibold mobile-button"
              >
                {{ $store.state.translations["main.lets-earn"] }}
              </button>
            </div>
          </div>
        </div>
        <div
          class="px-[26px] py-[29px] xl:px-4 xl:py-4 rounded-[24px] bg-white flex flex-col gap-4"
        >
          <div class="grid grid-cols-2 gap-4 xl:flex xl:flex-col">
            <div
              class="footer-card flex gap-3 px-4 py-4 rounded-[16px] bg-bg-grey max-w-[343px] xl:max-w-full"
            >
              <div class="flex flex-col justify-between">
                <p class="text-[18px] font-medium text-black">
                  {{ $store.state.translations["main.tg-bot"] }}
                </p>
                <a
                  href=""
                  class="text-[14px] font-semibold text-main-color underline"
                  > {{ $store.state.translations["main.open-bot"] }}</a
                >
              </div>
              <div class="w-[88px] h-[88px]">
                <img
                  class="w-full h-full object-contain"
                  src="../../assets/images/footer-bot.png"
                  alt=""
                />
              </div>
            </div>
            <div
              class="footer-card flex gap-3 px-4 py-4 rounded-[16px] bg-bg-grey max-w-[343px] xl:max-w-full"
            >
              <div class="flex flex-col justify-between">
                <p class="text-[18px] font-medium text-black">
                  {{ $store.state.translations["main.tg-channel"] }}
                </p>
                <a
                  href=""
                  class="text-[14px] font-semibold text-main-color underline"
                  > {{ $store.state.translations["main.go-to-channel"] }}</a
                >
              </div>
              <div class="w-[88px] h-[88px]">
                <img
                  class="w-full h-full object-contain"
                  src="../../assets/images/footer-telegram2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="h-[88px] xl:h-auto xl:px-2 px-6 py-4 rounded-[16px] bg-white flex items-center border border-solid border-bg-grey justify-between xl:flex-col xl:gap-4"
          >
            <p class="text-black text-[20px] xl:text-[18px] font-medium">
              {{ $store.state.translations["main.support-bot"] }}
            </p>
            <a
              href=""
              class="xl:mb-[-8px] text-black xl:min-h-12 text-[24px] xl:text-base font-medium flex gap-8 items-center h-[56px] xl:h-12 bg-bg-grey w-[311px] xl:w-full justify-center rounded-[21px] xl:rounded-[8px]"
            >
              {{ $store.state.translations["main.bot-link"] }}
              <span
                class="w-9 h-9 xl:h-[28px] xl:w-[28px] rounded-full flex justify-center items-center bg-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33203 14.1666L11.6654 9.99996L8.33203 5.83329"
                    stroke="url(#paint0_linear_4386_12934)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4386_12934"
                      x1="11.6654"
                      y1="9.99996"
                      x2="8.10767"
                      y2="9.99996"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#5C46E6" />
                      <stop offset="1" stop-color="#9882FF" />
                    </linearGradient>
                  </defs></svg
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div
        class="pb-10 xl:pb-[100px] pt-[26px] xl:pt-4 flex justify-between xl:items-center xl:flex-col xl:gap-[12px] border-[0] border-solid border-t border-border-darik"
      >
        <p class="text-black text-base xl:text-[14px]">
          {{ $store.state.translations["main.rights"] }}
        </p>
        <div class="flex gap-4 xl:items-center">
          <img class="xl:h-5" src="@/assets/images/ndc.png" alt="" />
          <p
            class="text-[14px] text-black whitespace-nowrap xl:whitespace-normal"
          >
            {{ $store.state.translations["main.footer-text"] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ndc from "@/components/icons/ndc.vue";
import FooterTelegram from "@/components/icons/footer-telegram.vue";
import FooterInstagram from "@/components/icons/footer-instagram.vue";

export default {
  components: { FooterInstagram, FooterTelegram, Ndc },
  methods: {
    redirectLink(path) {
      localStorage.setItem("return_link", path);
      const authCheck =
        this.$store.state.auth && Boolean(this.$store.state.userInfo["name"]);
      const url = authCheck ? path : "registration";
      this.$router.push(this.localePath(url));
    },
  },
};
</script>
<style lang="css" scoped>
.links {
  margin: 12px 0 32px 0;
}

.links a {
  font-size: 14px;
}

@media (max-width: 1680px) {
  .footer-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
