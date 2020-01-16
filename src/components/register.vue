<template>
  <div class="register">
      <form>
         <h3 id="logo">register</h3> 
        <label for="" class="name-label">name</label>
        <input type="text" class="input-register" placeholder="input your name" required v-model="name">
        <label for="" class="name-label">email</label>
        <input type="email" class="input-register" placeholder="input your email" required>
        <label for="" class="name-label">password</label>
        <input type="password" class="input-register" placeholder="input your password" required>
        <a class="register" href="#" @click="login">Back</a>
        <input type="submit" name="submit" value="Register" />
      </form>
  </div>
</template>

<script>
export default {
	name: 'register',
	methods: {
		login(){
			this.$emit("click")
		}
	}
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap);

#logo {
	margin-top:10;
    text-transform: uppercase;
	width:200px;
	font-family:'Open Sans';
	font-size:25px;
	font-weight:600;
	text-align:left;
	color:lightgray;
	-webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;
}

#logo:hover {
	color:cornflowerblue;
}

.register{
    padding: 30px;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: #ffff;
    border: #2d3436
    /* height: 30vh; */
}
.name-label, .input-register {
    margin: 10px
}

form {
	margin:10% auto 0 auto;
	padding:30px;
	width:400px;
	height:auto;
	overflow:hidden;
	background:white;
	border-radius:10px;
    font-family:'Open Sans';
}

form input {
	margin:15px 0;
	padding:15px 10px;
	width:100%;
	outline:none;
	border:1px solid #bbb;
	border-radius:20px;
	display:inline-block;
	-webkit-box-sizing:border-box;
	   -moz-box-sizing:border-box;
	        box-sizing:border-box;
    -webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;
}

form input[type=text]:focus,
form input[type="password"]:focus {
	border-color:cornflowerblue;
}

input[type=submit] {
	padding:15px 50px;
    float: right;
	width:auto;
	background:#636e72;
	border:none;
	color:white;
	cursor:pointer;
	display:inline-block;
	clear:right;
	-webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;
}

input[type=submit]:hover {
	opacity:0.8;
}

input[type="submit"]:active {
	opacity:0.4;
}

.forgot,
.register {
	margin:10px;
	float:left;
	clear:left;
	display:inline-block;
	color:cornflowerblue;
	text-decoration:none;
}

.forgot:hover,
.register:hover {
	color:darkgray;
}


</style>