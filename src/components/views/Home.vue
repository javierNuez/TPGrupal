<template>
  <div>
    <div v-if="cuentas.length === 0 && !usuarioSinCuentas">
      Cargando datos...
    </div>
    <div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>
    <div v-for="(cuenta, index) in cuentas" :key="index">
      <Grilla
        :titulo="cuenta.moneda"
        :data="cuenta.movimientos"
        :columns="grillaTitulos"
      ></Grilla>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Grilla from "../commons/Grilla";

export default {
  props: {},
  data: function() {
    return {
      grillaTitulos: [
        "descripcion",
        "destino",
        "fecha",
        "monto",
        "origen",
        "tipoMovimiento",
      ],
      cuentas: [],
      usuarioSinCuentas: false,
    };
  },
  methods: {},
  beforeCreate() {
    axios
      .get("https://vuebank-api.herokuapp.com/accounts/38175536")
      .then((res) => {
        const datos = res.data;
        if (!datos.length) return (this.usuarioSinCuentas = true);
        this.cuentas = datos;
      });
  },
  components: {
    Grilla,
  },
};
</script>

<style></style>
