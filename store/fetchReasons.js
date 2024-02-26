export const actions = {
  async getReasons({}, payload) {
    const res = await this.$axios.$get(`/api/cancel_reasons`, {
      ...payload,
    });
    return res;
  },
};
