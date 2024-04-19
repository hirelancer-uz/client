export const actions = {
  async getSiteInfo({},payload) {
    return await this.$axios.$get(`/api/admin/site_infos`,payload);
  },
};
