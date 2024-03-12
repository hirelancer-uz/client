export default ({ $axios, redirect, error }, inject) => {
  const tokenKey = "auth-token";
  const axiosInstance = $axios.create({
    baseURL: process.env.BASE_URL || "https://api.hirelancer.ndc.uz",
  });
  // axiosInstance.setHeader("Content-Type", "application/json");

  axiosInstance.onRequest((config) => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
  axiosInstance.onResponse((response) => {
    return response;
  });

  axiosInstance.onError(async (e) => {
    const errors = [401, 403];
    if (errors.includes(e.response.status))
      if (localStorage.getItem(tokenKey)) localStorage.removeItem(tokenKey);

    return Promise.reject(e);
  });
  inject("axiosInstance", axiosInstance);
};
