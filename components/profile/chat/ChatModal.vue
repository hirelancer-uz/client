<template>
  <div class="wrap">
    <vue-bottom-sheet-vue2
      ref="customerChat"
      class="bottom-drawer h-full"
      :init-sheet-height="750"
      :can-swipe="false"
      :overlay-click-close="false"
    >
      <div
        class="offers-chat rounded-[16px] bg-white relative flex flex-col h-full"
      >
        <div class="flex justify-end px-4 pt-4 mb-[-8px]">
          <button @click="close" class="w-[100px] flex justify-end">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2426 7.75786L7.75732 16.2431M16.2426 16.2431L7.75732 7.75781"
                stroke="#353437"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="head px-4 py-4 border-[0] border-b border-solid border-grey-8"
        >
          <div
            class="image w-[52px] h-[52px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
          >
            <img
              v-if="order?.client?.avatar"
              class="w-full h-full object-cover"
              :src="`${imgUrl}${order?.client?.avatar}`"
              alt=""
            />
            <img
              v-else
              class="w-full h-full object-cover"
              src="../../../assets/images/user-avatar.jpg"
              alt=""
            />
          </div>
          <div class="flex justify-between items-center">
            <div class="flex flex-col gap-1">
              <h5 class="text-[20px] text-black font-medium">
                {{ order?.client?.name }} {{ order?.client?.surname }}
              </h5>
              <p class="text-grey-40 text-base">{{order?.client?.online ? $store.state.translations['profile.online']:$store.state.translations['profile.last-online'] }}: {{ onlineTime }}</p>
            </div>
          </div>
        </div>
        <div
          ref="chatBoard"
          class="board px-6 py-6 flex gap-4 border-[0] border-b border-solid border-grey-8 overflow-y-scroll flex-col-reverse flex-auto"
        >
          <div class="flex justify-end message-loading" v-if="messageLoader">
            <a-skeleton active :paragraph="false" />
          </div>
          <div v-if="chatLoader" class="flex flex-col gap-4">
            <span
              v-for="elem in [1, 2, 3, 4, 5]"
              :key="elem"
              :class="
                elem % 2 == 0
                  ? `flex justify-start skeleton-${elem + 1}`
                  : `flex justify-end skeleton-${elem + 1}`
              "
            >
              <a-skeleton active :paragraph="false" class="loading-card" />
            </span>
          </div>
          <div v-for="(message, index) in messages" :key="message?.id">
            <div
              class="flex justify-end"
              v-if="$store.state?.userInfo?.id == message?.from"
            >
              <div
                class="content px-2 py-2 max-w-[642px] bg-main-color rounded-[10px] rounded-br-none flex gap-6 items-end"
              >
                <p class="text-[12px] text-white">
                  {{ message?.message }}
                </p>
                <span class="text-[10px] text-white">{{
                  moment(message?.created_at).format("HH:mm")
                }}</span>
              </div>
            </div>

            <div class="flex justify-start" v-else>
              <div
                class="client-content px-2 max-w-[642px] py-2 bg-bg-grey rounded-[10px] rounded-bl-none flex gap-6 items-end"
              >
                <p class="text-[12px] text-black">{{ message?.message }}</p>
                <span class="text-[10px] text-grey-40">{{
                  moment(message?.created_at).format("HH:mm")
                }}</span>
              </div>
            </div>
            <div
              class="flex justify-center mt-4"
              v-if="
                index - 1 > 0 &&
                moment(messages[index]?.created_at).format('YYYY-MM-DD') <
                    moment(messages[index - 1]?.created_at).format('YYYY-MM-DD')
              "
            >
              <div
                class="chat-date w-[123px] py-2 rounded-[50px] flex justify-center items-center bg-bg-grey text-black text-[12px]"
              >
                <span v-if="!chatLoader">{{
                  moment(messages[index - 1]?.created_at).format("DD.MM.YYYY")
                }}</span>
              </div>
            </div>
            <div
              class="flex justify-center"
              v-if="
                index - 1 > 0 &&
                Number(moment(messages[index]?.created_at).format('DD')) <
                  Number(moment(messages[index - 1]?.created_at).format('DD'))
              "
            >
              <div
                class="chat-date w-[123px] h-[32px] flex justify-center bg-bg-grey rounded-[50px] text-[12px] text-black"
              >
                <span v-if="!chatLoader">{{
                  moment(messages[index - 1]?.created_at).format("DD.MM.YYYY")
                }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <div
              class="chat-card px-4 py-4 rounded-[12px] rounded-br-none bg-main-color flex flex-col gap-3"
            >
              <p class="text-[12px] text-white">
                {{ myRequest?.additional_info }}
              </p>
              <span class="flex w-full h-[1px] bg-[#B795FF]"></span>
              <div class="flex flex-col gap-1">
                <h5
                  class="text-[12px] font-semibold text-white"
                  v-if="myRequest?.price"
                >
                  {{ myRequest?.price?.toLocaleString() }} so’m
                </h5>
                <div class="flex justify-between">
                  <h6
                    class="text-white text-[12px] font-regular flex gap-1 text-white"
                  >
                    Muddat:<span class="text-[12px] font-semibold text-white"
                      >{{ myRequest?.deadline }} kun</span
                    >
                  </h6>
                  <p class="text-[10px] text-white">{{moment(myRequest?.created_at).format('HH:mm')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="px-6 py-6 flex justify-center items-center italic text-base text-grey-80"
          v-if="status == 3"
        >
          {{ $store.state.translations["modal.chat-closed"] }}
        </div>
        <div class="footer px-4 py-4" v-else>
          <input
            type="text"
            placeholder="Напишите сообщение ..."
            v-model="form.message"
            @keyup.enter="onSubmit"
          />
          <div class="flex items-center justify-end gap-4">
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2252 5.18839L6.451 11.9626C5.80016 12.6134 5.80016 13.6684 6.451 14.3192C7.10183 14.9701 8.15683 14.9701 8.80766 14.3192L15.581 7.54589C16.8827 6.24422 16.8827 4.13339 15.581 2.83172C14.2793 1.53005 12.1685 1.53005 10.8668 2.83172L4.096 9.60255C2.14183 11.5567 2.14183 14.7251 4.096 16.6792C6.05016 18.6334 9.2185 18.6334 11.1727 16.6792L17.1577 10.6942"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              @click="onSubmit"
              class="h-8 w-8 flex justify-center items-center rounded-full bg-blue"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56885 10.6662V12.2535C3.56885 12.7489 4.09018 13.0715 4.53351 12.8495L14.2355 7.99952L4.53351 3.14952C4.09018 2.92752 3.56885 3.25019 3.56885 3.74552V7.99952H8.01351"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>

<script>
import moment from "moment/moment";

export default {
  props: [
    "status",
    "order",
    "myRequest",
    "messages",
    "messageLoader",
    "chatLoader",
  ],
  data() {
    return {
      form: {
        message: "",
        order_id: null,
        to: null,
      },
    };
  },
  computed: {
    imgUrl() {
      return this.$config.baseURL + "/storage/";
    },
    onlineTime: function () {
      return this.order?.client?.last_online_at ? moment(this.order?.client?.last_online_at).format("DD-MMM. YYYY"):'---';
    },
  },

  methods: {
    open() {
      this.$refs.customerChat.open();
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    },
    close() {
      this.$refs.customerChat.close();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    onSubmit() {
      this.$emit("onSubmit", this.form);
      this.$refs.chatBoard.scrollTop = 0;
      this.form = {
        message: "",
        order_id: null,
        to: null,
      };
    },
    moment,
  },
};
</script>

<style scoped>
:deep(.bottom-sheet__main) {
  height: 100%;
}

:deep(.bottom-sheet__draggable-area) {
  display: none;
}

.head {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
}

.footer {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 16px;
}

.footer input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}

.footer input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}
</style>
