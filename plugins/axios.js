export default function ({ $axios, redirect, error }, inject) {

  const axios = $axios.create({
    baseURL: process.env.BASE_URL || "https://test-api.hirelancer.ndc.uz/",
  });
  axios.setHeader("Content-Type", "application/json");

  axios.onRequest((config) => {
    return config;
  });

  axios.onResponse((response) => {
    return response;
  });
  axios.onError((err) => {

    // const errors = [404, 500];
    // if (errors.includes(err.response.status)) {
    //   error({
    //     statusCode: err.response.status,
    //     message: "This page could not be found",
    //     layout: "error",
    //   });
    // }

    if (err.response.status === 404) {
      error({
        statusCode: err.response.status,
        message: "This page could not be found",
        layout: "error",
      });
      // throw Promise.reject(err);
    }
    return Promise.reject(err);
  });
  inject("axios", axios);
}
