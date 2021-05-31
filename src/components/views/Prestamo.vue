<template>
  <div class="prestamoslayout">
    <Grilla
      titulo="Historial de prestamos"
      :data="getGridData()"
      :columns="getGridColumns()"
      :filterKey="getSearchQuery()"
    ></Grilla>
  </div>
</template>

<script>
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
      searchQuery: "",
      gridColumns: ["fecha", "Movimiento", "Importe"],
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
      return this.gridData;
    },
    getSearchQuery: function() {
      return this.searchQuery;
    },
    getGridColumns: function() {
      return this.gridColumns;
    },
  },
};
</script>

<style>
.prestamoslayout {
  width: 100%;
}
</style>
