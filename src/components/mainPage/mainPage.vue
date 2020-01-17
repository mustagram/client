<template>
    <div>
        <main-navbar @listData="getPosts"></main-navbar>
        <content-container v-bind:newData="newData"></content-container>
    </div>
</template>

<script>
    import mainNavbar from "./mainNavbar";
    import contentContainer from "./content/contentContainer";
    import {instance} from "../../config/axiosConfig";

    export default {
        name: "mainPage",
        components: {
            mainNavbar,
            contentContainer,
            newData: []
        },
        methods: {
            getPosts() {
                instance({
                    method: "get",
                    url: "/posts",
                    headers: {
                        token: this.$cookies.get('token')
                    }
                }).then(({data}) => {
                    console.log(data);
                    this.newData = data
                }).catch(err => {
                    console.log(err);
                    this.$cookies.remove('token');
                    location.reload();
                });
            }
        }
    }
</script>

<style scoped>

</style>