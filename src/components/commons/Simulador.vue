<template>
<div id="simulador" class="card text-white bg-info mb-2">  
    <div class="card-header"><h1>Simulador</h1></div>
    <div class="card-body">
    <h4>Su préstamo:</h4>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">$</span>
        </div>
            <input id="n1" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Ingrese monto..">
    </div>
		
	<h4>Cuotas mensuales:</h4>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">$</span>
        </div>
            <input id="n2" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Sus cuotas..">
    </div>
		
		<h4>Interés anual: 37%</h4>
		<h4>Capital con intereses:</h4> 
        <h4>$<a id="salida"></a></h4>
		<h4>Cuota promedio:</h4> 
        <h4>$<a id="cuota"></a></h4>
		
		<button id="calcular" class="btn btn-light">Calcular</button>
    </div>
</div>

</template>

<script>
export default {
  data: () => ({

  }),
  mounted() {
    document.querySelector('#calcular').addEventListener('click', () =>{
	const n1 = parseInt(document.querySelector('#n1').value);
	const n2 = parseInt(document.querySelector('#n2').value);
	
	var cuotaPura = n1 / n2;
	var interes = cuotaPura * 3.08*n2/100;
	var cuotaConInteres = cuotaPura + interes;
	var capital = cuotaConInteres * n2;
	
	document.querySelector('#salida').innerHTML = capital;
	document.querySelector('#cuota').innerHTML = cuotaConInteres;
    })
}}
</script>
<style>
#simulador{
  
  width: 450px;
  margin-top: 45px;
  margin-right: 5%;
  margin-left: 5%;
  color: rgba(255, 255, 255, 0.66);
  border-radius: 5px;
  background: #1e94a3;
}
</style>