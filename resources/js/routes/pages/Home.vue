<template>
    <div>
        <div>
            <div v-for="entry in messenger_entries">
                <div v-html="entry.message"></div>
            </div>
        </div>
        <editor></editor>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        computed:{
            ...Vuex.mapState(["messenger_entries"])
        }
    }
</script>