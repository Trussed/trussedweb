/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use(CKEditor);
Vue.use(Vuex);
Vue.use(VueRouter);

import Home from "./components/pages/Home.vue";
import editor from "./components/editor.vue";

Vue.component(
    "editor",
    editor
);

const routes = [
    { path: '/', component: Home }
];

const router = new VueRouter({
    mode: "history",
    routes
});

const store = new Vuex.Store({
    state:{
        "messenger_entries":[],
        "messenger_entry":""
    },
    mutations:{
        messenger_entries(state){
            state.messenger_entries.push({
                "message":state.messenger_entry
            });
            state.messenger_entry = "";
        }
    },
    actions:{

    },
    getters:{

    }
});

const app = new Vue({
    router,
    store,
    computed:{
        messenger_entries(){
            return this.$store.state.messenger_entries;
        }
    },
    watch:{
        messenger_entries(newEntries, oldEntries){
            if(newEntries.length!=oldEntries.length) return;
            Echo.private(`test`).whisper('typing', {
                convert:newEntries
            });
        }
    }
}).$mount("#app");

Echo.private(`test`)
.listenForWhisper('typing', (e) => {
    console.log("hello x.x");
    console.log(e)
    app.$store.state.messenger_entries = e.convert;
});