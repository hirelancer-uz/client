<template>
  <div>
    <button class="chat__button" @click="openCustomerChat">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 0H11C15.9706 0 20 4.02944 20 9C20 13.9706 15.9706 18 11 18H4C1.79086 18 0 16.2091 0 14V9C0 4.02944 4.02944 0 9 0ZM10 10C10.5523 10 11 9.55229 11 9C11 8.44771 10.5523 8 10 8C9.44771 8 9 8.44771 9 9C9 9.55229 9.44771 10 10 10ZM15 9C15 9.55229 14.5523 10 14 10C13.4477 10 13 9.55229 13 9C13 8.44771 13.4477 8 14 8C14.5523 8 15 8.44771 15 9ZM6 10C6.55228 10 7 9.55229 7 9C7 8.44771 6.55228 8 6 8C5.44772 8 5 8.44771 5 9C5 9.55229 5.44772 10 6 10Z"
          fill="white"
        />
      </svg>
    </button>

    <ChatModal
      ref="customerChat"
      :status="status"
      :order="order"
      :messages="messages"
      :myRequest="myRequest"
      @onSubmit="onSubmit"
      :messageLoader="messageLoader"
      :chatLoader="chatLoader"
    />

    <div
      class="chat rounded-[16px] border border-solid border-grey-light chatter"
    >
      <div
        class="flex items-center justify-between px-6 py-[18px] border-[0] border-b border-solid border-grey-light"
      >
        <h3 class="text-[24px] text-black font-semibold">Онлайн чат</h3>
        <p class="text-[14px] text-grey-64">В сети / Был(а) 3 минут назад</p>
      </div>
      <div
        ref="chatBoard"
        class="chat-body px-6 py-6 flex flex-col gap-[30px] max-h-[500px] overflow-y-scroll flex-col-reverse"
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
        <div class="" v-for="(message, index) in messages" :key="message?.id">
          <div
            class="flex justify-end"
            v-if="$store.state?.userInfo?.id == message?.from"
          >
            <div
              class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-main-color items-end"
            >
              <p class="text-white text-[14px] break-all">
                {{ message?.message }}
              </p>
              <span class="text-white text-[12px]">{{
                moment(message?.created_at).format("HH:mm")
              }}</span>
            </div>
          </div>
          <div class="flex justify-start" v-else>
            <div
              class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-bg-grey items-end"
            >
              <p class="text-black text-[14px] break-all">
                {{ message?.message }}
              </p>
              <span class="text-black text-[12px]">{{
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

        <div class="flex justify-end" v-if="!chatLoader">
          <div
            class="chat-card px-4 py-4 rounded-[14px] rounded-br-none bg-main-color flex flex-col gap-3 max-w-[642px]"
          >
            <p class="text-base text-white">
              {{ myRequest?.additional_info }}
            </p>
            <span class="flex w-full h-[1px] bg-[#B795FF]"></span>
            <div class="flex flex-col gap-1">
              <h5 class="text-[14px] font-semibold text-white">
                {{ myRequest?.price.toLocaleString() }} so’m
              </h5>
              <div class="flex justify-between gap-10">
                <h6
                  class="text-white text-[14px] font-regular flex gap-1 text-white"
                >
                  Muddat:<span class="text-[14px] font-semibold text-white"
                    >{{ myRequest?.deadline }} kun</span
                  >
                </h6>
                <p class="text-[10px] text-white">{{ requestTime }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="status > 3"
        class="chat-footer flex justify-center px-6 py-6 border-[0] border-t border-solid border-grey-light text-grey-80 text-base italic"
      >
        Chat yopilgan
      </div>
      <div
        v-else
        class="chat-footer flex justify-between items-center px-6 py-4 border-[0] border-t border-solid border-grey-light"
      >
        <a-input
          v-model="form.message"
          placeholder="Напишите сообщение ..."
          class="text-input"
          @keyup.enter="onSubmit(form)"
        />
        <button
          @click="onSubmit(form)"
          class="w-[48px] min-w-[48px] h-[48px] rounded-full flex justify-center items-center bg-main-color"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.35254 16.0003V18.3813C5.35254 19.1243 6.13454 19.6083 6.79954 19.2753L21.3525 12.0003L6.79954 4.72526C6.13454 4.39226 5.35254 4.87626 5.35254 5.61926V12.0003H12.0195"
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
    <!-- <div class="chat rounded-[16px] border border-solid border-grey-light">
      <div
        class="flex justify-between px-6 py-[18px] border-[0] border-b border-solid border-grey-light"
      >
        <h3 class="text-[24px] text-black font-semibold">Mening so'rovim</h3>
      </div>
      <div class="chat-body px-6 py-6 flex flex-col gap-[30px]">
        <div
          class="chat-card px-4 py-4 rounded-[12px] border border-dashed border-grey-light bg-bg-grey flex flex-col gap-3"
        >
          <p class="text-base text-black">
            {{ myRequest?.additional_info }}
          </p>
          <span class="flex w-full h-[1px] bg-grey-light"></span>
          <div class="flex flex-col gap-1">
            <h5
              class="text-[14px] text-black font-semibold"
              v-if="myRequest?.price"
            >
              {{ myRequest?.price?.toLocaleString() }} so’m
            </h5>
            <div class="flex justify-between">
              <h6
                class="text-[14px] text-grey-64 font-regular flex gap-1"
                v-if="myRequest?.deadline"
              >
                Muddat:<span class="text-[14px] text-black font-semibold"
                  >{{ myRequest?.deadline }} kun</span
                >
              </h6>
              <p class="text-[12px] text-black">
                {{ moment(myRequest?.created_at).format("DD.MM.YYYY HH:mm") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import moment from "moment";
import ChatModal from "@/components/modals/ChatModal.vue";
import chatService from "@/mixins/chatService";


export default {
  components: { ChatModal },
  props: ["status", "order"],
  mixins: [chatService],
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
    myRequest() {
      return this.order?.requests?.find(
        (item) => item?.freelancer_id == this.$store.state.userInfo["id"]
      );
    },
    requestTime() {
      return moment(this.order?.selected_request?.created_at).format("HH:mm");
    },
  },
  methods: {
    openCustomerChat() {
      this.$refs.customerChat.open();
    },
    closeCustomerChat() {
      this.$refs.customerChat.close();
    },
    onSubmit(form) {
      this.form = { ...form };
      this.form.order_id = this.order.id;
      this.form.to = this.order?.client?.id;
      if (this.form.message.length > 0) this.__POST_CHAT_MESSAGE(this.form,this.formClear);
    },
    formClear() {
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
<style lang="css" scoped>
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

.text-input {
  border: none;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
}

.text-input:focus {
  outline: none;
  box-shadow: none;
}

.text-input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}

.chat__button {
  display: none;
}

@media screen and (max-width: 1024px) {
  .chatter {
    display: none;
  }

  .chat__button {
    position: fixed;
    bottom: 50px;
    right: 16px;
    display: flex;
    border-radius: 48px;
    background: var(--Main-color, #5c46e5);
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
}
</style>
