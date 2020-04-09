// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/stylesheet/main.css'
import firebaseConfig from './db/firebase'
import firebase from 'firebase'
import * as vuefire from 'vuefire'
import store from "./store";

Vue.config.productionTip = false
Vue.use(vuefire);

//firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
window.firebase = firebase;
window.firebaseDB = firebaseApp.database();
window.firebaseAuth = firebaseApp.auth();
window.firebaseStorage = firebaseApp.storage();
window.firebaseMessaging = firebaseApp.messaging();

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');

global.vm = app;
