<template>
    <div class="backgroundContainer">
        <loginLogo></loginLogo>
            <Register v-on:click="setVisible" v-if="!visible"></Register>
            <Login v-on:register="setVisible" v-if="visible"></Login>
    </div>
</template>

<script>
    import Register from "./register"
    import Login from "./login"
    import loginLogo from "./loginLogo"

    export default {
        name: "App",
        data() {
            return {
                visible: true,
            }
        },
        methods: {
            setVisible() {
                if (!this.visible) {
                    this.visible = true
                } else {
                    this.visible = false
                }
            }
        },
        components: {
            Register,
            Login,
            loginLogo
        }
    }
</script>

<style scoped>
    .backgroundContainer {
        background-color: black;
        text-align: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-image: linear-gradient(
                to right bottom,
                #c8cec7c7,
                #949796c0),
        url(../../img/fron-image.jpg);
        background-size: cover;
        background-position: top;
    }
</style>