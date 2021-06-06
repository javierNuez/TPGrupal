<template>
  <div class="row">
    
    <div v-if="cuentas.length === 0 && !usuarioSinCuentas">
      Cargando datos...
    </div>
    <div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>
    <div>
    <div class="row">
        <div class="col-sm-8">
          <div v-for="(cuenta, index) in cuentas" :key="index">
            <div>
              <Grilla
                :titulo="cuenta.moneda"
                :data="cuenta.movimientos"
                :columns="grillaTitulos"
              ></Grilla>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div>
          <Simulador></Simulador>
          </div>
        </div>
    </div>
    </div>
      
  </div>
  
  
</template>

<script>
import axios from "axios";
import Grilla from "../commons/Grilla";
import Simulador from "../commons/Simulador";


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
    Simulador,
  },
};

</script>

<style>

</style>
