<template>
    <div>
        <main-navbar></main-navbar>
    </div>
</template>

<script>
    import mainNavbar from "./mainNavbar";
    import {instance} from "../../config/axiosConfig";
    export default {
        name: "mainPage",
        components: {
            mainNavbar
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
                    
                }).catch(err => {
                    console.log(err);
                    this.$cookies.remove('token');
                    location.reload();
                });
            }
        },
        created() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>