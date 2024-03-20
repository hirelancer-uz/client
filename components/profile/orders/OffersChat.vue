<template>
  <div
    class="offers-chat rounded-[16px] border border-solid border-grey-8 bg-white relative"
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
    <div class="head px-6 py-6 border-[0] border-b border-solid border-grey-8">
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
      class="board flex-col-reverse max-h-[476px] overflow-y-scroll px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8"
    >


      <div v-for="message in messages" :key="message?.id">
        <div
          class="flex justify-end"
          v-if="$store.state?.userInfo?.id == message?.from"
        >
          <div
            class="content px-[10px] py-[10px] max-w-[295px] bg-blue rounded-[10px] rounded-br-none flex gap-2 items-end"
          >
            <p class="text-base text-white">
              {{ message?.message }}
            </p>
            <span class="text-[12px] text-grey-40">{{moment(message?.created_at).format("HH:mm")}}</span>
          </div>
        </div>
        <div class="flex justify-start" v-else>
          <div
            class="client-content px-[10px] max-w-[295px] py-[10px] bg-bg-grey rounded-[10px] rounded-bl-none flex gap-2 items-end"
          >
            <p class="text-base text-black">{{ message?.message }}</p>
            <span class="text-[12px] text-grey-40">{{moment(message?.created_at).format("HH:mm")}}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-start">
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
              <h6
                class=" text-[14px] font-regular flex gap-1 text-grey-40"
              >
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
</template>
<script>
import { message } from "ant-design-vue";
import moment from "moment";

export default {
  props: ["order", "request"],
  data() {
    return {
      messages: [],
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
    this.__GET_CHAT_MESSAGES();
    let channel = this.$pusher.subscribe(`orders.${this.$route.params.id}`);
    channel.bind("App\\Events\\SentMessage", (data) => {
      this.messages.unshift(data.message);
    });
  },
  methods: {
    moment,
    message() {
      return message;
    },
    onSubmit() {
      this.form.order_id = this.order.id;
      this.form.to = this.request?.freelancer_id;
      if (this.form.message.length > 0) this.__POST_CHAT_MESSAGE(this.form);
    },
    async __GET_CHAT_MESSAGES() {
      try {
        const data = await this.$store.dispatch("fetchChat/getChatMesssage", {
          params: {
            order_id: this.$route.params.id,
          },
        });

        this.messages = data?.data?.content
        //   .filter(
        //   (item) =>
        //     item.from === this.request?.freelancer_id ||
        //     item.to === this.request?.freelancer_id
        // );
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
        this.form = {
          message: "",
          order_id: null,
          to: null,
        };
      } catch (e) {}
    },
  },
  watch: {
    'request?.freelancer_id'() {
      this.__GET_CHAT_MESSAGES();
    }
  }
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
