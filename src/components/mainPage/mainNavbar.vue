<template>
    <div>
        <div class="ui pointing menu">
            <a class="item active">
                Mustagram
            </a>
            <a class="item">
                <i class="user link icon"></i><span>{{ name }}</span>
            </a>
            <a class="item" data-content="Add New Post">
                <new-post @listData="listData"></new-post>
            </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui transparent icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>
            </div>
            <a class="item" @click="logout">
                Logout
            </a>
        </div>
    </div>
</template>

<script>
    import newPost from "./newPost";

    export default {
        name: "mainTaskbar",
        data() {
            return {
                name: this.$cookies.get('name')
            }
        },
        methods: {
            logout() {
                this.$cookies.remove("token");
                location.reload();
            },
            listData(){
                this.$emit('listData')
            }
        },
        components: {
            newPost
        }
    }
</script>

<style scoped>

</style>