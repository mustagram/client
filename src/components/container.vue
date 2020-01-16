<template>
  <div class="front-page">
    <div class="logo-app">
        <h1 class="font-logo-app">MustaGram</h1>
    </div>
      <div class="main-content">
          <Register v-on:click="setVisible" v-if="!visible"></Register>
          <Login v-on:register="setVisible" v-if="visible"></Login>
      </div>
  </div>
</template>

<script>
import Register from "./register"
import Login from "./login"
export default {
        name: "App",
        data(){
            return {
                visible: true,
            }
        },
        methods:{
            setVisible(){
                if(!this.visible){
                    this.visible = true
                }
                else {
                    this.visible = false
                }
            }
        },
        components: {
            Register,
            Login
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

.logo-app {
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translate(-50%, 50%);
}

.font-logo-app {
    font-size: 100px;
    color: #ecf1f3;
    font-family: 'Righteous', cursive;
    
}

.front-page{
    position: relative;
    /* z-index: -1; */
     height: 100vh;
    background-image: linear-gradient(
        to right bottom, 
        #c8cec7c7, 
        #949796c0), 
        url(../img/fron-image.jpg);
    background-size: cover;
    background-position: top;
   
}
.main-content{
    position: absolute;
    /* z-index: 1; */
    /* top: 50%; */
    background-color: #ffff;
    left: 50%;
    transform: translate(-50%, 50%);
    border-style: solid;
    border-width: 3px;
    border-radius: 15px;
    border-color: #b2bec3a9;
    box-shadow: 0px 10px 10px #2d3436c2;
}
</style>