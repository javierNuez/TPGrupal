<template>
 <div class="row">
    <b-col cols="12" xl="8">
      <!-- <div v-if="$store.getters.getPagos.length === 0 && !usuarioSinCuentas">
        Cargando datos... -->
<div class="row">

        <div class="pagoslayout">
        <Grilla
          titulo="Historial de Pagos"
          :data="$store.getters.getPagos"
          :columns="grillaTitulos"
        ></Grilla>
        </div>
        <div>
          <FormPagos/>
        </div>
        <div>
          <Grafico></Grafico>
        </div>
      </div>
      <div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>
      <div>
      <Grilla
        titulo="Historial de Pagos"
        :data="$store.getters.getPagos"
        :columns="grillaTitulos"
      ></Grilla>
    </div>
    </b-col>
    <div>
      <FormPagos />
    </div>
  </div>
</template>

<script>
import FormPagos from "../commons/FormPagos";
import Grilla from "../commons/Grilla";
import axios from "axios";
import { getLSItemData } from "../../utils/localStorageHelper";
import Grafico from "../../components/commons/Grafico.vue";
export default {
  data: function () {
    return {
      grillaTitulos: [
        { label: "Nombre", key: "name" },
        { label: "Importe", key: "monto" },
        { label: "Vencimiento", key: "vencimiento" },
        
      ],
      usuarioSinCuentas: false,
    };
  },
  methods: {},
  beforeCreate() {
    const dni = getLSItemData("userId");
    axios.get(`https://vuebank-api.herokuapp.com/pagos/${dni}`).then((res) => {
      const datos = res.data;
      if (!datos.length) return (this.usuarioSinCuentas = true);
      this.$store.dispatch("setPagos", datos);
    });
  },
  components: {
    Grilla,
    FormPagos,
    Grafico,
    
  },
};
</script>

<style>
.pagoslayout {
  width: 100%;
}
</style>