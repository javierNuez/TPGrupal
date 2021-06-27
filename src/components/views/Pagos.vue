<template>
 <div>
        <div class="pagoslayout">
        <Grilla
          titulo="Historial de Pagos"
          :data="$store.getters.getPagos"
          :columns="grillaTitulos"
        ></Grilla>
        </div>
        <div class="row">
        <div class="col-2">
          <FormPagos/>
        </div>
          <div id="graf" class="col-4">
            <Grafico></Grafico>
          </div>
        </div>
      </div>
      <!--<div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>-->
      
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
#graf{
  padding-left: 500px;
}
</style>