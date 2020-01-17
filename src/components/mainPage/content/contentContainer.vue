<template>
    <sui-segment>
        <card id="card"
              v-for="card, index in cards"
              :key="index"
              v-bind:card="card"
        ></card>
    </sui-segment>
</template>

<script>
    import card from "./card";
    import {instance} from "../../../config/axiosConfig";
    export default {
        name: "content",
        data(){
            return{
                cards: []
            }
        },
        components: {
            card
        },
        methods: {
            listPost: function () {
                instance({
                    method: "get",
                    url: "/posts",
                    headers: {
                        token: this.$cookies.get("token")
                    }
                }).then(({data}) => {
                    console.log(data);
                    this.cards = data
                }).catch(err => {
                    console.log({err})
                });
            },
        },
        props: {
            newData: Array
        },
        mounted() {
            this.listPost()
        }
    }
</script>

<style scoped>
    #card{
        display: inline-block;
        margin-right: 10px;
    }
</style>