import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import Vue2Filters from 'vue2-filters';
import VueGtm from 'vue-gtm';
import '@/main.scss';

// import vuetify from './plugins/vuetify';
// import './plugins/vuetify-extra';

// VueAnalytics Configuration
// we only want to track PROD and CAT environments - no DEMO environments.
if (window.APP_CONFIG.ENVIRONMENT === 'PROD' || window.APP_CONFIG.ENVIRONMENT === 'CAT') {
  Vue.use(VueGtm, {
    id: window.APP_CONFIG.ENVIRONMENT === 'PROD' ? 'GTM-MCSK8C' : 'GTM-TX9N55',
  });
}

Vue.config.productionTip = false;
Vue.use(Vue2Filters);

const init = () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
};

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}