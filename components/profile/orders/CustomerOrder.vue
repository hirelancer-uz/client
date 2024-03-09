<template lang="html">
  <div
    class="pt-[72px] order xl:px-4 xl:pt-0"
    :class="{ 'pb-10': order?.status > 1 }"
  >
    <div class="max-w-[1200px] mx-auto">
      <button
        @click="$router.push('/profile/customer/orders/active/status')"
        class="back-btn flex gap-2 w-[126px] py-3 border border-main-color border-solid rounded-lg justify-center items-center text-base font-medium text-grey-80 hover:text-blue xl:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 8L6 12M6 12L10 16M6 12L18 12"
            stroke="#353437"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ $store.state.translations["modal.cancel"] }}
      </button>
      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-2 mt-6 xl:hidden">
          <h3 class="text-[24px] text-black font-semibold">
            {{ $store.state.translations["profile.order"] }} #{{ order?.id }}
          </h3>
          <p class="text-base text-grey-64">
            {{ $store.state.translations["profile.orders-actives"] }}
          </p>
        </div>
        <!-- <p
          v-if="status == 0"
          class="text-base text-[#F2994A] font-medium flex gap-2 items-center xl:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.92154 2.57125C11.2077 1.80958 12.7923 1.80958 14.0785 2.57125L18.9215 5.43932C20.2077 6.20099 21 7.6086 21 9.13192V14.8681C21 16.3914 20.2077 17.799 18.9215 18.5607L18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281L5.07846 18.5607C3.7923 17.799 3 16.3914 3 14.8681V9.13192C3 7.6086 3.7923 6.20099 5.07846 5.43932L9.92154 2.57125ZM16.0952 15.2041C15.023 14.4572 13.5831 14 12 14C10.4169 14 8.97703 14.4572 7.90484 15.2041C7.39026 15.5626 7.49802 16.2988 8.03578 16.6215L11.4855 18.6913C11.8022 18.8813 12.1978 18.8813 12.5145 18.6913L15.9642 16.6215C16.502 16.2988 16.6097 15.5626 16.0952 15.2041ZM12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6Z"
              fill="#F2994A"
            />
          </svg>
          Ваш заказ ожидание модерации. Скоро ваш заказ опубликуется
        </p> -->
      </div>
      <div
        v-if="status != 0"
        class="status xl:flex hidden justify-center mx-[-24px] mb-6 pb-[18px] xl:pb-0 border-[0] border-b-[2px] border-solid border-grey-light relative"
      >
        <OrderStatus :status="order?.status" :order="order" />
      </div>
      <div class="content-box mt-6 xl:mt-6">
        <div class="flex flex-col gap-6 max-w-[834px]">
          <div
            class="info-box rounded-3xl border-solid border-grey-8 border relative max-h-[430px] overflow-hidden xl:border-[0] xl:rounded-none"
            :class="{ active: openBlock || order?.status < 2 }"
          >
            <div class="info px-6 py-6 xl:px-0 xl:py-0">
              <div
                v-if="status != 0"
                class="status flex justify-center mx-[-24px] mb-6 pb-[18px] border-[0] border-b-[2px] border-solid border-grey-light relative xl:hidden"
              >
                <OrderStatus :status="order?.status" :order="order" />
              </div>
              <div class="head flex justify-start xl:flex-col xl:gap-4">
                <div class="flex gap-6">
                  <p class="text-base text-grey-64 xl:hidden">
                    {{ orderDate }}, {{ orderHours }}
                  </p>
                  <p
                    class="text-base text-grey-64 flex gap-[6px] xl:leading-[20px]"
                  >
                    {{ $store.state.translations["profile.order"]
                    }}<span class="font-medium text-black"
                      >#{{ order?.id }}</span
                    >
                  </p>
                </div>
                <!-- <div class="justify-between items-center xl:flex hidden">
                  <div class="flex gap-4">
                    <p class="text-base text-grey-40 xl:text-[14px]">{{ orderHours }}</p>
                    <p class="text-base text-grey-40 xl:text-[14px]">{{ orderDate }}</p>
                  </div>

                  <div class="flex gap-6">
                    <p class="text-base text-grey-64 flex gap-[6px]">
                      Заказ:<span class="font-medium text-black">#{{ order?.id }}</span>
                    </p>
                  </div>
                </div> -->
              </div>
              <div
                class="body mt-6 pb-4 border-[0] border-b border-solid border-grey-8 xl:mt-4"
              >
                <h1
                  class="title text-[24px] font-semibold text-black mb-4 xl:text-base"
                >
                  {{ order?.name }}
                </h1>

                <span
                  class="text-base text-grey-80 xl:text-[14px] xl:text-justify"
                  v-html="order?.description"
                >
                </span>
              </div>
              <div
                class="files flex flex-col gap-4 mt-4"
                v-if="order?.files?.length > 0"
              >
                <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">
                  {{ $store.state.translations["profile.order-files"] }}
                </h6>
                <div class="file-list flex gap-4 justify-start xl:flex-wrap">
                  <FileCard
                    v-for="file in order?.files"
                    :file="file"
                    :key="file?.id"
                  />
                </div>
              </div>
              <div class="files flex flex-col gap-4 mt-4 xl:mt-6 mb-6">
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
                      class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                      >{{ specialit?.name_ru }} </span
                    ><span
                      v-if="index + 1 != order?.specialities.length"
                      class="text-[20px] text-grey-64 xl:hidden"
                      >/</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[90%] xl:mx-auto xl:pb-2"
              >
                <div class="flex items-center gap-[28px] xl:justify-between">
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
            <div
              class="flex items-center justify-center xl:pb-2 h-12 w-full bg-bg-grey absolute bottom-0 show-all cursor-pointer xl:h-11 xl:justify-end xl:pr-4"
              v-if="!openBlock && order?.status > 1"
              @click="openBlock = true"
            >
              <button
                class="flex gap-2 text-purple text-base font-medium items-center"
              >
                {{ $store.state.translations["profile.reveal"] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#7037EA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="xl:flex justify-center hidden" v-if="status == 0">
          <div
            class="py-4 border border-solid border-[#EDE5E0] bg-[#FFF5EC] rounded-xl mx-auto flex justify-center"
          >
            <p
              class="text-[14px] text-[#F2994A] font-medium flex gap-2 flex-col items-center xl:max-w-[80%] text-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.92154 2.57125C11.2077 1.80958 12.7923 1.80958 14.0785 2.57125L18.9215 5.43932C20.2077 6.20099 21 7.6086 21 9.13192V14.8681C21 16.3914 20.2077 17.799 18.9215 18.5607L18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281L5.07846 18.5607C3.7923 17.799 3 16.3914 3 14.8681V9.13192C3 7.6086 3.7923 6.20099 5.07846 5.43932L9.92154 2.57125ZM16.0952 15.2041C15.023 14.4572 13.5831 14 12 14C10.4169 14 8.97703 14.4572 7.90484 15.2041C7.39026 15.5626 7.49802 16.2988 8.03578 16.6215L11.4855 18.6913C11.8022 18.8813 12.1978 18.8813 12.5145 18.6913L15.9642 16.6215C16.502 16.2988 16.6097 15.5626 16.0952 15.2041ZM12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6Z"
                  fill="#F2994A"
                />
              </svg>
              {{ $store.state.translations["profile.order-waiting-mod"] }} chery
              chery lady
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div
            class="card price-card px-[24px] py-[24px] xl:px-4 xl:py-4 rounded-2xl bg-bg-grey flex flex-col gap-6"
          >
            <div v-if="order?.selected_request?.id">
              <div class="flex flex-col gap-2 mb-4">
                <h4 class="text-[20px] font-semibold text-black">
                  {{ $store.state.translations["profile.choosen-free"] }}
                </h4>
                <p class="text-[14px] text-black">
                  {{ $store.state.translations["profile.choose-time"] }}
                  {{ selectedDate }}
                </p>
              </div>
              <SelectedFreelancer
                class="mx-[-16px] xl:mx-0"
                v-if="order?.selected_request?.id"
                :freelancer="order?.selected_request?.freelancer"
              />
            </div>
            <div class="flex flex-col gap-6">
              <div
                class="flex justify-between xl:flex-row xl:items-center xl:justify-between"
              >
                <p class="text-grey-64 text-[14px] xl:font-semibold">
                  {{ $store.state.translations["profile.deadline"] }}
                </p>
                <h2
                  class="text-blue text-[24px] font-semibold xl:text-[14px]"
                  v-if="order?.deadline"
                >
                  {{ order?.deadline }}
                </h2>
                <h4
                  v-else
                  class="text-black text-base font-semibold xl:text-[14px] xl:font-medium"
                >
                  {{ $store.state.translations["profile.deal"] }}
                </h4>
              </div>
              <div
                class="flex justify-between items-center xl:flex-row xl:justify-between xl:items-center"
              >
                <p
                  class="text-grey-64 text-[18px] font-medium xl:text-base xl:text-grey-64 xl:font-semibold"
                >
                  {{ $store.state.translations["profile.price"] }}
                </p>

                <h2
                  class="text-main-color text-[18px] font-semibold xl:text-[14px]"
                  v-if="order?.price"
                >
                  {{ order?.price.toLocaleString() }}
                  {{ $store.state.translations["profile.sum"] }}
                </h2>

                <h4
                  v-else
                  class="text-black text-base font-semibold xl:text-[14px] xl:font-medium"
                >
                  {{ $store.state.translations["profile.deal"] }}
                </h4>
                <!-- <p class="text-grey-40 text-[15px] line-through xl:hidden">750 000</p> -->
              </div>
            </div>
            <div
              class="buttons flex flex-col gap-4"
              v-if="!order?.end_of_execution && order?.status < 4"
            >
              <button
                v-if="!status"
                @click="
                  $router.push(`/profile/customer/order/edit/${order?.id}`)
                "
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-main-color border-main-color text-base xl:text-[14px] text-white font-medium"
              >
                {{ $store.state.translations["profile.change-data"] }}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9591 6.96428L15.4444 9.44963M4.48559 15.4369L15.9381 3.98438L20.5177 8.56393L9.06515 20.0165H4.48438L4.48559 15.4369Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <a-tooltip
                placement="bottom"
                v-if="order?.status == 2 || order?.status == 3"
              >
                <template slot="title" v-if="!order?.complete_requests">
                  <span>Frilanser tarafidan ish yakunlanishi kutilyapti</span>
                </template>
                <!-- !order?.complete_requests -->
                <span class="flex w-full">
                  <button
                    :class="{
                      'pointer-events-none opacity-50':
                        !order?.complete_requests,
                    }"
                    @click="openCompliteOrder"
                    class="w-full h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-main-color border-main-color text-base xl:text-[14px] text-white font-medium"
                  >
                    {{ $store.state.translations["profile.finish-order"] }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </span>
              </a-tooltip>
              <button
                @click="cancelOrder"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-white border-grey-24 text-base xl:text-[14px] text-light-red font-medium"
              >
                {{ $store.state.translations["profile.cancel-order"] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1266_24116)">
                    <path
                      d="M7.40918 12.0918L10.5912 8.90982"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.40918 8.9082L10.5912 12.0902"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 12.5V6.65312C16.5 5.74484 16.1909 4.8636 15.6235 4.15434L14.701 3.00122C13.9419 2.05236 12.7926 1.5 11.5775 1.5H6.4225C5.20736 1.5 4.05811 2.05236 3.29902 3.00122L2.37652 4.15434C1.80912 4.8636 1.5 5.74484 1.5 6.65312V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5Z"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 5.25H15.75"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1266_24116">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center xl:hidden" v-if="status == 0">
        <div
          class="px-[80px] py-4 border border-solid border-[#EDE5E0] bg-[#FFF5EC] rounded-xl mx-auto mt-[185px]"
        >
          <p
            class="text-base text-[#F2994A] font-medium flex gap-2 items-center xl:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.92154 2.57125C11.2077 1.80958 12.7923 1.80958 14.0785 2.57125L18.9215 5.43932C20.2077 6.20099 21 7.6086 21 9.13192V14.8681C21 16.3914 20.2077 17.799 18.9215 18.5607L18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281L5.07846 18.5607C3.7923 17.799 3 16.3914 3 14.8681V9.13192C3 7.6086 3.7923 6.20099 5.07846 5.43932L9.92154 2.57125ZM16.0952 15.2041C15.023 14.4572 13.5831 14 12 14C10.4169 14 8.97703 14.4572 7.90484 15.2041C7.39026 15.5626 7.49802 16.2988 8.03578 16.6215L11.4855 18.6913C11.8022 18.8813 12.1978 18.8813 12.5145 18.6913L15.9642 16.6215C16.502 16.2988 16.6097 15.5626 16.0952 15.2041ZM12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6Z"
                fill="#F2994A"
              />
            </svg>
            {{ $store.state.translations["profile.order-waiting-mod"] }}
          </p>
        </div>
      </div>
      <div class="mt-6 pb-[120px] xl:hidden" v-if="order?.selected_request?.id">
        <CustomerChat :order="order" :status="status" />
      </div>
    </div>
    <div
      class="mt-[57px] bg-bg-grey pt-20 pb-[120px] xl:mx-[-16px] xl:px-4 xl:pt-4 xl:mt-10 xl:pb-6"
      v-if="status < 2 && !order?.selected_request?.id"
    >
      <div class="max-w-[1440px] mx-auto">
        <div class="order-left-chat mb-6">
          <div class="flex items-center justify-between xl:flex-col xl:gap-4">
            <h4 class="text-[24px] font-semibold text-black xl:text-[18px]">
              {{ $store.state.translations["profile.offers"] }} ({{
                order?.requests?.length
              }})
            </h4>
            <a-select
              v-model="is_positive"
              :placeholder="$store.state.translations[`profile.sorting`]"
              class="min-w-[280px] xl:w-full"
            >
              <a-select-option
                :value="optin.value"
                v-for="optin in options"
                :key="optin.value"
              >
                {{ optin.label }}
              </a-select-option>
            </a-select>
          </div>
        </div>

        <div class="order-left-chat">
          <div
            class="list flex flex-col gap-4"
            v-if="!order?.selected_request?.id && order?.status === 1"
          >
            <OffersOrderCard
              v-for="request in order?.requests"
              :key="request?.id"
              :request="request"
              @selected="$emit('selected')"
              @openChat="chatHandle = true"
              :order="order"
            />
            <button
              v-if="order?.requests.length > 2"
              class="flex py-4 rounded-lg bg-grey-light w-full items-center justify-center gap-6 text-base font-medium text-blue xl:text-[14px] xl:gap-4 xl:flex-row-reverse"
            >
              <svg
                class="xl:h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.5 8.63695V12.5L15.167 13.74M20.498 12.5C20.498 16.9171 16.9171 20.498 12.5 20.498C8.08278 20.498 4.50195 16.9171 4.50195 12.5C4.50195 8.08278 8.08278 4.50195 12.5 4.50195C16.9171 4.50195 20.498 8.08278 20.498 12.5Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.translations["profile.offers"] }}
            </button>
          </div>
          <div
            class="xl:hidden customer-chat"
            :class="{ activeChat: chatHandle }"
            v-if="!order?.selected_request?.id && order?.status === 1"
          >
            <OffersChat @close="chatHandle = false" />
          </div>
          <div
            v-if="order?.status === 0"
            class="flex gap-6 items-center justify-center py-4 xl:py-2 xl:px-[14px] w-full border border-solid border-[#EDE5E0] bg-[#FFF5EC] rounded-[12px] xl:bg-white"
          >
            <svg
              class="xl:hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2L18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2Z"
                stroke="#F2994A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 8H16M16 8V11M16 8L8 16M8 16L8 13M8 16H11"
                stroke="#F2994A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              class="text-[#F2994A] text-base font-medium xl:text-[14px] text-center"
            >
              {{ $store.state.translations["profile.after-moder"] }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CancellationOrder
        ref="deleteOrder"
        @submit="submitCancel"
        :loadingBtn="loadingBtn"
        :title="$store.state.translations[`profile.sure-cancel-request`]"
        save="$store.state.translations[`modal.yes`]"
        closeBtn="$store.state.translations[`modal.no`]"
      >
      </CancellationOrder>
      <CancellationOrder
        ref="deleteActiveOrder"
        @submit="submitCancel"
        :loadingBtn="loadingBtn"
        :title="$store.state.translations[`profile.sure-cancel-request`]"
        save="$store.state.translations[`modal.yes`]"
        closeBtn="$store.state.translations[`modal.no`]"
      >
        <p class="text-base text-grey-64 mt-2 xl:text-center xl:px-4">
          {{ $store.state.translations["profile.you-cant-continue"] }}
        </p>

        <span
          class="reyting mb-[10px] rounded-[15px] px-6 py-[10px] text-light-red text-base mx-auto mt-3"
        >
          {{ $store.state.translations["profile.raiting-down"] }} -16
          {{ $store.state.translations["profile.to-score"] }}
        </span>
      </CancellationOrder>
      <CancellationOrder
        ref="deleteProcessOrder"
        @submit="submitCancel"
        :loadingBtn="loadingBtn"
        :disabled="disabledBtn"
        :title="$store.state.translations[`profile.sure-cancel-order`]"
        save="$store.state.translations[`modal.yes`]"
        closeBtn="$store.state.translations[`modal.no`]"
        :width="584"
      >
        <p class="text-base text-grey-64 mt-2 xl:px-4 xl:text-center">
          {{ $store.state.translations["profile.you-cant-continue"] }}
        </p>

        <span
          class="reyting mb-[10px] rounded-[15px] px-6 py-[10px] text-light-red text-base mx-auto mt-3 xl:px-4 xl:text-center"
        >
          {{ $store.state.translations["profile.raiting-down"] }} -16
          {{ $store.state.translations["profile.to-score"] }}
        </span>
        <div
          class="px-4 py-4 rounded-[16px] bg-bg-grey w-full mt-4 mb-[-32px] xl:bg-white"
        >
          <h5 class="text-[18px] text-grey-80 font-bold">
            {{ $store.state.translations["profile.cancel-reason"] }}
          </h5>
          <ul class="flex flex-col gap-6 mt-6">
            <li v-for="reason in reasons" :key="reason?.id">
              <a-checkbox
                :checked="selectedReasons.includes(reason?.id)"
                @change="onSelectReasons(reason?.id)"
                class="text-[18px]"
              >
                {{ reason?.text_ru }}
              </a-checkbox>
            </li>
          </ul>
        </div>
      </CancellationOrder>

      <CompliteOrder
        ref="compliteOrder"
        @submit="submitComplite"
        :loadingBtn="loadingBtn"
      />
    </div>
    <div
      v-if="order?.status == 0"
      class="fixed-btns fixed bottom-0 w-full z-[20000] py-4 px-4 bg-white left-0 hidden xl:grid gap-4"
    >
      <div class="flex flex-col gap-1">
        <p class="text-[12px] text-grey-64">
          {{ $store.state.translations["profile.price"] }}
        </p>
        <h5
          class="text-base text-main-color font-semibold whitespace-nowrap"
          v-if="order?.price"
        >
          {{ order?.price.toLocaleString() }}
          {{ $store.state.translations["profile.sum"] }}
        </h5>
        <h4
          v-else
          class="text-black text-[12px] font-semibold xl:font-medium whitespace-nowrap"
        >
          {{ $store.state.translations["profile.deal"] }}
        </h4>
      </div>
      <button
        @click="$router.push(`/profile/customer/order/edit/${order?.id}`)"
        class="border border-solid border-blue bg-blue rounded-[12px] h-11 w-full flex justify-center items-center text-[12px] text-white font-medium gap-2"
      >
        {{ $store.state.translations["profile.change-data"] }}
      </button>
      <Loader v-if="loading" />
    </div>
    <CustomerChatMobile ref="customerChat" />
    <button
      @click="openCustomerChat"
      v-if="order?.selected_request?.id && order?.status"
      class="w-[56px] h-[56px] rounded-full xl:flex justify-center items-center bg-main-color fixed bottom-[88px] right-4 hidden"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 3H13C17.9706 3 22 7.02944 22 12C22 16.9706 17.9706 21 13 21H6C3.79086 21 2 19.2091 2 17V12C2 7.02944 6.02944 3 11 3ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import ClientCard from "@/components/orders/ClientCard.vue";
import FileCard from "@/components/orders/FileCard.vue";
import InfoCard from "@/components/orders/InfoCard.vue";
import PriceCard from "@/components/orders/PriceCard.vue";
import OrderStatus from "@/components/profile/orders/OrderStatus.vue";
import EndingProcess from "@/components/orders/EndingProcess.vue";
import CancellationOrder from "@/components/modals/CancellationOrder.vue";
import CustomerChat from "./CustomerChat.vue";
import Loader from "@/components/Loader.vue";
import OffersOrderCard from "./OffersOrderCard.vue";
import OffersChat from "./OffersChat.vue";
import moment from "moment";
import SelectedFreelancer from "./SelectedFreelancer.vue";
import CompliteOrder from "../../modals/CompliteOrder.vue";
import CustomerChatMobile from "../../modals/CustomerChatMobile.vue";

export default {
  props: ["order", "loading", "reasons"],
  data() {
    return {
      selectedReasons: [],
      chatHandle: false,
      options: [
        {
          label: this.$store.state.translations["order.with-price"],
          value: 1,
        },
        {
          label: this.$store.state.translations["order.with-time"],
          value: 0,
        },
      ],
      is_positive: undefined,
      openBlock: false,
      disabledBtn: true,
      loadingBtn: false,
    };
  },
  computed: {
    orderDate() {
      return moment(this.order?.created_at).format("DD MMM YYYY");
    },
    orderHours() {
      return moment(this.order?.created_at).format("HH:mm");
    },
    status() {
      let status = this.order?.status;
      if (this.order?.selected_request?.id) {
        status = 2;
      }
      if (
        this.order?.complete_requests?.length > 0 &&
        this.order?.end_of_execution
      )
        status = 3;
      return status;
    },
    selectedDate() {
      return moment(this.order?.selected_request?.created_at).format(
        "HH:mm DD.MM.YYYY"
      );
    },
  },
  mounted() {
    if (!localStorage.getItem("auth-token")) {
      this.$router.push("/");
    }
  },
  methods: {
    openCustomerChat() {
      this.$refs.customerChat.open();
    },
    closeCustomerChat() {
      this.$refs.customerChat.close();
    },
    openCompliteOrder() {
      this.$refs.compliteOrder.open();
      this.$refs.compliteOrder.openModal();
    },
    closeCompliteOrder() {
      this.$refs.compliteOrder.close();
      this.$refs.compliteOrder.closeModal();
    },
    openDeleteOrder() {
      this.$refs.deleteOrder.open();
      this.$refs.deleteOrder.openModal();
    },
    closeDeleteOrder() {
      this.$refs.deleteOrder.close();
      this.$refs.deleteOrder.closeModal();
    },
    openDeleteActiveOrder() {
      this.$refs.deleteActiveOrder.open();
      this.$refs.deleteActiveOrder.openModal();
    },
    closeDeleteActiveOrder() {
      this.$refs.deleteActiveOrder.close();
      this.$refs.deleteActiveOrder.closeModal();
    },
    openDeleteProcessOrder() {
      this.$refs.deleteProcessOrder.open();
      this.$refs.deleteProcessOrder.openModal();
    },
    closeDeleteProcessOrder() {
      this.$refs.deleteProcessOrder.close();
      this.$refs.deleteProcessOrder.closeModal();
    },
    moment,
    onSelectReasons(id) {
      if (!this.selectedReasons.includes(id)) {
        this.selectedReasons.push(id);
      } else {
        this.selectedReasons = this.selectedReasons.filter(
          (elem) => elem != id
        );
      }
      this.selectedReasons.length > 0
        ? (this.disabledBtn = false)
        : (this.disabledBtn = true);
    },
    cancelOrder() {
      console.log(this.order?.status);
      switch (this.order?.status) {
        case 0:
          this.openDeleteOrder();
          break;
        case 1:
          this.openDeleteActiveOrder();
          break;
        case 2:
        case 3:
          this.openDeleteProcessOrder();
          break;
      }
    },
    submitSelect() {},
    handleOk() {
      this.closeCompliteOrder();
      this.closeDeleteOrder();
      this.closeDeleteActiveOrder();
      this.closeDeleteProcessOrder();
    },

    submitCancel() {
      let formData = new FormData();
      this.selectedReasons.forEach((item) => {
        formData.append("reasons[]", item);
      });
      this.__CANCEL_ORDER(this.selectedReasons.length > 0 ? formData : {});
    },
    submitComplite(formData) {
      this.__COMPLITE_ORDER(formData);
    },
    async __CANCEL_ORDER(formData) {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postCanceledOrder",
          {
            id: this.$route.params.id,
            data: formData,
          }
        );
        this.$emit("selected");
        this.handleOk();
      } catch (e) {
        if (e.response) {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }
      } finally {
        this.loadingBtn = false;
      }
    },
    async __COMPLITE_ORDER(formData) {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postCompliteCustomer",
          formData
        );
        this.closeCompliteOrder();
        this.$emit("selected");
      } catch (e) {
        if (e.response) {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }
      } finally {
        this.loadingBtn = false;
      }
    },
  },
  components: {
    FileCard,
    InfoCard,
    ClientCard,
    PriceCard,
    OrderStatus,
    EndingProcess,
    CancellationOrder,
    CustomerChat,
    Loader,
    OffersOrderCard,
    OffersChat,
    SelectedFreelancer,
    CompliteOrder,
    CustomerChatMobile,
  },
};
</script>
<style lang="css" scoped>
.customer-chat {
  transition: 0.3s;
  transform: translateX(100%);
  opacity: 0;
}

.activeChat {
  transform: translateX(0);
  opacity: 1;
}

:deep(.ant-select-selection__placeholder) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

:deep(.ant-select-selection--single) {
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  max-width: 280px;
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

:deep(.ant-rate) {
  height: 20px;
  display: flex;
  align-items: center;
}

:deep(.ant-select-selection__rendered),
:deep(.ant-select-selection-selected-value) {
  height: 100%;
}

:deep(.ant-select-selection-selected-value) {
  display: flex !important;
  align-items: center;
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  line-height: 150%;
}

:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}

:deep(
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner
  ) {
  border-color: var(--blue);
}

:deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}

:deep(.ant-checkbox + span) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}

:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}

:deep(
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner
  ) {
  border-color: var(--blue);
}

:deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}

:deep(.ant-checkbox + span) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}

.reyting {
  background: rgba(237, 50, 55, 0.13);
}

.back-btn {
  transition: 0.3s;
}

.back-btn:hover {
  border: 1px solid var(--main-color);
  background: #f5f3ff;
  box-shadow: 0px 12px 16px 0px rgba(92, 70, 229, 0.08);
}

/* 1200px */
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

.info-box {
  transition: 0.3s;
}

.active {
  max-height: 2000px;
}

@keyframes opacityAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.order-left-chat {
  display: grid;
  grid-template-columns: 1fr 470px;
  gap: 16px;
}

.show-all {
  /* background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.86) 46.88%,
    #fff 100%
  ); */
}

@media (max-width: 1200px) {
  .content-box {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .order-left-chat {
    grid-template-columns: 1fr;
  }

  .file-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .fixed-btns {
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);

    grid-template-columns: 1fr 2fr;
  }

  :deep(.ant-select-selection--single) {
    height: 48px;
    max-width: 100%;
    font-size: 14px;
  }

  :deep(.ant-select-selection__placeholder) {
    font-size: 14px;
  }
}
</style>
