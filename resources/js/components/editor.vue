<template>
    <div>
        <textarea v-model="messenger_entry"></textarea>
        <button class="mt-2 btn btn-primary" @click="update">Update Chat?</button>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce';

    import 'tinymce/themes/modern/theme';

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
        mounted(){
            let that = this;
            let target = this.$el.querySelector("textarea");            
            this.config = {
                target:target,
                skin_url:'/tinymce/skins/lightgray',
                setup(editor){
                    editor.on("keyup change", function(){
                        that.messenger_entry = editor.getContent();
                    });
                }
            }
            tinymce.init(this.config);
        },
        data: function(){
            return {
                config: {}
            };
        }
    }
</script>