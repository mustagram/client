<template>
    <div class="ui card">
        <div class="content">
            <img class="ui avatar image"
                 src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg">
            {{ card.user.email }}
             <a :href="this.url">
            <i class="share icon"></i>
             </a>
        </div>
        <div class="image">
            <!--            <img src="https://images.unsplash.com/photo-1562307030-2c286048cfd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80">-->
            <img :src="card.file">
        </div>
        <div class="content">
    <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span>
            <i class="comment icon"></i>
            3 comments
        </div>
        <div class="extra content">
            <div class="ui large transparent left icon input">
                <i class="heart outline icon"></i>
                <input type="text" placeholder="Add Comment...">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props: {
            card: Object,
        },
        data(){
            return {
                url : `https://social-plugins.line.me/lineit/share?url=${this.card.file}&text=from= ${this.card.user.email}&from=line_scheme`
            }
        }
    }
</script>

<style scoped>
    .icon {
        cursor: pointer;
        float: right;
    }
</style>