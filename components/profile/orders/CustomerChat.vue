<template lang="html">
  <div
    class="offers-chat rounded-[16px] border border-solid border-grey-8 bg-white relative"
  >
    <div class="head px-6 py-6 border-[0] border-b border-solid border-grey-8">
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
      class="board px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8 overflow-y-scroll max-h-[500px] flex-col-reverse"
    >
      <div v-for="message in messages" :key="message?.id">
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
            <p class="text-base text-black break-all">{{ message?.message }}</p>
            <span class="text-[14px] text-grey-40">{{
              moment(message?.created_at).format("HH:mm")
            }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div
          class="chat-card px-4 py-4 rounded-[14px] rounded-br-none bg-main-color flex flex-col gap-3 max-w-[642px]"
        >
          <p class="text-base text-white">
            {{ order?.selected_request?.additional_info }}
          </p>
          <span class="flex w-full h-[1px] bg-[#B795FF]"></span>
          <div class="flex flex-col gap-1">
            <h5 class="text-[14px] font-semibold text-white">
              {{ order?.selected_request?.price.toLocaleString() }} so’m
            </h5>
            <div class="flex justify-between gap-10">
              <h6
                class="text-white text-[14px] font-regular flex gap-1 text-white"
              >
                Muddat:<span class="text-[14px] font-semibold text-white"
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
        @keyup.enter="onSubmit"
      />
      <div class="flex items-center gap-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.87 6.22606L7.741 14.3551C6.96 15.1361 6.96 16.4021 7.741 17.1831C8.522 17.9641 9.788 17.9641 10.569 17.1831L18.697 9.05506C20.259 7.49306 20.259 4.96006 18.697 3.39806C17.135 1.83606 14.602 1.83606 13.04 3.39806L4.915 11.5231C2.57 13.8681 2.57 17.6701 4.915 20.0151C7.26 22.3601 11.062 22.3601 13.407 20.0151L20.589 12.8331"
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
</template>
<script>
import moment from "moment";

export default {
  props: ["order", "status"],
  data() {
    return {
      cancelStatus: [4, 5, 6],
      messages: [],
      form: {
        message: "",
        order_id: null,
        to: null,
      },
    };
  },
  mounted() {
    this.__GET_CHAT_MESSAGES();
    let channel = this.$pusher.subscribe(`order.${this.$route.params.id}`);
    channel.bind("App\\Events\\SentMessage", () => {
      this.__GET_CHAT_MESSAGES();
    });
  },
  computed: {
    imgUrl() {
      return this.$config.baseURL + "/storage/";
    },
    requestTime() {
      return moment(this.order?.selected_request?.created_at).format("HH:mm");
    },
  },
  methods: {
    moment,
    onSubmit() {
      this.form.order_id = this.order.id;
      this.form.to = this.order.selected_request?.freelancer_id;
      if (this.form.message.length > 0) this.__POST_CHAT_MESSAGE(this.form);
    },
    async __GET_CHAT_MESSAGES() {
      try {
        const data = await this.$store.dispatch("fetchChat/getChatMesssage", {
          params: {
            order_id: this.$route.params.id,
          },
        });

        this.messages = data?.data?.content.filter(
          (item) =>
            item.from === this.$store.state.userInfo?.id ||
            item.to === this.$store.state.userInfo?.id
        );
        console.log(this.messages);
      } catch (e) {}
    },
    async __POST_CHAT_MESSAGE(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchChat/postChatMesssage",
          formData
        );
        // this.$pusher.trigger('my-channel', 'my-event', {
        //   message: 'Hello world!'
        // });
        this.__GET_CHAT_MESSAGES();
        this.form = {
          message: "",
          order_id: null,
          to: null,
        };
      } catch (e) {}
    },
  },
  watch: {
    "$store.state.userInfo.id"(val) {
      console.log(val);
      this.__GET_CHAT_MESSAGES();
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

.footer {
  display: grid;
  grid-template-columns: 1fr 100px;
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
