<template>
    <div>
        <main-navbar></main-navbar>
        <content-container></content-container>
    </div>
</template>

<script>
    import mainNavbar from "./mainNavbar";
    import contentContainer from "./content/contentContainer";

    export default {
        name: "mainPage",
        components: {
            mainNavbar,
            contentContainer
        }
    }
</script>

<style scoped>

</style>