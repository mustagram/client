<template>
    <div>
        <div class="ui pointing menu">
            <a class="item active">
                Mustagram
            </a>
            <a class="item">
                <i class="user link icon"></i>
            </a>
            <a class="item" data-content="Add New Post">
                <i class="plus link icon"></i>
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
    export default {
        name: "mainTaskbar",
        methods: {
            logout() {
                this.$cookies.remove("token");
                location.reload();
            }
        }
    }
</script>

<style scoped>

</style>