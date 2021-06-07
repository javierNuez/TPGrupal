<template>
  <div class="prestamoslayout">
    <Grilla
      titulo="Historial de prestamos"
      :data="cuentas.movimiento"
      :columns="grillaTitulos"
    ></Grilla>
  </div>
</template>

<script>
import Grilla from "../commons/Grilla";
import axios from "axios";
import { getLSItemData } from "../../utils/localStorageHelper";
export default {

  data: function() {
      return {
      grillaTitulos: ["descripcion", "destino", "fecha", "monto", "origen"],
      //cuentas: this.$store.getters.getCuentas,
      usuarioSinCuentas: false,
    };
  },
  methods: {},
  beforeCreate() {
    const dni = getLSItemData("userId");
    axios
      .get(`https://vuebank-api.herokuapp.com/accounts/${dni}`)
      .then((res) => {
        const datos = res.data;
        if (!datos.length) return (this.usuarioSinCuentas = true);
        this.$store.dispatch("setCuentas", datos);
      });
  },
  components: {
    Grilla,
  },
};
</script>

<style>
.prestamoslayout {
  width: 100%;
}
</style>