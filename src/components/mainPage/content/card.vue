<template>
    <div class="ui card">
        <div class="content">
            <img class="ui avatar image"
                 src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg">
            {{ card.user.name }}
            <a id="share" :href="this.url">
                <i class="share icon"></i>
            </a>
        </div>
        <div class="image" id="img-post">
            <img :src="card.file">
        </div>
        <div class="content">
        <span class="right floated" @click="addLike(card._id)">
          <i class="heart outline like icon"></i>
          {{ card.likes.length }} likes
        </span>
            <i class="comment icon"></i>
            {{ card.comments.length }} comments
        </div>
        <div class="extra content">
            <div class="ui large transparent left icon input">
                <sui-form @submit.prevent="addComment(card._id)">
                    <div class="ui left icon input">
                        <i class="heart outline icon"></i>
                        <input size="100" v-model="comment" type="text" placeholder="Add Comment...">
                    </div>
                </sui-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {instance} from "../../../config/axiosConfig";

    export default {
        name: "card",
        data() {
            return {
                comment: null
            }
        },
        props: {
            card: Object,
        },
        data() {
            return {
                url: `https://social-plugins.line.me/lineit/share?url=${this.card.file}&text=from= ${this.card.user.email}&from=line_scheme`
            }
        },
        methods: {
            addComment: function (idPost) {
                instance({
                    method: "post",
                    url: "/comments",
                    data: {
                        "text": this.comment,
                        "post": idPost
                    },
                    headers: {
                        token: this.$cookies.get("token")
                    }
                }).then(({data}) => {
                    console.log(data);
                    this.$emit('update')
                }).catch(err => {
                    console.log({err})
                });
            },
            addLike: function (idPost) {
                instance({
                    method: "post",
                    url: "/posts/" + idPost + "/like",
                    headers: {
                        token: this.$cookies.get("token")
                    }
                }).then(({data}) => {
                    console.log(data);
                    this.$emit('update')
                }).catch(err => {
                    console.log({err})
                });
            },
        }
    }
</script>

<style scoped>
    #share {
        cursor: pointer;
        float: right;
    }

    #img-post {
        overflow: hidden;
        height: 250px;
    }
</style>