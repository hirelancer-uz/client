<template>
  <div
    class="offers-order-card border border-solid border-border-darik rounded-2xl bg-white px-6 py-6 xl:px-4 xl:py-4"
  >
    <div class="head">
      <div
        class="image w-[60px] h-[60px] xl:h-[52px] xl:w-[52px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
      >
        <NuxtLink
          target="_blank"
          :to="localePath(`/freelancer/${request?.freelancer?.id}`)"
        >
          <img
            v-if="request?.freelancer?.avatar"
            class="w-full h-full object-cover"
            :src="`${imgUrl}${request?.freelancer?.avatar}`"
            alt=""
          />
          <img
            v-else
            class="w-full h-full object-cover"
            src="@/assets/images/user-avatar.jpg"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="info flex justify-between">
        <div>
          <NuxtLink
            target="_blank"
            :to="localePath(`/freelancer/${request?.freelancer?.id}`)"
          >
            <h4
              class="text-[18px] font-medium text-black truncate name whitespace-normal flex gap-2 xl:text-[14px] cursor-pointer"
            >
              {{ request?.freelancer?.name }} {{ request?.freelancer?.surname }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M7.19956 6.57812H13.9329V13.3106M6.08789 14.4231L13.9229 6.58812"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h4>
            <div class="flex items-center gap-3 mt-2 xl:mt-2">
              <p
                class="text-base font-medium text-grey-80 flex gap-1 items-center xl:text-[12px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5.8528 1.90767C6.3222 0.918798 7.67845 0.918796 8.14785 1.90767L8.9591 3.6167C9.14549 4.00939 9.50581 4.28156 9.92261 4.34453L11.7366 4.61859C12.7862 4.77716 13.2053 6.11825 12.4458 6.88798L11.1332 8.21828C10.8316 8.52394 10.694 8.96433 10.7652 9.39593L11.075 11.2743C11.2543 12.3612 10.1571 13.1901 9.2183 12.6769L7.59581 11.79C7.22301 11.5863 6.77764 11.5863 6.40484 11.79L4.78235 12.6769C3.84355 13.1901 2.74632 12.3612 2.92562 11.2743L3.23549 9.39593C3.30668 8.96433 3.16906 8.52394 2.86746 8.21828L1.55484 6.88798C0.795331 6.11825 1.21443 4.77716 2.26404 4.61859L4.07804 4.34453C4.49484 4.28156 4.85516 4.00939 5.04155 3.6167L5.8528 1.90767Z"
                    fill="#F2C94C"
                  />
                </svg>
                {{ request?.freelancer?.stars }}
              </p>
              <div class="flex gap-2">
                <p class="text-grey-40 text-base xl:hidden">
                  {{ $store.state.translations["profile.comments"] }}
                </p>
                <p class="text-[14px] flex gap-2 items-center">
                  <span
                    class="text-green text-base flex gap-1 xl:text-[14px] items-center"
                  >
                    <svg
                      class="xl:h-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.00033 6.66667H3.33366C2.41318 6.66667 1.66699 7.41286 1.66699 8.33333V15.8333C1.66699 16.7538 2.41318 17.5 3.33366 17.5H5.00033C5.9208 17.5 6.66699 16.7538 6.66699 15.8333V8.33333C6.66699 7.41286 5.9208 6.66667 5.00033 6.66667Z"
                        stroke="#009A10"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2311 17.5H10.1762C9.51816 17.5 8.8748 17.3052 8.32724 16.9402L7.03808 16.0807C6.80624 15.9262 6.66699 15.666 6.66699 15.3873V8.55464C6.66699 8.40961 6.70484 8.2671 6.77679 8.14119L10.0003 2.5H11.1076C12.7715 2.5 13.764 4.35447 12.841 5.73896L11.667 7.5H16.199C17.2833 7.5 18.0789 8.51898 17.8159 9.57089L16.4649 14.9751C16.0939 16.459 14.7606 17.5 13.2311 17.5Z"
                        stroke="#009A10"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >{{ request?.freelancer?.likes_count }}</span
                  >
                  <span class="bg-grey-8 h-[24px] xl:h-5 flex w-[1px]"></span>

                  <span
                    class="text-pantone-2023 text-base flex gap-1 xl:text-[14px] items-center"
                  >
                    <svg
                      class="xl:h-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15 12.5H16.6666C17.5871 12.5 18.3333 11.7538 18.3333 10.8333V5C18.3333 4.07953 17.5871 3.33333 16.6666 3.33333H15C14.0795 3.33333 13.3333 4.07953 13.3333 5V10.8333C13.3333 11.7538 14.0795 12.5 15 12.5Z"
                        stroke="#BB2649"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.76924 2.5H9.82406C10.4821 2.5 11.1255 2.69479 11.6731 3.05983L12.9622 3.91928C13.1941 4.07383 13.3333 4.33403 13.3333 4.61265V11.4454C13.3333 11.5904 13.2955 11.7329 13.2235 11.8588L9.99998 17.5H8.89273C7.22878 17.5 6.2363 15.6455 7.15929 14.261L8.33332 12.5H3.80128C2.71699 12.5 1.92139 11.481 2.18437 10.4291L3.53543 5.02488C3.9064 3.54099 5.23968 2.5 6.76924 2.5Z"
                        stroke="#BB2649"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >{{ request?.freelancer?.dislikes_count }}</span
                  >
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <button
          class="border-[2px] border-solid border-grey-light rounded-full h-11 w-11 items-center justify-center hidden xl:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.667 19.9139L12 16.0839L5.33301 19.9139V7.08594C5.33301 5.42894 6.67601 4.08594 8.33301 4.08594H15.666C17.323 4.08594 18.666 5.42894 18.666 7.08594V19.9139H18.667Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="flex flex-col gap-2 xl:hidden">
          <h3
            class="text-grey-80 text-[20px] font-semibold"
            v-if="request?.price"
          >
            {{ request?.price.toLocaleString() }}
            {{ $store.state.translations["profile.sum"] }}
          </h3>
          <h3 class="text-grey-80 text-[20px] font-semibold" v-else>
            {{ $store.state.translations["profile.deal"] }}
          </h3>
          <p class="text-grey-64 text-[14px] flex gap-[6px]">
            {{ $store.state.translations["profile.deadline"]
            }}<span class="text-black" v-if="request?.deadline"
              >{{ request?.deadline }}
              {{ $store.state.translations["profile.days"] }}</span
            >
            <span v-else class="text-black">
              {{ $store.state.translations["profile.deal"] }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="hidden justify-between gap-2 xl:flex xl:items-center mt-5">
      <h3 class="text-grey-80 text-base font-semibold" v-if="request?.price">
        {{ request?.price.toLocaleString() }}
        {{ $store.state.translations["profile.sum"] }}
      </h3>
      <h3 class="text-grey-80 text-base font-semibold" v-else>
        {{ $store.state.translations["profile.deal"] }}
      </h3>
      <p class="text-grey-64 text-[12px] flex gap-[6px]">
        {{ $store.state.translations["profile.deadline"]
        }}<span class="text-black" v-if="request?.deadline"
          >{{ request?.deadline }}
          {{ $store.state.translations["profile.days"] }}</span
        >
        <span v-else class="text-black">
          {{ $store.state.translations["profile.deal"] }}</span
        >
      </p>
    </div>
    <div class="hidden xl:block mt-3">
      <p class="flex gap-3 text-[12px] text-grey-40 items-center">
        {{ moment(request?.created_at).format(hourFormat) }}
        <span class="bg-grey-8 h-4 flex w-[1px]"></span>
        {{ moment(request?.created_at).format(dateFormat) }}
      </p>
    </div>
    <div class="text mt-4 pb-6 xl:mt-3 xl:pb-0">
      <p
        class="text-grey-64 text-base leading-6 max-h-[96px] overflow-hidden xl:text-[14px] desc"
        :class="{ active: openBlock || order?.status < 2 }"
      >
        {{ request?.additional_info }}
      </p>
      <button
        @click="openBlock = true"
        v-if="
          !openBlock &&
          request?.additional_info?.length > 400 &&
          order?.status > 1
        "
        class="text-main-color text-base flex gap-1 mt-1"
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
    <div
      class="footer border-[0] border-t border-solid border-border-darik pt-6 xl:pt-5 flex justify-between xl:border-[0] xl:gap-2"
    >
      <div class="flex gap-8 items-center xl:w-full">
        <button
          @click="sendRequest(request)"
          class="rounded-[8px] bg-main-color px-5 h-12 flex items-center text-base text-white font-semibold leading-6 xl:text-[14px] xl:font-medium xl:w-full xl:justify-center"
        >
          {{ $store.state.translations["profile.choose-this-free"] }}
        </button>
        <p class="flex gap-4 text-base text-grey-40 items-center xl:hidden">
          {{ moment(request?.created_at).format(hourFormat) }}
          <span class="bg-grey-8 h-[24px] flex w-[1px]"></span>
          {{ moment(request?.created_at).format(dateFormat) }}
        </p>
      </div>
      <div class="flex gap-6 items-center">
        <button
          class="border-[2px] border-solid border-grey-light rounded-full h-12 w-12 flex items-center justify-center xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.667 19.9139L12 16.0839L5.33301 19.9139V7.08594C5.33301 5.42894 6.67601 4.08594 8.33301 4.08594H15.666C17.323 4.08594 18.666 5.42894 18.666 7.08594V19.9139H18.667Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          @click="$emit('openChat')"
          class="w-[190px] xl:w-12 h-12 xl:hidden flex items-center justify-center gap-2 rounded-lg border-[2px] border-solid border-main-color bg-bg-grey text-blue text-base font-medium xl:border"
        >
          <span class="xl:hidden">{{
            $store.state.translations["profile.write"]
          }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <circle cx="12" cy="12" r="1" fill="#5C46E6" />
            <circle cx="16" cy="12" r="1" fill="#5C46E6" />
            <circle cx="8" cy="12" r="1" fill="#5C46E6" />
          </svg>
        </button>
        <button
          @click="$emit('openChatMobile')"
          class="w-[190px] xl:w-12 h-12 hidden xl:flex items-center justify-center gap-2 rounded-lg border-[2px] border-solid border-main-color bg-bg-grey text-blue text-base font-medium xl:border"
        >
          <span class="xl:hidden">{{
              $store.state.translations["profile.write"]
            }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <circle cx="12" cy="12" r="1" fill="#5C46E6" />
            <circle cx="16" cy="12" r="1" fill="#5C46E6" />
            <circle cx="8" cy="12" r="1" fill="#5C46E6" />
          </svg>
        </button>
      </div>
    </div>
    <CancellationOrder
      ref="selectFreelancer"
      @submit="submit"
      :title="$store.state.translations[`profile.choose-this-free`]"
      :save="$store.state.translations[`modal.yes`]"
      :closeBtn="$store.state.translations[`modal.no`]"
      :primary="true"
      :loadingBtn="loadingBtn"
    >
    </CancellationOrder>
  </div>
</template>

<script>
import moment from "moment";
import CancellationOrder from "../../modals/CancellationOrder.vue";

export default {
  props: ["request", "order"],
  data() {
    return {
      openBlock: false,
      dateFormat: "DD.MM.YYYY",
      hourFormat: "HH:mm",
      loadingBtn: false,
    };
  },
  mounted() {},
  computed: {
    imgUrl() {
      return this.$config.baseURL + "/storage/";
    },
  },
  methods: {
    openSelectFreelancer() {
      this.$refs.selectFreelancer.openModal();
      this.$refs.selectFreelancer.open();
    },
    closeSelectFreelancer() {
      this.$refs.selectFreelancer.closeModal();
      this.$refs.selectFreelancer.close();
    },
    submit() {
      const data = {
        id: this.request?.order_id,
        data: {
          request_id: this.request.id,
        },
      };
      this.__POST_ORDER(data);
    },
    moment,
    sendRequest() {
      this.openSelectFreelancer();
    },
    async __POST_ORDER(payload) {
      try {
        this.loadingBtn = true;
        await this.$store.dispatch("fetchOrders/postSelectRequest", payload);
        this.$emit("selected");
        this.closeSelectFreelancer();
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
        this.loadingBtn = false;
      }
    },
  },
  components: { CancellationOrder },
};
</script>
<style lang="css" scoped>
.head {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 14px;
}

.active {
  max-height: 1000px;
}

.text p {
  transition: 2s;
}

@media (max-width: 1200px) {
  .head {
    grid-template-columns: 52px 1fr;
    gap: 10px;
  }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
