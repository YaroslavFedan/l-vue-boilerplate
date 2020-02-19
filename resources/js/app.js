/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.axios = require("axios");
window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Components
import "@/components";

import App from "./App.vue";
import store from "@/store";
import router from "@/router";

import dateFilter from "@/filters/date.filter.js";
import currencyFilter from "@/filters/currency.filter.js";

import vuetify from "@/plugins/vuetify.plugin";
import "@/plugins/toast.plugin";

window.eventBus = new Vue();
Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
