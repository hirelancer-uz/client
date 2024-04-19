export const actions = {
  async getTranslations({},payload) {
    return await this.$axios.$get(`/api/translates`,payload);
  },
};
