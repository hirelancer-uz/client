export const actions = {
  async getNotifications({}, payload) {
    return this.$axiosInstance.$get(`/api/notifications`, {
      ...payload,
    });
  },

};
