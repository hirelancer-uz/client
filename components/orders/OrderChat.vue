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

    <ChatModal ref="customerChat" :status="status" />

    <div
      class="chat rounded-[16px] border border-solid border-grey-light chatter"
    >
      <div
        class="flex items-center justify-between px-6 py-[18px] border-[0] border-b border-solid border-grey-light"
      >
        <h3 class="text-[24px] text-black font-semibold">Онлайн чат</h3>
        <p class="text-[14px] text-grey-64">В сети / Был(а) 3 минут назад</p>
      </div>
      <div class="chat-body px-6 py-6 flex flex-col gap-[30px]">
        <div class="flex justify-end">
          <div
            class="chat-card px-4 py-4 rounded-[14px] rounded-br-none bg-main-color flex flex-col gap-3 max-w-[642px]"
          >
            <p class="text-base text-white">
              Приветствую! Меня заинтересовал ваш проект. Моя цель – создавать
              интересные и интуитивно понятные пользовательские интерфейсы,
              которые вдохновляют и привлекают
            </p>
            <span class="flex w-full h-[1px] bg-[#B795FF]"></span>
            <div class="flex flex-col gap-1">
              <h5 class="text-[14px] font-semibold text-white">600 000 so’m</h5>
              <div class="flex justify-between">
                <h6
                  class="text-white text-[14px] font-regular flex gap-1 text-white"
                >
                  Muddat:<span class="text-[14px] font-semibold text-white"
                    >5 kun</span
                  >
                </h6>
                <p class="text-[10px] text-white">14:30</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div
            class="chat-date w-[123px] h-[32px] rounded-[50px] flex justify-center items-center bg-bg-grey text-black text-[14px]"
          >
            <span>20.09.2023</span>
          </div>
        </div>
        <div class="flex justify-end">
          <div
            class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-main-color items-end"
          >
            <p class="text-white text-[14px]">
              Меня заинтересовал ваш проект. Моя цель – создавать интересные и
              интуитивно по
            </p>
            <span class="text-white text-[12px]">14:30</span>
          </div>
        </div>
        <div class="flex justify-start">
          <div
            class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-bg-grey items-end"
          >
            <p class="text-black text-[14px]">Bu men yozganim</p>
            <span class="text-black text-[12px]">14:30</span>
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
        />
        <button
          @click="onSubmit"
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

export default {
  components: { ChatModal },
  props: ["status", "order"],
  data() {
    return {
      form: {
        message: "Test message",
        order_id: 39,
        to: 1002,
      },
    };
  },
  computed: {
    myRequest() {
      return this.order?.requests?.find(
        (item) => item?.freelancer_id == this.$store.state.userInfo["id"]
      );
    },
  },
  mounted() {
    this.__GET_CHAT_MESSAGES()
  },
  methods: {
    openCustomerChat() {
      this.$refs.customerChat.open();
    },
    closeCustomerChat() {
      this.$refs.customerChat.close();
    },
    onSubmit() {
      this.form.order_id = this.order.id;
      this.form.to = this.order.selected_request?.freelancer_id;
      this.__POST_CHAT_MESSAGE(this.form);
    },
    async __GET_CHAT_MESSAGES() {
      try {
        const data = await this.$store.dispatch('fetchChat/getChatMesssage',{body: {
            order_id: this.order?.id
          }});
        console.log(data)
      } catch (e) {}
    },
    async __POST_CHAT_MESSAGE(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchChat/postChatMesssage",
          formData
        );
        console.log(data);
      } catch (e) {}
    },

    moment,
  },
};
</script>
<style lang="css" scoped>
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
