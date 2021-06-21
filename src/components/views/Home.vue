<template>
  <div class="row">
    <b-col cols="12" xl="8">
      <div v-if="$store.getters.getCuentas.length === 0 && !usuarioSinCuentas">
        Cargando datos...
      </div>
      <div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>
      <div v-for="(cuenta, index) in $store.getters.getCuentas" :key="index">
        <h3>Caja de ahorro en {{ cuenta.moneda }}</h3>
        <div class="detalle-container">
          <div class="cuenta-detalle">
            Numero de cuenta: {{ cuenta.nroCuenta }}
          </div>
          <div class="cuenta-detalle">
            Saldo actual: {{ cuenta.moneda === "pesos" ? "$ " : "u$s "
            }}{{ cuenta.saldo }}
          </div>
        </div>
        <Grilla :data="cuenta.movimientos" :columns="grillaTitulos" />
      </div>
    </b-col>
    <b-col cols="12" xl="4">
      <Simulador />
    </b-col>
    <b-col cols="12" xl="4">
      <GraficoPagos />  
    </b-col>
  </div>
</template>

<script>
import Grilla from "../commons/Grilla";
import Simulador from "../commons/Simulador";
import GraficoPagos from "../commons/GraficoPagos";
export default {
  props: {},
  data: function() {
    return {
      grillaTitulos: [
        { label: "Descripcion", key: "descripcion" },
        { label: "Destino", key: "destino" },
        { label: "Fecha", key: "fecha" },
        { label: "Monto", key: "monto" },
        { label: "Origen", key: "origen" },
      ],
      //cuentas: this.$store.getters.getCuentas,
      usuarioSinCuentas: false,
    };
  },
  components: {
    Grilla,
    Simulador,
    GraficoPagos,
  },
};
</script>

<style>
.cuenta-detalle {
  font-weight: bold;
}
.detalle-container {
  display: flex;
  justify-content: space-between;
}
</style>
