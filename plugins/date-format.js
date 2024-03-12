import Vue from "vue";
import moment from 'moment'
Vue.directive("date-format", (el, binding) => {
  el.innerHTML = moment(el.innerHTML,binding.expression);
});
