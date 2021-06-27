<template>
  <div>
    <div class="pagoslayout">
      <Grilla
        titulo="Historial de Pagos"
        :data="$store.getters.getServiciosPagados"
        :columns="grillaTitulos"
      ></Grilla>
    </div>
    <div class="row">
      <div class="col-6">
        <FormPagos />
      </div>
      <div id="graf" class="col-6">
        <Grafico :labels="graphLabels" :data="graphData"></Grafico>
      </div>
    </div>
  </div>
  <!--<div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>-->
</template>

<script>
import FormPagos from "../commons/FormPagos";
import Grilla from "../commons/Grilla";
import Grafico from "../../components/commons/Grafico.vue";
export default {
  data: function() {
    return {
      grillaTitulos: [
        { label: "Nombre", key: "name" },
        { label: "Importe", key: "monto" },
        { label: "Vencimiento", key: "vencimiento" },
      ],
      usuarioSinCuentas: false,
      graphData: [],
      graphLabels: [],
    };
  },
  methods: {},
  beforeCreate() {
    this.$store.dispatch("getPagos");
  },
  computed: {
    armarDatosGrafico: function() {
      const datos = this.$store.getters.getGraphData;
      return datos;
    },
  },
  watch: {
    armarDatosGrafico: function(datos) {
      this.graphData = datos.data;
      this.graphLabels = datos.labels;
    },
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
