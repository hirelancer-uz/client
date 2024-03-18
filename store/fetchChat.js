export const actions = {
  async postChatMesssage({}, payload) {
    return this.$axiosInstance.post(`/api/chat/send-message`, {
      ...payload,
    });
  },
  async getChatMesssage({}, payload) {
    return this.$axiosInstance.get(`/api/chat/get`, { ...payload});
  },
};
