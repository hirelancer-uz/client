// plugins/windowSize.js
import Vue from "vue";

Vue.prototype.$windowSize = () => ({
  width: window.innerWidth,
});
