import * as firebase from 'firebase/app';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'firebase/auth';
import 'firebase/database';
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: 'AIzaSyAUh5Cyvp7zifNYnLwIXHGizXYgLfri6tk',
  authDomain: 'vue-finance-planner.firebaseapp.com',
  databaseURL: 'https://vue-finance-planner.firebaseio.com',
  projectId: 'vue-finance-planner',
  storageBucket: 'vue-finance-planner.appspot.com',
  messagingSenderId: '537521503209',
  appId: '1:537521503209:web:2ddaea25d109cdf7f7a978',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
