export const state = () => ({
  userInfo: {},
  auth: false,
  pageData: {},
});

export const mutations = {
  getUserInfo(state, payload) {
    state.userInfo = payload;

    localStorage.getItem("auth-token")
      ? (state.auth = true)
      : (state.auth = false);
  },
  setPageData(state, payload) {
    state.pageData = payload;
  },
  logout(state) {
    localStorage.removeItem("auth-token");
    state.auth = false;
  },
};
export const actions = {
  async logout({ commit, $router }, payload) {
    try {
      await this.$axiosInstance.$get("/api/auth/logout");
      commit("logout");
    } catch (e) {
      commit("logout");
    }
  },
  async reloadUserInfo({ commit }) {
    if (localStorage.getItem("auth-token")) {
      try {
        const [userInfoData] = await Promise.all([
          this.$axiosInstance.$get(`/api/auth/user`),
        ]);
        commit("getUserInfo", userInfoData);
      } catch (e) {}
    }
  },
};
