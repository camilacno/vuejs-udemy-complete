import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL:
        'https://vuejs-udemy-stock-trader-c80f6-default-rtdb.firebaseio.com/',
    });
  },
});
