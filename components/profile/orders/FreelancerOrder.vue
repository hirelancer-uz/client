<template>
  <div class="pt-12 order xl:px-4 xl:pt-0">
    <div class="max-w-[1286px] mx-auto pb-[55px]">
      <button
          @click="$router.go(-1)"
        class="back-btn flex gap-4 w-[162px] py-3 border border-grey-24 border-solid rounded-lg justify-center items-center text-base font-medium text-blue hover:text-blue xl:hidden"
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
      <div
        class="status xl:flex hidden justify-center mx-[-24px] mb-6 pb-[18px] xl:pb-0 border-[0] border-b-[2px] border-solid border-grey-light relative"
      >
        <OrderStatus :status="order?.status" :order="order" />
      </div>
      <!-- <div
        class="status xl:flex justify-center pt-[18px] pb-[18px] border-[0] border-b-[2px] border-solid border-grey-light relative hidden"
      >
        <OrderStatus :status="order?.status" :order="order" />
      </div> -->
      <div class="content-box mt-6 xl:mt-0">
        <div class="flex flex-col gap-6 max-w-[918px]">
          <div
            class="info-box rounded-3xl border-solid border-grey-light border-[2px] relative overflow-hidden max-h-[430px] xl:rounded-none xl:px-0 xl:border-[0]"
            :class="{ active: openBlock || order?.status < 2 }"
          >
            <div
              class="status flex justify-center pt-[18px] pb-[18px] border-[0] border-b-[2px] border-solid border-grey-light relative xl:hidden"
            >
              <OrderStatus :status="order?.status" :order="order" />
            </div>
            <div class="info px-6 py-6 xl:px-0 xl:py-0">
              <div class="head flex justify-start">
                <!-- <div class="flex gap-4 items-center"> -->
                <!-- <span
                    class="flex gap-[4px] status-red items-center rounded-[8px] px-[8px] py-[4px] text-light-red text-[14px] font-medium"
                    ><svg
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
                    >Срочный заказ</span
                  > -->
                <!-- </div> -->

                <div class="flex gap-6">
                  <p class="text-base text-grey-64">
                    {{ orderDate }}, {{ orderHours }}
                  </p>
                  <p class="text-base text-grey-64 flex gap-[6px]">
                    {{ $store.state.translations["profile.order"]
                    }}<span class="font-medium text-black"
                      >#{{ order?.id }}</span
                    >
                  </p>
                </div>
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
                  class="text-base text-grey-80 xl:text-base order-desc break-words"
                  v-html="order?.description"
                >
                </span>
              </div>
              <div
                class="files flex flex-col gap-4 mt-4"
              >
                <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">
                  {{ $store.state.translations["modal.order-files"] }}
                </h6>
                <div class="file-list flex gap-4 justify-start xl:flex-wrap">
                  <FileCard
                    v-for="file in order?.files"
                    :file="file"
                    :key="file?.id"
                  />
                </div>
              </div>
              <div class="files flex flex-col gap-4 mt-6 xl:mt-6 mb-6">
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
                      @click="$router.push(localePath(`/specialities/${specialit?.id}`))"
                      class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium cursor-pointer"
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
                class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[90%] xl:mx-auto"
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
                      /></svg
                    >{{ order?.view_count }}
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
                      /></svg
                    >{{ order?.request_count }}
                    {{ $store.state.translations["profile.requests"] }}
                  </p>
                </div>
                <!-- <p
                  class="underline text-base text-pantone-2023 flex items-center gap-[10px] xl:text-center xl:mx-auto xl:text-[14px] white-space-nowrap"
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
              class="flex items-center justify-center xl:pb-2 h-12 w-full bg-bg-grey absolute bottom-0 cursor-pointer xl:h-11 xl:justify-end xl:pr-4"
              v-if="!openBlock && order?.status > 1"
              @click="openBlock = true"
            >
              <button
                class="flex gap-2 text-purple text-base font-medium items-center"
              >
                {{ $store.state.translations["profile.reveal"]
                }}<svg
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
          <OrderChat :status="order?.status" :order="order" />
        </div>
        <div class="flex flex-col gap-4">
          <ClientCard :client="order?.client" />
          <div
            class="card price-card px-6 py-6 rounded-2xl bg-bg-grey flex flex-col gap-6"
          >
            <div class="flex flex-col gap-6">
              <div class="flex justify-between">
                <p class="text-grey-64 text-[14px]">
                  {{ $store.state.translations["profile.deadline"] }}
                </p>

                <h1
                  class="text-black text-base font-semibold xl:text-base"
                  v-if="order?.deadline"
                >
                  {{ order?.deadline }}
                </h1>
                <h1
                  class="text-black text-base font-semibold xl:text-base"
                  v-else
                >
                  {{ $store.state.translations["profile.deal"] }}
                </h1>
                <!-- <p class="text-grey-40 text-[15px] line-through">750 000</p> -->
              </div>
              <div class="flex justify-between">
                <p class="text-grey-64 font-medium text-[18px]">
                  {{ $store.state.translations["profile.price"] }}
                </p>
                <h4
                  class="text-main-color text-[18px] font-semibold"
                  v-if="order?.price"
                >
                  {{ order?.price.toLocaleString() }}
                  {{ $store.state.translations["profile.sum"] }}
                </h4>
                <h4 class="text-main-color text-[18px] font-semibold" v-else>
                  {{ $store.state.translations["profile.deal"] }}
                </h4>
              </div>
            </div>
            <EndingProcess
              v-if="order?.status == 2 && !myRequest"
              :selected="order?.selected_request"
            />
            <span
              class="w-full h-[2px] bg-grey-light flex"
              v-if="!order?.end_of_execution"
            ></span>
            <!-- v-if="!order?.end_of_execution" -->

            <div
              class="buttons flex flex-col gap-4"
              v-if="!order?.end_of_execution && order?.status < 4"
            >
              <div
                class="flex flex-col gap-2"
                v-if="order?.status == 3 && myRequest"
              >
                <button
                  class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] bg-grey-light text-base text-grey-80 font-medium"
                >
                  {{ $store.state.translations["modal.waiting-confirm"] }}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p
                  class="text-grey-80 text-[14px] max-w-[90%] mx-auto text-center"
                >
                  {{
                    $store.state.translations["modal.waiting-finish-confirm"]
                  }}
                </p>
              </div>
              <button
                v-if="order?.status == 2 && !myRequest"
                @click="openOrderFinishModal"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-main-color border-main-color text-base text-white font-medium"
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
              <!-- v-if="status != 3" -->
              <button
                v-if="order?.status != 4"
                @click="
                  order?.status == 1 ? openOfferCancel() : openOrderCancel()
                "
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] bg-[#667B8C] text-base text-white font-medium"
              >
                {{ $store.state.translations["profile.cancel-order"] }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <!-- <button
                v-if="status > 1"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-white border-grey-light text-base text-blue font-medium"
              >
                Написать<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M8.5 10H16.5M8.5 14H12.5M11.5 3H13.5C18.4706 3 22.5 7.02944 22.5 12C22.5 16.9706 18.4706 21 13.5 21H6.5C4.29086 21 2.5 19.2091 2.5 17V12C2.5 7.02944 6.52944 3 11.5 3Z"
                    stroke="#5C46E6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button> -->
              <!-- <button
                v-if="status == 3"
                @click="visibleComplaint = true"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-light-red2 border-light-red text-base text-light-red font-medium"
              >
                Жалоба<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M6.47599 1.12444C7.14024 -0.0414791 8.85976 -0.0414811 9.52401 1.12444L15.2781 11.2243C15.9237 12.3575 15.0834 13.75 13.7541 13.75H2.24591C0.916594 13.75 0.0763281 12.3575 0.721903 11.2243L6.47599 1.12444Z"
                    fill="#F2154A"
                  />
                  <path
                    d="M8.75 10.75C8.75 11.1642 8.41421 11.5 8 11.5C7.58579 11.5 7.25 11.1642 7.25 10.75C7.25 10.3358 7.58579 10 8 10C8.41421 10 8.75 10.3358 8.75 10.75Z"
                    fill="#F2154A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4.1875C8.31066 4.1875 8.5625 4.43934 8.5625 4.75V8.5C8.5625 8.81066 8.31066 9.0625 8 9.0625C7.68934 9.0625 7.4375 8.81066 7.4375 8.5V4.75C7.4375 4.43934 7.68934 4.1875 8 4.1875Z"
                    fill="#F2154A"
                  />
                </svg>
              </button> -->
            </div>
          </div>
          <!-- <div
            class="card price-card px-[24px] py-[24px] rounded-2xl bg-bg-grey flex flex-col gap-6"
          >
            <div class="flex flex-col gap-[10px]">
              <div class="flex flex-col">
                <p class="text-grey-64 text-[14px]">Buyrtma narxi:</p>

                <h1 class="text-blue text-[24px] font-semibold xl:text-base">
                  99 200 000 so’m
                </h1>
                <p class="text-grey-40 text-[15px] line-through">750 000</p>
              </div>
              <div class="flex flex-col">
                <p class="text-grey-64 text-[14px]">Срок:</p>
                <h4 class="text-black text-base font-semibold">5 kun</h4>
              </div>
            </div>
            <span class="w-full h-[2px] bg-grey-light flex"></span>
            <div class="flex flex-col gap-3">
              <button
                @click="openModal"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-grey-light border-grey-light text-base text-grey-80 font-medium"
              >
                Ожидание Подверждение
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                    stroke="#353437"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <p class="text-grey-80 text-[14px] text-center w-[90%] mx-auto">
                Mijoz ishni bitganligni tasdiqlanishi kutilmoqda
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div>
      <CloseOrder @handleOkProp="handleOkWait" :visibleProp="visibleWait" />
      <FreelancerComplite
        ref="orderComplite"
        @submit="submitFinish"
        :title="$store.state.translations['modal.sure-cancel-project']"
        :save="$store.state.translations[`modal.yes`]"
        :closeBtn="$store.state.translations[`modal.no`]"
        :loadingBtn="loadingBtn"
      />

      <CancellationOrder
        ref="orderCancel"
        @submit="submitFinish"
        :title="$store.state.translations[`profile.sure-cancel-order`]"
        :save="$store.state.translations[`modal.yes`]"
        :closeBtn="$store.state.translations[`modal.no`]"
        :width="584"
        :loadingBtn="loadingBtn"
        :disabled="disabledBtn"
      >
        <p class="text-base text-grey-64 mt-2">
          {{ $store.state.translations["profile.you-cant-continue"] }}
        </p>

        <span
          class="reyting mb-[10px] rounded-[15px] px-6 py-[10px] text-light-red text-base mx-auto mt-3"
        >
          {{ $store.state.translations["profile.raiting-down"] }} -16
          {{ $store.state.translations["profile.to-score"] }}
        </span>
        <div class="px-4 py-4 rounded-[16px] bg-bg-grey w-full mt-4 mb-[-32px]">
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
                {{ reason?.text_ru }}</a-checkbox
              >
            </li>
          </ul>
        </div>
      </CancellationOrder>
      <CancellationOrder
        ref="offerCancel"
        @submit="submitCancel"
        :title="$store.state.translations['profile.sure-cancel-request']"
        :loadingBtn="loadingBtn"
      />
      <!-- <ComplaintOrder
        @handleOkProp="handleOkComplaint"
        :visibleProp="visibleComplaint"
        @submit="submitComplaint"
        title="Mijozga qanday shikoyatingiz bor?"
        :loadingBtn="loadingBtn"
      /> -->
    </div>
    <Loader v-if="loading" />
  </div>
</template>
<script>
import ClientCard from "@/components/orders/ClientCard.vue";
import FileCard from "@/components/orders/FileCard.vue";
import InfoCard from "@/components/orders/InfoCard.vue";
import PriceCard from "@/components/orders/PriceCard.vue";
import OrderStatus from "@/components/profile/orders/OrderStatus.vue";
import EndingProcess from "@/components/orders/EndingProcess.vue";
import CloseOrder from "@/components/modals/CloseOrder.vue";
import CancellationOrder from "@/components/modals/CancellationOrder.vue";
import ComplaintOrder from "@/components/modals/ComplaintOrder.vue";
import OrderChat from "@/components/orders/OrderChat.vue";
import Loader from "@/components/Loader.vue";
import moment from "moment";
import FreelancerComplite from "../../modals/FreelancerComplite.vue";
export default {
  props: ["order", "reasons"],
  data() {
    return {
      selectedReasons: [],
      step: 1,
      loadingBtn: false,
      visibleWait: false,
      openBlock: false,
      visibleComplaint: false,
      loading: true,
      disabledBtn: true,
    };
  },

  computed: {
    orderDate() {
      return moment(this.order?.created_at).format("DD MMM YYYY");
    },
    orderHours() {
      return moment(this.order?.created_at).format("HH:mm");
    },
    myRequest() {
      return this.order?.complete_requests?.find(
        (item) => item?.freelancer_id == this.$store.state.userInfo?.id
      );
    },
    status() {
      let status = this.order?.status;
      if (this.order?.selected_request?.id) status = 2;

      if (
        this.order?.complete_requests?.length > 0 &&
        this.order?.end_of_execution
      )
        status = 3;
      return status;
    },
  },
  mounted() {
    this.loading = true;
    if (!localStorage.getItem("auth-token")) {
      this.$router.push(this.localePath("/"));
    } else {
      this.loading = false;
    }
  },
  methods: {
    openOrderFinishModal() {
      this.$refs.orderComplite.openModal();
    },
    closeOrderComplite() {
      this.$refs.orderComplite.closeModal();
    },
    openOrderCancel() {
      console.log(this.$refs);
      this.$refs.orderCancel.open();
      this.$refs.orderCancel.openModal();
    },
    closeOrderCancel() {
      this.$refs.orderCancel.close();
      this.$refs.orderCancel.closeModal();
    },
    openOfferCancel() {
      console.log(this.$refs);
      this.$refs.offerCancel.open();
      this.$refs.offerCancel.openModal();
    },
    closeOfferCancel() {
      this.$refs.offerCancel.close();
      this.$refs.offerCancel.closeModal();
    },
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
    moment,

    handleOkWait() {
      this.visibleWait = false;
    },

    submitFinish() {
      this.__COMPLETE_ORDER();
    },
    handleOkComplaint() {
      this.visibleComplaint = false;
    },

    submitCancel() {
      this.__CANCEL_OFFER();
    },
    submitComplaint(formData) {
      this.__COMPLAINTS_ORDER(formData);
    },
    async __CANCEL_OFFER() {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postCanceledOffer",
          {
            order_request_id: this.order?.requests
              .filter(
                (item) => item?.freelancer?.id == this.$store.state.userInfo?.id
              )
              .at(-1).id,
          }
        );
        this.$router.go(-1);
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
    async __COMPLETE_ORDER() {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postCompleteOrder",
          {
            order_id: this.$route.params.id,
          }
        );
        this.closeOrderComplite();
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
    async __COMPLAINTS_ORDER(formData) {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postComplaints",
          formData
        );
        this.handleOkComplaint();
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
    CloseOrder,
    CancellationOrder,
    ComplaintOrder,
    OrderChat,
    Loader,
    FreelancerComplite,
  },
};
</script>
<style lang="css" scoped>
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
.info-box {
  transition: 0.3s;
}
.active {
  max-height: 3000px;
}
@keyframes opacityAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.show-all {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.86) 46.88%,
    #fff 100%
  );
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
}
</style>
