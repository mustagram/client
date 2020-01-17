<template>
    <div>
        <Container v-if="!isLogin"></Container>
        <main-page v-if="isLogin"></main-page>
    </div>
</template>

<script>
    import Container from "./components/frontPage/frontpageContainer"
    import mainPage from "./components/mainPage/mainPage";

    export default {
        name: "App",
        computed: {
            isLogin() {
                if (this.$cookies.isKey("token")) {
                    return true
                }
                return false
            }
        },
        components: {
            Container,
            mainPage
        }
    }
</script>

<style scoped>

</style>