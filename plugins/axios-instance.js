import { notification } from "ant-design-vue";

export default ({ $axios, redirect, error }, inject) => {
  const tokenKey = "auth-token";
  const axiosInstance = $axios.create({
    baseURL: process.env.BASE_URL || "https://test-api.hirelancer.ndc.uz/",
  });

  axiosInstance.onRequest((config) => {
    const token = localStorage.getItem(tokenKey);
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;

    return config;
  });
  axiosInstance.onResponse((response) => {
    return response;
  });

  axiosInstance.onError(async (e) => {
    const errors = [401];
    if (e.response && errors.includes(e.response.status))
      if (localStorage.getItem(tokenKey)) {
        location.reload();
        localStorage.removeItem(tokenKey);
      }
    if (e.response.status === 404) {
      error({
        statusCode: e.response.status,
        message: "This page could not be found",
        layout: "error",
      });
      //
      //  throw new Error('NOT FOUNT')
    }
    if (e.response.status === 413) {
      notification.error({
        message: "Размер загружаемого файла слишком большой.",
      });
    }

    return Promise.reject(e);
  });
  inject("axiosInstance", axiosInstance);
};
