<template lang="html">
  <div class="pt-12 order xl:pt-6">
    <div class="max-w-[1286px] mx-auto pb-[80px] xl:pb-8">
      <button
        @click="goBack"
        class="back-btn flex xl:hidden gap-4 w-[162px] py-3 border border-grey-24 border-solid rounded-lg justify-center items-center text-base font-medium text-blue hover:text-blue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.46849 0.414483C5.79194 0.67324 5.84438 1.14521 5.58562 1.46866L1.96044 6.00013L5.58562 10.5316C5.84438 10.8551 5.79194 11.327 5.46849 11.5858C5.14505 11.8445 4.67308 11.7921 4.41432 11.4687L0.414321 6.46866C0.195189 6.19474 0.195189 5.80553 0.414321 5.53161L4.41432 0.531613C4.67308 0.208167 5.14505 0.155726 5.46849 0.414483Z"
            fill="#5C46E6"
          />
        </svg>
        {{ $store.state.translations["modal.back"] }}
      </button>
      <div class="content-box mt-6 xl:mt-0 xl:px-4 xl:mt-[4px]">
        <div class="max-w-[922px]">
          <div
            class="info rounded-3xl xl:rounded-2xl border-solid border-grey-8 xl:border-[0] pr-8 pl-6 py-6 xl:px-0 xl:py-4 border xl:pb-0 xl:pt-0"
          >
            <div class="head flex justify-between xl:flex-col xl:gap-5">
              <div class="justify-between hidden xl:flex">
                <div class="items-center gap-[10px] xl:justify-between flex">
                  <p
                    class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                  >
                    <svg
                      class="min-w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.6084 8.21087C18.5748 9.2276 18.5748 10.7723 17.6084 11.789C15.9786 13.5038 13.1794 15.8333 9.99984 15.8333C6.82024 15.8333 4.02108 13.5038 2.39126 11.789C1.42492 10.7723 1.42492 9.2276 2.39126 8.21087C4.02108 6.49607 6.82024 4.16663 9.99984 4.16663C13.1794 4.16663 15.9786 6.49607 17.6084 8.21087Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="2.5"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                      />
                    </svg>
                    {{ order?.view_count }}
                  </p>
                  <span class="bg-grey-8 w-[1px] h-4"></span>
                  <p
                    class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.8332 2.5H9.1665C5.02437 2.5 1.6665 5.85786 1.6665 10V14.1667C1.6665 16.0076 3.15889 17.5 4.99984 17.5H10.8332C14.9753 17.5 18.3332 14.1421 18.3332 10C18.3332 5.85786 14.9753 2.5 10.8332 2.5Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="9.99984"
                        cy="9.99996"
                        r="0.833333"
                        fill="#5C46E6"
                      />
                      <ellipse
                        cx="13.3333"
                        cy="9.99996"
                        rx="0.833333"
                        ry="0.833333"
                        fill="#5C46E6"
                      />
                      <ellipse
                        cx="6.66683"
                        cy="9.99996"
                        rx="0.833333"
                        ry="0.833333"
                        fill="#5C46E6"
                      />
                    </svg>
                    {{ order?.request_count }}
                    {{ $store.state.translations["profile.requests"] }}
                  </p>
                </div>
                <p
                  class="text-[14px] flex gap-[10px] items-center text-grey-64 xl:text-[14px]"
                >
                  <span> {{ moment(order?.created_at).format("HH:mm") }}</span>
                  <span class="bg-grey-8 w-[1px] h-4"></span>

                  <span>
                    {{ moment(order?.created_at).format("DD.MM.YYYY") }}</span
                  >
                </p>
              </div>
              <div class="flex gap-4 items-center justify-between">
                <span
                  v-if="order?.urgent"
                  class="flex xl:text-xs gap-[4px] status-red items-center rounded-[8px] px-[8px] py-[4px] text-light-red text-[14px] font-medium"
                  ><svg
                    class="xl:w-4 xl:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.9255 14.0455C17.9255 17.3184 15.2723 19.9716 11.9994 19.9716C8.72646 19.9716 6.07324 17.3184 6.07324 14.0455C6.07324 12.9549 6.28062 11.8523 6.6336 10.7859C6.92071 11.9808 7.99626 12.8688 9.27921 12.8688C10.7819 12.8688 12 11.6506 12 10.1479C12 8.64528 10.9755 7.62262 10.9755 6.16181C10.9755 4.26045 12.3526 2.80328 13.9319 2.80328C13.9319 5.08258 14.7668 5.94502 15.6731 7.40827C16.749 9.14528 17.9255 11.0448 17.9255 14.0455Z"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                  >{{
                    $store.state.translations["profile.emergency-order"]
                  }}</span
                >
                <span
                  v-if="order?.urgent"
                  class="h-[19px] w-[1px] bg-grey-8"
                ></span>
                <span
                  v-if="order?.status === 0"
                  class="flex gap-[7px] items-center rounded-[8px] text-dark-yellow text-[14px] font-medium"
                  ><svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.92154 0.571247C8.2077 -0.190416 9.7923 -0.190416 11.0785 0.571247L15.9215 3.43932C17.2077 4.20099 18 5.6086 18 7.13192V12.8681C18 14.3914 17.2077 15.799 15.9215 16.5607L15.301 16.9281L11.0785 19.4288C9.7923 20.1904 8.20769 20.1904 6.92154 19.4288L2.69896 16.9281L2.07846 16.5607C0.792305 15.799 0 14.3914 0 12.8681V7.13192C0 5.6086 0.792305 4.20099 2.07846 3.43932L6.92154 0.571247ZM13.0952 13.2041C12.023 12.4572 10.5831 12 9 12C7.41692 12 5.97703 12.4572 4.90484 13.2041C4.39026 13.5626 4.49802 14.2988 5.03578 14.6215L8.4855 16.6913C8.80219 16.8813 9.19781 16.8813 9.5145 16.6913L12.9642 14.6215C13.502 14.2988 13.6097 13.5626 13.0952 13.2041ZM9 4C10.6569 4 12 5.34315 12 7C12 8.65685 10.6569 10 9 10C7.34315 10 6 8.65685 6 7C6 5.34315 7.34315 4 9 4Z"
                      fill="#F2994A"
                    />
                  </svg>

                  {{
                    $store.state.translations["order.pending-modiration"]
                  }}</span
                >
                <span
                  v-if="step1"
                  class="flex gap-[7px] items-center rounded-[8px] text-dark-yellow text-[14px] font-medium"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
                      fill="#F2994A"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C19.3506 13 19.6872 13.0602 20 13.1707V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13.1707C4.31278 13.0602 4.64936 13 5 13ZM10.75 8.5C10.75 7.5335 11.5335 6.75 12.5 6.75C13.4665 6.75 14.25 7.5335 14.25 8.5C14.25 9.4665 13.4665 10.25 12.5 10.25C11.5335 10.25 10.75 9.4665 10.75 8.5ZM12.5 5.25C10.7051 5.25 9.25 6.70507 9.25 8.5C9.25 9.12574 9.42684 9.71018 9.73327 10.2061L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303C8.76256 12.8232 9.23744 12.8232 9.53033 12.5303L10.7939 11.2667C11.2898 11.5732 11.8743 11.75 12.5 11.75C14.2949 11.75 15.75 10.2949 15.75 8.5C15.75 6.70507 14.2949 5.25 12.5 5.25Z"
                      fill="#F2994A"
                    />
                  </svg>
                  {{
                    $store.state.translations["profile.recieving-requests"]
                  }}</span
                >
                <span
                  v-if="step2"
                  class="flex gap-[7px] items-center rounded-[8px] text-main-color text-[14px] font-medium"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="8"
                      fill="#5C46E6"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M6 18V14.551C6 13.7054 6.66581 13.0205 7.48785 13.0205H14.4309C15.253 13.0205 15.9188 13.7054 15.9188 14.551V18M15.9196 8.25878L17.2862 9.66379L20 6.87213M13.164 8.26746C13.164 9.51974 12.1771 10.5349 10.9598 10.5349C9.74238 10.5349 8.7555 9.51974 8.7555 8.26746C8.7555 7.01518 9.74238 6 10.9598 6C12.1771 6 13.164 7.01518 13.164 8.26746Z"
                      stroke="#5C46E6"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ $store.state.translations["order.already-choosen"] }}</span
                >
                <span
                  v-if="step3"
                  class="flex gap-[7px] items-center rounded-[8px] text-green text-[14px] font-medium"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
                      fill="#009A10"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C19.3506 13 19.6872 13.0602 20 13.1707V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13.1707C4.31278 13.0602 4.64936 13 5 13ZM15.5645 6.49389C15.8372 6.18216 15.8056 5.70834 15.4939 5.43558C15.1822 5.16282 14.7084 5.1944 14.4356 5.50613L11.5657 8.78603C11.4776 8.88671 11.3258 8.90019 11.2214 8.81662L9.46855 7.41436C9.1451 7.1556 8.67313 7.20804 8.41438 7.53149C8.15562 7.85494 8.20806 8.3269 8.53151 8.58566L10.2843 9.98792C11.0156 10.5729 12.0779 10.4786 12.6946 9.77378L15.5645 6.49389Z"
                      fill="#009A10"
                    />
                  </svg>

                  {{ $store.state.translations["profile.done"] }}</span
                >
                <div
                  class="flex gap-[10px] xl:gap-2 items-center relative z-10 xl:mr-4"
                  v-if="cancelStatus.includes(order?.status)"
                >
                  <span class="flex justify-center items-center relative">
                    <span
                      class="icon w-full h-full z-10 flex relative justify-center items-center rounded-full"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
                          fill="#F2154A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 13H6C6.62951 13 7.22229 13.2964 7.6 13.8L8.8 15.4C9.55542 16.4072 10.741 17 12 17C13.259 17 14.4446 16.4072 15.2 15.4L16.4 13.8C16.7777 13.2964 17.3705 13 18 13H19C19.3506 13 19.6872 13.0602 20 13.1707V6C20 3.79086 18.2091 2 16 2H8C5.79086 2 4 3.79086 4 6V13.1707C4.31278 13.0602 4.64936 13 5 13ZM14.6516 7.40899C14.9445 7.1161 14.9445 6.64123 14.6516 6.34833C14.3587 6.05544 13.8839 6.05544 13.591 6.34833L12 7.93932L10.409 6.34834C10.1161 6.05544 9.64123 6.05544 9.34833 6.34834C9.05544 6.64123 9.05544 7.1161 9.34833 7.409L10.9393 8.99998L9.34833 10.591C9.05544 10.8839 9.05544 11.3587 9.34833 11.6516C9.64123 11.9445 10.1161 11.9445 10.409 11.6516L12 10.0606L13.591 11.6516C13.8839 11.9445 14.3587 11.9445 14.6516 11.6516C14.9445 11.3587 14.9445 10.8839 14.6516 10.591L13.0606 8.99998L14.6516 7.40899Z"
                          fill="#F2154A"
                        />
                      </svg>
                    </span>
                  </span>
                  <p class="text-[14px] font-medium text-light-red">
                    {{ $store.state.translations["profile.cancelled"] }}
                  </p>
                </div>
                <p
                  class="hidden xl:flex text-base text-grey-64 xl:text-[14px] gap-[6px]"
                >
                  {{ $store.state.translations["profile.order"]
                  }}<span class="font-medium text-black">#{{ order?.id }}</span>
                </p>
              </div>

              <div class="flex gap-6 xl:justify-between xl:hidden">
                <p class="text-base text-grey-64 xl:text-[14px]">
                  {{ moment(order?.created_at).format(dateFormat) }}
                </p>
                <p class="text-base text-grey-64 xl:text-[14px] flex gap-[6px]">
                  {{ $store.state.translations["profile.order"]
                  }}<span class="font-medium text-black">#{{ order?.id }}</span>
                </p>
              </div>
            </div>
            <div
              class="body mt-6 xl:mt-3 pb-4 xl:pb-6 border-[0] border-b border-solid border-grey-8 break-all"
            >
              <h1
                class="title text-[24px] font-semibold text-black mb-4 xl:mt-2 xl:text-base xl:font-medium"
              >
                {{ order?.name }}
              </h1>
              <span
                class="text-base text-grey-80 xl:text-grey-64 xl:text-[14px] order-desc break-words"
                v-html="order?.description"
              >
              </span>
              <!-- <p class="text-base text-grey-80 mt-8 xl:mt-5 xl:text-[14px]">
                As we're developing curriculum for the next 4 years, there's potential for
                a long-term contract.This is a project-based contract and not a retainer
                arrangement. It does not involve a continuous or ongoing engagement where
                ASU Prep retains the contractor's services even when there is no
                project-based work. Instead, the contract centers around completing
                specific assigned tasks and billing hours to ASU Prep.
              </p> -->
            </div>
            <div
              class="files flex flex-col gap-4 mt-4 pl-2"
              v-if="order?.files.length > 0"
            >
              <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">
                {{ $store.state.translations["profile.order-files"] }}
              </h6>
              <div
                class="file-list flex flex-wrap gap-4 justify-start xl:grid xl:grid-cols-3"
              >
                <FileCard
                  v-for="file in order?.files"
                  :file="file"
                  :key="file?.id"
                />
              </div>
            </div>
            <div
              class="files flex flex-col gap-4 mt-4 xl:mt-6 mb-6 pl-2 xl:pl-0 xl:mb-0"
            >
              <h6 class="text-black text-[20px] xl:text-[18px] font-semibold">
                {{ $store.state.translations["profile.categories"] }}
              </h6>
              <div class="flex gap-2 items-center xl:flex-col xl:items-start">
                <div
                  class="flex gap-2 items-center"
                  v-for="(specialit, index) in order?.specialities"
                  :key="specialit?.id"
                >
                  <span
                    @click="
                      $router.push(localePath(`/specialities/${specialit?.id}`))
                    "
                    class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium cursor-pointer"
                    >{{ specialit?.name }} </span
                  ><span
                    v-if="index + 1 != order?.specialities.length"
                    class="text-[20px] text-grey-64 xl:hidden"
                    >/</span
                  >
                </div>
              </div>
            </div>
            <div
              class="xl:hidden content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[90%] xl:mx-auto white-space-nowrap pl-2"
            >
              <div class="flex items-center gap-[28px] xl:justify-between">
                <p
                  class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                >
                  <svg
                    class="min-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.6084 8.21087C18.5748 9.2276 18.5748 10.7723 17.6084 11.789C15.9786 13.5038 13.1794 15.8333 9.99984 15.8333C6.82024 15.8333 4.02108 13.5038 2.39126 11.789C1.42492 10.7723 1.42492 9.2276 2.39126 8.21087C4.02108 6.49607 6.82024 4.16663 9.99984 4.16663C13.1794 4.16663 15.9786 6.49607 17.6084 8.21087Z"
                      stroke="#5C46E6"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="2.5"
                      stroke="#5C46E6"
                      stroke-width="1.5"
                    />
                  </svg>
                  {{ order?.view_count }}
                </p>
                <p
                  class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.8332 2.5H9.1665C5.02437 2.5 1.6665 5.85786 1.6665 10V14.1667C1.6665 16.0076 3.15889 17.5 4.99984 17.5H10.8332C14.9753 17.5 18.3332 14.1421 18.3332 10C18.3332 5.85786 14.9753 2.5 10.8332 2.5Z"
                      stroke="#5C46E6"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="9.99984"
                      cy="9.99996"
                      r="0.833333"
                      fill="#5C46E6"
                    />
                    <ellipse
                      cx="13.3333"
                      cy="9.99996"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#5C46E6"
                    />
                    <ellipse
                      cx="6.66683"
                      cy="9.99996"
                      rx="0.833333"
                      ry="0.833333"
                      fill="#5C46E6"
                    />
                  </svg>
                  {{ order?.request_count }}
                  {{ $store.state.translations["profile.requests"] }}
                </p>
              </div>
              <!-- <p
                class="underline text-base text-pantone-2023 flex items-center gap-[10px] xl:text-center mx-auto xl:text-[14px] white-space-nowrap"
              >
                Сообщить модератору о нарушении
                <svg
                  class="min-w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M7.96798 1.16592C8.85365 -0.388639 11.1464 -0.388642 12.032 1.16592L19.7041 14.6324C20.5649 16.1433 19.4445 18 17.6721 18H2.32789C0.555459 18 -0.564896 16.1433 0.29587 14.6324L7.96798 1.16592Z"
                    fill="#BB2649"
                  />
                  <path
                    d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
                    fill="#BB2649"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V6C9.25 5.58579 9.58579 5.25 10 5.25Z"
                    fill="#BB2649"
                  />
                </svg>
              </p> -->
            </div>
          </div>
          <div class="flex-col gap-4 hidden xl:flex xl:mt-6 xl:gap-6">
            <ClientCard :client="order?.client" />
            <PriceCard @open="openModal" :order="order" />
            <PriceCard class="mobile__price" @open="openModal" :order="order" />
          </div>
          <!-- <div class="flex flex-col gap-4 mt-8 xl:mt-6">
            <InfoCard
              v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
              title="Отправьте заявке для получение заказа"
              :subtitle="`<p>Условия обсуждаются индивидуально.Наши ожидания от исполнителей:</p>
              <p>1. Наличиеопыта и портфолио</p>
              <p>2. Оперативность выполнения заказов</p>`"
              btn="Отправить заявку"
              :order="order"
              @submit="openModal"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.46094 13.3333V15.3175C4.46094 15.9367 5.1126 16.34 5.66677 16.0625L17.7943 10L5.66677 3.93751C5.1126 3.66001 4.46094 4.06334 4.46094 4.68251V10H10.0168"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></InfoCard>
            <InfoCard
              v-else
              title="Войдите чтобы отправить заявку"
              :subtitle="`<p>Условия обсуждаются индивидуально.Наши ожидания от исполнителей:</p>
              <p>1. Наличиеопыта и портфолио</p>
              <p>2. Оперативность выполнения заказов</p>`"
              btn="Войти"
              :order="order"
              @submit="$router.push('/registration')"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <ellipse
                  cx="9.99984"
                  cy="14.5833"
                  rx="5.83333"
                  ry="2.91667"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="9.99984"
                  cy="5.83333"
                  rx="3.33333"
                  ry="3.33333"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                /></svg
            ></InfoCard>
          </div> -->
        </div>
        <div class="flex flex-col gap-4 xl:hidden">
          <ClientCard :client="order?.client" />
          <PriceCard @open="openModal" :order="order" />
        </div>
      </div>
    </div>
    <SimilarOrders :orders="orders" />
    <div>
      <BottomModal ref="sendApp" @submit="submit" />
      <ToBeFreelancer ref="toBeFreelancer" @open="openSpecial" />
      <OrderSuccess ref="successModal" :order="order" />
      <SpicialsticsCheck
        ref="specialities"
        @saveChecked="saveChecked"
        :specialities="specialities"
        :activeCheckedList="activeCheckedList"
      />
    </div>
  </div>
</template>
<script>
import ClientCard from "@/components/orders/ClientCard.vue";
import FileCard from "@/components/orders/FileCard.vue";
import InfoCard from "@/components/orders/InfoCard.vue";
import SimilarOrders from "@/components/orders/SimilarOrders.vue";
import PriceCard from "@/components/orders/PriceCard.vue";
import BottomModal from "@/components/orders/BottomModal.vue";
import OrderSuccess from "@/components/modals/OrderSuccess.vue";
import BottomSuccess from "@/components/orders/BottomSuccess.vue";
import Loader from "@/components/Loader.vue";
import moment from "moment";
import ToBeFreelancer from "@/components/modals/ToBeFreelancer.vue";
import SpicialsticsCheck from "@/components/modals/SpicialsticsCheck.vue";

export default {
  data() {
    return {
      cancelStatus: [5, 6],
      selectedStatus: [2, 3],
      dateFormat: "DD MMM YYYY, HH:mm",
      activeCheckedList: [],
    };
  },
  computed: {
    handleUser() {
      return this.$store.state.userInfo["id"];
    },
    step1() {
      return (
        !this.order?.selected_request &&
        !this.order?.start_of_execution &&
        this.order?.status === 1
      );
    },
    step2() {
      return (
        this.order?.selected_request &&
        this.order?.start_of_execution &&
        !this.order?.end_of_execution &&
        this.selectedStatus.includes(this.order.status)
      );
    },
    step3() {
      return (
        this.order?.selected_request &&
        this.order?.start_of_execution &&
        this.order?.end_of_execution &&
        this.order?.status == 4
      );
    },
  },
  mounted() {
    this.__GET_ORDERS();
    this.$store.commit("setPageData", {
      title: "Проект",
      center: false,
      info: "",
      link: true,
    });
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  async asyncData({ store, params,i18n }) {
    try {
      const [orderData, ordersData, specialitiesData] = await Promise.all([
        store.dispatch("fetchOrders/getOrderById", {
          id: params.slug,
        }),
        store.dispatch("fetchOrders/getOrders", {
          params: {
            similar: params.slug,
          },
        }),
        store.dispatch("fetchSpecialities/getSpecialities",{
          headers: {
            Lang: i18n.locale,
          },
        }),
      ]);
      const order = orderData?.content;
      const orders = ordersData.data;
      const specialities = specialitiesData.content;
      return {
        order,
        orders,
        specialities,
      };
    } catch (e) {
    } finally {
    }
  },
  methods: {
    goBack() {
      if(this.$nuxt.context?.from) {
        this.$router.push(this.localePath(this.$nuxt.context.from.path))
      } else {
        this.$router.go(-1)
      }
    },
    isOffer() {
      if (this.$store.state.auth && this.$store.state.userInfo["id"]) {
        const isMyOffer = Boolean(
          this.order.requests.find(
            (request) =>
              request.freelancer_id === this.$store.state.userInfo["id"]
          )
        );
        if (isMyOffer)
          this.$router.push(
            this.localePath(`/profile/freelancer/order/view/${this.order.id}`)
          );
      }
    },
    isClient() {
      if (this.$store.state.auth && this.$store.state.userInfo["id"]) {
        const isMyOrder = Boolean(
          this.order.client.id === this.$store.state.userInfo["id"]
        );
        if (isMyOrder)
          this.$router.push(
            this.localePath(`/profile/customer/order/view/${this.order.id}`)
          );
      }
    },
    openSuccessModal() {
      this.$refs.successModal.open();
      this.$refs.successModal.openModal();
    },
    closeSuccessModal() {
      this.$refs.successModal.close();
      this.$refs.successModal.closeModal();
    },
    openSpecial() {
      this.$refs.specialities.open();
      this.$refs.specialities.openModal();
    },
    closeSpecial() {
      this.$refs.specialities.close();
      this.$refs.specialities.closeModal();
    },
    openSendApp() {
      this.$refs.sendApp.open();
      this.$refs.sendApp.openModal();
    },
    closeSendApp() {
      this.$refs.sendApp.close();
      this.$refs.sendApp.closeModal();
    },
    onSubmitSpicial() {
      let formData = new FormData();
      this.activeCheckedList.forEach((item) => {
        formData.append("specialities[]", item.id);
      });
      this.__POST_REGISTER(formData);
    },
    async __POST_REGISTER(form) {
      try {
        const data = await this.$store.dispatch(
          "fetchSpecialities/postSpecialities",
          form
        );
        if (data.success) {
          this.$notification["success"]({
            message: this.$store.state.translations["modal.change-done"],
          });
          await this.$store.dispatch("reloadUserInfo");
          this.activeCheckedList = this.$store.state.userInfo.specialities;
        }
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.data?.message || e.response.statusText,
        });
      }
    },
    async saveChecked(checkedList) {
      this.activeCheckedList = await [...checkedList];
      this.onSubmitSpicial();
      this.closeSpecial();
    },
    openBeFreelancer() {
      this.$refs.toBeFreelancer.openModal();
      this.$refs.toBeFreelancer.open();
    },
    closeBeFreelancer() {
      this.$refs.toBeFreelancer.closeModal();
      this.$refs.toBeFreelancer.close();
    },
    moment,
    openSuccess() {
      this.$refs.orderSucccess.open();
    },
    closeSuccess() {
      this.$refs.orderSucccess.close();
    },
    async openModal() {
      if (this.$store.state.auth && this.$store.state.userInfo?.name) {
        this.$store.state.userInfo?.specialities.length === 0
          ? this.openBeFreelancer()
          : this.openSendApp();
      } else {
        localStorage.setItem("return_link", this.$route.path);
        this.$router.push(this.localePath("/registration"));
      }
    },
    submit(form) {
      this.__POST_ORDER(form);
    },
    async __GET_ORDERS() {
      try {
        const data = await this.$store.dispatch("fetchOrders/getOrderById", {
          id: this.$route.params.slug,
        });
        this.order = data?.content;
      } finally {
      }
    },
    async __POST_ORDER(data) {
      try {
        await this.$store.dispatch("fetchOrders/postSendRequest", {
          ...data,
          order_id: this.$route.params.slug,
        });

        this.__GET_ORDERS();
        this.openSuccessModal();
        this.closeBeFreelancer();
        this.openSuccess();
        this.closeSendApp()
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }

    },
  },
  watch: {
    handleUser(val) {
      // if (val) {
      //   this.isOffer();
      //   this.isClient();
      // }
    },
  },
  components: {
    FileCard,
    InfoCard,
    SimilarOrders,
    ClientCard,
    PriceCard,
    BottomModal,
    OrderSuccess,
    BottomSuccess,
    Loader,
    ToBeFreelancer,
    SpicialsticsCheck,
  },
};
</script>
<style lang="css" scoped>
.mobile__price {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  border-radius: 16px 16px 0px 0px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  gap: 16px;
  /* min-height: 100px; */
  align-items: center;
}

.mobile__price :deep(.rower) {
  flex-direction: row;
}

.mobile__price :deep(.deal) {
  display: none;
}

.mobile__price :deep(.buttons) {
  display: block;
}

.mobile__price :deep(.pricer) {
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  align-items: flex-start;
}

.mobile__price :deep(.app-btn) {
  border-radius: 12px;
  width: 100%;
}

.mobile__price :deep(.app-btn::after) {
  border-radius: 12px;
}

.mobile__price :deep(.exact__price) {
  color: var(--Main-color, #5c46e5);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
}

.mobile__price :deep(.price__sup) {
  color: var(--grey-64, #5d5d5f);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.back-btn {
  transition: 0.3s;
}

.back-btn:hover {
  border: 1px solid var(--main-color);
  background: #f5f3ff;
  box-shadow: 0px 12px 16px 0px rgba(92, 70, 229, 0.08);
}

.content-box {
  display: grid;
  grid-template-columns: 1fr 348px;
  gap: 16px;
}

.status-red {
  background: rgba(237, 50, 55, 0.1);
}

.modal-bg {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
}

.nested-enter-active {
  animation: to-top 0.3s;
}

.nested-leave-active {
  animation: to-top 0.3s reverse;
}

@keyframes to-top {
  0% {
    bottom: -60px;
    opacity: 0;
  }

  100% {
    bottom: 0;
    opacity: 1;
  }
}

.opacity-enter-active {
  animation: opacityAnim 0.25s;
}

.opacity-leave-active {
  animation: opacityAnim 0.25s reverse;
}

@keyframes opacityAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 1200px) {
  .content-box {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
