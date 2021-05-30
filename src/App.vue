<template>
  <div id="app">
    <Header />
    <div>{{ userId }}</div>
    <div>
      <b-navbar variant="info">
        <!-- <b-navbar-brand>MyBank</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        <b-navbar-nav class="ml-auto">
          <div>
            <router-link to="/home" class="menu"> Home </router-link>
            <router-link to="/transferencia" class="menu"> Transferencia </router-link>
            <router-link to="/pagos" class="menu"> Pagos </router-link>
            <router-link to="/prestamo" class="menu"> Prestamo </router-link>
            <router-link to="/tarjeta" class="menu"> Tarjeta </router-link>
            <b-button variant="outline-primary" @click.prevent="onLogout()"
              class="menu">Cerrar sesión</b-button
            >
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>

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
.menu {
  font-family:Candara;
  font-weight: bold ;
  color: rgb(245, 245, 220);
  word-spacing: 0.45em;
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
