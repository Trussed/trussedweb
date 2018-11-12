
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

import Home from "./components/Home.vue";

const routes = [
    { path: '/', component: Home }
];

const router = new VueRouter({
    mode: "history",
    routes
});


const app = new Vue({
    router
}).$mount("#app");

console.log(app);

Echo.private(`test`)
.listenForWhisper('typing', (e) => {
    console.log(e + ' this is typing');
});

setInterval(function(){
    Echo.private(`test`).whisper('typing', {
        somethings:"Ya all sorts..."
    });
}, 1000);