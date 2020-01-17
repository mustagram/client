<template>
    <div>
        <sui-message v-if="visibility"
                     :header="header"
                     :content="content"
                     :color="color"/>
    </div>
</template>

<script>
    export default {
        name: "message",
        data() {
            return {}
        },
        props: {
            header: String,
            content: String,
            color: String,
            visibility: ""
        }
    }
</script>

<style scoped>

</style>