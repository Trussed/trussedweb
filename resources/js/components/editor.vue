<template>
    <div>
        <ckeditor :editor="editor" v-model="messenger_entry" :config="editorConfig"></ckeditor>
        <button class="mt-2 btn btn-primary" @click="update">Update Chat</button>
    </div>
</template>

<script>
    import Vuex from "vuex";
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        computed:{
            messenger_entry:{
                get(){
                    return this.$store.state.messenger_entry;
                },
                set(entry){
                    this.$store.state.messenger_entry = entry;
                }
            }
        },
        methods:{
            update(){
                this.$store.commit("messenger_entries");
            }
        },
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>