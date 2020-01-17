import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

// set default config
Vue.$cookies.config('7d');

Vue.use(SuiVue);

new Vue({
    render: h => h(App),
}).$mount('#app');