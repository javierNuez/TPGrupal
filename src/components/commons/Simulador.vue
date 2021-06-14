<template>
  <div id="simulador" class="card text-white bg-info mb-2">
    <div class="card-header"><h1>Simulador</h1></div>
    <div class="card-body">
      <h4>Su préstamo:</h4>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">$</span>
        </div>
        <input
          id="n1"
          v-model="monto"
          type="number"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Ingrese monto.."
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default"
            >Cuotas</span
          >
        </div>
        <input
          id="n2"
          v-model="cuotas"
          type="number"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Cantidad de cuotas"
        />
      </div>

      <h4>Interés anual: 10%</h4>
      <h4>Capital con intereses:</h4>
      <h3 id="monto">
        $<a id="salida">{{ montoTotal }}</a>
      </h3>
      <h4>Cuota promedio:</h4>
      <h3 id="cuotaFinal">
        $<a id="cuota">{{ valorCuota }}</a>
      </h3>
      <button
        @click="preCrearPrestamo"
        class="btn btn-primary customButton"
        :disabled="!tieneValor"
      >
        Generar prestamo
      </button>
    </div>
  </div>
</template>

<script>
import { getLSItemData } from "../../utils/localStorageHelper";
import swal from "sweetalert";
import axios from "axios";

const INTERES = 0.1;

export default {
  data: function() {
    return {
      monto: 0,
      cuotas: 0,
      valorCuota: 0,
      montoTotal: 0,
    };
  },
  methods: {
    preCrearPrestamo: function() {
      const monto = parseInt(document.getElementById("n1").value);
      const cuotas = parseInt(document.getElementById("n2").value);
      swal({
        title: "¿Esta seguro que desea generar el prestamo?",
        text: `El monto es: $${monto} en ${cuotas} cuotas`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (res) => {
        if (!res) return;
        const dni = getLSItemData("userId");
        const body = {
          montoOtorgado: monto,
          cantCuotas: cuotas,
          dni,
        };
        const result = await axios.post(
          "https://vuebank-api.herokuapp.com/prestamos",
          body
        );
        if (result.data) {
          swal("El prestamo ha sido creado correctamente!", {
            icon: "success",
          });
        }
      });
    },
  },
  computed: {
    calcularTotal() {
      if (!this.monto || !this.cuotas) return;
      const valorFinal = parseInt(this.monto);
      const montoTotal = valorFinal * INTERES + valorFinal;
      const valorCuota = this.cuotas > 0 ? montoTotal / this.cuotas : 0;
      return { montoTotal, valorCuota };
    },
    tieneValor() {
      if (this.monto > 0 && this.cuotas > 0) return true;
      return false;
    },
  },
  watch: {
    calcularTotal: function(newVal) {
      if (!newVal) return;
      this.montoTotal = newVal.montoTotal;
      this.valorCuota = newVal.valorCuota;
    },
  },
};
</script>
<style>
#simulador {
  width: 450px;
  margin-top: 45px;
  color: rgba(255, 255, 255, 0.66);
  border-radius: 5px;
  background: #1e94a3;
}
#monto {
  color: #0af1f1;
}
#cuotaFinal {
  color: #0ff02d;
}

.customButton {
  margin-left: 15px;
}
</style>
