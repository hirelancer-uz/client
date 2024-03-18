export default {
  head: {
    title: "Hirelancer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    "~/plugins/axios",
    "~/plugins/axios-instance",
    { src: "~/plugins/windowSize.js", ssr: false },
    { src: "~plugins/antdv.js" },
    { src: "~plugins/v-mask.js", ssr: false },
    { src: "~plugins/vue-otp-input.js", ssr: false },
    { src: "~plugins/vue-drawer-layout.js", ssr: false },
    { src: "~plugins/quill-editor.js", ssr: false },
    { src: "~plugins/date-format.js", ssr: true },
    { src: '~/plugins/pusher.js', ssr: false}
  ],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "@nuxtjs/i18n"],
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: process.env.BASE_URL,
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "https://api.hirelancer.ndc.uz",
    // imgBaseUrl: (process.env.BASE_URL || 'https://api.hirelancer.ndc.uz') + "/storage/"
  },
  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
  i18n: {
    locales: [
      {
        code: "uz",
        iso: "uz",
      },
      {
        code: "ru",
        iso: "ru",
      },
    ],
    baseURL: process.env.BASE_URL,
    seo: true,
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
};
