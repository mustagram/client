<template lang="html">
    <div>
        <form v-on:submit.prevent="submitPost" enctype="multipart/form-data">
            <i class="plus link icon" @click="toggle"></i>
            <sui-modal v-model="open" compact>
                <sui-modal-header>Select a Photo</sui-modal-header>
                <sui-modal-content image>
                    <sui-form>
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
                                           size="50"
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
                                           size="50"
                                           minlength="10"
                                           maxlength="100"
                                           required>
                                </div>
                            </div>
                        </label>
                    </sui-form>
                </sui-modal-content>
                <sui-modal-actions>
                    <sui-button color="blue">Post !!</sui-button>
                    <sui-button positive @click.native="toggle">
                        Close
                    </sui-button>
                </sui-modal-actions>
            </sui-modal>
        </form>
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
                this.file = this.$refs.file.files[0];

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
                    console.log(data);
                    this.open = false
                }).catch(err => {
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