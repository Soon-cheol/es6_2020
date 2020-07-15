import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'

import './assets/css/reset.css';
import './assets/css/layout.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
});