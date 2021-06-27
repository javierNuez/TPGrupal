<template>
  <div id="grafico">
    <canvas id="myChart"></canvas>
  </div>
</template>
<style>
#grafico {
  padding: 20px;
  margin-left: 30px;
  width: 350px;
  height: 350px;
}
</style>
<script>
import Chart from "chart.js";
export default {
  props: {
    labels: Array,
    data: Array,
  },
  mounted() {
    console.log("LOG", { label: this.labels, data: this.data });
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: [
              "rgb(66, 134, 244,0.5)",
              "rgb(74, 135, 72,0.5)",
              "rgb(229, 89, 50,0.5)",
            ],
          },
        ],
      },
    });
    document.setElementById(myChart);
  },
};
</script>
