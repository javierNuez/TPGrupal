<template>
  <div id="app">
    <Header> </header>
    <h1>hola</h1>
   <b-row>
     <b-col>
       
       <router-link to="/series">Ir a series</router-link>
       <br>
       <router-link to="/peliculas">Ir a peliculas</router-link>
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
//import HelloWorld from './components/HelloWorld'
import Header from './components/Header.vue'
export default {
  name: "App",
  components:{
    //HelloWorld,
    Header
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
