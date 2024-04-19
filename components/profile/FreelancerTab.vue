<template>
  <div
    class="freelancer-tab flex justify-between items-end xl:border-[0] xl:border-b xl:border-solid xl:border-border-darik"
  >
    <div
      class="rounded-2xl bg-bg-grey px-4 xl:px-0 py-4 flex gap-6 xl:bg-transparent xl:overflow-x-scroll xl:gap-3 scroll-none xl:pb-6 xl:grid xl:grid-cols-3 xl:px-[16px] xl:py-[24px]"
    >
      <nuxt-link
        :to="localePath(`/freelancer/${$route.params.index}`)"
        exact
        class="text-black text-base xl:text-[12px] xl:leading-[12px] xl:py-3 font-medium flex flex-col gap-2 items-center bg-white xl:bg-bg-grey px-4 justify-center min-w-[120px] min-h-[79px] xl:min-w-[unset] xl:min-h-[68px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M5.33301 20.3412V15.8342C5.33301 14.7292 6.22801 13.8342 7.33301 13.8342H16.666C17.771 13.8342 18.666 14.7292 18.666 15.8342V20.3412M14.9634 7.62316C14.9634 9.25958 13.6368 10.5862 12.0004 10.5862C10.364 10.5862 9.03738 9.25958 9.03738 7.62316C9.03738 5.98674 10.364 4.66016 12.0004 4.66016C13.6368 4.66016 14.9634 5.98674 14.9634 7.62316Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ $store.state.translations["profile.read"] }}
      </nuxt-link>

      <nuxt-link
        :to="localePath(`/freelancer/${$route.params.index}/portfolio`)"
        class="text-black text-base xl:text-[12px] xl:leading-[12px] xl:py-3 font-medium flex flex-col gap-2 items-center bg-white xl:bg-bg-grey px-4 justify-center min-w-[120px] min-h-[79px] xl:min-w-[unset] xl:min-h-[68px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M3 16.6368V17.6797C3 19.3365 4.34315 20.6797 6 20.6797H18C19.6569 20.6797 21 19.3365 21 17.6797V16.6368M12 14.0703V14.0736M6 8.67969H18C19.6569 8.67969 21 10.0228 21 11.6797V13.028L13.2847 16.6843C12.4716 17.0696 11.5284 17.0696 10.7153 16.6843L3 13.028V11.6797C3 10.0228 4.34315 8.67969 6 8.67969ZM16.5036 8.67958V7.32031C16.5036 5.66346 15.1604 4.32031 13.5036 4.32031H10.4961C8.83924 4.32031 7.49609 5.66346 7.49609 7.32031V8.67958H16.5036Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ $store.state.translations["profile.portfolio"] }}</nuxt-link
      >
      <nuxt-link
        :to="localePath(`/freelancer/${$route.params.index}/comments`)"
        class="text-black text-base xl:text-[12px] xl:leading-[12px] xl:py-3 font-medium flex flex-col gap-2 items-center bg-white xl:bg-bg-grey px-4 justify-center min-w-[120px] min-h-[79px] xl:min-w-[unset] xl:min-h-[68px] rounded-[12px] hover:text-black"
        ><svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 3.5H11C6.02944 3.5 2 7.52944 2 12.5V17.5C2 19.7091 3.79086 21.5 6 21.5H13C17.9706 21.5 22 17.4706 22 12.5C22 7.52944 17.9706 3.5 13 3.5Z"
            stroke="#353437"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="12.5" r="1" fill="#353437" />
          <circle cx="16" cy="12.5" r="1" fill="#353437" />
          <circle cx="8" cy="12.5" r="1" fill="#353437" />
        </svg>

        {{ $store.state.translations["profile.comments"] }}</nuxt-link
      >
      <!--   <nuxt-link
       :to="localePath('/')"
        class="opacity-50 pointer-events-none text-black text-base xl:text-[12px] xl:leading-[12px] xl:py-3 font-medium flex flex-col gap-2 items-center bg-white xl:bg-bg-grey px-4 justify-center min-w-[120px] min-h-[79px] xl:min-w-[96px] xl:min-h-[68px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M17 7.41697V19.832H1V1.16797H10.751M17 7.41697L10.751 1.16797M17 7.41697H10.751V1.16797"
              stroke="#5D5D5F"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        Бизнесы</nuxt-link
      >
      <nuxt-link
       :to="localePath('/')"
        class="opacity-50 pointer-events-none text-black text-base xl:text-[12px] xl:leading-[12px] xl:py-3 font-medium flex flex-col gap-2 items-center bg-white xl:bg-bg-grey px-4 justify-center min-w-[120px] min-h-[79px] xl:min-w-[96px] xl:min-h-[68px] rounded-[12px] hover:text-black"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7.26034 16.6016V4.42188H19.7937V17.581C19.7937 19.2378 18.4505 20.581 16.7937 20.581H6.97387C5.31702 20.581 3.97388 19.2378 3.97388 17.581V9.56386M10.457 7.83594H16.6395M10.457 11.1172H16.6395M10.457 14.3984H16.6395"
            stroke="#5D5D5F"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Блоги</nuxt-link
      > -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.freelancer-tab .nuxt-link-active {
  background-color: var(--blue);
  color: white;
  box-shadow: 0px 4px 15px 0px rgba(92, 70, 229, 0.29);
}
.freelancer-tab .nuxt-link-active svg path {
  stroke: white;
}
.freelancer-tab .nuxt-link-active svg circle {
  fill: white;
}
@media (max-width: 1200px) {
  .freelancer-tab svg {
    width: 20px;
    height: 20px;
  }
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
  .freelancer-tab {
    border-bottom: 0 !important;
  }
}
</style>
