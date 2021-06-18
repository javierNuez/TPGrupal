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
</template>
<script>

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
      
    };
  },
  beforeCreate() {
    this.gridData = [];
  },
  components: {
  
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
</style>
