<template>
  <div id="app">
    <Header />
    <div>{{ userId }}</div>
    <div>
      <b-navbar type="dark" variant="info">
        <b-navbar-brand>MyBank</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav class="ml-auto">
          <div id="menu">
            <router-link to="/home"> Home </router-link>
            <router-link to="/transferencia"> Transferencia </router-link>
            <router-link to="/pagos"> Pagos </router-link>
            <router-link to="/prestamo"> Prestamo </router-link>
            <router-link to="/tarjeta"> Tarjeta </router-link>
            <b-button variant="outline-primary" @click.prevent="onLogout()"
              >Cerrar sesión</b-button
            >
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <!-- <b-col>
      <div id="menu">
        <router-link to="/home">Home</router-link>
        <router-link to="/transferencia">Transferencia</router-link>
        <router-link to="/pagos">Pagos</router-link>
        <router-link to="/prestamo">Prestamo</router-link>
        <b-button variant="outline-primary" @click.prevent="onLogout()"
          >Cerrar sesión</b-button
        >
      </div>
    </b-col> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/commons/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data: function () {
    return {
      userId: null,
    };
  },
  methods: {
    getUserCredentials: () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return console.log("USER ID NOT FOUND ");
    },
    onLogout: function () {
      localStorage.clear();
      this.$router.push({ path: "/logout" });
    },
  },
  beforeMount: function () {
    this.getUserCredentials();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: auto;
}

#nav a {
  font-weight: negrita;
  color: #96845f;
}
#nav a .router-link-exact-active {
  color: #53a3d8;
}
#logo {
  padding-top: 0 px;
}
#menu {
  padding-top: 8px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
