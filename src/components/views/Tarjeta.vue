<template>
  <div class="row">
    <div class="col">
      <TarjetaDetalle></TarjetaDetalle>
    </div>
    <div id="grilla" class="col">
      <Grilla
        titulo="Movimientos de tarjeta"
        :data="getGridData()"
        :columns="getGridColumns()"
      ></Grilla>
    </div>
  </div>
</template>
<script>
import TarjetaDetalle from "../commons/TarjetaDetalle";
import Grilla from "../commons/Grilla";

export default {
  data: function() {
    const itemsData = [
      { fecha: "10-10-2020", Movimiento: "a", Importe: 0 },
      { fecha: "20-6-2020", Movimiento: "d", Importe: 6546 },
      { fecha: "30-5-2020", Movimiento: "c", Importe: 55 },
      { fecha: "04-1-2020", Movimiento: "t", Importe: 10 },
      { fecha: "10-2-2020", Movimiento: "k", Importe: 2 },
    ];
    return {
      gridData: itemsData,
      gridColumns: [
        { label: "Fecha", key: "fecha" },
        { label: "Movimiento", key: "Movimiento" },
        { label: "Importe", key: "Importe" },
      ],
    };
  },
  beforeCreate() {
    this.gridData = [];
  },
  components: {
    TarjetaDetalle,
    Grilla,
  },
  methods: {
    getGridData: function() {
      return this.gridData;
    },
    getGridColumns: function() {
      return this.gridColumns;
    },
  },
};
</script>
<style>
#grilla {
  color: #12566b;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
}
</style>
