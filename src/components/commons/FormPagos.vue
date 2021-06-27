<template>
  <div id="formulario" class="container">
    <div class="row">
      <div class="col align-self-start">
        <div class="card-header"><h3>Agregar nuevo pago</h3></div>
        <label for="Servicio">Tipo de gasto</label>
        <b-form-select
          v-model="selected"
          :options="options"
          class="form"
          @change="handleChange"
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
              :value="importe"
              disabled
            ></b-form-input>
          </div>
        </div>

        <button @click="handleClick" class="btn btn-primary customButton">
          Pagar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      importe: 0,
      options: [{ value: null, text: "Seleccionar el servicio a pagar" }],
    };
  },
  beforeCreate() {
    this.gridData = [];
  },
  computed: {
    armarDatosSelect: function() {
      const datosSelect = [];
      this.$store.getters.getServiciosPorPagar.map((item) => {
        datosSelect.push({ text: item.name, value: item.idServicio });
      });
      return datosSelect;
    },
  },
  methods: {
    getGridData: function() {
      return this.itemsData;
    },
    getGridColumns: function() {
      return this.gridColumns;
    },
    handleChange: function() {
      const [servicio] = this.$store.getters.getServiciosPorPagar.filter(
        (servicio) => this.selected === servicio.idServicio
      );
      if (servicio) {
        this.importe = servicio.monto;
      } else {
        this.importe = 0;
      }
    },
    handleClick: function() {
      if (this.selected) this.$store.dispatch("realizarPago", this.selected);
    },
  },
  watch: {
    armarDatosSelect: function(datosSelect) {
      datosSelect.splice(0, 0, this.options[0]);
      this.options = datosSelect;
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

.customButton {
  margin: 1rem;
}
</style>
