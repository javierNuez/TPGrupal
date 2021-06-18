<template>
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
      </div>
    
</template>

<script>
import FormPagos from "../commons/FormPagos";
import Grilla from "../commons/Grilla";
import axios from "axios";
import { getLSItemData } from "../../utils/localStorageHelper";

export default {
  data: function() {
    return {
      grillaTitulos: [
        { label: "Nombre", key: "name" },
        { label: "Importe", key: "monto" },
        { label: "Monto", key: "vencimiento" },
        
      ],
      usuarioSinCuentas: false,
    };
  },
  methods: {},
  beforeCreate() {
    const dni = getLSItemData("userId");
    axios
      .get(`https://vuebank-api.herokuapp.com/pagos/${dni}`)
      .then((res) => {
        const datos = res.data;
        if (!datos.length) return (this.usuarioSinCuentas = true);
        this.$store.dispatch("setPagos", datos);
      });
  },
  components: {
    Grilla,
    FormPagos,
    
  },
};
</script>

<style>
.pagoslayout {
  width: 100%;
}
</style>
<!--<template>
  <div>
    <h1>Pagos</h1>
    <div>
      <Grilla
        titulo="Detalle de los pagos"
        :data="getGridData()"
        :columns="getGridColumns()"
      ></Grilla>
    </div>
    <div id="formulario" class="container">
      <div class="row">
        <div class="col align-self-start">
          <div class="card-header"><h3>Agregar nuevo pago</h3></div>
          <label for="Servicio">Tipo de gasto</label>
          <b-form-select
            v-model="selected"
            :options="options"
            class="form"
          ></b-form-select>
          <label for="Monto">Monto</label>
          <div>
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >$</span
              >
              <b-form-input
                class="input-group"
                type="number"
                v-model="importe"
              ></b-form-input>
            </div>
          </div>
          <b-button id="pagar" class="btn btn-light" value="Pagar" type="submit"
            >PAGAR</b-button
          >
        </div>
      </div>
    </div>
    {{ importe }}
  </div>
</template>

<script>
import Grilla from "../commons/Grilla";
export default {
  data() {
    return {
      selected: null,
      importe: "",
      options: [
        { value: null, text: "Seleccionar el servio a pagar" },
        { value: "a", text: "Electricidad" },
        { value: "b", text: "Servicio de cable/internet" },
        { value: "c", text: "ABL" },
        { value: "d", text: "Seguro Automotor" },
      ],
      itemsData: [
        { fecha: "10-10-2020", ServicioAbonado: "a", Importe: 0 },
        { fecha: "20-6-2020", ServicioAbonado: "d", Importe: 6546 },
        { fecha: "30-5-2020", ServicioAbonado: "c", Importe: 55 },
        { fecha: "04-1-2020", ServicioAbonado: "t", Importe: 10 },
        { fecha: "10-2-2020", ServicioAbonado: "k", Importe: 2 },
      ],
      gridColumns: [
        { label: "Fecha", key: "fecha" },
        { label: "Servicio", key: "ServicioAbonado" },
        { label: "Importe", key: "Importe" },
      ],
    };
  },
  beforeCreate() {
    this.gridData = [];
  },
  components: {
    Grilla,
  },
  methods: {
    getGridData: function() {
      return this.itemsData;
    },
    getGridColumns: function() {
      return this.gridColumns;
    },
  },
};
</script>
<style>
.form {
  display: inline;
  line-height: 20pt;
  padding: 1rem;
  justify-content: flex-start;
}
label {
  display: block;
  margin: 0.5em 0 0 0;
}
#formulario {
  width: 450px;
  margin-top: 45px;
  margin-right: 5%;
  margin-left: 5%;
  color: rgba(255, 255, 255, 0.66);
  border-radius: 5px;
  background: #1e94a3;
}
#pagar {
  margin: 10px;
}
</style>-->
