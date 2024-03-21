<template>
  <div>
    <div
      class="offers-chat rounded-[16px] border border-solid border-grey-8 bg-white relative xl:hidden"
    >
      <button class="absolute top-4 right-4" @click="$emit('close')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.66699 6.64648L17.333 17.3105M6.66699 17.3105L17.333 6.64648"
            stroke="#020105"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        class="head px-6 py-6 border-[0] border-b border-solid border-grey-8"
      >
        <div
          class="image w-[60px] h-[60px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
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
        </div>
        <div>
          <h5 class="text-base text-black font-medium">
            {{ request?.freelancer?.name }} {{ request?.freelancer?.surname }}
          </h5>
          <p class="text-grey-40 text-[14px]">14:30</p>
        </div>
      </div>
      <div
        ref="chatBoard"
        class="board h-[100vh] flex-col-reverse max-h-[476px] overflow-y-scroll px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8"
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

        <div v-else v-for="(message, index) in messages" :key="message?.id">
          <div
            class="flex justify-end"
            v-if="$store.state?.userInfo?.id == message?.from"
          >
            <div
              class="content px-[10px] py-[10px] max-w-[295px] bg-blue rounded-[10px] rounded-br-none flex gap-2 items-end"
            >
              <p class="text-base text-white break-all">
                {{ message?.message }}
              </p>
              <span class="text-[12px] text-grey-40">{{
                moment(message?.created_at).format("HH:mm")
              }}</span>
            </div>
          </div>

          <div class="flex justify-start" v-else>
            <div
              class="client-content px-[10px] max-w-[295px] py-[10px] bg-bg-grey rounded-[10px] rounded-bl-none flex gap-2 items-end"
            >
              <p class="text-base text-black break-all">
                {{ message?.message }}
              </p>
              <span class="text-[12px] text-grey-40">{{
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

        <div v-if="!chatLoader" class="flex justify-start">
          <div
            class="chat-card px-4 py-4 rounded-[14px] rounded-bl-none bg-bg-grey flex flex-col gap-3 max-w-[642px]"
          >
            <p class="text-base text-black">
              {{ request?.additional_info }}
            </p>
            <span class="flex w-full h-[1px] bg-grey-40"></span>
            <div class="flex flex-col gap-1">
              <h5
                class="text-[14px] font-semibold text-grey-40"
                v-if="request?.price"
              >
                {{ request?.price?.toLocaleString() }} so’m
              </h5>
              <div class="flex justify-between gap-10">
                <h6 class="text-[14px] font-regular flex gap-1 text-grey-40">
                  Muddat:<span class="text-[14px] font-semibold text-grey-40"
                    >{{ request?.deadline }} kun</span
                  >
                </h6>
                <p class="text-[10px] text-grey-40">14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer px-4 py-4">
        <input
          type="text"
          v-model="form.message"
          @keyup.enter="onSubmit"
          placeholder="Напишите сообщение ..."
        />
        <button
          @click="onSubmit"
          class="h-12 w-12 flex justify-center items-center rounded-full bg-blue "
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
    <div class="hidden xl:block">

      <vue-bottom-sheet-vue2
        ref="offerChat"
        class="bottom-drawer h-full "
        :init-sheet-height="783"
        :can-swipe="false"
        :overlay-click-close="false"
      >
        <div class="h-full flex flex-col pt-4">
          <div class="flex justify-end mb-2">
            <button @click="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.66699 6.64648L17.333 17.3105M6.66699 17.3105L17.333 6.64648"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="head px-4 pb-4 border-[0] border-b border-solid border-grey-8"
          >
            <div
              class="image w-[52px] h-[52px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
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
            </div>
            <div class="flex flex-col justify-between">
              <h5 class="text-base text-black font-medium">
                {{ request?.freelancer?.name }} {{ request?.freelancer?.surname }}
              </h5>
              <p class="text-grey-40 text-[14px]">14:30</p>
            </div>
          </div>
          <div
            ref="chatBoard"
            class="board flex-col-reverse overflow-y-scroll px-4 py-4 flex flex-col gap-2 border-[0] border-b border-solid border-grey-8 flex-auto"
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

            <div v-else v-for="(message, index) in messages" :key="message?.id">
              <div
                class="flex justify-end"
                v-if="$store.state?.userInfo?.id == message?.from"
              >
                <div
                  class="content px-2 py-2 max-w-[295px] bg-blue rounded-[10px] rounded-br-none flex gap-2 items-end"
                >
                  <p class="text-[12px] text-white break-all">
                    {{ message?.message }}
                  </p>
                  <span class="text-[12px] text-grey-40">{{
                      moment(message?.created_at).format("HH:mm")
                    }}</span>
                </div>
              </div>

              <div class="flex justify-start" v-else>
                <div
                  class="client-content px-2 max-w-[295px] py-2 bg-bg-grey rounded-[10px] rounded-bl-none flex gap-2 items-end"
                >
                  <p class="text-[12px] text-black break-all">
                    {{ message?.message }}
                  </p>
                  <span class="text-[12px] text-grey-40">{{
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

            <div v-if="!chatLoader" class="flex justify-start">
              <div
                class="chat-card px-2 py-2 rounded-[14px] rounded-bl-none bg-bg-grey flex flex-col gap-3 max-w-[642px]"
              >
                <p class="text-[12px] text-black">
                  {{ request?.additional_info }}
                </p>
                <span class="flex w-full h-[1px] bg-grey-40"></span>
                <div class="flex flex-col gap-1">
                  <h5
                    class="text-[12px] font-regular text-black"
                    v-if="request?.price"
                  >
                    {{ request?.price?.toLocaleString() }} so’m
                  </h5>
                  <div class="flex justify-between gap-10">
                    <h6 class="text-[12px] font-regular flex gap-1 text-black">
                      Muddat:<span class="text-[12px] font-regular text-black"
                    >{{ request?.deadline }} kun</span
                    >
                    </h6>
                    <p class="text-[10px] text-black"> {{moment(request?.created_at).format("HH:mm")}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer px-4 py-4 justify-between flex">
            <input
              type="text"
              v-model="form.message"
              @keyup.enter="onSubmit"
              placeholder="Напишите сообщение ..."
            />
            <button
              @click="onSubmit"
              class="h-12 w-12 flex justify-center items-center rounded-full bg-blue xl:w-8 xl:h-8"
            >
              <svg
                class="xl:w-4 xl:h-4"
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
      </vue-bottom-sheet-vue2>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  props: ["order", "request", "messages", "chatLoader"],
  data() {
    return {
      // messages: [],
      messageLoader: false,
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
  },
  mounted() {
    let channel = this.$pusher.subscribe(`orders.${this.$route.params.id}`);
    channel.bind("App\\Events\\SentMessage", (data) => {
      this.messages.unshift(data.message);
      this.messageLoader = false;
    });
  },
  methods: {
    moment,
    open() {
      this.$refs.offerChat.open();
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    },
    close() {
      this.$refs.offerChat.close();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    onSubmit() {
      this.form.order_id = this.order.id;
      this.form.to = this.request?.freelancer_id;
      if (this.form.message.length > 0) this.__POST_CHAT_MESSAGE(this.form);
    },
    async __POST_CHAT_MESSAGE(formData) {
      try {
        this.messageLoader = true;
        const data = await this.$store.dispatch(
          "fetchChat/postChatMesssage",
          formData
        );
        this.form = {
          message: "",
          order_id: null,
          to: null,
        };
      } catch (e) {}
    },
  },
  watch: {
    request(val) {
      console.log("val", val);
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.bottom-sheet__draggable-area) {
  display: none;
}

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
.bottom-drawer {
  display: none;
}
:deep(.bottom-sheet__main) {
  height: 100%;
}
@media (max-width: 1200px) {
  .head {
    grid-template-columns: 52px 1fr;
    gap: 10px;
  }
  .bottom-drawer {
    display: flex ;
  }
  .footer input::placeholder {
    font-size: 14px;
  }

  .footer input {
    font-size: 14px;
  }
  .footer {
    grid-template-columns: 1fr 32px;
  }
}
</style>
