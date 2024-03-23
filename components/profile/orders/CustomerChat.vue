<template lang="html">
  <div>
    <div
      class="offers-chat rounded-[16px] border border-solid border-grey-8 bg-white relative xl:hidden"
    >
      <div
        class="head px-6 py-6 border-[0] border-b border-solid border-grey-8"
      >
        <div
          class="image w-[60px] h-[60px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
        >
          <img
            v-if="order?.selected_request?.freelancer?.avatar"
            class="w-full h-full object-cover"
            :src="`${imgUrl}${order?.selected_request?.freelancer?.avatar}`"
            alt=""
          />
          <img
            v-else
            class="w-full h-full object-cover"
            src="@/assets/images/user-avatar.jpg"
            alt=""
          />
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-1">
            <h5 class="text-[20px] text-black font-medium">
              {{ order?.selected_request?.freelancer?.name }}
            </h5>
            <p class="text-grey-40 text-base">{{ requestTime }}</p>
          </div>

          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16.3337" cy="9.66667" r="1.66667" fill="#28303F" />
                <circle cx="16.3337" cy="16.3327" r="1.66667" fill="#28303F" />
                <ellipse
                  cx="16.3337"
                  cy="23.0007"
                  rx="1.66667"
                  ry="1.66667"
                  fill="#28303F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref="chatBoard"
        class="board px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8 overflow-y-scroll max-h-[500px] flex-col-reverse"
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
              class="content px-4 py-3 max-w-[642px] bg-main-color rounded-[10px] rounded-br-none flex gap-6 items-end"
            >
              <p class="text-base text-white break-all">
                {{ message?.message }}
              </p>
              <span class="text-[14px] text-white">{{
                moment(message?.created_at).format("HH:mm")
              }}</span>
            </div>
          </div>
          <div class="flex justify-start" v-else>
            <div
              class="client-content px-4 max-w-[642px] py-3 bg-bg-grey rounded-[10px] rounded-bl-none flex gap-6 items-end"
            >
              <p class="text-base text-black break-all">
                {{ message?.message }}
              </p>
              <span class="text-[14px] text-grey-40">{{
                moment(message?.created_at).format("HH:mm")
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
              class="chat-date w-[123px] h-[32px] rounded-[50px] flex justify-center items-center bg-bg-grey text-black text-[14px]"
            >
              <span v-if="!chatLoader">{{
                moment(messages[index - 1]?.created_at).format("DD.MM.YYYY")
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-start">
          <div
            class="chat-card px-4 py-4 rounded-[14px] rounded-bl-none bg-bg-grey flex flex-col gap-3 max-w-[642px]"
          >
            <p class="text-base text-black">
              {{ order?.selected_request?.additional_info }}
            </p>
            <span class="flex w-full h-[1px] bg-grey-8"></span>
            <div class="flex flex-col gap-1">
              <h5 class="text-[14px] font-semibold text-black">
                {{ order?.selected_request?.price.toLocaleString() }} so’m
              </h5>
              <div class="flex justify-between gap-10">
                <h6 class="text-black text-[14px] font-regular flex gap-1">
                  Muddat:<span class="text-[14px] font-semibold text-black"
                    >{{ order?.selected_request?.deadline }} kun</span
                  >
                </h6>
                <p class="text-[10px] text-white">14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-6 py-6 flex justify-center items-center italic text-base text-grey-80"
        v-if="cancelStatus.includes(order?.status)"
      >
        {{ $store.state.translations["modal.chat-closed"] }}
      </div>
      <div class="footer px-6 py-6" v-else>
        <input
          v-model="form.message"
          type="text"
          placeholder="Напишите сообщение ..."
          @keyup.enter="onSubmit(form)"
        />
        <div class="flex items-center gap-6">
          <!--        <emoji-picker @emoji="insert" :search="search">-->
          <!--          <div slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" @click.stop="clickEvent">-->
          <!--            <button type="button">-->
          <!--              <svg-->
          <!--                xmlns="http://www.w3.org/2000/svg"-->
          <!--                width="24"-->
          <!--                height="24"-->
          <!--                viewBox="0 0 24 24"-->
          <!--                fill="none"-->
          <!--              >-->
          <!--                <path-->
          <!--                  d="M15.87 6.22606L7.741 14.3551C6.96 15.1361 6.96 16.4021 7.741 17.1831C8.522 17.9641 9.788 17.9641 10.569 17.1831L18.697 9.05506C20.259 7.49306 20.259 4.96006 18.697 3.39806C17.135 1.83606 14.602 1.83606 13.04 3.39806L4.915 11.5231C2.57 13.8681 2.57 17.6701 4.915 20.0151C7.26 22.3601 11.062 22.3601 13.407 20.0151L20.589 12.8331"-->
          <!--                  stroke="#5C46E6"-->
          <!--                  stroke-width="1.5"-->
          <!--                  stroke-miterlimit="10"-->
          <!--                  stroke-linecap="round"-->
          <!--                  stroke-linejoin="round"-->
          <!--                />-->
          <!--              </svg>-->
          <!--            </button>-->
          <!--          </div>-->
          <!--          <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">-->
          <!--            <div>-->
          <!--              <div>-->
          <!--                <input type="text" v-model="search">-->
          <!--              </div>-->
          <!--              <div>-->
          <!--                <div v-for="(emojiGroup, category) in emojis" :key="category">-->
          <!--                  <h5>{{ category }}</h5>-->
          <!--                  <div>-->
          <!--            <span-->
          <!--              v-for="(emoji, emojiName) in emojiGroup"-->
          <!--              :key="emojiName"-->
          <!--              @click="insert(emoji)"-->
          <!--              :title="emojiName"-->
          <!--            >{{ emoji }}</span>-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--        </emoji-picker>-->

          <button
            @click="onSubmit(form)"
            class="h-12 w-12 flex justify-center items-center rounded-full bg-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.35254 15.9993V18.3803C5.35254 19.1233 6.13454 19.6073 6.79954 19.2743L21.3525 11.9993L6.79954 4.72428C6.13454 4.39128 5.35254 4.87528 5.35254 5.61828V11.9993H12.0195"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div>
      <CustomerChatMobile
        ref="customerChat"
        :order="order"
        :messages="messages"
        @onSubmit="onSubmit"
        :messageLoader="messageLoader"
        :chatLoader="chatLoader"
      />
      <button
        @click="openCustomerChat"
        v-if="order?.selected_request?.id && order?.status"
        class="w-[56px] h-[56px] rounded-full xl:flex justify-center items-center bg-main-color fixed bottom-[88px] right-4"
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
  </div>
</template>
<script>
import moment from "moment";
import CustomerChatMobile from "@/components/modals/CustomerChatMobile.vue";
import ChatModal from "@/components/modals/ChatModal.vue";
import chatService from "@/mixins/chatService";


export default {
  components: { ChatModal, CustomerChatMobile },
  props: ["order", "status"],
  mixins: [chatService],
  data() {
    return {
      cancelStatus: [4, 5, 6],
      search: "",
      input: "",
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
    requestTime() {
      return this.order?.selected_request?.freelancer?.last_online_at
        ? moment(
            this.order?.selected_request?.freelancer?.last_online_at
          ).format("HH:mm")
        : "---";
    },
  },
  methods: {
    openCustomerChat() {
      console.log(this.$refs)
      this.$refs?.customerChat.open();
    },
    closeCustomerChat() {
      this.$refs?.customerChat.close();
    },
    moment,
    onSubmit(form) {
      this.form = { ...form };
      this.form.order_id = this.order.id;
      this.form.to = this.order.selected_request?.freelancer_id;
      if (this.form.message.length > 0)
        this.__POST_CHAT_MESSAGE(this.form, this.formClear);
    },
    formClear() {
      this.form = {
        message: "",
        order_id: null,
        to: null,
      };
    },
  },
};
</script>
<style lang="css" scoped>
.head {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 16px;
}

:deep(.skeleton-2 .ant-skeleton) {
  max-width: 60%;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  overflow: hidden;
}

:deep(.skeleton-3 .ant-skeleton) {
  max-width: 70%;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  overflow: hidden;
}

:deep(.skeleton-4 .ant-skeleton) {
  max-width: 40%;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  overflow: hidden;
}

:deep(.skeleton-5 .ant-skeleton) {
  max-width: 50%;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  overflow: hidden;
}

:deep(.skeleton-6 .ant-skeleton) {
  max-width: 65%;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  overflow: hidden;
}

:deep(.ant-skeleton-content .ant-skeleton-title) {
  margin-top: 0;
  height: 70px;
}

:deep(.message-loading .ant-skeleton) {
  max-width: 50%;
}

:deep(.message-loading .ant-skeleton-title) {
  border-radius: 10px;
  border-bottom-right-radius: 0;
  height: 44px;
}

.footer {
  display: grid;
  grid-template-columns: 1fr 48px;
  gap: 16px;
}

.footer input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}

.footer input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}
</style>
