<template>
    <div class="login">
        <form>
            <h3 id="logo">login</h3>
            <label class="name-label">email</label>
            <input type="email" class="input-login" placeholder="input your email" required>
            <label class="name-label">password</label>
            <input type="password" class="input-login" placeholder="input your password" required>
            <a class="forgot" href="#" @click="register">register</a>
            <input type="submit" name="submit" value="Log In"/>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            register() {
                this.$emit("register")
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap");

    .login {
        font-family: "Open Sans";
    }

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

    .name-label {
        margin: 10px
    }

    .login {
        padding: 30px;
        width: 400px;
        overflow: hidden;
        background: white;
        border-radius: 10px;
        display: inline-block;
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
    .login:hover {
        color: darkgray;
    }
</style>