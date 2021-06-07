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
          type="number"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder=".."
        />
      </div>

      <h4>Interés anual: 10%</h4>
      <h4>Capital con intereses:</h4>
      <h3 id="monto">$<a id="salida">0</a></h3>
      <h4>Cuota promedio:</h4>
      <h3 id="cuotaFinal">$<a id="cuota">0</a></h3>

      <button id="calcular" class="btn btn-light">Calcular</button>
      <button
        @click="preCrearPrestamo"
        class="btn btn-primary customButton"
        v-show="tieneValores"
      >
        Generar
      </button>
    </div>
  </div>
</template>

<script>
import { getLSItemData } from "../../utils/localStorageHelper";
import swal from "sweetalert";
import axios from "axios";

export default {
  data: function() {
    return {
      tieneValores: false,
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
      }).then(async () => {
        const dni = getLSItemData("userId");
        const body = {
          montoOtorgado: monto,
          cantCuotas: cuotas,
          dni,
        };
        const res = await axios.post(
          "https://vuebank-api.herokuapp.com/prestamos",
          body
        );
        if (res.data) {
          swal("El prestamo ha sido creado correctamente!", {
            icon: "success",
          });
        }
      });
    },
  },
  mounted() {
    document.querySelector("#calcular").addEventListener("click", () => {
      const n1 = parseInt(document.querySelector("#n1").value);
      const n2 = parseInt(document.querySelector("#n2").value);
      if (!n1 || !n2) return;

      var cuotaPura = n1 / n2;
      var interes = (cuotaPura * 0.83 * n2) / 100;
      var cuotaConInteres = cuotaPura + interes;
      var capital = cuotaConInteres * n2;

      document.querySelector("#salida").innerHTML = parseInt(capital);
      document.querySelector("#cuota").innerHTML = parseInt(cuotaConInteres);
      this.tieneValores = true;
    });
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
