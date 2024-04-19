export const actions = {
  async getUserInfo({}) {
    return await this.$axiosInstance.$get(`/api/auth/user`);
  },
  async postSendCode({}, payload) {
    return await this.$axios.$post(`/api/auth/send-code`, { ...payload });
  },
  async postLogin({}, payload) {
    return await this.$axios.$post(`/api/auth/login`, { ...payload });
  },
  async postRegister({}, payload) {
    return await this.$axiosInstance.$post(`/api/auth/register`, payload);
  },
  async postUserEdit({}, payload) {
    return await this.$axiosInstance.$post(
      `/api/settings/freelancer/update-personal-data`,
      payload
    );
  },
};
