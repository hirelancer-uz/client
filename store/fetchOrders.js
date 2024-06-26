export const actions = {
  async getOrders({}, payload) {
    const res = await this.$axios.$get(`/api/client/orders`, { ...payload });
    return res;
  },
  async getOrdersRequests({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/order_requests`, { ...payload });
    return res;
  },
  async getMyOrders({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/client/orders`, {
      ...payload,
    });
    return res;
  },
  async getOrderById({}, payload) {
    const res = await this.$axios.$get(`/api/client/orders/${payload.id}`);
    return res;
  },
  async getMyOrderById({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/client/orders/${payload.id}`);
    return res;
  },
  async getOrderCounts({}) {
    const res = await this.$axiosInstance.$get(`/api/order_counts`);
    return res;
  },
  async postOrder({}, data) {
    const res = await this.$axiosInstance.$post(`/api/orders/create`, data);
    return res;
  },
  async postComplaints({}, data) {
    const res = await this.$axiosInstance.$post(`/api/complaints`, data);
    return res;
  },
  async getFreelancerComments({}, payload) {
    const res = await this.$axios.$get(`/api/customer_feedbacks`, payload);
    return res;
  },
  async postCompliteCustomer({}, data) {
    const res = await this.$axiosInstance.$post(
      `/api/customer_feedbacks`,
      data
    );
    return res;
  },
  async postCompleteOrder({}, data) {
    const res = await this.$axiosInstance.$post(
      `/api/order_complete_requests`,
      data
    );
    return res;
  },
  async putOrder({}, payload) {
    return await this.$axiosInstance.$post(
      `/api/orders/update/${payload.id}?_method=put`,
      payload.data
    );
  },
  async postCanceledOrder({}, paylaod) {
    const res = await this.$axiosInstance.$post(
      `/api/orders/cancel/${paylaod.id}?_method=put`,
      paylaod.data
    );
    return res;
  },
  async postCanceledOffer({}, paylaod) {
    const res = await this.$axiosInstance.$post(
      `/api/order_requests/cancel`,
      paylaod
    );
    return res;
  },
  async postSendRequest({}, data) {
    const res = await this.$axiosInstance.$post(`/api/order_request`, data);
    return res;
  },
  async postSelectRequest({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/api/orders/${payload.id}/select?_method=put`,
      payload.data
    );
    return res;
  },
};
