export default {
  data() {
    return {
      messageLoader: false,
      chatLoader: false,
      messages: []
    }
  },
  mounted() {
    this.__GET_CHAT_MESSAGES();
    let channel = this.$pusher.subscribe(`orders.${this.$route.params.id}`);
    channel.bind("App\\Events\\SentMessage", (data) => {
      this.messages.unshift(data.message);
      this.messageLoader = false;
    });
  },
  methods: {
    async __GET_CHAT_MESSAGES() {
      try {
        this.chatLoader = true;
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
      } catch (e) {
      } finally {
        this.chatLoader = false;
      }
    },
    async __POST_CHAT_MESSAGE(formData,formFunc) {
      try {
        this.messageLoader = true;
        const data = await this.$store.dispatch(
          "fetchChat/postChatMesssage",
          formData
        );
        this.$refs.chatBoard.scrollTop = 0;
        formFunc();
      } catch (e) {

      }
    },

  },
  watch: {
    "$store.state.userInfo.id"(val) {
      this.__GET_CHAT_MESSAGES();
    },
  },
};
