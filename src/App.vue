<template>
  <div id="app">
  <Header/>
  <b-col>
    <div id="menu">
      <router-link to="/home">Home</router-link>
      <router-link to="/transferencia">Transferencia</router-link>
      <router-link to="/pagos">Pagos</router-link>
      <router-link to="/prestamo">Prestamo</router-link>
      <router-link to="/login">
        <button>Log out</button>
      </router-link>
    </div>
  </b-col> 
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/commons/Header'
export default {
  name: "App",
  components:{
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

#nav  a {
  font-weight : negrita ;
  color : #96845f ;
}
#nav  a .router-link-exact-active {
  color : #53a3d8 ;
}
#logo {
  padding-top : 0 px ;
}
#menu {
  padding-top : 8px ;
}

</style>
