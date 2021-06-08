<template>
  <div class="prestamoslayout">
    <Grilla
      titulo="Historial de prestamos"
      :data="$store.getters.getPrestamos"
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
      grillaTitulos: [
        { label: "Fecha", key: "fecha" },
        { label: "Interes", key: "interes" },
        { label: "Monto", key: "montoOtorgado" },
        { label: "Cantidad de Cuotas", key: "cantCuotas" },
        { label: "Cuotas Restantes", key: "cuotasPendientes" },
      ],
      usuarioSinCuentas: false,
    };
  },
  methods: {},
  beforeCreate() {
    const dni = getLSItemData("userId");
    axios
      .get(`https://vuebank-api.herokuapp.com/prestamos/${dni}`)
      .then((res) => {
        const datos = res.data;
        if (!datos.length) return (this.usuarioSinCuentas = true);
        this.$store.dispatch("setPrestamos", datos);
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
