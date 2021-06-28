<template>
  <div>
    <Grilla :columns="columns" :data="transferencias" />
    <div class="container-transferencia">
      <h1>Transferencia</h1>
      <div class="container-form">
        <div>
          <label for="destinatario">Destinatario:</label>
          <input
            class="form-control"
            id="destinatario"
            v-model="destinatario"
            type="text"
            name="destinatario"
          />
        </div>
        <div>
          <label for="tipoCuenta">Tipo de cuenta:</label>
          <b-form-select
            v-model="selected"
            :options="options"
            name="tipoCuenta"
          >
          </b-form-select>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">$</span>
          <input
            id="mont"
            class="form-control"
            v-model="monto"
            type="number"
            name="mont"
            min="0"
          />
        </div>

        <button
          class="btn btn-primary"
          @click="realizarTransferencia"
          :disabled="!tieneValores"
        >
          Realizar transferencia
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getLSItemData } from "../../utils/localStorageHelper";
import swal from "sweetalert";
import axios from "axios";
import Grilla from "../commons/Grilla";

export default {
  components: {
    Grilla,
  },
  data: function() {
    return {
      destinatario: "",
      monto: 0,
      selected: "caja ahorro en pesos",
      options: ["caja ahorro en pesos", "caja ahorro en dolares"],
      columns: [
        { label: "Descripcion", key: "descripcion" },
        { label: "Monto", key: "monto" },
        { label: "Fecha", key: "fecha" },
        { label: "Origen", key: "origen" },
      ],
      transferencias: [],
    };
  },
  computed: {
    tieneValores: function() {
      if (this.destinatario.length > 0 && this.monto > 0) return true;
      return false;
    },
  },
  methods: {
    realizarTransferencia: function() {
      swal({
        title: "¿Esta seguro que desea generar esta transferencia?",
        text: `El monto es: $${this.monto} y se enviara a ${this.destinatario}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (res) => {
        if (res){ 
        const dni = getLSItemData("userId");
        const body = {
          monto: parseInt(this.monto),
          nroCuentaDestino: this.destinatario,
          descripcion: "una transferencia",
          nroCuenta: `${dni}-${
            this.selected === "caja ahorro en pesos" ? "001" : "002"
          }`,
          dni,
        };
        const result = await axios.put(
          "https://vuebank-api.herokuapp.com/accounts/transfer",
          body
        );
        if (result.data) {
          swal("La transferencia ha sido creada correctamente!", {
            icon: "success",
          });
          this.setearValores();
        }
        }else {
         swal("Transferencia cancelada correctamente!");
         this.setearValores();
        }
      });
    },
    setearValores() {
      this.monto = 0;
    },
    getDatosDeTransferencias: function() {
      const datos = this.$store.getters["getTranferencias"];
      return datos;
    },
  },
  mounted() {
    this.transferencias = this.getDatosDeTransferencias();
  },
};
</script>

<style>
.container-transferencia {
  font-family: Helvetica, Arial, sans-serif;
  background-color: #17a2b8;
  padding: 32px;
  width: 450px;
  height: 500px;
  margin-top: 45px;
  margin-right: 5%;
  margin-left: 30%;
  color: rgba(255, 255, 255, 0.66);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container-form {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input-group-prepend {
  margin-right: 5%;
}
</style>
