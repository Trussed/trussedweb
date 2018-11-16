import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";

import webgl from "./pages/WebGL.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/webgl', component: webgl }
];

export default new VueRouter({
    mode: "history",
    routes
});