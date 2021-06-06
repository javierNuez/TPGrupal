<template>
  <div>
    <h1>Pagos</h1>
    <div>
    <Grilla
      titulo="Detalle de los pagos"
      :data="getGridData()"
      :columns="getGridColumns()"
    ></Grilla>
    <br>
    </div>
    <div class="container">
      <div class="row">
        <div class="col align-self-start">
          <h3>Realizar nuevo pago</h3>
          <label for="Servicio">Tipo de gasto</label>
          <b-form-select
            v-model="selected"
            :options="options"
            class="form"
          ></b-form-select>
          <label for="Monto">Monto</label>
          <b-form-input type="number" v-model="texto"></b-form-input>
          <b-button style="margin: 10px" variant="outline-primary" value="Pagar" type="submit"
            >PAGAR</b-button
          >
        </div>
      </div>
    </div>

    <!-- <h1>VUEX {{ $store.getters.getCounter }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>    -->
    {{ texto }}
  </div>
</template>

<script>
import Grilla from "../commons/Grilla";
export default {
  data() {
    return {
      selected: null,
      texto: "",
      options: [
        { value: null, text: "Seleccionar el servio a pagar" },
        { value: "a", text: "Electricidad" },
        { value: "b", text: "Servicio de cable/internet" },
        { value: "c", text: "ABL" },
        { value: "d", text: "Seguro Automotor" },
      ],
      itemsData : [
      { fecha: "10-10-2020", ServicioAbonado: "a", Importe: 0 },
      { fecha: "20-6-2020", ServicioAbonado: "d", Importe: 6546 },
      { fecha: "30-5-2020", ServicioAbonado: "c", Importe: 55 },
      { fecha: "04-1-2020", ServicioAbonado: "t", Importe: 10 },
      { fecha: "10-2-2020", ServicioAbonado: "k", Importe: 2 },
    ],
     gridColumns: ["fecha", "ServicioAbonado", "Importe"],
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
  // methods: {
  //   //   increment: function() {
  //   //   this.$store.dispatch("increment");
  //   //   },
  //   //   decrement: function() {
  //   //   this.$store.dispatch("decrement");
  //   //  },
  // },

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
</style>
