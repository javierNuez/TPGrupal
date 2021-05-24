<template>
  <div>
    <TarjetaDetalle></TarjetaDetalle>
    <TarjetaMovimientos :items="getGridData()"></TarjetaMovimientos>
    </div>
</template>
<script>
 
import TarjetaDetalle from "../commons/TarjetaDetalle";
import TarjetaMovimientos from "../commons/TarjetaMovimientos";

export default {
  
    data: function () {
    const itemsData = [
      { fecha: "10-10-2020", Movimiento: "a", Importe: 0 },
      { fecha: "20-6-2020", Movimiento: "d", Importe: 6546 },
      { fecha: "30-5-2020", Movimiento: "c", Importe: 55 },
      { fecha: "04-1-2020", Movimiento: "t", Importe: 10 },
      { fecha: "10-2-2020", Movimiento: "k", Importe: 2 },
    ];
    return {
      gridData: itemsData,
      searchQuery: "",
      gridColumns: ["fecha", "Movimiento", "Importe"],
    }
  },
  beforeCreate() {
    // When the Component is ready fetch the JSON from the Server Backend
    this.gridData = [];
  },
  components: {
    TarjetaDetalle,
    TarjetaMovimientos
  },
  methods: {
    getGridData: function () {
      return this.gridData;
    },
    getSearchQuery: function () {
      return this.searchQuery;
    },
    getGridColumns: function () {
      return this.gridColumns;
    },
  },
};
</script>

