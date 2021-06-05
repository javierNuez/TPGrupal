<template>
  <div>
    <div class="row">
    <div v-if="cuentas.length === 0 && !usuarioSinCuentas">
      Cargando datos...
    </div>
    <div v-if="usuarioSinCuentas">Usted no tiene cuentas</div>
    <div class="col">
    <div v-for="(cuenta, index) in cuentas" :key="index">
      <div class="row">
        <div class="col">
            <Grilla
              :titulo="cuenta.moneda"
              :data="cuenta.movimientos"
              :columns="grillaTitulos"
            ></Grilla>
        </div>
        </div>
    </div>
  </div>
  <div id="simulador" class="col">
    <h3>Simulador de prestamo</h3>
    <form class="mid-form">
      <div class="form-group">
        <h4>Dinero</h4>
        <input id="dinero" type="text" name= "dinero">
      </div>
      <div class="form-group">
        <h4>Cuotas</h4>
        <input id="cuotas" type="text" name= "cuotas">
      </div>
      <div class="form-group">
        <h4>Interes TNA <a id="interes">37%</a></h4>
        <h3><a id="resulado" >Mi prestamo</a></h3>
      </div>

      <input type="button" name="calcular" value="Simular" onclick="#" />
    </form>
  </div>
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

<style>
#simulador{
  float: center;
  max-width: 550px;
  margin-top: 45px;
  margin-right: 5%;
  margin-left: 5%;
  color: rgba(255, 255, 255, 0.66);
  border-radius: 5px;
  background: #1e94a3;
}
</style>
