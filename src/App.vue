<template>
  <div id="app">
    <HelloWorld msg="Header"/>
   <b-row>
     <b-col>
        <router-link to="/home">Home</router-link>
       <br>
       <router-link to="/transferencia">Transferencia</router-link>
       <br>
       <router-link to="/series">Ir a series</router-link>
       <br>
       <router-link to="/peliculas">Ir a peliculas</router-link>
       <br>
       <router-link to="/formulario">Formulario</router-link>
    
     </b-col>
     <b-col>
       <router-view></router-view>
     </b-col>
     <b-col>menu derecha</b-col>
   </b-row>
    <hr>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: "App",
  components:{
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
