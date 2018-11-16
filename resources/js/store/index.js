import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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