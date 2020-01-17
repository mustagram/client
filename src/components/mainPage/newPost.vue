<template lang="html">
    <div>
        <i class="plus link icon" @click="toggle"></i>
        <sui-modal v-model="open">
            <sui-modal-header>Select a Photo</sui-modal-header>
            <sui-modal-content image>
                <form class="w-100" v-on:submit.prevent="submitPost" enctype="multipart/form-data">
                    <label>Photo Upload :
                        <div class="field">
                            <div class="ui input">
                                <input type="file"
                                       ref="file"
                                       name="file"
                                       @change="handleFileUpload"/>
                                <sui-label>Maksimal 5 Mb</sui-label>
                            </div>
                        </div>
                    </label>
                    <label>Title :
                        <div class="field">
                            <div class="ui input">
                                <input type="text"
                                       id="title"
                                       placeholder="Title"
                                       v-model="title"
                                       size="100"
                                       minlength="10"
                                       maxlength="100"
                                       required>
                            </div>
                        </div>
                    </label>
                    <label>Description :
                        <div class="field">
                            <div class="ui input">
                                <input type="text"
                                       id="description"
                                       placeholder="Description"
                                       v-model="description"
                                       size="100"
                                       minlength="10"
                                       maxlength="100"
                                       required>
                            </div>
                        </div>
                    </label>
                    <sui-button color="blue">Post !!</sui-button>
                </form>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button positive @click.native="toggle">
                    OK
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
    </div>
</template>

<script>
    import {instance} from "../../config/axiosConfig";

    export default {
        name: 'newPost',
        data() {
            return {
                open: false,
                description: "",
                title: "",
                file: ""
            };
        },
        methods: {
            toggle() {
                this.open = !this.open;
            },
            handleFileUpload: function () {
                this.featured_image = this.$refs.featured_image.files[0];

            },
            submitPost: function () {
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('description', this.description);
                formData.append('file', this.file);

                console.log(formData);

                instance({
                    method: "post",
                    url: "/posts",
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        token: this.$cookies.get("token")
                    }
                }).then(({data}) => {
                    // this.$emit('clicked');
                    // this.header = "Success Saving Data";
                    // this.contentMsg = "Data successfully saved";
                    console.log(data);
                }).catch(err => {
                    // this.header = "Error Saving Data";
                    // this.contentMsg = "Data failed to save";
                    console.log({err})
                });
            },
        },
    };
</script>

<style scoped>
    .field {
        padding: 5px 0 5px 0;
    }
</style>