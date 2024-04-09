export const actions = {
  async getSpecialities({}, payload) {
    return await this.$axios.$get(`/api/client/specialities`, {
      ...payload,
    });
  },
  async postSpecialities({}, payload) {
    return await this.$axiosInstance.$post(
      `/api/settings/freelancer/update-specialities`,
      payload
    );
  },
};
