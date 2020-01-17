<template>
    <div class="register">
        <message v-bind:header="header"
                 v-bind:content="content"
                 v-bind:color="color"
                 v-bind:visibility="visibility"
                 class="mesage-box"></message>
        <form v-on:submit.prevent="registerUser">
            <h3 id="logo">register</h3>
            <label class="name-label">name</label>
            <input v-model="name"
                   type="text"
                   class="input-register"
                   placeholder="input your name"
                   required>
            <label class="name-label">email</label>
            <input v-model="email"
                   type="email"
                   class="input-register"
                   placeholder="input your email"
                   required>
            <label class="name-label">password</label>
            <input v-model="password"
                   type="password"
                   class="input-register"
                   placeholder="input your password"
                   required>
            <a class="forgot" href="#" @click="login">Back</a>
            <input type="submit" name="submit" value="Register"/>
        </form>
    </div>
</template>

<script>
    import {instance} from "../../config/axiosConfig";
    import message from "../message";

    export default {
        name: 'register',
        data() {
            return {
                name: null,
                email: null,
                password: null,
                header: null,
                content: null,
                color: "blue",
                visibility: ""
            }
        },
        methods: {
            login() {
                this.$emit("click")
            },
            registerUser() {
                instance({
                    method: 'post',
                    url: '/user/register',
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                }).then(({data}) => {
                    console.log(data);
                    this.header = "Success";
                    this.content = "User successfully registered";
                    this.color = "blue";
                    this.visibility = true;
                    this.name = "";
                    this.email = "";
                    this.password = "";
                    this.login();
                }).catch(err => {
                    console.log(err);
                    this.header = "Error";
                    this.content = "Sign Up failed";
                    this.color = "red";
                    this.visibility = true;
                });
            },
        },
        components: {
            message
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap");

    #logo {
        text-transform: uppercase;
        width: 200px;
        font-size: 25px;
        font-weight: 600;
        text-align: left;
        color: lightgray;
        -webkit-transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -ms-transition: 0.2s ease all;
        -o-transition: 0.2s ease all;
        transition: 0.2s ease all;
    }

    #logo:hover {
        color: cornflowerblue;
    }

    .register {
        padding: 30px;
        width: 400px;
        overflow: hidden;
        background: white;
        border-radius: 10px;
        display: inline-block;
        font-family: "Open Sans";
    }

    .name-label, .input-register {
        margin: 10px
    }

    form input {
        margin: 15px 0;
        padding: 15px 10px;
        width: 100%;
        outline: none;
        border: 1px solid #bbb;
        border-radius: 20px;
        display: inline-block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -ms-transition: 0.2s ease all;
        -o-transition: 0.2s ease all;
        transition: 0.2s ease all;
    }

    form input[type=text]:focus,
    form input[type="password"]:focus {
        border-color: cornflowerblue;
    }

    input[type=submit] {
        width: 50%;
        background: #636e72;
        border: none;
        color: white;
        cursor: pointer;
        display: inline-block;
        margin-left: 20px;
        -webkit-transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -ms-transition: 0.2s ease all;
        -o-transition: 0.2s ease all;
        transition: 0.2s ease all;
    }

    input[type=submit]:hover {
        opacity: 0.8;
    }

    input[type="submit"]:active {
        opacity: 0.4;
    }

    .forgot {
        margin-right: 20px;
        display: inline-block;
        color: cornflowerblue;
        text-decoration: none;
    }

    .forgot:hover,
    .register:hover {
        color: darkgray;
    }

    .message-box {
        padding-bottom: 20px;
    }
</style>