require('./bootstrap');

import Vue from "vue";
import store from "./store";
import router from "./routes";
require("./components");

const app = new Vue({
    store,
    router,
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